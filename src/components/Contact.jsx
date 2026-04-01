import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactItems = [
  {
    label: 'Email',
    value: 'vm17college@gmail.com',
    href: 'mailto:vm17college@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishnu-muthyalu',
    href: 'https://linkedin.com/in/vishnu-muthyalu/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/vishnumuthyalu',
    href: 'https://github.com/vishnumuthyalu',
    external: true,
  },
  {
    label: 'Location',
    value: 'U.S.A',
    href: null,
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send(
      EJS_SERVICE,
      EJS_TEMPLATE,
      {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject,
        message:    form.message,
      },
      EJS_KEY
    )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="section">
      <p className="section-label">04 · CONTACT</p>

      <div className="contact-grid">

        {/* Left — form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status success">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again.</p>
          )}
        </form>

        {/* Right — contact info */}
        <div className="contact-info">
          <h2 className="contact-heading">Let's Connect</h2>
          <p className="contact-subtext">
            Open to Fall 2026 internships, full-time SWE &amp; Data Science roles,
            and research opportunities. Drop me a message using the form or reach out directly.
          </p>

          <div className="contact-items">
            {contactItems.map(item => (
              <div className="contact-item" key={item.label}>
                <span className="contact-item-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-item-btn"
                    {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-item-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

