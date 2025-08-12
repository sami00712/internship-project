import { Heart } from "lucide-react"
import Link from "next/link"

export function ProductList() {
  const products = [
    {
      id: 1,
      image: "/image/tech/1.jpg?height=120&width=120",
      name: "Canon Cmera EOS 2000, Black 10x zoom",
      price: "$998.00",
      originalPrice: "$1128.00",
      rating: 7.5,
      orders: 154,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      image: "/image/tech/2.jpg?height=120&width=120",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$998.00",
      rating: 7.5,
      orders: 154,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
    {
      id: 3,
      image: "/image/tech/3.jpg?height=120&width=120",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$998.00",
      rating: 7.5,
      orders: 154,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
    {
      id: 4,
      image: "/image/tech/4.jpg?height=120&width=120",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$998.00",
      rating: 7.5,
      orders: 154,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
    {
      id: 5,
      image: "/image/tech/5.jpg?height=120&width=120",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$998.00",
      originalPrice: "$1128.00",
      rating: 7.5,
      orders: 154,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
    {
      id: 6,
      image: "/image/tech/6.jpg?height=120&width=120",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$998.00",
      rating: 7.5,
      orders: 154,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ]

  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-32 h-32 object-contain" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-semibold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="text-orange-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                  <span className="text-sm text-gray-500">• {product.orders} orders</span>
                  <span className="text-sm text-green-600 font-medium">Free Shipping</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

              <Link href={`/product/${product.id}`}>
                <button className="text-blue-600 text-sm hover:underline">View details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
