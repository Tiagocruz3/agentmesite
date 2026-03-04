import { motion } from 'framer-motion'
import SimpleNavbar from '../components/SimpleNavbar'
import { FileText, Scale, Shield, AlertCircle, Gavel, Globe, Users, RefreshCw } from 'lucide-react'
import usePageSEO from '../hooks/usePageSEO'

const TermsOfService = () => {
  usePageSEO({
    title: 'Terms of Service — Agent Me Server',
    description: 'Terms of Service for Agent Me Server. Read our terms covering open-source licensing, acceptable use, data ownership, and liability.',
    path: '/terms',
  })

  const sections = [
    {
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: `By accessing, downloading, installing, or using AgentMe Server (the "Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Software.

These Terms constitute a legally binding agreement between you and AgentMe AI ("we," "us," or "our") regarding your use of the Software and any related services, documentation, and community resources.`
    },
    {
      title: '2. Open Source License',
      icon: Scale,
      content: `AgentMe Server is released under the MIT License. This means:

• You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software
• You must include the copyright notice and permission notice in all copies or substantial portions of the Software
• The Software is provided "as is", without warranty of any kind, express or implied
• We are not liable for any claim, damages, or other liability arising from the use of the Software

The full MIT License text is available at: https://github.com/Agentme-AI/Server/blob/main/LICENSE`
    },
    {
      title: '3. Self-Hosted Nature',
      icon: Shield,
      content: `AgentMe Server is a self-hosted platform. This means:

• You are solely responsible for the deployment, operation, and maintenance of your instance
• You control your own data, infrastructure, and configuration at all times
• We do not have access to your servers, data, conversations, or credentials
• You are responsible for ensuring compliance with applicable laws and regulations in your jurisdiction
• You must secure your own API keys, tokens, and credentials
• You are responsible for maintaining backups and disaster recovery procedures`
    },
    {
      title: '4. AI Provider Terms',
      icon: Globe,
      content: `When using AgentMe Server with third-party AI providers (OpenAI, Anthropic, Google, Mistral, Ollama, etc.):

• You must comply with each provider's terms of service and acceptable use policies
• You are responsible for any costs incurred through API usage with these providers
• You must not use the Software to violate provider policies or generate harmful, illegal, or misleading content
• Rate limits and usage restrictions imposed by AI providers apply independently
• We are not responsible for any changes, outages, or policy modifications by third-party providers
• You should review each provider's data retention and privacy policies before use`
    },
    {
      title: '5. Acceptable Use',
      icon: Gavel,
      content: `You agree not to use AgentMe Server to:

• Violate any applicable local, state, national, or international laws or regulations
• Infringe on intellectual property rights of any party
• Generate or distribute malware, spam, phishing content, or other harmful material
• Harass, abuse, threaten, or harm individuals or groups
• Impersonate any person or entity, or misrepresent your affiliation with any person or entity
• Interfere with or disrupt the integrity of any systems or networks
• Engage in unauthorized data mining, scraping, or collection of personal information
• Create agents that deceive users about their AI nature when transparency is legally required

We reserve the right to terminate access to our repositories and community resources for violations of these terms.`
    },
    {
      title: '6. Data and Privacy',
      icon: Shield,
      content: `As a self-hosted platform:

• We do not collect, store, or process your operational data
• Your conversations, agent configurations, memory files, and uploaded files remain exclusively on your infrastructure
• You are the data controller and responsible for data protection compliance (GDPR, CCPA, HIPAA, etc.)
• Anonymous, opt-in usage statistics may be collected only if explicitly enabled by you
• We may collect standard analytics on our website (agentme.app) — see our Privacy Policy for details
• You are responsible for informing your end users about data processing when deploying agents`
    },
    {
      title: '7. Intellectual Property',
      icon: Users,
      content: `• The AgentMe Server source code is licensed under MIT — you may use it freely within the license terms
• The "Agent Me" name, logo, and branding are trademarks of AgentMe AI
• You may not use our trademarks to imply endorsement without prior written consent
• Contributions to the project via pull requests are subject to the project's Contributor License Agreement
• Custom agents, configurations, and workflows you create using the Software are your intellectual property`
    },
    {
      title: '8. No Warranty',
      icon: AlertCircle,
      content: `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

We do not guarantee that:
• The Software will meet your specific requirements
• The Software will be uninterrupted, timely, secure, or error-free
• The results obtained from using the Software will be accurate or reliable
• Any errors in the Software will be corrected in a timely manner
• The Software will be compatible with all third-party services or hardware`
    },
    {
      title: '9. Limitation of Liability',
      icon: Scale,
      content: `IN NO EVENT SHALL AGENTME AI, ITS CONTRIBUTORS, OR MAINTAINERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This includes, but is not limited to:
• Loss of data, profits, or business opportunities
• Business interruption or downtime
• Personal injury or privacy violations resulting from your deployment
• Failure to comply with regulations in your jurisdiction
• Costs of procurement of substitute goods or services
• Any indirect, incidental, special, consequential, or punitive damages`
    },
    {
      title: '10. Indemnification',
      icon: Shield,
      content: `You agree to indemnify, defend, and hold harmless AgentMe AI, its contributors, and maintainers from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from:

• Your use of and access to the Software
• Your violation of any term of these Terms
• Your violation of any third-party right, including privacy or intellectual property rights
• Any claim that your deployment or use of the Software caused damage to a third party
• Your failure to comply with applicable laws and regulations`
    },
    {
      title: '11. Changes to Terms',
      icon: RefreshCw,
      content: `We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our GitHub repository and/or this website.

Your continued use of the Software after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically for changes.

We will make reasonable efforts to communicate significant changes through our GitHub release notes and community channels.`
    },
    {
      title: '12. Governing Law',
      icon: Globe,
      content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the primary maintainer resides, without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration authority.`
    },
    {
      title: '13. Contact',
      icon: FileText,
      content: `For questions about these Terms, please contact us through:

• GitHub Issues: https://github.com/Agentme-AI/Server/issues
• GitHub Discussions: https://github.com/Agentme-AI/Server/discussions
• Telegram Community: https://t.me/+MaFHhTWO129jOTM1
• X (Twitter): https://x.com/Agentme_Ai

Last Updated: March 2026`
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
              <Scale style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</span>
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
              Terms of <span style={{ color: '#3DDC97' }}>Service</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#9AA6B2', maxWidth: '600px', margin: '0 auto' }}>
              Please read these terms carefully before using AgentMe Server.
            </p>
          </div>

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
              Questions about these terms?
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

export default TermsOfService
