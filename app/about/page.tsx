import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground mb-6">
            At Agri Cart, we're on a mission to transform the way food moves from farm to table. We believe in creating
            a sustainable food system that benefits farmers, consumers, and the planet.
          </p>
          <p className="text-muted-foreground mb-8">
            By connecting farmers directly with consumers, we eliminate unnecessary middlemen, reduce food waste, ensure
            fair prices for farmers, and provide fresher, healthier food for everyone.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Shop Our Products
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Farmers working in field"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Founders of Agri Cart"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground mb-4">
              Agri Cart was founded in 2020 by a group of agricultural enthusiasts who saw the challenges faced by small
              and medium-sized farmers in getting their produce to market at fair prices.
            </p>
            <p className="text-muted-foreground mb-4">
              Having grown up in farming communities, our founders witnessed firsthand how traditional distribution
              channels often left farmers with minimal profits while consumers paid premium prices for produce that
              wasn't always fresh.
            </p>
            <p className="text-muted-foreground">
              We started with just 10 farmers in one region, and have since grown to support hundreds of farmers across
              multiple states, connecting them directly with consumers who value fresh, locally-grown produce.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              We promote sustainable farming practices that protect the environment and ensure long-term food security.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We build strong connections between farmers and consumers, fostering a sense of community and shared
              purpose.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transparency</h3>
            <p className="text-muted-foreground">
              We believe in complete transparency about where food comes from and how it's grown, empowering consumers
              to make informed choices.
            </p>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="mb-16 bg-green-50 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-muted-foreground">Farmers Supported</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
            <p className="text-muted-foreground">Average Increase in Farmer Income</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
            <p className="text-muted-foreground">Reduction in Food Miles</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alfa Bara",
              role: "Co-Founder & CEO",
              bio: "Former agricultural economist with a passion for sustainable farming",
              image: "https://images.unsplash.com/photo-1720345174544-65637a5307bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Palak Thakur",
              role: "Head of Farmer Relations",
              bio: "Third-generation farmer who understands the challenges farmers face",
              image: "https://images.unsplash.com/photo-1652953233042-35a88a3e3388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-green-600 mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us */}
      <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're a farmer looking to reach more customers or a consumer who values fresh, locally-grown food,
          we'd love to have you join our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/farmers/register">
            <Button size="lg" variant="outline">
              Join as a Farmer
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Sign Up as a Customer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
