"use client"
import { useState } from 'react';

export default function page() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Thanks! We’ll be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', company: '', budget: '' });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Error: Unable to submit form.');
    }

    setIsSubmitting(false);
  };

  return (
    <div class="">
      {/* Hero */}
      
      {/* Form */}
      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Let’s Talk About Your Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input name="name" required onChange={handleChange} value={formData.name} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input type="email" name="email" required onChange={handleChange} value={formData.email} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-2">Phone</label>
          <input name="phone" onChange={handleChange} value={formData.phone} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-2">Company</label>
          <input name="company" onChange={handleChange} value={formData.company} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-2">Budget</label>
          <input name="budget" onChange={handleChange} value={formData.budget} className="w-full border rounded p-2" placeholder="e.g. $3k–$5k" />
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}
