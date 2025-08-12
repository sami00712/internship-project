import { Heart } from "lucide-react"
import Link from "next/link"

export function ProductGrid() {
  const products = [
    {
      id: 1,
      image: "/image/tech/1.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 2,
      image: "/image/tech/2.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 3,
      image: "/image/tech/3.jpg?height=200&width=200",
      price: "$99.50",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 4,
      image: "/image/tech/4.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 5,
      image: "/image/tech/5.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 6,
      image: "/image/tech/6.jpg?height=200&width=200",
      price: "$99.50",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 7,
      image: "/image/tech/7.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 8,
      image: "/image/tech/8.jpg?height=200&width=200",
      price: "$99.50",
      originalPrice: "$128.00",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 9,
      image: "/image/tech/9.jpg?height=200&width=200",
      price: "$99.50",
      rating: 7.5,
      name: "GoPro HERO6 4K Action Camera - Black",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="relative mb-4">
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-contain cursor-pointer"
              />
            </Link>
            <button className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">{product.price}</span>
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
            </div>

            <p className="text-sm text-gray-700">{product.name}</p>

            <Link href={`/product/${product.id}`}>
              <button className="text-blue-600 text-sm hover:underline mt-2">View details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
