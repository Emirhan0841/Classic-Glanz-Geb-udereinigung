import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { navItems } from '../../data/navigation'

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cg-linie transition-all duration-200">
      <Container className="py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/brand/logo/logo-horizontal.svg"
            alt="Classic Glanz Gebäudereinigung"
            className="cg-logo cg-logo--header"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-32">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-navy font-medium hover:text-petrol transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="cg-btn cg-btn--primary" style={{ height: '46px', padding: '0 22px', minHeight: 'auto' }}>
            Angebot anfragen
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-8 hover:bg-muted rounded-md transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </Container>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-cg-linie bg-white">
          <Container className="py-16 flex flex-col gap-16">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-navy font-medium hover:text-petrol transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="md" className="w-full">
              Angebot anfragen
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
