import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Zap, Clock, FileText, ArrowRight, Youtube } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-lg">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">SummarizeYT</span>
            </div>
            <Link href="/summarize">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Summarize Any
              <span className="text-red-500 block">YouTube Video</span>
              in Seconds
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Transform lengthy YouTube videos into concise, actionable summaries. Save time and get the key insights
              instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/summarize">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Summarizing
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose SummarizeYT?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Experience the fastest and most accurate YouTube video summarization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Lightning Fast</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Get comprehensive summaries in under 30 seconds. Our AI processes videos at incredible speed without
                  compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Smart Summaries</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Advanced AI extracts key points, main topics, and actionable insights while maintaining context and
                  meaning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Save Time</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Turn hours of video content into minutes of reading. Perfect for research, learning, and staying
                  informed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who save hours every week with intelligent video summaries
          </p>
          <Link href="/summarize">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Summarize Your First Video
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-lg">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">SummarizeYT</span>
          </div>
          <p className="text-slate-400">© 2024 SummarizeYT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
