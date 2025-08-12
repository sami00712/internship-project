"use client"

import { useState } from "react"
import { Heart, Check, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImage, setSelectedImage] = useState(0)

  const productImages = [
    "/image/dt3.png?height=400&width=400",
    "/image/dt3.png?height=400&width=400",
    "/image/dt3.png?height=400&width=400",
    "/image/dt3.png?height=400&width=400",
    "/image/dt3.png?height=400&width=400",
    "/image/dt3.png?height=400&width=400",
  ]

  const relatedProducts = [
    { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/1.jpg?height=120&width=120" },
    { id: 2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/tech/2.jpg?height=120&width=120" },
    { id: 3, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/tech/6.jpg?height=120&width=120" },
    { id: 4, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/6.jpg?height=120&width=120" },
    { id: 5, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/interior/6.jpg?height=120&width=120" },
    { id: 6, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/image/interior/9.jpg?height=120&width=120" },
  ]

  const youMayLike = [
    { name: "Men Blazers Sets Elegant Formal", price: "$700 - $99.50", image: "/image/1.jpg?height=80&width=80" },
    { name: "Men Shirt Sleeve Polo Contrast", price: "$700 - $99.50", image: "/image/2.jpg?height=80&width=80" },
    { name: "Apple Watch Series Space Gray", price: "$700 - $99.50", image: "/image/3.jpg?height=80&width=80" },
    { name: "Basketball Crew Socks Long Stuff", price: "$700 - $99.50", image: "/image/4.jpg?height=80&width=80" },
    { name: "New Summer Men's castrol T-Shirts", price: "$700 - $99.50", image: "/image/5.jpg?height=80&width=80" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-6">
        <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
        <span>›</span>
        <span className="text-blue-600 hover:underline cursor-pointer">Clothings</span>
        <span>›</span>
        <span className="text-blue-600 hover:underline cursor-pointer">{"Men's wear"}</span>
        <span>›</span>
        <span>Summer clothing</span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Product Images */}
        <div className="col-span-4">
          <div className="mb-4">
            <img
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt="Product"
              className="w-full h-96 object-contain border border-gray-200 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg p-1 ${selectedImage === index ? "border-blue-500" : "border-gray-200"}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-16 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-5">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium">In stock</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-orange-400 text-sm">
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-600 ml-2">9.3</span>
              </div>
              <span className="text-sm text-gray-500">32 reviews</span>
              <span className="text-sm text-gray-500">154 sold</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">$98.00</div>
                <div className="text-xs text-gray-500">50-100 pcs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$90.00</div>
                <div className="text-xs text-gray-500">100-200 pcs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$78.00</div>
                <div className="text-xs text-gray-500">200+ pcs</div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-3 mb-6">
              <div className="flex">
                <span className="text-gray-500 w-32">Price:</span>
                <span className="text-gray-900">Negotiable</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Type:</span>
                <span className="text-gray-900">Classic shoes</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Material:</span>
                <span className="text-gray-900">Plastic material</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Design:</span>
                <span className="text-gray-900">Modern nice</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Customization:</span>
                <span className="text-gray-900">Customized logo and design custom packages</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Protection:</span>
                <span className="text-gray-900">Refund Policy</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Warranty:</span>
                <span className="text-gray-900">2 years full warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-3">
          {/* Supplier Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                R
              </div>
              <div>
                <div className="text-sm text-gray-600">Supplier</div>
                <div className="font-medium">Guanjoi Trading LLC</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 bg-black"></div>
                <div className="w-4 h-3 bg-red-600"></div>
                <div className="w-4 h-3 bg-yellow-400"></div>
                <span className="text-gray-600">Germany, Berlin</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">Verified Seller</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Worldwide shipping</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Send inquiry</Button>
            <Button variant="outline" className="w-full py-3 bg-transparent">
              {"Seller's profile"}
            </Button>
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700">
              <Heart className="h-4 w-4 mr-2" />
              Save for later
            </Button>
          </div>

          {/* You may like */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">You may like</h3>
            <div className="space-y-4">
              {youMayLike.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-contain" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {["Description", "Reviews", "Shipping", "About seller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.toLowerCase().replace(" ", "")
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Model</span>
                        <span className="text-gray-900">#9786867</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style</span>
                        <span className="text-gray-900">Classic style</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certificate</span>
                        <span className="text-gray-900">ISO-898921212</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size</span>
                        <span className="text-gray-900">34mm x 450mm x 19mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Memory</span>
                        <span className="text-gray-900">36GB RAM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Some great feature name here</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Duis aute irure dolor in reprehenderit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Some great feature name here</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Related products</h2>
        <div className="grid grid-cols-6 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-24 object-contain mb-3"
              />
              <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Super discount on more than 100 USD</h3>
            <p className="text-blue-100">Have you ever finally just write dummy info</p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Shop now</Button>
        </div>
      </div>

    </div>
  )
}
