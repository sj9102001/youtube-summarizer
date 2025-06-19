"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Youtube, ArrowLeft, Send, Loader2, CheckCircle, Clock, FileText, Lightbulb, Target } from "lucide-react"

interface SummaryData {
  title: string
  duration: string
  keyPoints: string[]
  mainTopics: string[]
  actionableInsights: string[]
  summary: string
}

export default function SummarizePage() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState<SummaryData | null>(null)
  const [error, setError] = useState("")

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    return youtubeRegex.test(url)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url.trim()) {
      setError("Please enter a YouTube URL")
      return
    }

    if (!isValidYouTubeUrl(url)) {
      setError("Please enter a valid YouTube URL")
      return
    }

    setError("")
    setIsLoading(true)
    setSummary(null)

    // Simulate API call with realistic delay
    setTimeout(() => {
      // Mock summary data
      const mockSummary: SummaryData = {
        title: "How to Build Amazing React Applications",
        duration: "15:42",
        keyPoints: [
          "Component-based architecture is fundamental to React development",
          "State management becomes crucial as applications scale",
          "Performance optimization through proper rendering techniques",
          "Testing strategies ensure code reliability and maintainability",
          "Modern tooling accelerates development workflow",
        ],
        mainTopics: [
          "React Fundamentals",
          "State Management",
          "Performance Optimization",
          "Testing Strategies",
          "Development Tools",
        ],
        actionableInsights: [
          "Start with functional components and hooks for new projects",
          "Implement proper error boundaries to handle component failures",
          "Use React DevTools for debugging and performance monitoring",
          "Consider using TypeScript for better code quality and developer experience",
        ],
        summary:
          "This comprehensive tutorial covers essential React development concepts, from basic component creation to advanced optimization techniques. The presenter demonstrates practical examples of state management, performance optimization, and testing strategies that are crucial for building scalable applications. Key emphasis is placed on modern React patterns, including hooks and functional components, while also covering important topics like error handling and debugging tools.",
      }

      setSummary(mockSummary)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-lg">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">SummarizeYT</span>
              </div>
            </Link>
            <Badge variant="secondary" className="hidden sm:flex">
              AI-Powered Summarization
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Input Section */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              YouTube Video Summarizer
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Paste any YouTube URL below to get an instant AI-powered summary
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 text-lg"
                    disabled={isLoading}
                  />
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-red-500 hover:bg-red-600 text-white h-12 px-8"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Summarize
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <Card className="mb-8 shadow-lg border-0">
            <CardContent className="py-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-red-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-20 h-20 border-4 border-red-500 rounded-full animate-spin border-t-transparent"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Processing Your Video</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg">
                    Please wait while our AI analyzes the content...
                  </p>
                </div>
                <div className="flex justify-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Extracting audio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                    <span>Analyzing content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                    <span>Generating summary</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {summary && (
          <div className="space-y-6">
            {/* Success Message */}
            <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 shadow-lg">
              <CardContent className="py-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200">
                      Summary Generated Successfully!
                    </h3>
                    <p className="text-green-600 dark:text-green-300 text-sm">
                      Your video has been analyzed and summarized.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{summary.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{summary.duration}</span>
                      </div>
                      <Badge variant="outline">AI Summarized</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Main Summary */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900 dark:text-white">
                  <FileText className="w-5 h-5" />
                  <span>Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{summary.summary}</p>
              </CardContent>
            </Card>

            {/* Key Points */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900 dark:text-white">
                  <Target className="w-5 h-5" />
                  <span>Key Points</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {summary.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Topics and Insights */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Main Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {summary.mainTopics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-900 dark:text-white">
                    <Lightbulb className="w-5 h-5" />
                    <span>Actionable Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {summary.actionableInsights.map((insight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <Card className="shadow-lg border-0">
              <CardContent className="py-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setUrl("")
                      setSummary(null)
                      setError("")
                    }}
                    variant="outline"
                    size="lg"
                    className="px-8"
                  >
                    Summarize Another Video
                  </Button>
                  <Button
                    onClick={() => {
                      const summaryText = `${summary.title}\n\nSummary:\n${summary.summary}\n\nKey Points:\n${summary.keyPoints.map((point, i) => `${i + 1}. ${point}`).join("\n")}`
                      navigator.clipboard.writeText(summaryText)
                    }}
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-8"
                  >
                    Copy Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
