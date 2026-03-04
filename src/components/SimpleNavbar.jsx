import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { MenuBarLogo } from './SliderHero'

const SimpleNavbar = ({ showBackButton = true }) => {
  return (
    <motion.nav
      role="navigation"
      aria-label="Page navigation"
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
        background: 'rgba(11, 15, 23, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(47, 63, 97, 0.3)',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        <Link to="/" style={{ textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <MenuBarLogo />
        </Link>

        {showBackButton && (
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ x: -4, background: 'rgba(61, 220, 151, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                background: 'rgba(47, 63, 97, 0.3)',
                border: '1px solid rgba(47, 63, 97, 0.5)',
                borderRadius: '100px',
                color: '#9AA6B2',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              <ArrowLeft style={{ width: '16px', height: '16px' }} />
              Back to Home
            </motion.div>
          </Link>
        )}
      </div>
    </motion.nav>
  )
}

export default SimpleNavbar
