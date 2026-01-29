'use client'

import Link from 'next/link'

const features = [
  {
    title: 'Heterogeneous Compute',
    description: 'Native support for GPU, TPU, and specialized AI accelerators across distributed nodes.',
  },
  {
    title: 'AI Token',
    description: 'Native AI token for compute payments, staking, and governance of network parameters.',
  },
  {
    title: 'Model Registry',
    description: 'On-chain model versioning, verification, and provenance tracking for AI models.',
  },
  {
    title: 'Inference Markets',
    description: 'Decentralized marketplace for AI inference with competitive pricing and SLA guarantees.',
  },
  {
    title: 'MCP Integration',
    description: 'Full Model Context Protocol server support for seamless AI agent interactions.',
  },
  {
    title: 'Jin Architecture',
    description: 'Unified multimodal AI framework support for vision, language, and audio models.',
  },
]

const specs = [
  { label: 'Chain ID', value: '36963' },
  { label: 'Token', value: 'AI (18 decimals)' },
  { label: 'RPC', value: 'https://rpc.hanzo.ai' },
  { label: 'Explorer', value: 'https://explore.hanzo.ai' },
  { label: 'Compatibility', value: 'Full EVM' },
  { label: 'Finality', value: 'Sub-second (Lux Consensus)' },
]

const infrastructure = [
  {
    title: 'Hanzo Nodes',
    description: 'Enterprise-grade validator operations with 99.9% uptime SLA.',
  },
  {
    title: 'Candle ML',
    description: 'Rust-based ML framework integration for high-performance inference.',
  },
  {
    title: 'Training Coordination',
    description: 'Decentralized training orchestration across heterogeneous compute clusters.',
  },
  {
    title: 'Model Attestation',
    description: 'Cryptographic verification and attestation for model integrity.',
  },
]

const links = [
  { label: 'Hanzo AI', href: 'https://hanzo.ai' },
  { label: 'Lux Network', href: 'https://lux.network' },
  { label: 'Lux Bridge', href: 'https://bridge.lux.network' },
  { label: 'Lux Exchange', href: 'https://lux.exchange' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-4 text-gray-500 text-sm tracking-widest uppercase">
            Chain ID: 36963
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            HANZO NETWORK
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            AI Infrastructure for the Decentralized Economy
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mb-12">
            Native Lux L2 built for heterogeneous AI compute. Run models, coordinate training,
            and participate in inference markets with the native AI token.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://explore.hanzo.ai"
              className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Explore Network
            </Link>
            <Link
              href="https://hanzo.ai/docs"
              className="border border-gray-700 text-white px-8 py-4 text-lg font-medium hover:border-gray-500 transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-700" />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">
            Built for AI Compute
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="border border-gray-900 p-8 hover:border-gray-700 transition-colors">
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="px-6 py-24 border-t border-gray-900 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            Specifications
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">
            Technical Details
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec) => (
              <div key={spec.label} className="border-l-2 border-gray-800 pl-6 py-2">
                <div className="text-gray-500 text-sm mb-1">{spec.label}</div>
                <div className="text-lg font-mono">{spec.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 border border-gray-800 bg-black">
            <div className="text-gray-500 text-sm mb-2">Add to Wallet</div>
            <code className="text-sm text-gray-300 break-all">
              {`{ chainId: 36963, rpc: "https://rpc.hanzo.ai", symbol: "AI", explorer: "https://explore.hanzo.ai" }`}
            </code>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="px-6 py-24 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            Infrastructure
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">
            Enterprise Grade
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="w-12 h-12 border border-gray-800 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 border-t border-gray-900 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Building
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Deploy AI models, run inference, and participate in the decentralized AI economy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://hanzo.ai/docs/network"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Read the Docs
            </Link>
            <Link
              href="https://bridge.lux.network"
              className="border border-gray-300 text-black px-8 py-4 text-lg font-medium hover:border-black transition-colors"
            >
              Bridge Assets
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">HANZO NETWORK</div>
              <p className="text-gray-500 max-w-md">
                The AI-native blockchain built on Lux Network. Powering the next generation
                of decentralized AI infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 md:justify-end">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-900 flex flex-wrap justify-between gap-4 text-sm text-gray-600">
            <div>Hanzo AI Inc.</div>
            <div>Chain ID: 36963 | Token: AI</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
