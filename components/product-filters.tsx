"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  selectedFilters: any
  onFiltersChange: (filters: any) => void
}

export function ProductFilters({ selectedFilters, onFiltersChange }: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: false,
    condition: false,
    ratings: false,
    manufacturer: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Category
          {expandedSections.category ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            <div className="text-sm text-gray-700 py-1">Mobile accessory</div>
            <div className="text-sm text-gray-700 py-1">Electronics</div>
            <div className="text-sm text-gray-700 py-1">Smartphones</div>
            <div className="text-sm text-gray-700 py-1">Modern tech</div>
            <button className="text-blue-600 text-sm hover:underline">See all</button>
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Brands
          {expandedSections.brands ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.brands && (
          <div className="space-y-2">
            {["Samsung", "Apple", "Huawei", "Poco", "Lenovo"].map((brand) => (
              <label key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.brands.includes(brand)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
            <button className="text-blue-600 text-sm hover:underline">See all</button>
          </div>
        )}
      </div>

      {/* Features */}
      <div>
        <button
          onClick={() => toggleSection("features")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Features
          {expandedSections.features ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.features && (
          <div className="space-y-2">
            {["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((feature) => (
              <label key={feature} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.features.includes(feature)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">{feature}</span>
              </label>
            ))}
            <button className="text-blue-600 text-sm hover:underline">See all</button>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection("priceRange")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Price range
          {expandedSections.priceRange ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.priceRange && (
          <div className="space-y-4">
            <div className="px-3 py-2 bg-blue-100 rounded">
              <div className="h-2 bg-blue-600 rounded w-1/3"></div>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Min"
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Max"
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply</Button>
          </div>
        )}
      </div>

      {/* Condition */}
      <div>
        <button
          onClick={() => toggleSection("condition")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Condition
          {expandedSections.condition ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.condition && (
          <div className="space-y-2">
            {["Any", "Refurbished", "Brand new", "Old items"].map((condition) => (
              <label key={condition} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="condition"
                  checked={selectedFilters.condition === condition}
                  className="text-blue-600"
                />
                <span className="text-sm text-gray-700">{condition}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Ratings */}
      <div>
        <button
          onClick={() => toggleSection("ratings")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Ratings
          {expandedSections.ratings ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.ratings && (
          <div className="space-y-2">
            {[5, 4, 3, 2].map((stars) => (
              <label key={stars} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`text-sm ${i < stars ? "text-orange-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Manufacturer */}
      <div>
        <button
          onClick={() => toggleSection("manufacturer")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Manufacturer
          {expandedSections.manufacturer ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}
