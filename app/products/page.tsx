"use client"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Grid3X3, List } from "lucide-react"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedFilters, setSelectedFilters] = useState({
    brands: ["Samsung", "Apple", "Huawei", "Poco"],
    features: ["Metallic"],
    condition: "Any",
    priceRange: [0, 1000],
  })
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
          <span>›</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Clothings</span>
          <span>›</span>
          <span className="text-blue-600 hover:underline cursor-pointer">{"Men's wear"}</span>
          <span>›</span>
          <span>Summer clothing</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="col-span-3">
            <ProductFilters selectedFilters={selectedFilters} onFiltersChange={setSelectedFilters} />
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {/* Header with results count and view toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h1 className="text-lg font-medium">12,911 items in Mobile accessory</h1>
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                  />
                  <span className="text-sm">Verified only</span>
                </label>

                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>

                <div className="flex border border-gray-300 rounded">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter Tags */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Samsung
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Apple
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Poco
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                Metallic
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                4 star
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                3 star
                <button className="ml-2 text-blue-600">×</button>
              </span>
              <button className="text-blue-600 text-sm hover:underline">Clear all filter</button>
            </div>

            {/* Products Display */}
            {viewMode === "grid" ? <ProductGrid /> : <ProductList />}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Show</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  ‹
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  ›
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-100 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe on our newsletter</h2>
          <p className="text-gray-600 mb-8">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="max-w-md mx-auto flex gap-0">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
