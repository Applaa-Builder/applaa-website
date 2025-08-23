// Copy this content to src/app/page.tsx to see the stunning Applaa landing page

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Applaa
              </h1>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Build <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">ANYTHING</span>
                <br />
                with AI
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                The Only App Builder You'll Ever Need. From React to Flutter, WordPress to Unity - 
                <strong className="text-gray-900"> 100+ Frameworks, Unlimited Possibilities</strong>
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 py-8">
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <span className="text-2xl">🌐</span>
                <span className="font-semibold">100+ Frameworks</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold">500+ Templates</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <span className="text-2xl">∞</span>
                <span className="font-semibold">Unlimited Possibilities</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">AI-Powered</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                Download Applaa Free
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
                Watch Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Features
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break free from limitations. Build anything you can imagine with our unlimited approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">UNLIMITED Builder</h4>
              <p className="text-gray-600 mb-4">No dropdowns, no limitations. See ALL frameworks at once.</p>
              <div className="text-sm text-blue-600 font-medium">100+ Frameworks Available</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Code</h4>
              <p className="text-gray-600 mb-4">Claude 4 Sonnet writes production-ready code.</p>
              <div className="text-sm text-purple-600 font-medium">Smart Code Generation</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Multi-Platform</h4>
              <p className="text-gray-600 mb-4">Web, Mobile, Desktop, APIs, Games, AI/ML apps.</p>
              <div className="text-sm text-green-600 font-medium">8+ Platform Types</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">∞</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">No Limitations</h4>
              <p className="text-gray-600 mb-4">React, Flutter, WordPress, Unity, Django - anything!</p>
              <div className="text-sm text-orange-600 font-medium">Truly Unlimited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Every Framework You Need
            </h3>
            <p className="text-xl text-gray-600">
              No more hunting through menus. See everything at once.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-center font-medium text-sm">React</div>
            <div className="bg-cyan-100 text-cyan-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Flutter</div>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Vue.js</div>
            <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Angular</div>
            <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Next.js</div>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Django</div>
            <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center font-medium text-sm">Unity</div>
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-center font-medium text-sm">WordPress</div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg text-center font-medium text-sm">+ 92 More</div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl mb-8 opacity-90">
            "To democratize app development by making ANY framework accessible to ANYONE, 
            regardless of technical expertise."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold">50,000+</div>
              <div className="opacity-90">Apps Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Anything?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of builders creating amazing apps with unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Download Applaa Free
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold">Applaa</span>
          </div>
          <p className="text-gray-400 mb-8">
            The unlimited app builder for everyone.
          </p>
          <div className="border-t border-gray-800 pt-8 text-gray-400">
            <p>&copy; 2024 Applaa. All rights reserved. Build anything, anywhere, anytime.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
