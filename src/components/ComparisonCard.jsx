import { motion } from 'framer-motion'
import { Check, ExternalLink, Crown, ArrowUpRight } from 'lucide-react'

const ComparisonCard = ({ data }) => {
  const isGreen = data.color === 'green'
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '28px',
        padding: '40px',
        background: isGreen 
          ? 'linear-gradient(145deg, rgba(14, 20, 33, 0.98) 0%, rgba(18, 26, 41, 0.98) 100%)'
          : 'linear-gradient(145deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        border: isGreen 
          ? '1px solid rgba(61, 220, 151, 0.25)'
          : '1px solid rgba(47, 63, 97, 0.5)',
        boxShadow: isGreen 
          ? '0 0 60px rgba(61, 220, 151, 0.15), 0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          : '0 30px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Animated gradient background */}
      {isGreen && (
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(61, 220, 151, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Premium Badge */}
      {data.isPremium && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{ position: 'absolute', top: '24px', right: '24px' }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
            border: '1px solid rgba(61, 220, 151, 0.3)',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#3DDC97',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 20px rgba(61, 220, 151, 0.1)'
          }}>
            <Crown style={{ width: '14px', height: '14px' }} />
            Recommended
          </span>
        </motion.div>
      )}

      {/* Stat Badge */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: data.isPremium ? '140px' : '24px'
      }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          background: isGreen ? 'rgba(61, 220, 151, 0.1)' : 'rgba(139, 92, 246, 0.1)',
          border: isGreen ? '1px solid rgba(61, 220, 151, 0.2)' : '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '100px',
          fontSize: '13px',
          fontWeight: 800,
          color: isGreen ? '#3DDC97' : '#8B5CF6'
        }}>
          {data.stats.value}
          <span style={{ fontSize: '10px', opacity: 0.7, fontWeight: 500 }}>{data.stats.label}</span>
        </span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '28px', position: 'relative', zIndex: 1 }}>
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
            marginBottom: '20px',
            width: 'fit-content'
          }}
        >
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isGreen 
              ? 'linear-gradient(135deg, #3DDC97 0%, #22C55E 100%)'
              : 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
            boxShadow: isGreen 
              ? '0 8px 30px rgba(61, 220, 151, 0.4), 0 0 40px rgba(61, 220, 151, 0.2)'
              : '0 8px 30px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)'
          }}>
            {isGreen ? (
              <Crown style={{ width: '28px', height: '28px', color: '#0B0F17' }} />
            ) : (
              <ExternalLink style={{ width: '28px', height: '28px', color: 'white' }} />
            )}
          </div>
          <div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#E6EDF7', marginBottom: '4px' }}>{data.title}</h3>
            <span style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: isGreen ? '#3DDC97' : '#8B5CF6'
            }}>
              {data.subtitle}
            </span>
          </div>
        </motion.div>
        
        <p style={{
          fontSize: '20px',
          fontWeight: 700,
          marginBottom: '10px',
          color: isGreen ? '#3DDC97' : '#8B5CF6'
        }}>
          {data.tagline}
        </p>
        <p style={{ color: '#9AA6B2', fontSize: '15px', lineHeight: 1.7 }}>
          {data.description}
        </p>
      </div>

      {/* Feature Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
        {data.features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.03, y: -2 }}
              style={{
                padding: '18px',
                borderRadius: '16px',
                border: isGreen 
                  ? '1px solid rgba(61, 220, 151, 0.12)'
                  : '1px solid rgba(139, 92, 246, 0.12)',
                background: isGreen 
                  ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.06), rgba(61, 220, 151, 0.02))'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.06), rgba(139, 92, 246, 0.02))',
                transition: 'all 0.2s',
                cursor: 'default'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
                background: isGreen 
                  ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
                border: isGreen 
                  ? '1px solid rgba(61, 220, 151, 0.15)'
                  : '1px solid rgba(139, 92, 246, 0.15)'
              }}>
                <Icon style={{ width: '20px', height: '20px', color: isGreen ? '#3DDC97' : '#8B5CF6' }} />
              </div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#E6EDF7', marginBottom: '3px' }}>{feature.label}</p>
              <p style={{ fontSize: '12px', color: '#9AA6B2' }}>{feature.desc}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Strengths List */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ 
          fontSize: '11px', 
          fontWeight: 700, 
          color: '#9AA6B2', 
          textTransform: 'uppercase', 
          letterSpacing: '1.5px',
          marginBottom: '16px'
        }}>
          Key Strengths
        </p>
        {data.strengths.map((strength, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              background: isGreen 
                ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.2), rgba(61, 220, 151, 0.1))'
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
              border: isGreen 
                ? '1px solid rgba(61, 220, 151, 0.2)'
                : '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <Check style={{ width: '14px', height: '14px', color: isGreen ? '#3DDC97' : '#8B5CF6' }} />
            </div>
            <span style={{ fontSize: '14px', color: '#E6EDF7', fontWeight: 500 }}>{strength}</span>
          </motion.div>
        ))}
      </div>

      {/* Action button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          marginTop: '24px',
          width: '100%',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          borderRadius: '12px',
          border: isGreen 
            ? '1px solid rgba(61, 220, 151, 0.3)'
            : '1px solid rgba(139, 92, 246, 0.3)',
          background: isGreen 
            ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.1), rgba(61, 220, 151, 0.05))'
            : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
          color: isGreen ? '#3DDC97' : '#8B5CF6',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        {isGreen ? 'Choose Agente Me' : 'Choose OpenClaw'}
        <ArrowUpRight style={{ width: '16px', height: '16px' }} />
      </motion.button>

      {/* Decorative gradient line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: isGreen 
            ? 'linear-gradient(90deg, transparent, #3DDC97, #22C55E, transparent)'
            : 'linear-gradient(90deg, transparent, #8B5CF6, #3B82F6, transparent)',
          transformOrigin: 'center'
        }}
      />
    </motion.div>
  )
}

export default ComparisonCard
