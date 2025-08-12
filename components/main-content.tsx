import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"

export function MainContent() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar - Categories */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer ${
                  index !== categories.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="col-span-7">
          <div className="relative bg-gradient-to-r from-teal-200 to-teal-100 rounded-lg overflow-hidden h-80">
            <div className="absolute inset-0 flex items-center">
              <div className="pl-8">
                <h2 className="text-2xl font-normal text-gray-800 mb-2">Latest trending</h2>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Electronic items</h1>
                <Button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded">Learn more</Button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <Image
                  src="/image/banner.png?height=320&width=400"
                  alt="Electronic items"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 space-y-4">
          {/* User Welcome Card */}
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10 bg-blue-200">
                <div className="w-full h-full bg-blue-300 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 text-sm">👤</span>
                </div>
              </Avatar>
              <div>
                <p className="text-sm text-gray-800">Hi, user</p>
                <p className="text-sm text-gray-600">{"let's get stated"}</p>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">Join now</Button>
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              Log in
            </Button>
          </Card>

          {/* Promotional Cards */}
          <Card className="p-4 bg-orange-500 text-white">
            <h3 className="font-semibold mb-1">Get US $10 off</h3>
            <p className="text-sm opacity-90">with a new supplier</p>
          </Card>

          <Card className="p-4 bg-teal-400 text-white">
            <h3 className="font-semibold mb-1">Send quotes with</h3>
            <p className="text-sm opacity-90">supplier preferences</p>
          </Card>
        </div>
      </div>

      {/* Deals and Offers Section */}
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-4">
          {/* Deals Timer Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Deals and offers</h3>
            <p className="text-sm text-gray-500 mb-6">Hygiene equipments</p>

            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-700 text-white text-center py-2 px-1 rounded">
                <div className="text-lg font-bold">04</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-gray-700 text-white text-center py-2 px-1 rounded">
                <div className="text-lg font-bold">13</div>
                <div className="text-xs">Hour</div>
              </div>
              <div className="bg-gray-700 text-white text-center py-2 px-1 rounded">
                <div className="text-lg font-bold">34</div>
                <div className="text-xs">Min</div>
              </div>
              <div className="bg-gray-700 text-white text-center py-2 px-1 rounded">
                <div className="text-lg font-bold">56</div>
                <div className="text-xs">Sec</div>
              </div>
            </div>
          </div>

          {/* Product Deals */}
          <div className="col-span-5 grid grid-cols-5 gap-4">
            {/* Smart watches */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-3">
                <img
                  src="/image/tech/8.jpg?height=80&width=80"
                  alt="Smart watches"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Smart watches</h4>
              <span className="text-red-500 text-sm font-medium">-25%</span>
            </div>

            {/* Laptops */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-3">
                <img
                  src="/image/tech/7.jpg?height=80&width=80"
                  alt="Laptops"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Laptops</h4>
              <span className="text-red-500 text-sm font-medium">-15%</span>
            </div>

            {/* GoPro cameras */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-3">
                <img
                  src="/image/tech/6.jpg?height=80&width=80"
                  alt="GoPro cameras"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">GoPro cameras</h4>
              <span className="text-red-500 text-sm font-medium">-40%</span>
            </div>

            {/* Headphones */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-3">
                <img
                  src="/image/tech/5.jpg?height=80&width=80"
                  alt="Headphones"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Headphones</h4>
              <span className="text-red-500 text-sm font-medium">-25%</span>
            </div>

            {/* Canon cameras */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-3">
                <img
                  src="/image/tech/3.jpg?height=80&width=80"
                  alt="Canon cameras"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Canon cameras</h4>
              <span className="text-red-500 text-sm font-medium">-25%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Home and Outdoor Section */}
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-4">
          {/* Home and Outdoor Promo Card */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6 relative overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">
              Home and
              <br />
              outdoor
            </h3>
            <Button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded text-sm">Source now</Button>
            {/* <div className="absolute right-0 bottom-0 w-24 h-24">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Home decor"
                className="w-full h-full object-contain"
              />
            </div> */}
          </div>

          {/* Home Products Grid */}
          <div className="col-span-5 grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/1.jpg?height=80&width=80"
                  alt="Soft chairs"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Soft chairs</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/2.jpg?height=80&width=80"
                  alt="Sofa & chair"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Sofa & chair</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/3.jpg?height=80&width=80"
                  alt="Kitchen dishes"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Kitchen dishes</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/4.jpg?height=80&width=80"
                  alt="Smart watches"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Smart watches</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/5.jpg?height=80&width=80"
                  alt="Kitchen mixer"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Kitchen mixer</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 100</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/6.jpg?height=80&width=80"
                  alt="Blenders"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Blenders</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 39</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/7.jpg?height=80&width=80"
                  alt="Home appliance"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Home appliance</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/interior/8.jpg?height=80&width=80"
                  alt="Coffee maker"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Coffee maker</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Consumer Electronics Section */}
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-4">
          {/* Electronics Promo Card */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-6 relative overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">
              Consumer
              <br />
              electronics and
              <br />
              gadgets
            </h3>
            <Button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded text-sm">Source now</Button>
            {/* <div className="absolute right-0 bottom-0 w-24 h-24">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Electronics"
                className="w-full h-full object-contain"
              />
            </div> */}
          </div>

          {/* Electronics Products Grid */}
          <div className="col-span-5 grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/8.jpg?height=80&width=80"
                  alt="Smart watches"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Smart watches</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/6.jpg?height=80&width=80"
                  alt="Cameras"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Cameras</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 89</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/9.jpg?height=80&width=80"
                  alt="Headphones"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Headphones</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 10</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/8.jpg?height=80&width=80"
                  alt="Smart watches"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Smart watches</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 90</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/5.jpg?height=80&width=80"
                  alt="Gaming set"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Gaming set</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 35</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/7.jpg?height=80&width=80"
                  alt="Laptops & PC"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Laptops & PC</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 340</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/1.jpg?height=80&width=80"
                  alt="Smartphones"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Smartphones</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 19</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="mb-3">
                <img
                  src="/image/tech/10.jpg?height=80&width=80"
                  alt="Electric kettle"
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Electric kettle</h4>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-sm font-semibold text-gray-900">USD 240</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-8 p-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">
              An easy way to send
              <br />
              requests to all suppliers
            </h2>
            <p className="text-blue-100 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              <br />
              elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send quote to suppliers</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="What item you need?"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Type more details"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Tons</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Items Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended items</h2>
        <div className="grid grid-cols-5 gap-6">
          {/* Row 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/1.jpg?height=160&width=160" alt="T-shirt" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$10.30</p>
            <p className="text-sm text-gray-600">T-shirts with multiple colors, for men</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/7.jpg?height=160&width=160" alt="Jacket" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$10.30</p>
            <p className="text-sm text-gray-600">Jeans shorts for men blue color</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/3.jpg?height=160&width=160" alt="Suit" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$12.50</p>
            <p className="text-sm text-gray-600">Brown winter coat medium size</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/5.jpg?height=160&width=160" alt="Wallet" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$34.00</p>
            <p className="text-sm text-gray-600">Jeans bag for travel for men</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/6.jpg?height=160&width=160" alt="Backpack" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$99.00</p>
            <p className="text-sm text-gray-600">Leather wallet</p>
          </div>

          {/* Row 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/tech/6.jpg?height=160&width=160" alt="Shorts" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$9.99</p>
            <p className="text-sm text-gray-600">Canon camera black, 100x zoom</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img
                src="/image/tech/5.jpg?height=160&width=160"
                alt="Headphones"
                className="w-full h-40 object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$8.99</p>
            <p className="text-sm text-gray-600">Headset for gaming with mic</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/tech/8.jpg?height=160&width=160" alt="Backpack" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$10.30</p>
            <p className="text-sm text-gray-600">Smartwatch silver color modern</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/6.jpg?height=160&width=160" alt="Pot" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$10.30</p>
            <p className="text-sm text-gray-600">Blue wallet for men leather metarial</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <img src="/image/5.jpg?height=160&width=160" alt="Kettle" className="w-full h-40 object-contain" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">$80.95</p>
            <p className="text-sm text-gray-600">Jeans bag for travel for men</p>
          </div>
        </div>
      </div>

      {/* Our Extra Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our extra services</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="relative rounded-lg overflow-hidden h-48">
            <img
              src="/image/new1.png?height=192&width=300"
              alt="Industry Hubs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Source from
                  <br />
                  Industry Hubs
                </h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-48">
            <img
              src="/image/new2.png?height=192&width=300"
              alt="Customize Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Customize Your
                  <br />
                  Products
                </h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-48">
            <img
              src="/image/new3.png?height=192&width=300"
              alt="Fast Shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Fast, reliable shipping
                  <br />
                  by ocean or air
                </h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-48">
            <img
              src="/image/new4.png?height=192&width=300"
              alt="Product Monitoring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold">
                  Product monitoring
                  <br />
                  and inspection
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suppliers by Region Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Suppliers by region</h2>
        <div className="grid grid-cols-5 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden flex">
              <div className="w-full h-2 bg-green-600"></div>
              <div className="w-full h-2 bg-white"></div>
              <div className="w-full h-2 bg-red-600"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Arabic Emirates</p>
              <p className="text-sm text-gray-500">shopname.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 bg-blue-800 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-3 bg-blue-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-0 right-0 w-4 h-6 bg-blue-800"></div>
              <div className="absolute bottom-0 left-0 w-8 h-3 bg-blue-800"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Australia</p>
              <p className="text-sm text-gray-500">shopname.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden">
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">United States</p>
              <p className="text-sm text-gray-500">shopname.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden">
              <div className="h-2 bg-white"></div>
              <div className="h-2 bg-blue-600"></div>
              <div className="h-2 bg-red-600"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Russia</p>
              <p className="text-sm text-gray-500">shopname.ru</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <div className="h-2 bg-white"></div>
              <div className="h-2 bg-red-600"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Italy</p>
              <p className="text-sm text-gray-500">shopname.it</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 bg-red-600 rounded-sm relative">
              <div className="absolute top-1 left-1 w-6 h-4 bg-white flex items-center justify-center">
                <div className="w-4 h-3 bg-red-600"></div>
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Denmark</p>
              <p className="text-sm text-gray-500">denmark.com.dk</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <div className="h-2 bg-white"></div>
              <div className="h-2 bg-red-600"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">France</p>
              <p className="text-sm text-gray-500">shopname.com.fr</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden flex">
              <div className="w-full h-2 bg-green-600"></div>
              <div className="w-full h-2 bg-white"></div>
              <div className="w-full h-2 bg-red-600"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Arabic Emirates</p>
              <p className="text-sm text-gray-500">shopname.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 bg-red-600 rounded-sm relative">
              <div className="absolute top-0 left-0 w-3 h-6 bg-red-600"></div>
              <div className="absolute top-0 right-0 w-5 h-6 bg-yellow-400"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">China</p>
              <p className="text-sm text-gray-500">shopname.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-6 bg-blue-800 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-3 bg-blue-900"></div>
              <div className="absolute top-0 right-0 w-4 h-6 bg-blue-800"></div>
              <div className="absolute bottom-0 left-0 w-8 h-3 bg-blue-800"></div>
              <div className="absolute top-1 left-1 w-2 h-1 bg-white"></div>
              <div className="absolute top-2 left-2 w-1 h-1 bg-white"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Great Britain</p>
              <p className="text-sm text-gray-500">shopname.co.uk</p>
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
  )
}
