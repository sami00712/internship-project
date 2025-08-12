import { TopNavbar } from "@/components/top-navbar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <Header />
      <ProductDetail productId={params.id} />
      <Footer />
    </div>
  )
}
