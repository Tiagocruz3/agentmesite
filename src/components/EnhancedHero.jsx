import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Zap, 
  ArrowRight,
  GitFork,
  FileText,
  ChevronDown,
  Shield,
  Globe,
  Cpu,
  Terminal,
  Play,
  Star,
  CheckCircle2,
  Rocket
} from 'lucide-react'

// Animated background with floating gradient orbs
const AnimatedBackground = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Large gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: [600, 500, 700, 400, 550][i],
            height: [600, 500, 700, 400, 550][i],
            borderRadius: '50%',
            filter: 'blur(80px)',
            background: [
              'radial-gradient(circle, rgba(61, 220, 151, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(61, 220, 151, 0.25) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
            ][i],
            left: ['10%', '70%', '50%', '20%', '80%'][i],
            top: ['20%', '60%', '-10%', '80%', '30%'][i],
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            borderRadius: '50%',
            background: Math.random() > 0.5 ? '#3DDC97' : '#8B5CF6',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
          }}
          animate={{
            y: [-100, -300],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(61, 220, 151, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61, 220, 151, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />
    </div>
  )
}

// Animated text with character stagger
const AnimatedText = ({ text, className, delay = 0 }) => {
  return (
    <motion.span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.03, duration: 0.3 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Main Hero Component
const EnhancedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 30)
      mouseY.set((clientY - innerHeight / 2) / 30)
      setMousePosition({ x: clientX, y: clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{ 
      minHeight: '100vh', 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #0B0F17 0%, #0E1421 50%, #0B0F17 100%)',
    }}>
      <AnimatedBackground />
      
      {/* Mouse-following spotlight */}
      <motion.div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61, 220, 151, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          x: mouseXSpring,
          y: mouseYSpring,
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '120px 24px 100px',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}>
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px' }}
        >
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(14, 20, 33, 0.8)',
              border: '1px solid rgba(61, 220, 151, 0.3)',
              borderRadius: '100px',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{ scale: 1.05, borderColor: '#3DDC97' }}
          >
            <Star style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
            <span style={{ fontSize: '14px', color: '#E6EDF7', fontWeight: 500 }}>
              Now Open Source on GitHub
            </span>
            <motion.div
              style={{
                padding: '4px 10px',
                background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#0B0F17',
              }}
            >
              NEW
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Hero Image */}
        <motion.div
          style={{
            position: 'relative',
            width: '700px',
            maxWidth: '95vw',
            margin: '0 auto 50px',
          }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Glow behind image */}
          <motion.div
            style={{
              position: 'absolute',
              inset: -40,
              borderRadius: '30px',
              background: 'radial-gradient(ellipse at center, rgba(61, 220, 151, 0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Image container */}
          <motion.div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(61, 220, 151, 0.15)',
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
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
            
            {/* Shine effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.div>
          
          {/* Version Badge */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: -15,
              right: -15,
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 800,
              color: '#0B0F17',
              boxShadow: '0 10px 40px rgba(61, 220, 151, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            v2026.2.9
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: '72px',
            fontWeight: 900,
            letterSpacing: '-2px',
            marginBottom: '24px',
            lineHeight: 1.1,
            color: '#E6EDF7',
          }}
        >
          Deploy AI Agents{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3DDC97 0%, #22C55E 50%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Anywhere
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '22px',
            color: '#9AA6B2',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          The open-source platform for building, deploying, and managing AI agents 
          across WhatsApp, Telegram, Slack, and more. Self-hosted with zero vendor lock-in.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '50px',
          }}
        >
          <motion.button 
            onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(61, 220, 151, 0.5)' }} 
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 40px',
              background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '17px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(61, 220, 151, 0.4)',
            }}
          >
            <Rocket style={{ width: '22px', height: '22px' }} />
            Get Started Free
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </motion.button>
          
          <motion.a 
            href="/docs"
            whileHover={{ scale: 1.05, background: 'rgba(61, 220, 151, 0.1)' }} 
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 40px',
              background: 'rgba(14, 20, 33, 0.6)',
              color: '#E6EDF7',
              fontWeight: 600,
              fontSize: '17px',
              borderRadius: '14px',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none',
            }}
          >
            <FileText style={{ width: '22px', height: '22px' }} />
            Read Docs
          </motion.a>
          
          <motion.a 
            href="https://github.com/Agentme-AI/Server"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: '#8B5CF6' }} 
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 40px',
              background: 'transparent',
              color: '#9AA6B2',
              fontWeight: 600,
              fontSize: '17px',
              borderRadius: '14px',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <GitFork style={{ width: '22px', height: '22px' }} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          {[
            { icon: Shield, text: 'Self-Hosted' },
            { icon: Globe, text: 'Multi-Channel' },
            { icon: Cpu, text: '20+ AI Providers' },
            { icon: Terminal, text: 'API First' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#3DDC97' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'rgba(14, 20, 33, 0.6)',
                border: '1px solid rgba(47, 63, 97, 0.4)',
                borderRadius: '100px',
                fontSize: '13px',
                color: '#E6EDF7',
                fontWeight: 500,
              }}
            >
              <feature.icon style={{ width: '14px', height: '14px', color: '#3DDC97' }} />
              {feature.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.8) 0%, rgba(18, 26, 41, 0.8) 100%)',
            border: '1px solid rgba(47, 63, 97, 0.3)',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            { value: '20+', label: 'AI Providers' },
            { value: '5+', label: 'Channels' },
            { value: '100%', label: 'Open Source' },
            { value: '0', label: 'Lock-in' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + idx * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: '36px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: '#9AA6B2' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '40px',
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
          <span style={{ fontSize: '12px', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Explore More
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedHero
