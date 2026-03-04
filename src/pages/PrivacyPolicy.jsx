import { motion } from 'framer-motion'
import SimpleNavbar from '../components/SimpleNavbar'
import { Lock, Eye, Server, Shield, UserX, Cookie, Globe, Mail, Database, Key } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'

const PrivacyPolicy = () => {
  usePageSEO({
    title: 'Privacy Policy — Agent Me Server',
    description: 'Privacy Policy for Agent Me Server. Learn about our self-hosted, privacy-first approach — your data stays on your servers with zero external telemetry.',
    path: '/privacy',
  })

  const sections = [
    {
      title: 'Our Commitment to Privacy',
      icon: Lock,
      content: `AgentMe Server is designed with privacy as a core principle. As a self-hosted platform, we fundamentally differ from cloud-based services in how data is handled.

• Your data stays on your infrastructure — always
• We cannot access your conversations, files, or configurations
• You maintain full control over all personal and operational information
• No telemetry, analytics, or diagnostics are sent to us without your explicit consent
• The source code is open for inspection — verify our privacy claims yourself`
    },
    {
      title: 'Information We Do NOT Collect',
      icon: UserX,
      content: `Because AgentMe Server is self-hosted, we do NOT have access to:

• Chat conversations or message content between you and your agents
• User identities, email addresses, or contact information
• Files, documents, or media uploaded to your agents
• Agent configurations, memory files, or system prompts
• API keys, authentication tokens, or passwords
• Usage patterns, analytics, or behavioral data
• Error logs, crash reports, or debugging information
• IP addresses or device fingerprints from your deployment

All of this data remains exclusively on your servers and under your complete control.`
    },
    {
      title: 'Information We May Collect',
      icon: Eye,
      content: `The only information we may collect comes from voluntary interactions:

GitHub Repository Interactions:
• Issues and bug reports you voluntarily submit
• Pull requests and code contributions
• Discussion forum posts and comments
• Stars and fork activity (publicly visible on GitHub)

Website Analytics (agentme.app):
• Anonymous page view statistics via privacy-respecting analytics
• Referrer information (which site linked to us)
• Browser type and version (aggregated, not individual)
• Geographic region (country-level only, no IP storage)

This data is used solely for improving the Software, understanding community needs, and measuring the impact of our documentation.`
    },
    {
      title: 'Self-Hosted Data Storage',
      icon: Database,
      content: `When you deploy AgentMe Server, the following data is stored locally on your infrastructure:

Configuration Data:
• Agent identities and behavioral settings (config.json)
• Channel configurations and connection tokens (WhatsApp, Telegram, Slack, etc.)
• User authentication credentials (if authentication is enabled)
• System preferences and environment variables

Operational Data:
• Conversation history and session logs
• Agent memory files (MEMORY.md) for context persistence
• Uploaded files, documents, and media attachments
• Task execution logs and scheduling history
• System logs, error reports, and performance metrics

You are responsible for:
• Securing this data with appropriate access controls and encryption
• Implementing network-level security (firewalls, VPNs, TLS)
• Complying with data protection regulations in your jurisdiction (GDPR, CCPA, HIPAA)
• Maintaining regular backups and disaster recovery procedures
• Informing your end users about how their data is processed`
    },
    {
      title: 'AI Provider Data Handling',
      icon: Globe,
      content: `When using AgentMe Server with third-party AI providers, data is transmitted to those providers:

Data Sent to AI Providers:
• Message content and prompts you send to agents
• Conversation context and history for continuity
• System prompts and agent behavioral instructions
• File content you explicitly share with agents for processing

Each AI provider has its own privacy policy governing how they handle your data:
• OpenAI: https://openai.com/privacy
• Anthropic: https://www.anthropic.com/privacy
• Google: https://policies.google.com/privacy
• Mistral: https://mistral.ai/privacy

We recommend that you:
• Review each provider's data retention and training policies
• Configure data retention settings per provider where available
• Use local models (e.g., Ollama) for sensitive or confidential data
• Avoid sending personally identifiable information (PII) through cloud providers when possible`
    },
    {
      title: 'Security Measures',
      icon: Key,
      content: `AgentMe Server implements several built-in security features:

Built-in Protections:
• Token-based authentication (JWT) with configurable expiration
• TLS/SSL encryption for all network connections
• Sandboxed environment for tool and code execution
• Configurable rate limiting to prevent abuse
• Session management with automatic timeouts
• CORS configuration for web interface security
• Content Security Policy (CSP) headers

Your Responsibilities:
• Keep the Software and all dependencies updated to the latest versions
• Use strong, unique passwords and API keys for all services
• Enable authentication for all production deployments
• Implement network-level security (firewalls, reverse proxies, VPNs)
• Conduct regular security audits and vulnerability assessments
• Encrypt backup storage and secure access credentials
• Monitor logs for unauthorized access attempts`
    },
    {
      title: 'Cookies and Local Storage',
      icon: Cookie,
      content: `The AgentMe Server web interface uses minimal browser storage:

Session Cookies:
• Authentication tokens (if auth is enabled) — essential for security
• Session identifiers for maintaining your login state
• CSRF protection tokens to prevent cross-site request forgery

Local Storage:
• User interface preferences (theme, layout, sidebar state)
• Cached data for improved performance
• Draft messages (unsent content, stored locally only)

Important:
• These are stored in the user's browser and are never transmitted to AgentMe AI
• No third-party cookies or tracking pixels are used
• No advertising or analytics cookies are placed
• All browser storage is cleared when you log out or clear your browser data`
    },
    {
      title: 'Your Rights and Choices',
      icon: Shield,
      content: `As a self-hosted platform, you have complete and unrestricted control over your data:

Right to Access:
• All your data is stored in human-readable files on your server
• Export configuration and logs at any time without restriction
• Query any stored data directly through your infrastructure

Right to Deletion:
• Delete any data by removing files from your server
• Clear logs and conversation history at your discretion
• Completely uninstall the Software and remove all associated data

Right to Portability:
• Configuration is stored in standard JSON format
• Export and import data between AgentMe instances
• Data formats are compatible with OpenClaw upstream

Right to Control:
• Disable any features, channels, or integrations you don't need
• Run completely offline with local AI models (no internet required)
• Modify the open-source code to meet your specific privacy requirements
• Choose exactly which AI providers and services to connect`
    },
    {
      title: 'Compliance Considerations',
      icon: Globe,
      content: `Because you self-host AgentMe Server, compliance responsibilities depend on your specific deployment and jurisdiction:

GDPR (European Union):
• You are the Data Controller for all data processed by your instance
• Ensure you have a lawful basis for processing personal data
• Implement data subject rights (access, rectification, erasure, portability)
• Maintain records of processing activities as required

CCPA (California, USA):
• Disclose categories of personal information collected by your agents
• Provide opt-out mechanisms if your deployment involves selling data
• Respond to verifiable consumer requests within required timeframes

HIPAA (Healthcare, USA):
• AgentMe Server is not HIPAA-certified out of the box
• Additional safeguards are required for Protected Health Information (PHI)
• Consider Business Associate Agreements with any cloud AI providers
• Use local models and encrypted storage for healthcare data

SOC 2 / ISO 27001:
• Implement appropriate security controls per the relevant framework
• Maintain comprehensive audit logs of all system access and changes
• Conduct regular security assessments and penetration tests`
    },
    {
      title: 'Children\'s Privacy',
      icon: UserX,
      content: `AgentMe Server is not designed for or directed at children under the age of 13 (or the applicable age of digital consent in your jurisdiction).

• We do not knowingly collect personal information from children
• If you deploy AgentMe Server in an environment where children may interact with it, you are responsible for ensuring appropriate safeguards and parental consent mechanisms are in place
• If you become aware that a child has provided personal information through your deployment, you should take steps to delete that information promptly`
    },
    {
      title: 'Changes to This Policy',
      icon: Mail,
      content: `We may update this Privacy Policy to reflect:

• Changes in the Software functionality that affect data handling
• New features, integrations, or channels that involve data processing
• Feedback and concerns from our community
• Evolving legal or regulatory requirements

Changes will be posted to:
• Our GitHub repository (PRIVACY.md)
• This website (agentme.app/privacy)
• Release notes for relevant Software versions

Since we don't collect your contact information, we cannot notify you directly of changes. We recommend reviewing this policy periodically, especially after major Software updates.

Last Updated: March 2026`
    },
    {
      title: 'Contact Us',
      icon: Mail,
      content: `For privacy-related questions, concerns, or requests:

• GitHub Issues: https://github.com/Agentme-AI/Server/issues
• GitHub Discussions: https://github.com/Agentme-AI/Server/discussions
• Telegram Community: https://t.me/+MaFHhTWO129jOTM1
• X (Twitter): https://x.com/Agentme_Ai

For security vulnerabilities, please use responsible disclosure and contact us privately through GitHub Security Advisories before any public disclosure.`
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F17' }}>
      <SimpleNavbar />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 24px 80px' }}>
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
            
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
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
              Privacy by Design
            </h3>
            <p style={{ fontSize: '15px', color: '#9AA6B2', margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              AgentMe Server is self-hosted. We don't have access to your data, conversations, or configurations. 
              Everything stays on your infrastructure, under your full control.
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
                  transition={{ delay: idx * 0.04 + 0.2 }}
                  style={{
                    padding: 'clamp(20px, 3vw, 32px)',
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
                    <div style={{ flex: 1, minWidth: 0 }}>
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
              style={{ color: '#3DDC97', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
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
