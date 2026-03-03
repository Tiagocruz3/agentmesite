import { motion } from 'framer-motion'
import { Lock, Eye, Server, Shield, UserX, Cookie, Globe, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Our Commitment to Privacy',
      icon: Lock,
      content: `AgentMe Server is designed with privacy as a core principle. As a self-hosted platform, we fundamentally differ from cloud-based services in how data is handled.

• Your data stays on your infrastructure
• We cannot access your conversations, files, or configurations
• You maintain full control over all personal information
• No telemetry is sent to us without your explicit consent`
    },
    {
      title: 'Information We Do NOT Collect',
      icon: UserX,
      content: `Because AgentMe Server is self-hosted, we do NOT have access to:

• Chat conversations or message content
• User identities or contact information
• Files uploaded to your agents
• Agent configurations or memory
• API keys or authentication tokens
• Usage patterns or analytics
• Error logs or debugging information

All of this data remains exclusively on your servers and under your control.`
    },
    {
      title: 'Limited Information Collection',
      icon: Eye,
      content: `The only information we may collect:

GitHub Repository Interactions:
• Issues and bug reports you voluntarily submit
• Pull requests and code contributions
• Discussion forum posts
• Stars and fork activity (public)

Website Analytics (if applicable):
• Anonymous page view statistics
• Referrer information
• Browser type and version
• Geographic region (country-level only)

This data is used solely for improving the Software and understanding community engagement.`
    },
    {
      title: 'Self-Hosted Data Storage',
      icon: Server,
      content: `When you deploy AgentMe Server, the following data is stored locally on your infrastructure:

Configuration Data:
• Agent identities and settings (config.json)
• Channel configurations and tokens
• User authentication credentials (if enabled)

Operational Data:
• Conversation history and session logs
• Agent memory files (MEMORY.md)
• Uploaded files and attachments
• Task execution logs
• System logs and error reports

You are responsible for:
• Securing this data on your servers
• Implementing appropriate access controls
• Complying with data protection regulations in your jurisdiction
• Maintaining backups and disaster recovery`
    },
    {
      title: 'AI Provider Data Handling',
      icon: Globe,
      content: `When using AgentMe Server with third-party AI providers:

Data Sent to AI Providers:
• Message content you send to agents
• Conversation context and history
• System prompts and agent instructions
• File content you explicitly share

Each AI provider (OpenAI, Anthropic, Google, etc.) has its own privacy policy:
• OpenAI: https://openai.com/privacy
• Anthropic: https://www.anthropic.com/privacy
• Google: https://policies.google.com/privacy

You should review these policies and:
• Configure data retention settings appropriately
• Use providers that meet your privacy requirements
• Consider local models (Ollama) for sensitive data`
    },
    {
      title: 'Security Measures',
      icon: Shield,
      content: `AgentMe Server implements several security features:

Built-in Protections:
• Token-based authentication
• TLS/SSL encryption for connections
• Sandbox environment for tool execution
• Configurable rate limiting
• Session management and timeouts

Your Responsibilities:
• Keep the Software and dependencies updated
• Use strong, unique passwords and API keys
• Enable authentication for production deployments
• Implement network-level security (firewalls, VPNs)
• Regular security audits and penetration testing
• Secure backup storage with encryption`
    },
    {
      title: 'Cookies and Local Storage',
      icon: Cookie,
      content: `The AgentMe Server web interface uses:

Session Cookies:
• Authentication tokens (if auth is enabled)
• Session identifiers
• CSRF protection tokens

Local Storage:
• User interface preferences (theme, layout)
• Cached data for performance
• Draft messages (unsent)

These are stored in the user's browser and are not transmitted to us. No third-party cookies are used.`
    },
    {
      title: 'Your Rights and Choices',
      icon: UserX,
      content: `As a self-hosted platform, you have complete control over your data:

Right to Access:
• All your data is stored in accessible files
• Export configuration and logs at any time
• Query the database directly (if applicable)

Right to Deletion:
• Delete any data by removing files
• Clear logs and conversation history
• Uninstall the Software completely

Right to Portability:
• Configuration is stored in standard JSON format
• Export and import to other instances
• Compatible with OpenClaw format

Right to Control:
• Disable any features you don't want
• Run completely offline (no internet required)
• Modify the source code to meet your needs`
    },
    {
      title: 'Compliance Considerations',
      icon: Globe,
      content: `Because you self-host AgentMe Server, compliance responsibilities depend on your deployment:

GDPR (European Union):
• You are the Data Controller
• Ensure lawful basis for processing
• Implement data subject rights (access, deletion)
• Maintain records of processing activities

CCPA (California):
• Disclose categories of personal information collected
• Provide opt-out mechanisms if selling data
• Respond to verifiable consumer requests

HIPAA (Healthcare):
• AgentMe Server is not HIPAA-certified
• Additional safeguards required for PHI
• Consider Business Associate Agreements

SOC 2 / ISO 27001:
• Implement appropriate security controls
• Maintain audit logs
• Regular security assessments`
    },
    {
      title: 'Changes to This Policy',
      icon: Mail,
      content: `We may update this Privacy Policy to reflect:

• Changes in the Software functionality
• New features that affect data handling
• Feedback from the community
• Legal or regulatory requirements

Changes will be posted to:
• Our GitHub repository
• This website
• Release notes

Since we don't collect contact information, we cannot notify you directly of changes. Please review this policy periodically.

Last Updated: March 2026`
    },
    {
      title: 'Contact Us',
      icon: Mail,
      content: `For privacy-related questions or concerns:

GitHub Issues:
https://github.com/Agentme-AI/Server/issues

GitHub Discussions:
https://github.com/Agentme-AI/Server/discussions

Telegram Community:
https://t.me/+MaFHhTWO129jOTM1

For security vulnerabilities, please use responsible disclosure and contact us privately before public disclosure.`
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F17' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 24px',
        background: 'rgba(11, 15, 23, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(47, 63, 97, 0.3)',
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <img 
                src="/logo.jpg" 
                alt="Agent Me Logo" 
                style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  objectFit: 'cover'
                }} 
              />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#E6EDF7' }}>Agent Me</span>
            </motion.div>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ x: -4 }}
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
                cursor: 'pointer'
              }}
            >
              <ArrowLeft style={{ width: '16px', height: '16px' }} />
              Back to Home
            </motion.div>
          </Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 24px 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                border: '1px solid rgba(61, 220, 151, 0.3)',
                borderRadius: '100px',
                marginBottom: '24px'
              }}
            >
              <Shield style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px' }}>Privacy</span>
            </motion.div>
            
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
              Privacy <span style={{ color: '#3DDC97' }}>Policy</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#9AA6B2', maxWidth: '700px', margin: '0 auto' }}>
              Your data stays yours. Learn how AgentMe Server handles privacy and what information we collect.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.1), rgba(61, 220, 151, 0.05))',
              border: '1px solid rgba(61, 220, 151, 0.3)',
              borderRadius: '16px',
              marginBottom: '48px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#3DDC97', marginBottom: '8px' }}>
              🔒 Privacy by Design
            </h3>
            <p style={{ fontSize: '15px', color: '#9AA6B2', margin: 0 }}>
              AgentMe Server is self-hosted. We don't have access to your data, conversations, or configurations. 
              Everything stays on your infrastructure.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                  style={{
                    padding: '32px',
                    background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
                    border: '1px solid rgba(47, 63, 97, 0.4)',
                    borderRadius: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))',
                      border: '1px solid rgba(61, 220, 151, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#E6EDF7', marginBottom: '12px' }}>
                        {section.title}
                      </h2>
                      <div style={{ 
                        fontSize: '15px', 
                        color: '#9AA6B2', 
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line'
                      }}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: '48px',
              padding: '24px',
              textAlign: 'center',
              background: 'rgba(14, 20, 33, 0.6)',
              border: '1px solid rgba(47, 63, 97, 0.4)',
              borderRadius: '16px'
            }}
          >
            <p style={{ fontSize: '14px', color: '#9AA6B2', marginBottom: '8px' }}>
              Have questions about privacy?
            </p>
            <a 
              href="https://github.com/Agentme-AI/Server/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#3DDC97', 
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Contact us on GitHub →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
