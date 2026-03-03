import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Download, 
  Settings, 
  Code, 
  Wrench, 
  Zap,
  ChevronRight,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  ArrowLeft
} from 'lucide-react'

const docSections = [
  { id: 'overview', title: 'Overview', icon: BookOpen },
  { id: 'installation', title: 'Installation', icon: Download },
  { id: 'configuration', title: 'Configuration', icon: Settings },
  { id: 'api', title: 'API Reference', icon: Code },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: Wrench },
  { id: 'features', title: 'Features', icon: Zap },
]

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false)
  
  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0B0F17 0%, #121A29 100%)',
      border: '1px solid rgba(47, 63, 97, 0.5)',
      borderRadius: '12px',
      overflow: 'hidden',
      margin: '16px 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'rgba(14, 20, 33, 0.8)',
        borderBottom: '1px solid rgba(47, 63, 97, 0.3)'
      }}>
        <span style={{ fontSize: '12px', color: '#9AA6B2', fontFamily: 'monospace' }}>{language}</span>
        <motion.button
          onClick={copyCode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            background: 'rgba(47, 63, 97, 0.3)',
            border: '1px solid rgba(47, 63, 97, 0.5)',
            borderRadius: '6px',
            color: copied ? '#3DDC97' : '#9AA6B2',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          {copied ? <Check style={{ width: '14px', height: '14px' }} /> : <Copy style={{ width: '14px', height: '14px' }} />}
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
      <pre style={{
        margin: 0,
        padding: '16px',
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: '13px',
        lineHeight: 1.6,
        color: '#E6EDF7',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

const OverviewContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      What is AgentMe Server?
    </h3>
    <p style={{ fontSize: '16px', color: '#9AA6B2', lineHeight: 1.7, marginBottom: '24px' }}>
      AgentMe Server is a <strong style={{ color: '#3DDC97' }}>self-hosted AI agent platform</strong> that enables users to deploy and manage autonomous AI agents across multiple messaging channels. It provides a unified control plane for managing agents, channels, skills, and automations.
    </p>
    
    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px' }}>Key Value Propositions</h4>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {[
        { title: 'For Developers', items: ['Open Source (MIT)', 'Extensible plugin system', '20+ AI providers', 'WebSocket & HTTP APIs'] },
        { title: 'For Operators', items: ['Self-hosted infrastructure', 'Multi-channel support', 'Visual dashboard', 'Cron automation'] },
        { title: 'For End Users', items: ['Unified chat interface', 'Persistent memory', 'File handling', 'Real-time streaming'] },
      ].map((section, idx) => (
        <div key={idx} style={{
          padding: '20px',
          background: 'rgba(14, 20, 33, 0.6)',
          border: '1px solid rgba(47, 63, 97, 0.4)',
          borderRadius: '12px'
        }}>
          <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#3DDC97', marginBottom: '10px' }}>{section.title}</h5>
          <ul style={{ margin: 0, paddingLeft: '16px', color: '#9AA6B2', fontSize: '14px' }}>
            {section.items.map((item, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px' }}>Architecture Overview</h4>
    <CodeBlock code={`┌─────────────────────────────────────────────────────────────┐
│                     AgentMe Server                           │
├─────────────────────────────────────────────────────────────┤
│  Web UI (Lit + Vite)                                        │
│  ├── Dashboard (Agent Management)                           │
│  ├── Chat Interface                                         │
│  └── Settings & Configuration                               │
├─────────────────────────────────────────────────────────────┤
│  Gateway (Node.js + WebSocket)                              │
│  ├── Session Management                                     │
│  ├── Channel Router                                         │
│  └── Tool Orchestrator                                      │
├─────────────────────────────────────────────────────────────┤
│  Channels: WhatsApp │ Telegram │ Slack │ Discord │ WebChat  │
├─────────────────────────────────────────────────────────────┤
│  AI Providers: OpenAI │ Anthropic │ Google │ 20+ more       │
└─────────────────────────────────────────────────────────────┘`} language="ascii" />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Technical Specifications</h4>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
      {[
        { label: 'Runtime', value: 'Node.js ≥ 22' },
        { label: 'Frontend', value: 'Lit + Vite' },
        { label: 'Protocol', value: 'WebSocket + HTTP REST' },
        { label: 'Storage', value: 'File-based' },
        { label: 'Auth', value: 'API keys, OAuth, Sessions' },
        { label: 'Deployment', value: 'Self-hosted, Docker, Cloud' },
      ].map((spec, idx) => (
        <div key={idx} style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'rgba(14, 20, 33, 0.4)',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <span style={{ color: '#9AA6B2' }}>{spec.label}</span>
          <span style={{ color: '#E6EDF7', fontWeight: 500 }}>{spec.value}</span>
        </div>
      ))}
    </div>
  </div>
)

const InstallationContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      Installation Guide
    </h3>
    
    <div style={{ 
      padding: '16px', 
      background: 'rgba(61, 220, 151, 0.1)', 
      border: '1px solid rgba(61, 220, 151, 0.3)',
      borderRadius: '12px',
      marginBottom: '24px'
    }}>
      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#3DDC97', marginBottom: '8px' }}>System Requirements</h4>
      <ul style={{ margin: 0, paddingLeft: '20px', color: '#9AA6B2', fontSize: '14px' }}>
        <li><strong>OS:</strong> Linux, macOS, or Windows (WSL2)</li>
        <li><strong>Node.js:</strong> Version 22 or higher</li>
        <li><strong>RAM:</strong> 2 GB minimum, 4 GB recommended</li>
        <li><strong>Storage:</strong> 1 GB free space</li>
      </ul>
    </div>

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px' }}>Method 1: npm (Recommended)</h4>
    <CodeBlock code={`# Install globally
npm install -g agentme@latest

# Verify installation
agentme --version

# Run onboarding wizard
agentme onboard --install-daemon`} />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Method 2: From Source</h4>
    <CodeBlock code={`# Clone the repository
git clone https://github.com/Agentme-AI/Server.git
cd Server

# Install dependencies
npm install

# Build the UI and server
npm run build

# Start development server
npm run dev`} />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Method 3: Docker</h4>
    <CodeBlock code={`# Pull the image
docker pull agentme/server:latest

# Or use docker-compose
curl -fsSL https://raw.githubusercontent.com/Agentme-AI/Server/main/docker-compose.yml | docker-compose -f - up -d`} />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Post-Installation</h4>
    <CodeBlock code={`# Create .env file with your API keys
cat > .env << EOF
OPENAI_API_KEY=sk-your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-key
TELEGRAM_BOT_TOKEN=your-telegram-token
PORT=18789
EOF

# Start the gateway
agentme gateway --port 18789

# Access the Web UI
open http://localhost:18789`} />
  </div>
)

const ConfigurationContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      Configuration Guide
    </h3>
    
    <p style={{ fontSize: '16px', color: '#9AA6B2', lineHeight: 1.7, marginBottom: '24px' }}>
      AgentMe can be configured through three methods: <strong style={{ color: '#3DDC97' }}>Web UI</strong> (recommended for beginners), <strong style={{ color: '#3DDC97' }}>CLI Commands</strong>, or <strong style={{ color: '#3DDC97' }}>Configuration Files</strong> (JSON).
    </p>

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px' }}>CLI Configuration</h4>
    <CodeBlock code={`# View configuration
agentme config show

# Get specific value
agentme config get agents.defaults.model

# Set a value
agentme config set agents.defaults.model gpt-4o

# Validate configuration
agentme config validate`} />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Main Configuration File</h4>
    <p style={{ fontSize: '14px', color: '#9AA6B2', marginBottom: '12px' }}>Located at <code style={{ background: 'rgba(47, 63, 97, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>~/.agentme/config.json</code></p>
    <CodeBlock code={`{
  "agents": {
    "defaults": {
      "model": "gpt-4o",
      "temperature": 0.7,
      "maxTokens": 4096
    },
    "list": [
      {
        "id": "main",
        "name": "Main Assistant",
        "model": "gpt-4o"
      }
    ]
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "\${TELEGRAM_BOT_TOKEN}"
    }
  },
  "models": {
    "providers": [
      {
        "id": "openai",
        "enabled": true,
        "apiKey": "\${OPENAI_API_KEY}"
      }
    ]
  }
}`} language="json" />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>Channel Configuration</h4>
    <CodeBlock code={`# Telegram Setup
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123456:ABC-DEF..."
    }
  }
}

# WhatsApp Setup
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "apiKey": "your-whatsapp-api-key",
      "phoneNumberId": "123456789"
    }
  }
}`} language="json" />
  </div>
)

const ApiContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      API Reference
    </h3>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
      {[
        { label: 'REST API', value: 'http://localhost:18789/api/v1' },
        { label: 'WebSocket', value: 'ws://localhost:18789' },
        { label: 'Health Check', value: 'http://localhost:18789/health' },
        { label: 'Auth', value: 'Bearer Token' },
      ].map((spec, idx) => (
        <div key={idx} style={{
          padding: '12px 16px',
          background: 'rgba(14, 20, 33, 0.6)',
          border: '1px solid rgba(47, 63, 97, 0.4)',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', color: '#9AA6B2', marginBottom: '4px' }}>{spec.label}</div>
          <div style={{ fontSize: '13px', color: '#3DDC97', fontFamily: 'monospace' }}>{spec.value}</div>
        </div>
      ))}
    </div>

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px' }}>REST API Endpoints</h4>
    
    <h5 style={{ fontSize: '14px', fontWeight: 600, color: '#3DDC97', marginBottom: '8px' }}>Agents</h5>
    <CodeBlock code={`# List all agents
GET /api/v1/agents

# Create agent
POST /api/v1/agents
{
  "id": "support",
  "name": "Support Bot",
  "model": "gpt-4o"
}

# Get agent details
GET /api/v1/agents/:id

# Update agent
PUT /api/v1/agents/:id

# Delete agent
DELETE /api/v1/agents/:id`} />

    <h5 style={{ fontSize: '14px', fontWeight: 600, color: '#3DDC97', marginBottom: '8px', marginTop: '16px' }}>Chat</h5>
    <CodeBlock code={`# Send message
POST /api/v1/chat/send
{
  "sessionKey": "agent:main:telegram:dm:123",
  "message": "Hello!",
  "attachments": []
}

# Get chat history
GET /api/v1/chat/history?sessionKey=agent:main:telegram:dm:123&limit=50`} />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>WebSocket Protocol</h4>
    <CodeBlock code={`const ws = new WebSocket("ws://localhost:18789");

ws.onopen = () => {
  // Authenticate
  ws.send(JSON.stringify({
    type: "auth",
    token: "YOUR_API_KEY"
  }));
};

// Send a message
ws.send(JSON.stringify({
  id: "req_123",
  method: "chat.send",
  params: {
    sessionKey: "agent:main:telegram:dm:123",
    message: "Hello!"
  }
}));`} language="javascript" />

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '24px' }}>SDK Examples</h4>
    <CodeBlock code={`# JavaScript/TypeScript
import { AgentMeClient } from "@agentme/sdk";

const client = new AgentMeClient("http://localhost:18789");
await client.connect("YOUR_API_KEY");

const agents = await client.agents.list();
await client.chat.send({
  sessionKey: "agent:main:telegram:dm:123",
  message: "Hello!"
});`} language="javascript" />
  </div>
)

const TroubleshootingContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      Troubleshooting Guide
    </h3>
    
    <div style={{ marginBottom: '24px' }}>
      <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#E6EDF7', marginBottom: '8px' }}>
        Diagnostic Commands
      </h4>
      <CodeBlock code={`# Quick health check
curl http://localhost:18789/health

# Run diagnostics
agentme doctor

# Fix common issues automatically
agentme doctor --fix

# View logs
agentme logs --follow

# Check version
agentme --version`} />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        {
          problem: 'npm install fails with EACCES',
          solution: `mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install -g agentme@latest`
        },
        {
          problem: 'Port 18789 already in use',
          solution: `# Find and kill process
lsof -ti:18789 | xargs kill -9

# Or use different port
agentme gateway --port 8080`
        },
        {
          problem: 'Cannot connect to gateway',
          solution: `# Check if server is running
curl http://localhost:18789/health

# Restart server
pkill -f agentme
agentme gateway --verbose`
        },
        {
          problem: 'API key not recognized',
          solution: `# Verify key is set
echo $OPENAI_API_KEY

# Set in .env file
echo "OPENAI_API_KEY=sk-..." > .env

# Test the key
curl https://api.openai.com/v1/models \\
  -H "Authorization: Bearer $OPENAI_API_KEY"`
        },
        {
          problem: 'Telegram bot not responding',
          solution: `# Check webhook is set
curl https://api.telegram.org/bot<TOKEN>/getWebhookInfo

# Reset webhook
curl -X POST \\
  https://api.telegram.org/bot<TOKEN>/setWebhook \\
  -d "url=https://yourdomain.com/webhook/telegram"`
        }
      ].map((issue, idx) => (
        <div key={idx} style={{
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
          border: '1px solid rgba(47, 63, 97, 0.4)',
          borderRadius: '12px'
        }}>
          <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#E6EDF7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
            {issue.problem}
          </h5>
          <pre style={{
            margin: 0,
            padding: '12px',
            background: 'rgba(11, 15, 23, 0.8)',
            borderRadius: '8px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            lineHeight: 1.5,
            color: '#9AA6B2',
            overflowX: 'auto'
          }}>
            <code>{issue.solution}</code>
          </pre>
        </div>
      ))}
    </div>
  </div>
)

const FeaturesContent = () => (
  <div>
    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#E6EDF7', marginBottom: '16px' }}>
      Feature Guide
    </h3>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      {[
        {
          title: 'Agent Cards',
          icon: '👤',
          features: ['Visual agent management', 'Inline avatar editing', 'Quick configuration access', 'Status indicators']
        },
        {
          title: 'Chat Interface',
          icon: '💬',
          features: ['Multi-session support', 'File attachments', 'Voice messages', 'Markdown formatting', 'Streaming responses']
        },
        {
          title: 'Channels',
          icon: '📡',
          features: ['Telegram Bot API', 'WhatsApp Business', 'Slack/Discord', 'WebChat Widget', 'iMessage (macOS)']
        },
        {
          title: 'Cron & Scheduling',
          icon: '⏰',
          features: ['Scheduled tasks', 'Cron expressions', 'Recurring automations', 'Task history']
        },
        {
          title: 'Agent Configuration',
          icon: '⚙️',
          features: ['Identity management', 'Model selection', 'Tool permissions', 'Channel bindings']
        },
        {
          title: 'Analytics',
          icon: '📊',
          features: ['Session metrics', 'Token usage', 'Cost tracking', 'Response latency']
        }
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          style={{
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
            border: '1px solid rgba(47, 63, 97, 0.4)',
            borderRadius: '16px'
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>{feature.icon}</div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#E6EDF7', marginBottom: '12px' }}>{feature.title}</h4>
          <ul style={{ margin: 0, paddingLeft: '16px', color: '#9AA6B2', fontSize: '14px' }}>
            {feature.features.map((f, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{f}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#E6EDF7', marginBottom: '12px', marginTop: '32px' }}>Keyboard Shortcuts</h4>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
      {[
        { key: 'Enter', action: 'Send message' },
        { key: 'Shift + Enter', action: 'New line' },
        { key: 'Escape', action: 'Stop generation' },
        { key: '/', action: 'Focus search' },
        { key: 'Ctrl + N', action: 'New session' },
        { key: 'Ctrl + /', action: 'Show shortcuts' },
      ].map((shortcut, idx) => (
        <div key={idx} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: 'rgba(14, 20, 33, 0.6)',
          borderRadius: '8px'
        }}>
          <span style={{ color: '#9AA6B2', fontSize: '14px' }}>{shortcut.action}</span>
          <kbd style={{
            padding: '4px 10px',
            background: 'rgba(47, 63, 97, 0.4)',
            borderRadius: '6px',
            fontSize: '12px',
            color: '#E6EDF7',
            fontFamily: 'monospace'
          }}>{shortcut.key}</kbd>
        </div>
      ))}
    </div>
  </div>
)

const Docs = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <OverviewContent />
      case 'installation': return <InstallationContent />
      case 'configuration': return <ConfigurationContent />
      case 'api': return <ApiContent />
      case 'troubleshooting': return <TroubleshootingContent />
      case 'features': return <FeaturesContent />
      default: return <OverviewContent />
    }
  }

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
                  width: '150px',
                  height: 'auto',
                  maxHeight: '44px',
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

      <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px', padding: '40px 24px 0' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            <BookOpen style={{ width: '16px', height: '16px', color: '#3DDC97' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#3DDC97', textTransform: 'uppercase', letterSpacing: '1px' }}>Documentation</span>
          </motion.div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#E6EDF7', marginBottom: '12px' }}>
            Learn <span style={{ color: '#3DDC97' }}>AgentMe</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#9AA6B2', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to deploy, configure, and master your AI agent platform.
          </p>
        </motion.div>

        <div style={{ display: 'flex', gap: '24px', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            width: '260px',
            flexShrink: 0,
            background: 'rgba(14, 20, 33, 0.6)',
            border: '1px solid rgba(47, 63, 97, 0.4)',
            borderRadius: '16px',
            padding: '16px',
            height: 'fit-content',
            position: 'sticky',
            top: '120px'
          }}
        >
          {docSections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                whileHover={{ x: 4 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  marginBottom: '4px',
                  background: isActive ? 'linear-gradient(135deg, rgba(61, 220, 151, 0.15), rgba(61, 220, 151, 0.05))' : 'transparent',
                  border: isActive ? '1px solid rgba(61, 220, 151, 0.3)' : '1px solid transparent',
                  borderRadius: '10px',
                  color: isActive ? '#3DDC97' : '#9AA6B2',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left'
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
                {section.title}
                {isActive && <ChevronRight style={{ width: '16px', height: '16px', marginLeft: 'auto' }} />}
              </motion.button>
            )
          })}
          
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(47, 63, 97, 0.3)' }}>
            <a 
              href="https://github.com/Agentme-AI/Server" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                color: '#9AA6B2',
                fontSize: '13px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              <ExternalLink style={{ width: '14px', height: '14px' }} />
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(14, 20, 33, 0.9) 0%, rgba(18, 26, 41, 0.9) 100%)',
            border: '1px solid rgba(47, 63, 97, 0.4)',
            borderRadius: '20px',
            padding: '40px',
            minHeight: '600px'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Docs
