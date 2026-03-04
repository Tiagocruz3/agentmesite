import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MenuBarLogo } from './SliderHero'
import { Menu, X, ArrowUp } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
    setShowBackToTop(latest > 400)
  })

  const navItems = ['Comparison', 'Features', 'Security', 'Roadmap']

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id.toLowerCase())
      if (element) {
        const navHeight = 80
        const elementTop = element.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: elementTop, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '72px',
          padding: '0 24px',
          background: isScrolled ? 'rgba(11, 15, 23, 0.97)' : 'rgba(11, 15, 23, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(47, 63, 97, 0.3)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          {/* Logo */}
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <MenuBarLogo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            '@media (min-width: 768px)': {
              display: 'flex',
            },
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(14, 20, 33, 0.8)',
            padding: '6px',
            borderRadius: '100px',
            border: '1px solid rgba(47, 63, 97, 0.5)',
            backdropFilter: 'blur(10px)',
          }} className="desktop-nav">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ backgroundColor: 'rgba(61, 220, 151, 0.1)', scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: i === 0 ? '#3DDC97' : '#9AA6B2',
                  background: 'transparent',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            onClick={() => scrollToSection('quickstart')}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'inline-flex',
              },
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
            }} className="desktop-cta"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'flex',
              '@media (min-width: 768px)': {
                display: 'none',
              },
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(14, 20, 33, 0.8)',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#E6EDF7',
              cursor: 'pointer',
            }} className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 15, 23, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '80px 24px',
          }}
        >
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => scrollToSection(item)}
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#E6EDF7',
                background: 'transparent',
                border: 'none',
                padding: '12px 24px',
                cursor: 'pointer',
              }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollToSection('quickstart')}
            style={{
              marginTop: '20px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '16px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22C55E, #3DDC97)',
              border: 'none',
              color: '#0B0F17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1000,
              boxShadow: '0 4px 20px rgba(61, 220, 151, 0.4)',
            }}
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CSS for responsive behavior */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
