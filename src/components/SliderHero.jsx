import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { 
  Zap, 
  ArrowRight,
  ArrowLeft,
  GitFork,
  FileText,
  ChevronDown,
  Shield,
  Globe,
  Cpu,
  Terminal,
  Rocket,
  Star,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react'

// ============================================
// COMPLETELY SEPARATE: Menu Bar Logo Component
// ============================================
export const MenuBarLogo = ({ onClick }) => (
  <motion.div 
    onClick={onClick}
    whileHover={{ scale: 1.05 }} 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      cursor: 'pointer',
      // COMPLETELY INDEPENDENT - doesn't affect hero
    }}
  >
    <img 
      src="/logo.png" 
      alt="Agent Me" 
      style={{
        width: 'clamp(120px, 18vw, 200px)', // Responsive but independent
        height: 'auto',
        maxHeight: '48px',
        objectFit: 'contain',
        background: 'transparent',
        display: 'block',
      }} 
    />
  </motion.div>
)

// ============================================
// COMPLETELY SEPARATE: Hero Logo Component  
// ============================================
const HeroLogo = () => (
  <motion.div
    style={{
      position: 'relative',
      width: 'min(90vw, 800px)',
      margin: '0 auto',
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Glow effect */}
    <motion.div
      style={{
        position: 'absolute',
        inset: '-20px',
        background: 'radial-gradient(ellipse at center, rgba(61, 220, 151, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    <motion.div
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <img 
        src="/hero-new.png" 
        alt="Agent Me Server" 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </motion.div>
    
    {/* Version Badge */}
    <motion.div
      style={{
        position: 'absolute',
        bottom: '-10px',
        right: '-10px',
        padding: '8px 16px',
        background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
        borderRadius: '100px',
        fontSize: '12px',
        fontWeight: 800,
        color: '#0B0F17',
        boxShadow: '0 4px 20px rgba(61, 220, 151, 0.4)',
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      v2026.2.9
    </motion.div>
  </motion.div>
)

// ============================================
// SLIDE DATA
// ============================================
const slides = [
  {
    id: 1,
    badge: { text: "Now Open Source", icon: Star, highlight: "NEW" },
    headline: "Deploy AI Agents",
    highlight: "Anywhere",
    subheadline: "The open-source platform for building, deploying, and managing AI agents across WhatsApp, Telegram, Slack, and more.",
    image: "/slide1.png",
    stats: [
      { value: "20+", label: "AI Providers" },
      { value: "5+", label: "Channels" },
      { value: "100%", label: "Open Source" },
    ]
  },
  {
    id: 2,
    badge: { text: "Multi-Channel", icon: Globe, highlight: null },
    headline: "One Platform",
    highlight: "All Channels",
    subheadline: "Connect your agents to WhatsApp, Telegram, Slack, Discord, and WebChat from a single dashboard.",
    image: "/slide2.png",
    stats: [
      { value: "WhatsApp", label: "Business API" },
      { value: "Telegram", label: "Bot API" },
      { value: "Slack", label: "Workspace" },
    ]
  },
  {
    id: 3,
    badge: { text: "Self-Hosted", icon: Shield, highlight: null },
    headline: "Your Data",
    highlight: "Your Control",
    subheadline: "Self-hosted infrastructure means your data stays on your servers. Zero vendor lock-in, complete privacy.",
    image: "/slide3.png",
    stats: [
      { value: "Zero", label: "Vendor Lock-in" },
      { value: "100%", label: "Data Control" },
      { value: "Open", label: "Source" },
    ]
  }
]

// ============================================
// SLIDE COMPONENT
// ============================================
const Slide = ({ slide, isActive }) => {
  const Icon = slide.badge.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      style={{
        display: isActive ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px',
      }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '30px' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          background: 'rgba(14, 20, 33, 0.8)',
          border: '1px solid rgba(61, 220, 151, 0.3)',
          borderRadius: '100px',
          backdropFilter: 'blur(10px)',
        }}>
          <Icon style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
          <span style={{ fontSize: '14px', color: '#E6EDF7', fontWeight: 500 }}>
            {slide.badge.text}
          </span>
          {slide.badge.highlight && (
            <span style={{
              padding: '3px 8px',
              background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
              borderRadius: '100px',
              fontSize: '10px',
              fontWeight: 700,
              color: '#0B0F17',
            }}>
              {slide.badge.highlight}
            </span>
          )}
        </div>
      </motion.div>

      {/* Main Content Grid - Responsive */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'left' }}
        >
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#E6EDF7',
            marginBottom: '16px',
          }}>
            {slide.headline}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {slide.highlight}
            </span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#9AA6B2',
            lineHeight: 1.6,
            marginBottom: '30px',
            maxWidth: '500px',
          }}>
            {slide.subheadline}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <motion.button 
              onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #22C55E, #3DDC97)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '15px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(61, 220, 151, 0.4)',
              }}
            >
              <Rocket style={{ width: '18px', height: '18px' }} />
              Get Started
            </motion.button>
            
            <motion.a 
              href="/docs"
              whileHover={{ scale: 1.05, background: 'rgba(61, 220, 151, 0.1)' }} 
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'rgba(14, 20, 33, 0.6)',
                color: '#E6EDF7',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '12px',
                border: '1px solid rgba(47, 63, 97, 0.5)',
                textDecoration: 'none',
              }}
            >
              <FileText style={{ width: '18px', height: '18px' }} />
              Docs
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <HeroLogo />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(30px, 5vw, 60px)',
          flexWrap: 'wrap',
          marginTop: '50px',
          padding: '24px 40px',
          background: 'rgba(14, 20, 33, 0.6)',
          border: '1px solid rgba(47, 63, 97, 0.3)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
        }}
      >
        {slide.stats.map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '13px', color: '#9AA6B2' }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

// ============================================
// MAIN SLIDER HERO COMPONENT
// ============================================
const SliderHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <section style={{ 
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 0 80px',
      background: 'linear-gradient(180deg, #0B0F17 0%, #0E1421 50%, #0B0F17 100%)',
      overflow: 'hidden',
    }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Gradient orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: [500, 400, 600][i],
              height: [500, 400, 600][i],
              borderRadius: '50%',
              filter: 'blur(80px)',
              background: [
                'radial-gradient(circle, rgba(61, 220, 151, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              ][i],
              left: ['10%', '70%', '50%'][i],
              top: ['20%', '60%', '-10%'][i],
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{ duration: 15 + i * 5, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Slider Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}>
        {/* Slides */}
        <AnimatePresence mode="wait">
          <Slide 
            key={currentSlide} 
            slide={slides[currentSlide]} 
            isActive={true}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 20,
        }}>
          <motion.button
            onClick={() => { prevSlide(); setIsAutoPlaying(false) }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(14, 20, 33, 0.8)',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              color: '#E6EDF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              pointerEvents: 'auto',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowLeft style={{ width: '20px', height: '20px' }} />
          </motion.button>
          
          <motion.button
            onClick={() => { nextSlide(); setIsAutoPlaying(false) }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(14, 20, 33, 0.8)',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              color: '#E6EDF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              pointerEvents: 'auto',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '40px',
        }}>
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false) }}
              style={{
                width: currentSlide === idx ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: currentSlide === idx 
                  ? 'linear-gradient(135deg, #3DDC97, #22C55E)' 
                  : 'rgba(47, 63, 97, 0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '12px', color: '#9AA6B2' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SliderHero
