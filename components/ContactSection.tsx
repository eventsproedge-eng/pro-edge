'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Wire to Supabase in a future slice
    // For now, simulate success
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('sent');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative section-pad bg-brand-near-black">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="pill-badge mb-5 inline-block">Get In Touch</span>
          <h2 className="text-section font-semibold text-white text-balance">
            Contact
            <span className="text-brand-red"> Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-2 block"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, firstName: e.target.value }))
                    }
                    className="form-input"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-2 block"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, lastName: e.target.value }))
                    }
                    className="form-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-2 block"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-[0.15em] text-white/40 mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                  className="form-input resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                    ? 'Message Sent ✓'
                    : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="text-brand-red text-sm mt-2 animate-fade-in">
                  Thanks for reaching out! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="reveal reveal-delay-2">
            <div className="relative h-full flex flex-col justify-between">
              {/* Info blocks */}
              <div className="space-y-8">
                {/* Address */}
                <div className="group">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-red font-semibold mb-3">
                    Visit Us
                  </h4>
                  <a
                    href="https://www.google.com.ng/maps/place/Proactive+Edge+Nigeria+Limited/@8.9747467,7.4630016,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-[15px] leading-relaxed hover:text-white transition-colors block"
                  >
                    10 Regent Park, Minfa 1 Estate,
                    <br />
                    Lokogoma District, Abuja, Nigeria
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-red font-semibold mb-3">
                    Call Us
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="tel:+2348061350008"
                      className="text-white/60 text-[15px] hover:text-white transition-colors block"
                    >
                      +234 806 135 0008
                    </a>
                    <a
                      href="tel:+2347064739934"
                      className="text-white/60 text-[15px] hover:text-white transition-colors block"
                    >
                      +234 706 473 9934
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-red font-semibold mb-3">
                    Email Us
                  </h4>
                  <a
                    href="mailto:aidris@proedge.events"
                    className="link-underline text-white/60 text-[15px] hover:text-white transition-colors"
                  >
                    aidris@proedge.events
                  </a>
                </div>

                {/* Response time */}
                <div className="bg-white/[0.03] border border-white/5 p-5 rounded-sm">
                  <p className="text-white/40 text-[13px] leading-relaxed">
                    We typically respond within 24 hours. For urgent enquiries,
                    please call us directly.
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 relative aspect-[16/9] lg:aspect-auto lg:h-48 overflow-hidden bg-brand-navy border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2!2d7.463!3d8.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnMjkuMSJOIDfCsDI3JzQ3LjEiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(1) brightness(0.6)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ProEdge Events Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
