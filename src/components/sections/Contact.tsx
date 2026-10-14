import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  privacy: boolean
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        privacy: formData.privacy ? 'on' : '',
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      alert('Danke für Ihre Anfrage. Wir werden Sie in Kürze kontaktieren.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacy: false,
      })
    } catch {
      alert('Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <Container className="section-spacing">
        <div className="max-w-2xl">
          <span className="subline">Kontakt</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold mb-16">
            Kontaktformular
          </h2>
          <p className="text-base text-foreground mb-48">
            Füllen Sie kurz das Formular aus und wir werden Sie so schnell wie möglich kontaktieren.
          </p>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-24">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy mb-8">
                Name <span className="text-tuerkis">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all bg-white"
                placeholder="Ihr Name"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy mb-8">
                Unternehmen <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all bg-white"
                placeholder="Ihr Unternehmen"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-8">
                E-Mail <span className="text-tuerkis">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all bg-white"
                placeholder="ihre@email.de"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy mb-8">
                Telefonnummer <span className="text-tuerkis">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all bg-white"
                placeholder="+49 xxx xxxxxx"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-navy mb-8">
                Gewünschte Leistung <span className="text-tuerkis">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all bg-white"
              >
                <option value="">-- Bitte wählen --</option>
                <option value="gebaudereinigung">Gebäudereinigung</option>
                <option value="fensterreinigung">Fenster- & Glasreinigung</option>
                <option value="grundreinigung">Grundreinigung</option>
                <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
                <option value="hochdruckreinigung">Hochdruckreinigung</option>
                <option value="winterdienst">Winterdienst</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-8">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-16 py-12 border-2 border-tuerkis/30 rounded-md text-navy focus:outline-none focus:border-petrol transition-all resize-none bg-white"
                placeholder="Beschreiben Sie hier Ihren Bedarf..."
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-12">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                className="mt-2 w-16 h-16 border-2 border-tuerkis/30 rounded-md focus:outline-none focus:border-petrol cursor-pointer accent-navy"
              />
              <label htmlFor="privacy" className="text-sm text-foreground cursor-pointer">
                Ich akzeptiere die Datenschutzerklärung und stimme der Kontaktaufnahme zu. <span className="text-tuerkis">*</span>
              </label>
            </div>

            {/* Submit */}
            <Button variant="primary" size="lg" type="submit" className="w-full">
              Anfrage senden
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
