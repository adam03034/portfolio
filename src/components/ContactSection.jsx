import React, { useState } from 'react';
import { AlertTriangle, Check, Mail, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setSubmitting(true);
    
    try {
      const response = await fetch('https://portfolio-backend-6o52.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-black">
  Get in Touch
</h2>
        <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
          Have a question or want to work together? I'd love to hear from you.
          Let's create something amazing together.
        </p>
      </div>

      {/* Status Message */}
      {submitStatus && (
        <div className={`mb-8 p-4 rounded-xl
          ${submitStatus === 'success' 
            ? 'bg-green-500/10 border border-green-500/20' 
            : 'bg-red-500/10 border border-red-500/20'
          }`}
        >
          <div className="flex items-center gap-3">
            {submitStatus === 'success' ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-red-500" />
            )}
            <p className="text-sm sm:text-base">
              {submitStatus === 'success' 
                ? "Thank you for your message! I'll get back to you soon."
                : "Something went wrong. Please try again later."}
            </p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-4 text-gray-400">
            <User size={20} />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full p-4 pl-12 rounded-xl bg-gray-800/10  border
              ${errors.name ? 'border-red-500' : 'border-gray-700/50'} 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300
              hover:border-gray-600/50`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 ml-1">{errors.name}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 text-gray-400">
            <Mail size={20} />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full p-4 pl-12 rounded-xl bg-gray-800/10 border
              ${errors.email ? 'border-red-500' : 'border-gray-700/50'}
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300
              hover:border-gray-600/50`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 ml-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 text-gray-400">
            <MessageSquare size={20} />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className={`w-full p-4 pl-12 rounded-xl bg-gray-800/10 border
              ${errors.message ? 'border-red-500' : 'border-gray-700/50'}
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300
              hover:border-gray-600/50 resize-none`}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500 ml-1">{errors.message}</p>
          )}
        </div>

        <button
  type="submit"
  disabled={submitting}
  className={`w-full sm:w-auto px-8 py-4 rounded-xl bg-black text-white font-semibold 
    transform hover:scale-105 transition-all duration-300
    disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed
    hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black`}
>
  {submitting ? 'Sending...' : 'Send Message'}
</button>
      </form>
    </div>
  );
};

export default ContactSection;