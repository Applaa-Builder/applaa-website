import React from "react";
import { CheckCircle, XCircle, AlertTriangle, Shield, Zap, Brain, TestTube, Globe, Users } from "lucide-react";

export default function ComparisonPage() {
  const competitors = [
    {
      name: "Applaa",
      logo: "🚀",
      tagline: "Privacy-First AI Development Platform",
      isApplaa: true
    },
    {
      name: "Lovable.dev",
      logo: "💜",
      tagline: "AI-powered web app builder",
      website: "lovable.dev"
    },
    {
      name: "Bolt.new",
      logo: "⚡",
      tagline: "AI full-stack web development",
      website: "bolt.new"
    },
    {
      name: "v0.dev",
      logo: "🔮",
      tagline: "Generative UI by Vercel",
      website: "v0.dev"
    },
    {
      name: "Replit Agent",
      logo: "🤖",
      tagline: "AI coding assistant",
      website: "replit.com"
    },
    {
      name: "RORK.com",
      logo: "🌊",
      tagline: "AI app development",
      website: "rork.com"
    }
  ];

  const features = [
    {
      category: "🔒 Privacy & Security",
      items: [
        {
          name: "100% Local AI Processing",
          description: "AI runs entirely on your machine - code never leaves your computer",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Enterprise Security Compliance",
          description: "GDPR, HIPAA, SOX compliant by design",
          applaa: "full",
          others: ["partial", "partial", "partial", "partial", "none"]
        },
        {
          name: "Air-gapped Development",
          description: "Works completely offline in secure environments",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Zero Data Transmission",
          description: "Your proprietary code stays completely private",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        }
      ]
    },
    {
      category: "⚡ Performance & Speed",
      items: [
        {
          name: "Sub-100ms AI Response Time",
          description: "Instant AI assistance with zero network latency",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Native Desktop Performance",
          description: "Full system resources, not browser-limited",
          applaa: "full",
          others: ["none", "none", "none", "partial", "none"]
        },
        {
          name: "Unlimited Usage",
          description: "No rate limits or API throttling",
          applaa: "full",
          others: ["partial", "partial", "partial", "partial", "partial"]
        },
        {
          name: "Offline Capability",
          description: "Full functionality without internet connection",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        }
      ]
    },
    {
      category: "🧠 AI Intelligence",
      items: [
        {
          name: "Semantic Code Understanding",
          description: "AI understands code meaning, not just syntax",
          applaa: "full",
          others: ["partial", "partial", "none", "partial", "none"]
        },
        {
          name: "Multi-Project Learning",
          description: "AI learns patterns across all your projects",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Intelligent Context Suggestions",
          description: "AI suggests relevant files before you think of them",
          applaa: "full",
          others: ["partial", "none", "none", "partial", "none"]
        },
        {
          name: "Adaptive Learning System",
          description: "Gets smarter with every interaction",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        }
      ]
    },
    {
      category: "🧪 Quality Assurance",
      items: [
        {
          name: "AI-Powered Testing",
          description: "Automated test generation and execution",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Self-Healing Tests",
          description: "Tests adapt automatically when UI changes",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Accessibility Testing",
          description: "Automated WCAG compliance checking",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Performance Monitoring",
          description: "Real-time performance analysis and optimization",
          applaa: "full",
          others: ["partial", "partial", "none", "none", "none"]
        }
      ]
    },
    {
      category: "📱 Platform Support",
      items: [
        {
          name: "Web Applications",
          description: "React, Vue, Angular, and more",
          applaa: "full",
          others: ["full", "full", "full", "full", "partial"]
        },
        {
          name: "Mobile Development",
          description: "React Native, Flutter, Expo support",
          applaa: "full",
          others: ["none", "none", "none", "partial", "none"]
        },
        {
          name: "Desktop Applications",
          description: "Electron, Tauri, native desktop apps",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Full-Stack Development",
          description: "Frontend, backend, and database integration",
          applaa: "full",
          others: ["partial", "full", "partial", "full", "partial"]
        }
      ]
    },
    {
      category: "💰 Business Model",
      items: [
        {
          name: "Predictable Pricing",
          description: "Fixed monthly cost, no usage-based surprises",
          applaa: "full",
          others: ["partial", "partial", "partial", "partial", "none"]
        },
        {
          name: "No Cloud Infrastructure Costs",
          description: "All processing local - no server expenses",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        },
        {
          name: "Enterprise Licensing",
          description: "Volume discounts and enterprise features",
          applaa: "full",
          others: ["partial", "none", "partial", "full", "none"]
        },
        {
          name: "Lifetime Value",
          description: "One-time purchase option available",
          applaa: "full",
          others: ["none", "none", "none", "none", "none"]
        }
      ]
    }
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "full":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "partial":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "none":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "full":
        return "Full Support";
      case "partial":
        return "Limited";
      case "none":
        return "Not Available";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Why Applaa Leads the AI Development Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive comparison of AI-powered development platforms. 
              See why enterprises choose Applaa for privacy, performance, and production-ready quality.
            </p>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Privacy-First</h3>
            <p className="text-gray-600">100% local AI processing. Your code never leaves your machine.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Sub-100ms AI responses. 10x faster than cloud competitors.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TestTube className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">Built-in AI testing ensures production-ready code quality.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Truly Intelligent</h3>
            <p className="text-gray-600">Semantic understanding and multi-project learning AI.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-80">
                    Feature
                  </th>
                  {competitors.map((competitor, idx) => (
                    <th key={idx} className="px-4 py-4 text-center text-sm font-semibold text-gray-900 min-w-32">
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-2xl">{competitor.logo}</span>
                        <span className={competitor.isApplaa ? "text-blue-600 font-bold" : ""}>{competitor.name}</span>
                        {competitor.website && (
                          <span className="text-xs text-gray-500">{competitor.website}</span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIdx) => (
                  <React.Fragment key={categoryIdx}>
                    <tr className="bg-gray-100">
                      <td colSpan={7} className="px-6 py-3">
                        <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      </td>
                    </tr>
                    {category.items.map((feature, featureIdx) => (
                      <tr key={featureIdx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{feature.name}</div>
                            <div className="text-sm text-gray-500">{feature.description}</div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getIcon(feature.applaa)}
                            <span className="text-xs text-gray-600">{getStatusText(feature.applaa)}</span>
                          </div>
                        </td>
                        {feature.others.map((status, statusIdx) => (
                          <td key={statusIdx} className="px-4 py-4 text-center">
                            <div className="flex flex-col items-center space-y-1">
                              {getIcon(status)}
                              <span className="text-xs text-gray-600">{getStatusText(status)}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              Market Opportunity
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="font-medium">AI Coding Tools Market</span>
                <span className="text-blue-600 font-bold">$12.8B by 2029</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-medium">Enterprise Security Market</span>
                <span className="text-green-600 font-bold">$78.1B by 2029</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <span className="font-medium">Developer Tools Market</span>
                <span className="text-purple-600 font-bold">$37.2B by 2029</span>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$8.2B</div>
                  <div className="text-sm opacity-90">Applaa&apos;s Addressable Market</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-green-600" />
              Competitive Advantages
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Privacy Moat</div>
                  <div className="text-sm text-gray-600">Impossible for cloud competitors to replicate without complete architecture rebuild</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Performance Advantage</div>
                  <div className="text-sm text-gray-600">Physics-based advantage (local &gt; network) that cannot be overcome</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">AI Learning Network</div>
                  <div className="text-sm text-gray-600">Gets better with more users and usage - network effects</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TestTube className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Quality Integration</div>
                  <div className="text-sm text-gray-600">Only platform with built-in AI testing and QA automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Development?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who&apos;ve made the switch to privacy-first, lightning-fast AI development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Enterprise Demo
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            * Comparison data based on publicly available information and internal testing as of January 2025.
            <br />
            Performance metrics may vary based on hardware configuration and network conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
