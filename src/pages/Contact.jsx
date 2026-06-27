import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        showToast('Message sent successfully! I will get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast('Please fill out all fields.', 'error');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 font-bold border-4 border-[var(--border-color)] neo-shadow-sm ${
              toast.type === 'success' ? 'bg-[#38b000] text-white' : 'bg-[var(--color-neo-accent)] text-white'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 inline-block bg-[var(--color-neo-primary)] text-black px-6 py-2 border-4 border-[var(--border-color)] neo-shadow-sm">
          Let's Talk!
        </h2>
        <p className="text-xl font-medium mt-6">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] border-4 border-[var(--border-color)] p-8 neo-shadow">
        <div className="mb-6">
          <label htmlFor="name" className="block text-xl font-bold uppercase mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border-4 border-[var(--border-color)] bg-[var(--bg-color)] focus:outline-none focus:neo-shadow-active transition-all font-medium text-lg"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-xl font-bold uppercase mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-4 border-[var(--border-color)] bg-[var(--bg-color)] focus:outline-none focus:neo-shadow-active transition-all font-medium text-lg"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-xl font-bold uppercase mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-4 border-4 border-[var(--border-color)] bg-[var(--bg-color)] focus:outline-none focus:neo-shadow-active transition-all font-medium text-lg resize-none"
            placeholder="Hello Rusydi..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[var(--color-neo-secondary)] text-white font-bold text-xl uppercase border-4 border-[var(--border-color)] hover:bg-[var(--color-neo-primary)] hover:text-black neo-shadow hover:neo-shadow-active transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
    </div>
  );
};

export default Contact;
