"use client"

import { useState } from "react"
import { ArrowLeft, Shield, MessageCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function CartContent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      quantity: 9,
      image: "/image/1.jpg?height=80&width=80",
    },
    {
      id: 2,
      name: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: 39.0,
      quantity: 3,
      image: "/image/5.jpg?height=80&width=80",
    },
    {
      id: 3,
      name: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      quantity: 1,
      image: "/image/interior/6.jpg?height=80&width=80",
    },
  ])

  const [couponCode, setCouponCode] = useState("")

  const savedItems = [
    {
      id: 1,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/image/tech/2.jpg?height=120&width=120",
    },
    {
      id: 2,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/image/tech/6.jpg?height=120&width=120",
    },
    {
      id: 3,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/image/tech/7.jpg?height=120&width=120",
    },
    {
      id: 4,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/image/tech/8.jpg?height=120&width=120",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 60.0
  const tax = 14.0
  const total = subtotal - discount + tax

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const removeAllItems = () => {
    setCartItems([])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="col-span-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">My cart ({cartItems.length})</h1>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-contain flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        Size: {item.size}, Color: {item.color}, Material: {item.material}
                      </p>
                      <p>Seller: {item.seller}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <button className="text-red-500 text-sm hover:underline" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                      <button className="text-blue-600 text-sm hover:underline">Save for later</button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 mb-2">${item.price.toFixed(2)}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Qty:</span>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Link href="/products">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to shop
              </Button>
            </Link>
            <Button variant="ghost" className="text-blue-600" onClick={removeAllItems}>
              Remove all
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Secure payment</div>
                <div className="text-sm text-gray-600">Have you ever finally just</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Customer support</div>
                <div className="text-sm text-gray-600">Have you ever finally just</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Free delivery</div>
                <div className="text-sm text-gray-600">Have you ever finally just</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-span-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
            {/* Coupon Section */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Have a coupon?</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Add coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" className="text-blue-600 bg-transparent">
                  Apply
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount:</span>
                <span className="font-medium text-red-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium text-green-600">+${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 mb-4">Checkout</Button>

            {/* Payment Methods */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                VISA
              </div>
              <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center">PP</div>
              <div className="w-8 h-5 bg-gray-800 rounded text-white text-xs flex items-center justify-center">AP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved for Later */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Saved for later</h2>
        <div className="grid grid-cols-4 gap-6">
          {savedItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-32 object-contain mb-4" />
              <div className="text-lg font-semibold text-gray-900 mb-2">${item.price.toFixed(2)}</div>
              <p className="text-sm text-gray-600 mb-4">{item.name}</p>
              <Button variant="outline" className="w-full text-blue-600 border-blue-600 bg-transparent">
                🛒 Move to cart
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
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
