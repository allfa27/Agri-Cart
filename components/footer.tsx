import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">Agri Cart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting farmers directly with consumers for fresher produce and fairer prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-green-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/farmers" className="text-sm text-muted-foreground hover:text-green-600">
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/farmers/register" className="text-sm text-muted-foreground hover:text-green-600">
                  Join as a Farmer
                </Link>
              </li>
              <li>
                <Link href="/farmers/dashboard" className="text-sm text-muted-foreground hover:text-green-600">
                  Farmer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/farmers/resources" className="text-sm text-muted-foreground hover:text-green-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/farmers/success-stories" className="text-sm text-muted-foreground hover:text-green-600">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p> Raisen Road</p>
              <p>Patel Nagar, Bhopal, MP, India</p>
              <p>Email: alfabara2002@gmail.com</p>
              <p>Phone: +91 7049469023</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agri Cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
