 import { User, MessageCircle, Package, ShoppingCart, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Top Row: Brand Logo, Search Bar, and User Actions */}
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <Package className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-blue-500">Brand</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl flex">
            <Input
              placeholder="Search"
              className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button variant="outline" className="rounded-none border-l-0 border-r-0 px-4 bg-white">
              <span className="text-sm text-gray-700">All category</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 px-6">Search</Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs mt-1">Message</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <Package className="h-5 w-5" />
              <span className="text-xs mt-1">Orders</span>
            </div>
            <Link href="/cart">
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs mt-1">My cart</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Row: All Category and Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700">
                <Menu className="h-4 w-4" />
                All category
              </Button>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
                Hot offers
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
                Gift boxes
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
                Menu item
              </a>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-700">
                Help
                <ChevronDown className="h-3 w-3" />
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-700">
              English, USD
              <ChevronDown className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700">
              Ship to
              <div className="w-5 h-3 bg-black"></div>
              <div className="w-5 h-3 bg-red-600"></div>
              <div className="w-5 h-3 bg-yellow-400"></div>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
