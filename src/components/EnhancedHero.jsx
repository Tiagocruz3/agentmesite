import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Zap, 
  ArrowRight,
  GitFork,
  FileText,
  ChevronRight,
  Sparkles,
  Cpu,
  Globe,
  Shield,
  Terminal,
  Play
} from 'lucide-react'

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }))

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(61, 220, 151, 0.6)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Glowing orb component
const GlowingOrb = ({ color, size, x, y, delay = 0 }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      left: x,
      top: y,
      filter: 'blur(60px)',
      pointerEvents: 'none',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: color,
    }} />
  </motion.div>
)

// Animated grid background
const AnimatedGrid = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    opacity: 0.15
  }}>
    <motion.div
      style={{
        position: 'absolute',
        inset: '-50%',
        backgroundImage: `
          linear-gradient(rgba(61, 220, 151, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61, 220, 151, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      animate={{
        x: [0, 60],
        y: [0, 60],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
)

// Animated logo with glow
const AnimatedLogo = () => (
  <motion.div
    style={{
      position: 'relative',
      width: '1200px',
      maxWidth: '95vw',
      height: 'auto',
      margin: '0 auto 60px',
    }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  >
    {/* Glow effect behind image */}
    <motion.div
      style={{
        position: 'absolute',
        inset: -60,
        borderRadius: '40px',
        background: 'radial-gradient(ellipse at center, rgba(61, 220, 151, 0.2) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Hero image */}
    <motion.div
      style={{
        width: '100%',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 0 100px rgba(61, 220, 151, 0.25), 0 0 200px rgba(61, 220, 151, 0.1)',
        border: '3px solid rgba(61, 220, 151, 0.25)',
      }}
      whileHover={{ scale: 1.01 }}
      animate={{
        boxShadow: [
          '0 0 100px rgba(61, 220, 151, 0.25), 0 0 200px rgba(61, 220, 151, 0.1)',
          '0 0 140px rgba(61, 220, 151, 0.4), 0 0 280px rgba(61, 220, 151, 0.2)',
          '0 0 100px rgba(61, 220, 151, 0.25), 0 0 200px rgba(61, 220, 151, 0.1)',
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src="/hero-main.png" 
        alt="Agent Me Server" 
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </motion.div>
    
    {/* Floating version badge */}
    <motion.div
      style={{
        position: 'absolute',
        bottom: -20,
        right: -30,
        padding: '16px 32px',
        background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
        borderRadius: '100px',
        fontSize: '18px',
        fontWeight: 800,
        color: '#0B0F17',
        boxShadow: '0 12px 40px rgba(61, 220, 151, 0.5)',
        border: '3px solid rgba(255, 255, 255, 0.2)',
      }}
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring" }}
    >
      v2026.2.9
    </motion.div>
  </motion.div>
)

// Feature badge component
const FeatureBadge = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      background: 'rgba(14, 20, 33, 0.8)',
      border: '1px solid rgba(47, 63, 97, 0.5)',
      borderRadius: '100px',
      backdropFilter: 'blur(10px)',
    }}
  >
    <Icon style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
    <span style={{ fontSize: '13px', color: '#E6EDF7', fontWeight: 500 }}>{text}</span>
  </motion.div>
)

// Stats component
const StatItem = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    style={{
      textAlign: 'center',
      padding: '20px',
    }}
  >
    <motion.div
      style={{
        fontSize: '36px',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #3DDC97, #22C55E)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '4px',
      }}
    >
      {value}
    </motion.div>
    <div style={{ fontSize: '14px', color: '#9AA6B2' }}>{label}</div>
  </motion.div>
)

const EnhancedHero = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
      setMousePosition({ x: clientX, y: clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      style={{ 
        minHeight: '100vh', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <AnimatedGrid />
      
      {/* Glowing orbs */}
      <GlowingOrb 
        color="radial-gradient(circle, rgba(61, 220, 151, 0.4) 0%, transparent 70%)" 
        size={600} 
        x="10%" 
        y="20%"
        delay={0}
      />
      <GlowingOrb 
        color="radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)" 
        size={500} 
        x="70%" 
        y="60%"
        delay={2}
      />
      <GlowingOrb 
        color="radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)" 
        size={400} 
        x="50%" 
        y="-10%"
        delay={4}
      />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Mouse-following glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61, 220, 151, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          x: mouseXSpring,
          y: mouseYSpring,
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />
      
      {/* Main Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '120px 24px 80px',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}>
        {/* Animated Logo */}
        <AnimatedLogo />
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: '32px' }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(139, 92, 246, 0.15))',
            border: '1px solid rgba(61, 220, 151, 0.3)',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#3DDC97',
            boxShadow: '0 4px 30px rgba(61, 220, 151, 0.2)',
          }}>
            <Sparkles style={{ width: '18px', height: '18px' }} />
            Built on OpenClaw. Refined for real operators.
          </span>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: '80px',
            fontWeight: 900,
            letterSpacing: '-3px',
            marginBottom: '24px',
            lineHeight: 1.05,
            color: '#E6EDF7',
          }}
        >
          Agent Me{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3DDC97 0%, #22C55E 50%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Server
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontSize: '28px',
            fontWeight: 500,
            marginBottom: '24px',
            color: '#9AA6B2',
            maxWidth: '700px',
            margin: '0 auto 32px',
          }}
        >
          The{' '}
          <span style={{ color: '#3DDC97', fontWeight: 700 }}>operator-first</span>{' '}
          control plane for deploying AI agents across{' '}
          <span style={{ color: '#8B5CF6', fontWeight: 700 }}>any channel</span>
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: '18px',
            color: '#9AA6B2',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          Self-hosted AI agent platform with multi-channel support, visual management, 
          and enterprise-grade security. Run on your infrastructure.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <motion.button 
            onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 60px rgba(61, 220, 151, 0.5)',
            }} 
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 40px',
              background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '17px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(61, 220, 151, 0.4)',
            }}
          >
            <Zap style={{ width: '22px', height: '22px' }} />
            Get Started Free
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </motion.button>
          
          <motion.a 
            href="/docs"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#3DDC97',
              background: 'rgba(61, 220, 151, 0.1)',
            }} 
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
              borderRadius: '16px',
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
            whileHover={{ 
              scale: 1.05,
              borderColor: '#8B5CF6',
            }} 
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
              borderRadius: '16px',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <GitFork style={{ width: '22px', height: '22px' }} />
            GitHub
          </motion.a>
        </motion.div>
        
        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <FeatureBadge icon={Shield} text="Self-Hosted" delay={0.8} />
          <FeatureBadge icon={Globe} text="Multi-Channel" delay={0.9} />
          <FeatureBadge icon={Cpu} text="Open Source" delay={1.0} />
          <FeatureBadge icon={Terminal} text="API First" delay={1.1} />
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            padding: '32px',
            background: 'rgba(14, 20, 33, 0.6)',
            border: '1px solid rgba(47, 63, 97, 0.4)',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <StatItem value="20+" label="AI Providers" delay={1.0} />
          <StatItem value="5+" label="Channels" delay={1.1} />
          <StatItem value="100%" label="Open Source" delay={1.2} />
          <StatItem value="0" label="Vendor Lock-in" delay={1.3} />
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight style={{ width: '24px', height: '24px', color: '#3DDC97', transform: 'rotate(90deg)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedHero
