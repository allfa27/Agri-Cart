'use client'

import type { NextPage } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, ShoppingCart, Truck } from "lucide-react"
import Image from "next/image"
import FeaturedProducts from "@/components/featured-products"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Fresh From Farm To Your Table
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect directly with local farmers. Buy fresh, organic produce at fair prices while supporting
                  sustainable agriculture.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/farmers/register">
                  <Button size="lg" variant="outline">
                    Sell Your Produce
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop"
                alt="Fresh vegetables and fruits"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Agri Cart?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We connect farmers directly with consumers, eliminating middlemen and ensuring fair prices for all.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Fresh & Organic</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                All products are freshly harvested and grown using sustainable farming practices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <ShoppingCart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Direct from Farmers</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Buy directly from local farmers, supporting their livelihoods and your community.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <Truck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Quick and reliable delivery ensures your produce arrives fresh and in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our selection of fresh, seasonal produce from local farmers.
              </p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our customers have to say about Agri Cart.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "I love getting fresh vegetables directly from local farmers. The quality is amazing and I feel good
                supporting local agriculture."
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "As a restaurant owner, I need the freshest ingredients. Agri Cart connects me directly with farmers,
                ensuring top quality for my customers."
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Priya Patel</h3>
                  <p className="text-sm text-gray-500">Health Enthusiast</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "The organic produce from Agri Cart has made a noticeable difference in my family's health. We'll never
                go back to supermarket vegetables!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
