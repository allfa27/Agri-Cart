import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

// Mock data for farmers
const mockFarmers = [
  {
    id: "1",
    name: "Green Valley Farm",
    description:
      "Family-owned farm specializing in organic vegetables since 1985. We use sustainable farming practices and take pride in delivering the freshest produce to our customers.",
    location: "Riverside County, CA",
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewCount: 124,
    specialties: ["Vegetables", "Herbs"],
    farmingMethod: "Organic",
  },
  {
    id: "2",
    name: "Sunrise Poultry",
    description:
      "Free-range poultry farm focused on ethical animal husbandry. Our chickens roam freely and are fed a natural diet without antibiotics or hormones.",
    location: "Sonoma County, CA",
    image: "https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviewCount: 98,
    specialties: ["Eggs", "Poultry"],
    farmingMethod: "Free-range",
  },
  {
    id: "3",
    name: "Riverside Organics",
    description:
      "Certified organic farm growing a variety of leafy greens and root vegetables. We use companion planting and natural pest management techniques.",
    location: "Sacramento Valley, CA",
    image: "https://images.unsplash.com/photo-1517817500400-c961b0488325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 156,
    specialties: ["Leafy Greens", "Root Vegetables"],
    farmingMethod: "Organic",
  },
  {
    id: "4",
    name: "Golden Fields Farm",
    description:
      "Specializing in corn, grains, and seasonal vegetables. Our farm has been in the family for three generations, and we're committed to sustainable agriculture.",
    location: "Central Valley, CA",
    image: "https://images.unsplash.com/photo-1716563024834-4c2a68097d01?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviewCount: 87,
    specialties: ["Corn", "Grains"],
    farmingMethod: "Conventional",
  },
  {
    id: "5",
    name: "Orchard Hills",
    description:
      "Fruit orchard growing a variety of apples, pears, and stone fruits. We practice integrated pest management to minimize chemical use.",
    location: "Napa Valley, CA",
    image: "https://plus.unsplash.com/premium_photo-1661962384103-15d0afa34d0a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewCount: 112,
    specialties: ["Apples", "Stone Fruits"],
    farmingMethod: "Low-spray",
  },
  {
    id: "6",
    name: "Meadow Dairy",
    description:
      "Small-scale dairy farm producing milk, cheese, and yogurt. Our cows graze on open pastures and are treated with the utmost care and respect.",
    location: "Humboldt County, CA",
    image: "https://images.unsplash.com/photo-1641939193329-7071068dc40f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 143,
    specialties: ["Dairy", "Cheese"],
    farmingMethod: "Pasture-raised",
  },
]

export default function FarmersPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet Our Farmers</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Get to know the dedicated farmers who grow your food with care and sustainable practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockFarmers.map((farmer) => (
          <Card key={farmer.id} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={farmer.image || "/placeholder.svg"} alt={farmer.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{farmer.name}</h2>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">
                    {farmer.rating} ({farmer.reviewCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {farmer.location}
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-3">{farmer.description}</p>

              <div className="mb-4">
                <span className="text-sm font-medium">Specialties: </span>
                <span className="text-sm text-muted-foreground">{farmer.specialties.join(", ")}</span>
              </div>

              <div className="mb-6">
                <span className="text-sm font-medium">Farming Method: </span>
                <span className="text-sm text-muted-foreground">{farmer.farmingMethod}</span>
              </div>

              <div className="flex justify-between">
                <Link href={`/farmers/${farmer.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
                <Link href={`/products?farmer=${farmer.id}`}>
                  <Button className="bg-green-600 hover:bg-green-700">Shop Products</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Want to Join Our Community of Farmers?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          If you're a farmer looking to connect directly with customers and grow your business, we'd love to have you
          join our platform.
        </p>
        <Link href="/farmers/register">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Apply to Sell on Agri Cart
          </Button>
        </Link>
      </div>
    </div>
  )
} 