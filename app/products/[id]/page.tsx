import Image from "next/image"
import { Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import AddToCartButton from "@/components/add-to-cart-button"
import RelatedProducts from "@/components/related-products"

// Mock data for a single product
const mockProduct = {
  id: "1",
  name: "Organic Tomatoes",
  description:
    "Our organic tomatoes are grown without synthetic pesticides or fertilizers, resulting in a more natural and flavorful product. These juicy, vine-ripened tomatoes are perfect for salads, sandwiches, or cooking. They're harvested at peak ripeness to ensure the best taste and nutritional value.",
  price: 2.99,
  unit: "kg",
  image: "https://images.unsplash.com/photo-1723477006768-8db3b27440b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  farmer: {
    name: "Green Valley Farm",
    location: "Riverside County",
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Family-owned farm specializing in organic vegetables since 1985.",
  },
  category: "Vegetables",
  method: "Organic",
  inStock: true,
  nutritionalInfo: "Rich in vitamins A and C, potassium, and lycopene.",
  storageInfo: "Store at room temperature away from direct sunlight. Refrigerate after ripening for longer shelf life.",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-green-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={mockProduct.image || "/placeholder.svg"}
            alt={mockProduct.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{mockProduct.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Image
                  src={mockProduct.farmer.image || "/placeholder.svg"}
                  alt={mockProduct.farmer.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <span className="text-sm text-muted-foreground">by {mockProduct.farmer.name}</span>
              </div>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{mockProduct.method}</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold mb-1">
              ${mockProduct.price.toFixed(2)}{" "}
              <span className="text-sm font-normal text-muted-foreground">/ {mockProduct.unit}</span>
            </p>
            <p className="text-sm text-green-600">{mockProduct.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">{mockProduct.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="w-full sm:w-1/3">
              <select className="w-full h-10 px-3 border rounded-md">
                <option>1 {mockProduct.unit}</option>
                <option>2 {mockProduct.unit}</option>
                <option>3 {mockProduct.unit}</option>
                <option>4 {mockProduct.unit}</option>
                <option>5 {mockProduct.unit}</option>
              </select>
            </div>
            <div className="w-full sm:w-2/3">
              <AddToCartButton productId={params.id} />
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-start">
              <Truck className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Delivered to your doorstep within 24-48 hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">Not satisfied? Get a full refund within 7 days</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-6 pt-6">
            <h2 className="font-semibold mb-2">About the Farmer</h2>
            <div className="flex items-start">
              <Image
                src={mockProduct.farmer.image || "/placeholder.svg"}
                alt={mockProduct.farmer.name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{mockProduct.farmer.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{mockProduct.farmer.location}</p>
                <p className="text-sm text-muted-foreground">{mockProduct.farmer.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Nutritional Information</h3>
              <p className="text-sm text-muted-foreground">{mockProduct.nutritionalInfo}</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Storage Instructions</h3>
              <p className="text-sm text-muted-foreground">{mockProduct.storageInfo}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <RelatedProducts currentProductId={params.id} />
        </div>
      </div>
    </div>
  )
}
