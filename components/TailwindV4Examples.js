"use client";

import { useState } from "react";

export default function TailwindV4Examples() {
  const [activeTab, setActiveTab] = useState("colors");

  return (
    <div className="mx-auto max-w-4xl p-8 dark:bg-red-500">
      <h1 className="text-primary-600 dark:text-primary-400 mb-8 text-center text-3xl font-bold">
        Tailwind CSS v4 Features Demo
      </h1>

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
        {["colors", "spacing", "typography", "components"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 font-medium capitalize transition-all ${
              activeTab === tab
                ? "bg-primary-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* Colors Tab */}
        {activeTab === "colors" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold">
              Custom Colors & CSS Variables
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium">
                  Primary Color Palette
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-50 h-8 w-8 rounded border border-gray-300"></div>
                    <span className="font-mono text-sm">primary-50</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 h-8 w-8 rounded border border-gray-300"></div>
                    <span className="font-mono text-sm">primary-100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-500 h-8 w-8 rounded"></div>
                    <span className="font-mono text-sm">primary-500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-600 h-8 w-8 rounded"></div>
                    <span className="font-mono text-sm">primary-600</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-900 h-8 w-8 rounded"></div>
                    <span className="font-mono text-sm">primary-900</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Theme Colors</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-background h-8 w-8 rounded border border-gray-300"></div>
                    <span className="font-mono text-sm">
                      background (CSS var)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-foreground h-8 w-8 rounded"></div>
                    <span className="font-mono text-sm">
                      foreground (CSS var)
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  These colors automatically switch based on your system theme!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Spacing Tab */}
        {activeTab === "spacing" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold">
              Custom Spacing Scale
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-3 text-lg font-medium">
                  Custom Spacing Values
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-200 h-6 w-18 rounded"></div>
                    <span className="font-mono text-sm">
                      w-18 (4.5rem - custom)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-300 h-6 w-72 rounded"></div>
                    <span className="font-mono text-sm">
                      w-72 (18rem - custom)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Grid Examples</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-lg bg-gradient-to-br p-4 text-center"
                    >
                      Grid {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === "typography" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Typography System</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-medium">Font Sizes</h3>
                <div className="space-y-2">
                  <p className="text-xs">Extra Small (xs) - 0.75rem</p>
                  <p className="text-sm">Small (sm) - 0.875rem</p>
                  <p className="text-base">Base - 1rem</p>
                  <p className="text-lg">Large (lg) - 1.125rem</p>
                  <p className="text-xl">Extra Large (xl) - 1.25rem</p>
                  <p className="text-2xl">2X Large (2xl) - 1.5rem</p>
                  <p className="text-3xl">3X Large (3xl) - 1.875rem</p>
                  <p className="text-4xl">4X Large (4xl) - 2.25rem</p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Font Families</h3>
                <p className="mb-2 font-sans">
                  This is the default sans-serif font (Geist Sans)
                </p>
                <p className="font-mono">
                  This is the monospace font (Geist Mono)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === "components" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Component Examples</h2>

            <div className="space-y-8">
              {/* Form Components */}
              <div>
                <h3 className="mb-4 text-lg font-medium">Form Elements</h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <input
                      type="text"
                      placeholder="Text input"
                      className="focus:ring-primary-500 flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-transparent focus:ring-2 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <select className="focus:ring-primary-500 rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 dark:border-gray-600 dark:bg-gray-700">
                      <option>Select option</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Textarea"
                    rows={3}
                    className="focus:ring-primary-500 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-transparent focus:ring-2 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="mb-4 text-lg font-medium">Card Components</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 dark:border-blue-700 dark:from-blue-900 dark:to-indigo-900">
                    <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                      Gradient Card
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">
                      Beautiful gradient backgrounds work seamlessly with dark
                      mode.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                    <h4 className="mb-2 font-semibold">Interactive Card</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hover me to see the shadow effect!
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-medium">Button Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 font-medium text-white transition-colors">
                    Primary
                  </button>
                  <button className="border-primary-500 text-primary-500 hover:bg-primary-500 rounded-md border px-4 py-2 font-medium transition-all hover:text-white">
                    Outline
                  </button>
                  <button className="rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                    Secondary
                  </button>
                  <button className="text-primary-500 hover:text-primary-600 rounded-md px-4 py-2 font-medium transition-colors">
                    Ghost
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
