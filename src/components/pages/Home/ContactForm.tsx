'use client';

import { useState } from 'react';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { useTheme } from '@mui/material';

export default function ContactForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await axiosInstance.post('/api/contact/submit', {
        full_name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        description: formData.message.trim(),
      });

      if (response.data.status === 201) {
        setSuccess(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.response?.data?.message || 'خطایی در ارسال اطلاعات رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { value: 'corporate', label: 'طراحی سایت شرکتی' },
    { value: 'ecommerce', label: 'فروشگاه اینترنتی' },
    { value: 'uiux', label: 'UI/UX اختصاصی' },
    { value: 'personal', label: 'سایت شخصی / رزومه' },
    { value: 'dashboard', label: 'پنل مدیریتی' },
    { value: 'seo', label: 'سئو و بهینه‌سازی' },
    { value: 'custom', label: 'پروژه اختصاصی (سایر)' },
  ];

  return (
    <div style={{ padding: '60px 20px', backgroundColor: 'rgba(10, 5, 30, 0.98)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(135deg, #fff 0%, #A78BFA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>فرم همکاری</h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, padding: '0 20px' }}>برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید. تیم ما در کوتاه‌ترین زمان ممکن با شما تماس خواهد گرفت.</p>
        </div>

        {/* Messages */}
        {success && <div style={{ marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', padding: '12px 20px', borderRadius: '12px', backgroundColor: 'rgba(76, 175, 80, 0.1)', border: '1px solid rgba(76, 175, 80, 0.3)', color: '#4caf50', textAlign: 'center' }}>درخواست شما با موفقیت ثبت شد! به‌زودی با شما تماس خواهیم گرفت.</div>}

        {error && <div style={{ marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', padding: '12px 20px', borderRadius: '12px', backgroundColor: 'rgba(244, 67, 54, 0.1)', border: '1px solid rgba(244, 67, 54, 0.3)', color: '#f44336', textAlign: 'center' }}>{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {/* Name */}
          <div style={inputWrapperStyle}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " style={inputStyle} />
            <label style={labelStyle}>نام و نام خانوادگی *</label>
          </div>

          {/* Phone */}
          <div style={inputWrapperStyle}>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " style={inputStyle} />
            <label style={labelStyle}>شماره تماس *</label>
          </div>

          {/* Email */}
          <div style={inputWrapperStyle}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " style={inputStyle} />
            <label style={labelStyle}>ایمیل (اختیاری)</label>
          </div>

          {/* Service Select */}
          <div style={inputWrapperStyle}>
            <select name="service" value={formData.service} onChange={handleChange} required style={selectStyle}>
              <option style={{ backgroundColor: theme.palette.primary.dark, color: 'white' }} value="" disabled>
                یک گزینه انتخاب کنید
              </option>
              {services.map((option) => (
                <option style={{ backgroundColor: theme.palette.primary.dark, color: 'white' }} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div style={{ ...inputWrapperStyle, gridColumn: '1 / -1' }}>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder=" " style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
            <label style={labelStyle}>توضیحات مربوط به پروژه</label>
          </div>

          {/* Buttons */}
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
            <button type="reset" onClick={() => setFormData({ name: '', phone: '', email: '', service: '', message: '' })} disabled={loading} style={secondaryButtonStyle}>
              پاک کردن فرم
            </button>

            <button type="submit" disabled={loading} style={primaryButtonStyle}>
              {loading ? 'در حال ارسال...' : 'ثبت پیشنهاد'}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: #6b4eff !important;
          background-color: rgba(107, 78, 255, 0.15) !important;
          box-shadow: 0 0 0 3px rgba(107, 78, 255, 0.1) !important;
        }

        input:focus + label,
        textarea:focus + label,
        select:focus + label,
        input:not(:placeholder-shown) + label,
        textarea:not(:placeholder-shown) + label {
          transform: translate(10px, -12px) scale(0.85) !important;
          color: #a78bfa !important;
        }

        select + label {
          transition: all 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
        }

        button:active {
          transform: translateY(0);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </div>
  );
}

const inputWrapperStyle: any = {
  position: 'relative',
  animation: 'fadeIn 0.5s ease-out',
};

const inputStyle: any = {
  width: '100%',
  padding: '18px 16px 8px',
  fontSize: '1rem',
  backgroundColor: 'rgba(107, 78, 255, 0.08)',
  border: '1px solid rgba(107, 78, 255, 0.3)',
  borderRadius: '12px',
  color: '#fff',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit',
  direction: 'rtl',
};

const labelStyle: any = {
  position: 'absolute',
  right: '15px',
  top: '0',
  transform: 'translate(0, 17px)',
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.2s ease',
  pointerEvents: 'none',
  fontWeight: 500,
  backgroundColor: 'transparent',
  padding: '0 4px',
};

const selectStyle: any = {
  width: '100%',
  padding: '18px 16px 8px',
  fontSize: '1rem',
  backgroundColor: 'rgba(107, 78, 255, 0.08)',
  border: '1px solid rgba(107, 78, 255, 0.3)',
  borderRadius: '12px',
  color: '#fff',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit',
  cursor: 'pointer',
  direction: 'rtl',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 15px center',
  backgroundSize: '20px',
};

const primaryButtonStyle: any = {
  padding: '14px 40px',
  borderRadius: '40px',
  fontSize: '1rem',
  fontWeight: 700,
  background: 'linear-gradient(135deg, #6B4EFF 0%, #A855F7 100%)',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 20px rgba(107, 78, 255, 0.3)',
  fontFamily: 'inherit',
};

const secondaryButtonStyle: any = {
  padding: '14px 40px',
  borderRadius: '40px',
  fontSize: '1rem',
  fontWeight: 600,
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid rgba(107, 78, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit',
};
