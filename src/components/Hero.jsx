import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Zap, 
  Shield, 
  Users, 
  MessageSquare, 
  Calendar, 
  Layers,
  GitFork,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  Workflow,
  Star,
  TrendingUp,
  Clock,
  ChevronRight,
  Lock,
  ShieldCheck,
  FileText,
  Map,
  Target,
  ChevronDown,
  Copy,
  Check
} from 'lucide-react'
import ComparisonCard from './ComparisonCard'
import FeatureMatrix from './FeatureMatrix'
import ParticleBackground from './ParticleBackground'
import EnhancedHero from './EnhancedHero'

const comparisonData = {
  agenteMe: {
    title: 'Agent Me Server',
    subtitle: 'Best for operators',
    tagline: 'Operator-First Product Layer',
    description: 'Operator-first product layer for teams that need speed, UX polish, and daily operational workflows.',
    features: [
      { icon: Zap, label: 'Faster UX Iteration', desc: 'Daily-use polished interface' },
      { icon: MessageSquare, label: 'Unified Chat + Ops', desc: 'Chat, cron, channels in one' },
      { icon: Users, label: 'Workforce Cards', desc: 'Visual agent management' },
      { icon: Calendar, label: 'Smart Scheduler', desc: 'Intuitive schedule UX' },
      { icon: Layers, label: 'Control Plane', desc: 'Centralized orchestration' },
      { icon: Sparkles, label: 'Profile Shortcuts', desc: 'Fast customization' }
    ],
    strengths: [
      'Premium dashboard experience',
      'Unified chat + ops controls',
      'Visual workforce management',
      'Integrated scheduling UX',
      'Faster time-to-value'
    ],
    color: 'green',
    isPremium: true,
    stats: { label: 'UX Score', value: '9/10' }
  },
  openClaw: {
    title: 'OpenClaw Upstream',
    subtitle: 'Best for baseline compatibility',
    tagline: 'Solid Base Framework',
    description: 'Stable core framework with generic defaults and strong upstream consistency.',
    features: [
      { icon: Shield, label: 'Stable Core', desc: 'Proven foundation' },
      { icon: GitFork, label: 'Vanilla Baseline', desc: 'Safest compatibility' },
      { icon: Terminal, label: 'Core Primitives', desc: 'Solid automation base' },
      { icon: Cpu, label: 'Standard Config', desc: 'Agent config flow' },
      { icon: Workflow, label: 'Framework', desc: 'Extensible architecture' },
      { icon: CheckCircle2, label: 'Upstream Sync', desc: 'Easy baseline updates' }
    ],
    strengths: [
      'Battle-tested foundation',
      'Easier upstream compatibility',
      'Solid automation primitives',
      'Flexible baseline configuration'
    ],
    color: 'purple',
    isPremium: false,
    stats: { label: 'Stability', value: '9/10' }
  }
}

const whyFeatures = [
  { icon: Layers, title: 'Unified Control Plane', desc: 'Chat, cron, channels, and system controls in one place' },
  { icon: Zap, title: 'Premium Daily-Use UX', desc: 'Polished interface designed for speed and clarity' },
  { icon: Users, title: 'Visual Workforce Cards', desc: 'Manage agents and status at a glance' },
  { icon: Calendar, title: 'Smart Scheduler UI', desc: 'Fast, intuitive task scheduling workflows' },
  { icon: Target, title: 'Profile Presets', desc: 'Quick setup and repeatable config patterns' },
  { icon: TrendingUp, title: 'Faster Iteration Loop', desc: 'Ship workflow/UI improvements rapidly' }
]

const includedFeatures = [
  'npm run build — Build server and UI',
  'npm run agentme — Run the CLI',
  'npm start — Start the gateway server'
]

const trustFeatures = [
  { icon: Lock, title: 'Token-based Gateway Auth', desc: 'Secure JWT authentication with API key management and role-based access control' },
  { icon: ShieldCheck, title: 'Local-first Deployment', desc: 'Self-hosted infrastructure keeps your data on-premise with zero external dependencies' },
  { icon: FileText, title: 'Audit-friendly Workflows', desc: 'Complete operational logs with traceable agent actions and decision history' },
  { icon: GitFork, title: 'Open Source Foundation', desc: 'Fully transparent OpenClaw-compatible codebase with community-driven security audits' },
  { icon: Shield, title: 'End-to-End Encryption', desc: 'TLS 1.3 for all communications with optional PGP encryption for sensitive data' },
  { icon: Target, title: 'Granular Permissions', desc: 'Fine-grained access controls per agent, workspace, and operation type' },
  { icon: Clock, title: 'Session Management', desc: 'Configurable session timeouts with automatic token rotation and revocation' },
  { icon: CheckCircle2, title: 'Security Headers', desc: 'Built-in CSP, HSTS, and XSS protection with automated security scanning' }
]

const roadmapItems = [
  'Enhanced scheduler event popover/editor flow',
  'More resilient websocket reconnect behavior',
  'Continued chat readability and interaction polish',
  'Expanded upload and channel UX improvements'
]

const Hero = () => {
  const containerRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const copyInstall = () => {
    navigator.clipboard.writeText('# Install AgentMe globally\nnpm install -g agentme@latest\n\n# Run the onboarding wizard\nagentme onboard --install-daemon\n\n# Start the gateway\nagentme gateway --port 18789')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={containerRef} style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61, 220, 151, 0.15) 0%, transparent 70%)',
          top: '-400px', right: '-200px', pointerEvents: 'none', filter: 'blur(60px)'
        }}
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          bottom: '-300px', left: '-100px', pointerEvents: 'none', filter: 'blur(80px)'
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ 
          width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img 
            src="/logo.png" 
            alt="Agent Me" 
            style={{
              width: '160px', height: '48px', borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 30px rgba(61, 220, 151, 0.4), 0 0 60px rgba(61, 220, 151, 0.2)'
            }} 
          />
        </motion.div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(14, 20, 33, 0.8)', padding: '6px', borderRadius: '100px', border: '1px solid rgba(47, 63, 97, 0.5)', backdropFilter: 'blur(10px)' }}>
          {['Comparison', 'Features', 'Security', 'Roadmap'].map((item, i) => (
            <motion.button 
              key={item} 
              onClick={() => {
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ backgroundColor: 'rgba(61, 220, 151, 0.1)', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                fontSize: '14px', 
                fontWeight: 500, 
                color: i === 0 ? '#3DDC97' : '#9AA6B2', 
                background: 'transparent',
                border: 'none',
                textDecoration: 'none', 
                padding: '8px 16px', 
                borderRadius: '100px', 
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}>
              {item}
            </motion.button>
          ))}
        </div>
        
        <motion.button 
          onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4)' }} 
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px',
            background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)', color: '#FFFFFF',
            fontWeight: 700, fontSize: '14px', borderRadius: '100px', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)'
          }}>
          Deploy Agent Me
          <ChevronRight style={{ width: '16px', height: '16px' }} />
        </motion.button>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 5 }}>
        
        {/* WHY AGENT ME SERVER */}
        <div id="features" style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
              Why <span style={{ color: '#3DDC97' }}>Agent Me Server</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#9AA6B2', maxWidth: '600px', margin: '0 auto' }}>
              Agent Me Server keeps OpenClaw's solid foundation and adds a product-ready operator layer.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {whyFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    padding: '28px', borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
                    border: '1px solid rgba(47, 63, 97, 0.4)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                  }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                    border: '1px solid rgba(61, 220, 151, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
                  }}>
                    <Icon style={{ width: '26px', height: '26px', color: '#3DDC97' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#E6EDF7', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ fontSize: '15px', color: '#9AA6B2', lineHeight: 1.6 }}>{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* QUICK START */}
        <div id="quickstart" style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#E6EDF7', marginBottom: '12px' }}>Quick Start</h2>
            <p style={{ fontSize: '18px', color: '#9AA6B2' }}>Get up and running in seconds</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{
              maxWidth: '800px', margin: '0 auto',
              background: 'linear-gradient(135deg, rgba(11, 15, 23, 0.98) 0%, rgba(14, 20, 33, 0.98) 100%)',
              borderRadius: '24px', border: '1px solid rgba(47, 63, 97, 0.5)',
              overflow: 'hidden', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)'
            }}>
            {/* Terminal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'rgba(14, 20, 33, 0.8)', borderBottom: '1px solid rgba(47, 63, 97, 0.3)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA42' }} />
              </div>
              <span style={{ fontSize: '13px', color: '#9AA6B2', fontFamily: 'monospace' }}>bash — agentme-cli</span>
              <motion.button onClick={copyInstall} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(47, 63, 97, 0.3)', border: '1px solid rgba(47, 63, 97, 0.5)', borderRadius: '8px', color: copied ? '#3DDC97' : '#9AA6B2', fontSize: '12px', cursor: 'pointer' }}>
                {copied ? <Check style={{ width: '14px', height: '14px' }} /> : <Copy style={{ width: '14px', height: '14px' }} />}
                {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>

            {/* Code Content */}
            <div style={{ padding: '28px' }}>
              <pre style={{ margin: 0, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '15px', lineHeight: 1.8, color: '#E6EDF7' }}>
                <code>
                  <span style={{ color: '#6B7280' }}># Install AgentMe globally</span>{"\n"}
                  <span style={{ color: '#3DDC97' }}>npm install -g</span> <span style={{ color: '#E6EDF7' }}>agentme@latest</span>{"\n\n"}
                  <span style={{ color: '#6B7280' }}># Run the onboarding wizard</span>{"\n"}
                  <span style={{ color: '#3DDC97' }}>agentme onboard</span> <span style={{ color: '#8B5CF6' }}>--install-daemon</span>{"\n\n"}
                  <span style={{ color: '#6B7280' }}># Start the gateway</span>{"\n"}
                  <span style={{ color: '#3DDC97' }}>agentme gateway</span> <span style={{ color: '#E6EDF7' }}>--port 18789</span>
                </code>
              </pre>
            </div>

            {/* Included Features */}
            <div style={{ padding: '20px 28px', background: 'rgba(61, 220, 151, 0.05)', borderTop: '1px solid rgba(61, 220, 151, 0.1)' }}>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Included by default</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {includedFeatures.map((item, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#9AA6B2' }}>
                    <CheckCircle2 style={{ width: '14px', height: '14px', color: '#3DDC97' }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* COMPARISON SECTION */}
        <div id="comparison" style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#E6EDF7', marginBottom: '12px' }}>
              Side-by-Side: <span style={{ color: '#3DDC97' }}>Agent Me Server</span> vs <span style={{ color: '#8B5CF6' }}>OpenClaw</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#9AA6B2' }}>Choose the right fit for your use case</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '32px' }}>
            <ComparisonCard data={comparisonData.agenteMe} />
            <ComparisonCard data={comparisonData.openClaw} />
          </div>
        </div>

        {/* SCORED MATRIX */}
        <div id="matrix" style={{ marginBottom: '120px' }}>
          <FeatureMatrix />
        </div>

        {/* WHO SHOULD CHOOSE */}
        <div style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#E6EDF7', marginBottom: '12px' }}>
              Who should choose what?
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {/* Agent Me */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{
                padding: '40px', borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.95) 0%, rgba(18, 26, 41, 0.95) 100%)',
                border: '1px solid rgba(61, 220, 151, 0.3)',
                boxShadow: '0 0 40px rgba(61, 220, 151, 0.1), 0 20px 60px rgba(0, 0, 0, 0.4)'
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #3DDC97 0%, #22C55E 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Target style={{ width: '24px', height: '24px', color: '#0B0F17' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#E6EDF7' }}>Choose Agent Me Server if you want:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'A production-ready operator experience',
                  'Faster UI/workflow iteration',
                  'Unified control over chat + scheduling + channels'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#9AA6B2' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(61, 220, 151, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 style={{ width: '14px', height: '14px', color: '#3DDC97' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* OpenClaw */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                padding: '40px', borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Shield style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#E6EDF7' }}>Choose OpenClaw if you want:</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Maximum upstream parity',
                  'Lower customization surface',
                  'Simpler long-term maintenance'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#9AA6B2' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 style={{ width: '14px', height: '14px', color: '#8B5CF6' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* TRUST & SECURITY */}
        <div id="security" style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                border: '1px solid rgba(61, 220, 151, 0.3)',
                borderRadius: '100px',
                marginBottom: '16px'
              }}
            >
              <ShieldCheck style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px' }}>Enterprise-Grade Security</span>
            </motion.div>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
              Trust & <span style={{ color: '#3DDC97' }}>Security</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#9AA6B2', maxWidth: '600px', margin: '0 auto' }}>
              Built with security-first architecture. Your data stays yours with comprehensive protection at every layer.
            </p>
          </motion.div>

          {/* Security Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              maxWidth: '800px',
              margin: '0 auto 48px'
            }}
          >
            {[
              { label: 'Data Sovereignty', value: '100%', desc: 'On-premise' },
              { label: 'Encryption', value: 'TLS 1.3', desc: 'End-to-end' },
              { label: 'Auth Method', value: 'JWT + API', desc: 'Token-based' },
              { label: 'Code Audit', value: 'Open', desc: 'Source available' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.8), rgba(18, 26, 41, 0.8))',
                  border: '1px solid rgba(47, 63, 97, 0.4)',
                  borderRadius: '16px'
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#3DDC97', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#E6EDF7', marginBottom: '2px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: '#9AA6B2' }}>{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {trustFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
                    border: '1px solid rgba(47, 63, 97, 0.4)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                    border: '1px solid rgba(61, 220, 151, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#E6EDF7', marginBottom: '6px' }}>{feature.title}</h3>
                    <p style={{ fontSize: '14px', color: '#9AA6B2', lineHeight: 1.5 }}>{feature.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: '48px',
              padding: '24px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.05), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(61, 220, 151, 0.2)',
              borderRadius: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 style={{ width: '20px', height: '20px', color: '#3DDC97' }} />
                <span style={{ fontSize: '14px', color: '#E6EDF7' }}>SOC 2 Type II Ready</span>
              </div>
              <div style={{ width: '1px', height: '20px', background: 'rgba(47, 63, 97, 0.5)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 style={{ width: '20px', height: '20px', color: '#3DDC97' }} />
                <span style={{ fontSize: '14px', color: '#E6EDF7' }}>GDPR Compliant</span>
              </div>
              <div style={{ width: '1px', height: '20px', background: 'rgba(47, 63, 97, 0.5)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 style={{ width: '20px', height: '20px', color: '#3DDC97' }} />
                <span style={{ fontSize: '14px', color: '#E6EDF7' }}>Zero External Dependencies</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROADMAP */}
        <div id="roadmap" style={{ marginBottom: '120px' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#E6EDF7', marginBottom: '12px' }}>
              <span style={{ color: '#3DDC97' }}>Roadmap</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#9AA6B2' }}>What's coming next</p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {roadmapItems.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px', padding: '24px',
                  background: 'rgba(14, 20, 33, 0.6)', borderRadius: '16px', marginBottom: '16px',
                  border: '1px solid rgba(47, 63, 97, 0.3)'
                }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                  border: '1px solid rgba(61, 220, 151, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Map style={{ width: '20px', height: '20px', color: '#3DDC97' }} />
                </div>
                <span style={{ fontSize: '16px', color: '#E6EDF7' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}>
          <div style={{
            padding: '64px 48px', maxWidth: '900px', margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.95) 0%, rgba(18, 26, 41, 0.95) 100%)',
            backdropFilter: 'blur(20px)', border: '1px solid rgba(61, 220, 151, 0.3)',
            borderRadius: '32px', boxShadow: '0 0 60px rgba(61, 220, 151, 0.15), 0 30px 80px rgba(0, 0, 0, 0.5)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
              width: '600px', height: '600px',
              background: 'radial-gradient(circle, rgba(61, 220, 151, 0.15) 0%, transparent 70%)', pointerEvents: 'none'
            }} />
            
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '72px', height: '72px', borderRadius: '20px',
                background: 'linear-gradient(135deg, #3DDC97 0%, #22C55E 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 32px', boxShadow: '0 8px 40px rgba(61, 220, 151, 0.4), 0 0 60px rgba(61, 220, 151, 0.2)',
                position: 'relative', zIndex: 1
              }}>
              <Sparkles style={{ width: '36px', height: '36px', color: '#0B0F17' }} />
            </motion.div>
            
            <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '16px', color: '#E6EDF7', position: 'relative', zIndex: 1 }}>
              Ready to go <span style={{
                background: 'linear-gradient(135deg, #3DDC97 0%, #06B6D4 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>operator-first</span>?
            </h2>
            <p style={{ color: '#9AA6B2', marginBottom: '40px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', fontSize: '18px', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
              Join the teams building on Agent Me Server today.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <motion.button 
                onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)' }} 
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 36px',
                  background: 'linear-gradient(135deg, #22C55E 0%, #3DDC97 100%)', color: '#FFFFFF',
                  fontWeight: 700, fontSize: '16px', borderRadius: '14px', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 30px rgba(34, 197, 94, 0.3)'
                }}>
                <Zap style={{ width: '20px', height: '20px' }} />
                Deploy Agent Me
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </motion.button>
              <motion.a href="https://github.com/Agentme-AI/Server" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, borderColor: '#3DDC97' }} whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 36px',
                  background: 'transparent', color: '#E6EDF7', fontWeight: 600,
                  fontSize: '16px', borderRadius: '14px', border: '1px solid #2F3F61', cursor: 'pointer', textDecoration: 'none'
                }}>
                <GitFork style={{ width: '20px', height: '20px' }} />
                View on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer style={{ 
          marginTop: '120px', paddingTop: '60px', borderTop: '1px solid rgba(47, 63, 97, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
            <motion.a href="https://github.com/Agentme-AI/Server" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>
              GitHub
            </motion.a>
            <motion.a href="https://x.com/Agentme_Ai" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>
              X
            </motion.a>
            <motion.a href="https://t.me/+MaFHhTWO129jOTM1" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>
              Telegram
            </motion.a>
            <motion.a href="/docs" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>
              Documentation
            </motion.a>
          </div>
          
          {/* Legal Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
            <motion.a href="/terms" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s' }}>
              Terms of Service
            </motion.a>
            <span style={{ color: 'rgba(47, 63, 97, 0.5)' }}>|</span>
            <motion.a href="/privacy" whileHover={{ color: '#3DDC97' }}
              style={{ color: '#9AA6B2', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s' }}>
              Privacy Policy
            </motion.a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #2F3F61)' }} />
            <img 
              src="/logo.png" 
              alt="Agent Me" 
              style={{
                width: '140px', height: '42px', borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 4px 20px rgba(61, 220, 151, 0.3)'
              }} 
            />
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #2F3F61, transparent)' }} />
          </div>
          <p style={{ color: '#9AA6B2', fontSize: '14px', lineHeight: 1.8 }}>
            Built with precision.<br />
            <span style={{ color: '#3DDC97' }}>Powered by OpenClaw.</span><br />
            <span style={{ color: '#8B5CF6' }}>Elevated by Agent Me.</span>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Hero
