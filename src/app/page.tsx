export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Applaa</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="/comparison" className="text-gray-600 hover:text-gray-900">vs Competitors</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#roadmap" className="text-gray-600 hover:text-gray-900">Roadmap</a>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Download Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Desktop App Builder
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              That Actually Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build and deploy web apps, mobile apps, and more with AI assistance. 
            From React to Flutter, Expo to Vercel - all from your desktop.
          </p>
          
          {/* Key Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Desktop App</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Deploy Ready</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600">
              Download for Windows
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Current Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Applaa Does Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real features, working now. No promises, just capabilities you can use immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Web App Development */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web App Development</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• React + Vite + TypeScript</li>
                <li>• Live preview & hot reload</li>
                <li>• AI-powered code generation</li>
                <li>• Deploy to Vercel with custom domains</li>
              </ul>
              <div className="text-sm text-blue-600 font-medium">✅ Available Now</div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expo Mobile Apps</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Expo SDK 53 + React Native</li>
                <li>• Instant preview on device</li>
                <li>• TypeScript + Expo Router</li>
                <li>• Gluestack UI + NativeWind</li>
              </ul>
              <div className="text-sm text-green-600 font-medium">✅ Available Now</div>
            </div>

            {/* Flutter Development */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flutter Apps</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Native Flutter development</li>
                <li>• Prompt-to-Flutter generation</li>
                <li>• Hot reload & preview</li>
                <li>• Cross-platform deployment</li>
              </ul>
              <div className="text-sm text-purple-600 font-medium">🚧 In Development</div>
            </div>

            {/* AI Icon Generation */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Icon Generation</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• SnapAI powered icons</li>
                <li>• Professional app icons</li>
                <li>• Auto-apply to projects</li>
                <li>• Multiple size formats</li>
              </ul>
              <div className="text-sm text-orange-600 font-medium">✅ Available Now</div>
            </div>

            {/* Smart Context Engine */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spark Context Engine</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• SQLite vector search</li>
                <li>• Semantic similarity matching</li>
                <li>• Cross-app context sharing</li>
                <li>• Smart file suggestions</li>
              </ul>
              <div className="text-sm text-indigo-600 font-medium">✅ Available Now</div>
            </div>

            {/* Deployment & Publishing */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy & Publish</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• One-click Vercel deployment</li>
                <li>• Custom Applaa subdomains</li>
                <li>• Capacitor mobile builds</li>
                <li>• GitHub integration</li>
              </ul>
              <div className="text-sm text-teal-600 font-medium">✅ Available Now</div>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhanced App Features</h2>
            <p className="text-xl text-gray-600">
              Every app you build comes with professional enhancements built-in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Web App Enhancements */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Web App Enhancements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Capacitor Integration</div>
                    <div className="text-gray-600">Convert web apps to mobile with native features</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Flutter WebView</div>
                    <div className="text-gray-600">Wrap web apps in Flutter for native performance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Enhanced Navigation</div>
                    <div className="text-gray-600">Pull-to-refresh, offline support, native search</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Enhancements */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mobile App Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">ASO Optimization</div>
                    <div className="text-gray-600">App Store Optimization plans for every mobile app</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Smart App Naming</div>
                    <div className="text-gray-600">AI-generated brandable names with package IDs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Source Code Access</div>
                    <div className="text-gray-600">Download complete source code for any platform</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Applaa Works</h2>
            <p className="text-xl text-gray-600">
              Simple, powerful, and designed for real development workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Describe Your App</h3>
              <p className="text-gray-600">
                Tell Applaa what you want to build using natural language. Choose your framework or let AI suggest the best one.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. AI Builds Your App</h3>
              <p className="text-gray-600">
                Watch as Applaa generates your complete application with professional code, UI components, and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Deploy & Share</h3>
              <p className="text-gray-600">
                One-click deployment to Vercel, download mobile source code, or publish to app stores. Your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section id="roadmap" className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">What&apos;s Coming Next</h2>
          <p className="text-xl mb-8 opacity-90">
            We&apos;re constantly expanding Applaa&apos;s capabilities based on real developer needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🔄 Universal Framework Support</h3>
              <p className="opacity-90">Vue.js, Angular, Django, Laravel, and 100+ more frameworks</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🎮 Game Development</h3>
              <p className="opacity-90">Unity, Godot, and web-based game engines</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🖥️ Desktop Apps</h3>
              <p className="opacity-90">Electron, Tauri, and native desktop development</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🌐 WordPress & CMS</h3>
              <p className="opacity-90">Complete CMS sites with plugins and e-commerce</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next App?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join developers who are already building amazing apps with Applaa
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600">
              Download Free
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800">
              View Documentation
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            Free forever • No credit card required • Windows, Mac & Linux
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Applaa</span>
              </div>
              <p className="text-gray-600">
                The desktop app builder that actually works. Build anything, deploy anywhere.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Roadmap</a></li>
                <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900">Tutorials</a></li>
                <li><a href="#" className="hover:text-gray-900">Examples</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Applaa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}