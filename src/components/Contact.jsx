import { useState } from 'react'
import '../styles/Contact.css'

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

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // SMTP integration to be wired in later
    console.log('Form submitted:', form)
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

          <button type="submit" className="form-submit">Send Message</button>
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

