import {
  Github,
  Terminal,
  DiamondPlus,
  Code2,
  Container as Docker,
  CheckCircle2,
  Castle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Castle className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Starknet Dev Container
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Your instant Starknet development environment.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            No more "it doesn't work on my machine". All Starknet tools pre-configured in an isolated container.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a target="_blank" href="https://github.com/starknet-fortress/starknet-dev-container"
               className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              <Github className="w-5 h-5 mr-2" />
              Read documentation
            </a>
            <a target="_blank" href="https://hub.docker.com/r/starknetfortress/starknet-dev-container"
               className="flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
              <Docker className="w-5 h-5 mr-2" />
              Docker Image
            </a>
            <a href="#get-started"
               className="flex items-center px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-500 rounded-lg transition-colors">
              <Terminal className="w-5 h-5 mr-2" />
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Key Features */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-32 max-w-4xl mx-auto relative">
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-3">
                <Docker className="w-10 h-10 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Docker Image</h3>
              </div>
              <p className="text-gray-300">All Starknet development tools in one Docker image , managed by ASDF for seamless version control.</p>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
              <DiamondPlus className="w-16 h-16 text-purple-400" />
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-3">
                <Code2 className="w-10 h-10 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">VSCode Dev Container</h3>
              </div>
              <p className="text-gray-300">Ready-to-use VS Code development environment ensuring consistent and isolated development across contributors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'ASDF', 'Scarb',  'Starkli', 'Starknet Foundry', 'Starknet Devnet', 'NodeJs', 'Yarn', 'Rust'
            ].map((tool) => (
              <div key={tool} className="flex items-center space-x-2 bg-gray-700/30 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="get-started" className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started</h2>
          <div className="max-w-2xl mx-auto space-y-6">

            <div className="bg-gray-700/30 p-6 rounded-lg">
              <ol className="space-y-4 list-decimal list-inside">
                <li>Open your project folder in VS Code</li>
                <li>Open Folder in Container (Press <kbd className="px-2 py-1 bg-gray-600 rounded">F1</kbd> or <kbd className="px-2 py-1 bg-gray-600 rounded">Cmd/Ctrl + Shift + P</kbd>)</li>
                <li>Start developing!</li>
              </ol>
            </div>
            <p className="text-gray-300 mb-4">Require Docker Desktop and VS Code + Remote Development Extension Pack. Read <a href="https://github.com/starknet-fortress/starknet-dev-container" className="text-purple-400 hover:text-purple-300">documentation</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a target="_blank" href="https://github.com/starknet-fortress/starknet-dev-container"
               className="hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a target="_blank" href="https://hub.docker.com/r/starknetfortress/starknet-dev-container"
               className="hover:text-white transition-colors">
              <Docker className="w-6 h-6" />
            </a>
          </div>
         <p>© {new Date().getFullYear()} Starknet Dev Container. By Starknet-Fortress initiative.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;