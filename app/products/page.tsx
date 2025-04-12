import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Filters sidebar */}
        <div className="w-full md:w-1/4 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Search</h2>
            <div className="relative">
              <Input type="search" placeholder="Search products..." className="w-full" />
              <Button className="absolute right-0 top-0 h-full bg-green-600 hover:bg-green-700">Search</Button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {["Vegetables", "Fruits", "Dairy", "Eggs", "Grains", "Herbs"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Farming Method</h2>
            <div className="space-y-2">
              {["Organic", "Conventional", "Hydroponic", "Biodynamic"].map((method) => (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox id={`method-${method}`} />
                  <Label htmlFor={`method-${method}`}>{method}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
            <div className="flex items-center space-x-2">
              <Input type="number" placeholder="Min" className="w-full" />
              <span>to</span>
              <Input type="number" placeholder="Max" className="w-full" />
            </div>
            <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">Apply</Button>
          </div>
        </div>

        {/* Products grid */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex items-center space-x-2">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="12">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Show" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <ProductGrid />

          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="bg-green-600 text-white">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
