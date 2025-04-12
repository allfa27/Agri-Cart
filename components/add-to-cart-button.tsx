"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function AddToCartButton({ productId }: { productId: string }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // In a real app, this would add the product to a cart state or make an API call
    setIsAdded(true)

    // Reset after 2 seconds for demo purposes
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleAddToCart} disabled={isAdded}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </Button>
  )
}
