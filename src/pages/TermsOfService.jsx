import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: `By accessing, downloading, installing, or using AgentMe Server (the "Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Software.

These Terms constitute a legally binding agreement between you and AgentMe AI ("we," "us," or "our") regarding your use of the Software and any related services.`
    },
    {
      title: '2. Open Source License',
      icon: Scale,
      content: `AgentMe Server is released under the MIT License. This means:

• You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software
• You must include the copyright notice and permission notice in all copies or substantial portions
• The Software is provided "as is", without warranty of any kind
• We are not liable for any claim, damages, or other liability arising from the use of the Software

The full MIT License text is available at: https://github.com/Agentme-AI/Server/blob/main/LICENSE`
    },
    {
      title: '3. Self-Hosted Nature',
      icon: Shield,
      content: `AgentMe Server is a self-hosted platform. This means:

• You are solely responsible for the deployment, operation, and maintenance of your instance
• You control your own data, infrastructure, and configuration
• We do not have access to your servers, data, or conversations
• You are responsible for ensuring compliance with applicable laws and regulations in your jurisdiction
• You must secure your own API keys, tokens, and credentials`
    },
    {
      title: '4. AI Provider Terms',
      icon: AlertCircle,
      content: `When using AgentMe Server with third-party AI providers (OpenAI, Anthropic, Google, etc.):

• You must comply with each provider's terms of service and acceptable use policies
• You are responsible for any costs incurred through API usage
• You must not use the Software to violate provider policies or generate harmful content
• Rate limits and usage restrictions of AI providers apply`
    },
    {
      title: '5. Acceptable Use',
      icon: Shield,
      content: `You agree not to use AgentMe Server to:

• Violate any applicable laws or regulations
• Infringe on intellectual property rights
• Generate or distribute malware, spam, or harmful content
• Harass, abuse, or harm individuals or groups
• Interfere with or disrupt the integrity of any systems
• Misrepresent the identity or origin of communications
• Engage in unauthorized data mining or scraping

We reserve the right to terminate access to our repositories and community resources for violations.`
    },
    {
      title: '6. Data and Privacy',
      icon: Shield,
      content: `As a self-hosted platform:

• We do not collect, store, or process your data
• Your conversations, configurations, and files remain on your infrastructure
• You are the data controller and responsible for data protection compliance (GDPR, CCPA, etc.)
• Anonymous usage statistics may be collected if explicitly enabled by you
• See our Privacy Policy for more details`
    },
    {
      title: '7. No Warranty',
      icon: AlertCircle,
      content: `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

We do not guarantee that:
• The Software will meet your requirements
• The Software will be uninterrupted, timely, secure, or error-free
• The results from using the Software will be accurate or reliable
• Any errors in the Software will be corrected`
    },
    {
      title: '8. Limitation of Liability',
      icon: Scale,
      content: `IN NO EVENT SHALL WE BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This includes, but is not limited to:
• Loss of data or profits
• Business interruption
• Personal injury or privacy violations
• Failure to comply with regulations in your jurisdiction`
    },
    {
      title: '9. Indemnification',
      icon: Shield,
      content: `You agree to indemnify, defend, and hold harmless AgentMe AI and its contributors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from:

• Your use of and access to the Software
• Your violation of any term of these Terms
• Your violation of any third-party right, including privacy or intellectual property rights
• Any claim that your use caused damage to a third party`
    },
    {
      title: '10. Changes to Terms',
      icon: FileText,
      content: `We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our GitHub repository.

Your continued use of the Software after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically.`
    },
    {
      title: '11. Governing Law',
      icon: Scale,
      content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the primary maintainer resides, without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved through good faith negotiation, and if necessary, binding arbitration.`
    },
    {
      title: '12. Contact',
      icon: FileText,
      content: `For questions about these Terms, please contact us through:

• GitHub Issues: https://github.com/Agentme-AI/Server/issues
• GitHub Discussions: https://github.com/Agentme-AI/Server/discussions
• Telegram: https://t.me/+MaFHhTWO129jOTM1

Last Updated: March 2026`
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
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/logo.png" 
                alt="Agent Me" 
                style={{
                  width: '200px',
                  height: 'auto',
                  maxHeight: '52px',
                  objectFit: 'contain',
                  background: 'transparent'
                }} 
              />
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
              <Scale style={{ width: '24px', height: '24px', color: '#3DDC97' }} />
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</span>
            </motion.div>
            
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#E6EDF7', marginBottom: '16px' }}>
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
              Questions about these terms?
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

export default TermsOfService
