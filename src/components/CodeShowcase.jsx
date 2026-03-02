import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'

const codeSnippets = {
  agenteMe: `# Agente Me Server - Quick Start
npm install @agente-me/server

# Initialize with premium UI
npx agente-me init --template=operator

# Start the control plane
npm run dev

# Features enabled by default:
✓ Dashboard + Chat interface
✓ Workforce management cards  
✓ Smart scheduling UI
✓ Profile shortcuts`,
  
  openClaw: `# OpenClaw - Base Framework
git clone https://github.com/Agentme-AI/Server

# Install dependencies
cd openclaw && npm install

# Configure agents manually
vim config/agents.yaml

# Start basic server
npm start

# Core primitives available:
✓ Agent orchestration
✓ Standard config flow
✓ Basic scheduling`
}

const CodeShowcase = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('agenteMe')

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{ marginBottom: '100px' }}
    >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(11, 15, 23, 0.95) 0%, rgba(18, 26, 41, 0.95) 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(47, 63, 97, 0.5)',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(61, 220, 151, 0.1)'
      }}>
        {/* Terminal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          background: 'rgba(14, 20, 33, 0.8)',
          borderBottom: '1px solid rgba(47, 63, 97, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA42' }} />
            </div>
            <div style={{ marginLeft: '12px', display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setActiveTab('agenteMe')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === 'agenteMe' 
                    ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.2), rgba(61, 220, 151, 0.1))'
                    : 'transparent',
                  color: activeTab === 'agenteMe' ? '#3DDC97' : '#9AA6B2',
                  border: activeTab === 'agenteMe' ? '1px solid rgba(61, 220, 151, 0.3)' : '1px solid transparent'
                }}
              >
                Agente Me
              </button>
              <button
                onClick={() => setActiveTab('openClaw')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === 'openClaw'
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))'
                    : 'transparent',
                  color: activeTab === 'openClaw' ? '#8B5CF6' : '#9AA6B2',
                  border: activeTab === 'openClaw' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid transparent'
                }}
              >
                OpenClaw
              </button>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'rgba(47, 63, 97, 0.3)',
              border: '1px solid rgba(47, 63, 97, 0.5)',
              borderRadius: '8px',
              color: copied ? '#3DDC97' : '#9AA6B2',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check style={{ width: '14px', height: '14px' }} /> : <Copy style={{ width: '14px', height: '14px' }} />}
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
        </div>

        {/* Code Content */}
        <div style={{
          padding: '24px',
          background: activeTab === 'agenteMe' 
            ? 'linear-gradient(180deg, rgba(61, 220, 151, 0.03) 0%, transparent 100%)'
            : 'linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, transparent 100%)'
        }}>
          <pre style={{
            margin: 0,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: '14px',
            lineHeight: 1.8,
            color: '#E6EDF7',
            overflow: 'auto'
          }}>
            <code>
              {codeSnippets[activeTab].split('\n').map((line, i) => {
                const isComment = line.startsWith('#')
                const isCheck = line.startsWith('✓')
                const isCommand = !isComment && !isCheck && line.trim()
                
                return (
                  <div key={i} style={{ display: 'flex' }}>
                    <span style={{
                      color: '#2F3F61',
                      userSelect: 'none',
                      minWidth: '32px',
                      textAlign: 'right',
                      marginRight: '16px'
                    }}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span style={{
                      color: isComment ? '#6B7280' : isCheck ? (activeTab === 'agenteMe' ? '#3DDC97' : '#8B5CF6') : isCommand ? '#E6EDF7' : '#9AA6B2'
                    }}>
                      {line}
                    </span>
                  </div>
                )
              })}
            </code>
          </pre>
        </div>

        {/* Bottom gradient line */}
        <div style={{
          height: '3px',
          background: activeTab === 'agenteMe'
            ? 'linear-gradient(90deg, transparent, #3DDC97, transparent)'
            : 'linear-gradient(90deg, transparent, #8B5CF6, transparent)'
        }} />
      </div>
    </motion.div>
  )
}

export default CodeShowcase
