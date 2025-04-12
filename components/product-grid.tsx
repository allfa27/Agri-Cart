"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Heart } from "lucide-react"

// Mock data for products
const mockProducts = [
  {
    id: "1",
    name: "Organic Tomatoes",
    description: "Fresh, juicy tomatoes grown without pesticides",
    price: 2.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1723477006768-8db3b27440b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D",
    farmer: "Green Valley Farm",
    category: "Vegetables",
    method: "Organic",
  },
  {
    id: "2",
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from happy chickens",
    price: 4.5,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1559229873-383d75ba200f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Sunrise Poultry",
    category: "Eggs",
    method: "Conventional",
  },
  {
    id: "3",
    name: "Organic Spinach",
    description: "Nutrient-rich leafy greens",
    price: 3.25,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1718105314487-aabc56d0b2fc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Riverside Organics",
    category: "Vegetables",
    method: "Organic",
  },
  {
    id: "4",
    name: "Sweet Corn",
    description: "Hand-picked sweet corn, perfect for grilling",
    price: 0.75,
    unit: "ear",
    image: "https://images.unsplash.com/photo-1565679867504-657ff4bfdd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Golden Fields Farm",
    category: "Vegetables",
    method: "Conventional",
  },
  {
    id: "5",
    name: "Organic Apples",
    description: "Crisp and sweet apples, perfect for snacking",
    price: 3.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Orchard Hills",
    category: "Fruits",
    method: "Organic",
  },
  {
    id: "6",
    name: "Fresh Milk",
    description: "Creamy whole milk from grass-fed cows",
    price: 2.5,
    unit: "liter",
    image: "https://plus.unsplash.com/premium_photo-1694481099872-29a6ece2672c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Meadow Dairy",
    category: "Dairy",
    method: "Organic",
  },
  {
    id: "7",
    name: "Organic Carrots",
    description: "Sweet and crunchy carrots, freshly harvested",
    price: 1.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1723476992266-2c4a787c7b32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Root Harvest Farm",
    category: "Vegetables",
    method: "Organic",
  },
  {
    id: "8",
    name: "Fresh Strawberries",
    description: "Sweet and juicy strawberries, perfect for desserts",
    price: 4.99,
    unit: "basket",
    image: "https://images.unsplash.com/photo-1717625940956-421a56f5bdc8?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Berry Good Farm",
    category: "Fruits",
    method: "Conventional",
  },
  {
    id: "9",
    name: "Organic Potatoes",
    description: "Versatile potatoes for all your cooking needs",
    price: 2.49,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1742887205589-266ab1623152?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farmer: "Earth Bounty Farm",
    category: "Vegetables",
    method: "Organic",
  },
]

export default function ProductGrid() {
  const [cart, setCart] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  const addToCart = (productId: string) => {
    setCart([...cart, productId])
  }

  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm"
              aria-label={favorites.includes(product.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
              />
            </button>
          </div>
          <CardContent className="p-4">
            <div className="mb-2">
              <Link href={`/products/${product.id}`} className="text-lg font-semibold hover:text-green-600">
                {product.name}
              </Link>
              <p className="text-sm text-muted-foreground">by {product.farmer}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">
                ${product.price.toFixed(2)}
                <span className="text-sm font-normal text-muted-foreground"> / {product.unit}</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => addToCart(product.id)}
              disabled={cart.includes(product.id)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {cart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
