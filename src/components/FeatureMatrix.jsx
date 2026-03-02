import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Users, 
  Calendar, 
  Wrench,
  Rocket,
  Trophy
} from 'lucide-react'

const matrixData = [
  {
    category: 'UX & Interface',
    icon: Users,
    agenteMe: { score: 9, label: 'Premium dashboard, daily-use polished' },
    openClaw: { score: 6, label: 'Stable, more generic' },
    winner: 'agenteMe'
  },
  {
    category: 'Reliability',
    icon: Shield,
    agenteMe: { score: 7, label: 'Custom surface needs regression checks' },
    openClaw: { score: 9, label: 'Battle-tested upstream baseline' },
    winner: 'openClaw'
  },
  {
    category: 'Automation',
    icon: Zap,
    agenteMe: { score: 9, label: 'Control plane: chat + cron + channels' },
    openClaw: { score: 7, label: 'Solid core primitives' },
    winner: 'agenteMe'
  },
  {
    category: 'Channels',
    icon: Users,
    agenteMe: { score: 8, label: 'Integrated multi-channel experience' },
    openClaw: { score: 6, label: 'Standard channel support' },
    winner: 'agenteMe'
  },
  {
    category: 'Scheduling',
    icon: Calendar,
    agenteMe: { score: 9, label: 'Smart schedule UX, visual workforce' },
    openClaw: { score: 6, label: 'Basic scheduling primitives' },
    winner: 'agenteMe'
  },
  {
    category: 'Maintainability',
    icon: Wrench,
    agenteMe: { score: 6, label: 'More custom surface to maintain' },
    openClaw: { score: 9, label: 'Easier upstream compatibility' },
    winner: 'openClaw'
  },
  {
    category: 'Time-to-Value',
    icon: Rocket,
    agenteMe: { score: 9, label: 'Faster practical customization' },
    openClaw: { score: 7, label: 'Standard agent config flow' },
    winner: 'agenteMe'
  }
]

const ScoreBar = ({ score, color, delay }) => {
  const width = score * 10
  const gradientColors = color === 'green' 
    ? 'linear-gradient(90deg, #22C55E, #3DDC97, #06B6D4)'
    : 'linear-gradient(90deg, #8B5CF6, #3B82F6)'
  
  return (
    <div style={{ height: '10px', background: 'rgba(26, 36, 53, 0.8)', borderRadius: '5px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${width}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        style={{ 
          height: '100%', 
          borderRadius: '5px', 
          background: gradientColors,
          boxShadow: color === 'green' 
            ? '0 0 20px rgba(61, 220, 151, 0.4)'
            : '0 0 20px rgba(139, 92, 246, 0.4)'
        }}
      />
    </div>
  )
}

const ScoreBadge = ({ score, color }) => {
  const isGreen = color === 'green'
  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 800,
      background: isGreen 
        ? 'rgba(61, 220, 151, 0.15)'
        : 'rgba(139, 92, 246, 0.15)',
      color: isGreen ? '#3DDC97' : '#8B5CF6',
      border: isGreen ? '1px solid rgba(61, 220, 151, 0.3)' : '1px solid rgba(139, 92, 246, 0.3)'
    }}>
      {score}/10
    </span>
  )
}

const FeatureMatrix = () => {
  const agenteMeTotal = matrixData.reduce((acc, item) => acc + item.agenteMe.score, 0)
  const openClawTotal = matrixData.reduce((acc, item) => acc + item.openClaw.score, 0)
  const agenteMeWins = matrixData.filter(item => item.winner === 'agenteMe').length
  const openClawWins = matrixData.filter(item => item.winner === 'openClaw').length
  
  return (
    <div style={{
      background: 'rgba(14, 20, 33, 0.9)',
      border: '1px solid rgba(47, 63, 97, 0.4)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(61, 220, 151, 0.1)',
            border: '1px solid rgba(61, 220, 151, 0.2)'
          }}>
            <Trophy style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#E6EDF7', marginBottom: '4px' }}>Scored Matrix</h2>
            <p style={{ color: '#9AA6B2', fontSize: '14px' }}>1-10 scoring across key dimensions</p>
          </div>
        </div>
        
        {/* Total Scores */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '32px',
          padding: '24px',
          background: 'rgba(11, 15, 23, 0.6)',
          borderRadius: '16px',
          border: '1px solid rgba(47, 63, 97, 0.3)'
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{ fontSize: '12px', color: '#9AA6B2', marginBottom: '8px' }}>Agente Me</p>
            <p style={{ fontSize: '42px', fontWeight: 900, color: '#3DDC97' }}>{agenteMeTotal}</p>
            <p style={{ fontSize: '12px', color: '#3DDC97', marginTop: '4px' }}>{agenteMeWins} wins</p>
          </div>
          <div style={{ width: '1px', height: '50px', background: 'rgba(47, 63, 97, 0.5)' }} />
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{ fontSize: '12px', color: '#9AA6B2', marginBottom: '8px' }}>OpenClaw</p>
            <p style={{ fontSize: '42px', fontWeight: 900, color: '#8B5CF6' }}>{openClawTotal}</p>
            <p style={{ fontSize: '12px', color: '#8B5CF6', marginTop: '4px' }}>{openClawWins} wins</p>
          </div>
        </div>
      </div>

      {/* Matrix Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {matrixData.map((item, idx) => {
          const Icon = item.icon
          const isAgenteMeWinner = item.winner === 'agenteMe'
          
          return (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 1fr',
                gap: '20px',
                alignItems: 'center',
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(11, 15, 23, 0.5)',
                border: '1px solid rgba(47, 63, 97, 0.2)'
              }}
            >
              {/* Category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(61, 220, 151, 0.1)'
                }}>
                  <Icon style={{ width: '18px', height: '18px', color: '#3DDC97' }} />
                </div>
                <span style={{ fontWeight: 600, color: '#E6EDF7', fontSize: '14px' }}>{item.category}</span>
              </div>

              {/* Agente Me */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#9AA6B2' }}>{item.agenteMe.label}</span>
                  <ScoreBadge score={item.agenteMe.score} color="green" />
                </div>
                <ScoreBar score={item.agenteMe.score} color="green" delay={idx * 0.1} />
                {isAgenteMeWinner && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3DDC97' }} />
                    <span style={{ fontSize: '11px', color: '#3DDC97', fontWeight: 600 }}>Winner</span>
                  </div>
                )}
              </div>

              {/* OpenClaw */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#9AA6B2' }}>{item.openClaw.label}</span>
                  <ScoreBadge score={item.openClaw.score} color="purple" />
                </div>
                <ScoreBar score={item.openClaw.score} color="purple" delay={idx * 0.1 + 0.05} />
                {!isAgenteMeWinner && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }} />
                    <span style={{ fontSize: '11px', color: '#8B5CF6', fontWeight: 600 }}>Winner</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{ 
        marginTop: '32px', 
        paddingTop: '24px', 
        borderTop: '1px solid rgba(47, 63, 97, 0.3)',
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'linear-gradient(90deg, #22C55E, #3DDC97)' }} />
          <span style={{ fontSize: '12px', color: '#9AA6B2' }}>Agente Me Score</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)' }} />
          <span style={{ fontSize: '12px', color: '#9AA6B2' }}>OpenClaw Score</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3DDC97' }} />
          <span style={{ fontSize: '12px', color: '#9AA6B2' }}>Winner indicator</span>
        </div>
      </div>
    </div>
  )
}

export default FeatureMatrix
