"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingCart, Users, Plus, Edit, Trash2, ArrowUpRight, DollarSign, TrendingUp } from "lucide-react"

// Mock data for farmer dashboard
const mockProducts = [
  {
    id: "1",
    name: "Organic Tomatoes",
    price: 2.99,
    inventory: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1723477006768-8db3b27440b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "active",
  },
  {
    id: "3",
    name: "Organic Spinach",
    price: 3.25,
    inventory: 20,
    unit: "bunch",
    image: "/placeholder.svg?height=100&width=100",
    status: "active",
  },
  {
    id: "7",
    name: "Organic Carrots",
    price: 1.99,
    inventory: 60,
    unit: "kg",
    image: "/placeholder.svg?height=100&width=100",
    status: "active",
  },
  {
    id: "9",
    name: "Organic Potatoes",
    price: 2.49,
    inventory: 75,
    unit: "kg",
    image: "/placeholder.svg?height=100&width=100",
    status: "active",
  },
  {
    id: "12",
    name: "Fresh Basil",
    price: 1.5,
    inventory: 0,
    unit: "bunch",
    image: "/placeholder.svg?height=100&width=100",
    status: "out_of_stock",
  },
]

const mockOrders = [
  {
    id: "ORD-001",
    date: "2023-06-15",
    customer: "John Smith",
    total: 29.97,
    status: "delivered",
    items: [
      { name: "Organic Tomatoes", quantity: 2 },
      { name: "Organic Spinach", quantity: 3 },
      { name: "Organic Carrots", quantity: 5 },
    ],
  },
  {
    id: "ORD-002",
    date: "2023-06-14",
    customer: "Sarah Johnson",
    total: 15.45,
    status: "shipped",
    items: [
      { name: "Organic Tomatoes", quantity: 1 },
      { name: "Organic Potatoes", quantity: 5 },
    ],
  },
  {
    id: "ORD-003",
    date: "2023-06-14",
    customer: "Michael Chen",
    total: 42.75,
    status: "processing",
    items: [
      { name: "Organic Spinach", quantity: 2 },
      { name: "Organic Carrots", quantity: 3 },
      { name: "Organic Potatoes", quantity: 10 },
    ],
  },
]

export default function FarmerDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
          <p className="text-muted-foreground">Manage your products, orders, and farm profile</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 md:w-[600px] mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products Sold</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 awaiting shipment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24.5% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.slice(0, 3).map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p
                          className={`text-xs ${
                            order.status === "delivered"
                              ? "text-green-500"
                              : order.status === "shipped"
                                ? "text-blue-500"
                                : "text-orange-500"
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4" onClick={() => setActiveTab("orders")}>
                  View All Orders
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProducts.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 mr-3">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            ${product.price.toFixed(2)} / {product.unit}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          {product.inventory} {product.unit}
                        </p>
                        <p className={`text-xs ${product.inventory > 0 ? "text-green-500" : "text-red-500"}`}>
                          {product.inventory > 0 ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4" onClick={() => setActiveTab("products")}>
                  Manage Inventory
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Your Products</CardTitle>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4">Product</th>
                      <th className="text-center p-4">Price</th>
                      <th className="text-center p-4">Inventory</th>
                      <th className="text-center p-4">Status</th>
                      <th className="text-right p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockProducts.map((product) => (
                      <tr key={product.id} className="border-t">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="relative w-12 h-12 mr-3">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{product.name}</h3>
                              <p className="text-xs text-muted-foreground">ID: {product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          ${product.price.toFixed(2)} / {product.unit}
                        </td>
                        <td className="p-4 text-center">
                          {product.inventory} {product.unit}
                        </td>
                        <td className="p-4 text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              product.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.status === "active" ? "Active" : "Out of Stock"}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4">Order ID</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-center p-4">Date</th>
                      <th className="text-center p-4">Total</th>
                      <th className="text-center p-4">Status</th>
                      <th className="text-right p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-t">
                        <td className="p-4 font-medium">{order.id}</td>
                        <td className="p-4">{order.customer}</td>
                        <td className="p-4 text-center">{order.date}</td>
                        <td className="p-4 text-center">${order.total.toFixed(2)}</td>
                        <td className="p-4 text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Update Status
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Farm Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="border rounded-lg p-6 text-center">
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt="Farm logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg">Green Valley Farm</h3>
                      <p className="text-sm text-muted-foreground">Riverside County</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Change Photo
                      </Button>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Farm Name</label>
                        <input
                          type="text"
                          className="w-full mt-1 px-3 py-2 border rounded-md"
                          defaultValue="Green Valley Farm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Owner Name</label>
                        <input
                          type="text"
                          className="w-full mt-1 px-3 py-2 border rounded-md"
                          defaultValue="John Farmer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Farm Description</label>
                      <textarea
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        rows={4}
                        defaultValue="Family-owned farm specializing in organic vegetables since 1985. We use sustainable farming practices and take pride in delivering the freshest produce to our customers."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full mt-1 px-3 py-2 border rounded-md"
                          defaultValue="contact@greenvalleyfarm.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <input
                          type="tel"
                          className="w-full mt-1 px-3 py-2 border rounded-md"
                          defaultValue="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Farm Address</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        defaultValue="123 Farm Road, Green Valley, CA 94123"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Farming Methods</label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="flex items-center">
                          <input type="checkbox" id="organic" className="mr-2" defaultChecked />
                          <label htmlFor="organic">Organic</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="conventional" className="mr-2" />
                          <label htmlFor="conventional">Conventional</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="hydroponic" className="mr-2" />
                          <label htmlFor="hydroponic">Hydroponic</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="biodynamic" className="mr-2" defaultChecked />
                          <label htmlFor="biodynamic">Biodynamic</label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    defaultValue="john@greenvalleyfarm.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Change Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="Current password"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="New password" />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-green-600 hover:bg-green-700">Update Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
