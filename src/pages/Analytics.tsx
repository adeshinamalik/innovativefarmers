
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Download, FileSpreadsheet } from "lucide-react";

// Sample data for the charts
const salesData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 2000 },
  { name: "Sep", value: 2780 },
  { name: "Oct", value: 1890 },
  { name: "Nov", value: 2390 },
  { name: "Dec", value: 3490 },
];

const consumerData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 5 },
];

const inventoryData = [
  { name: "Vegetables", value: 40 },
  { name: "Fruits", value: 30 },
  { name: "Grains", value: 20 },
  { name: "Dairy", value: 10 },
];

const COLORS = ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#10B981"];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("yearly");
  const [reportType, setReportType] = useState("sales");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col bg-muted/20 pt-6 pb-16">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Track sales performance, consumer behavior, and inventory management
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.1}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Total Sales</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$24,780</div>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <span>↑ 12%</span>
                    <span className="text-muted-foreground ml-1">vs last month</span>
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Active Customers</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">843</div>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <span>↑ 8%</span>
                    <span className="text-muted-foreground ml-1">vs last month</span>
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Inventory Status</CardTitle>
                  <CardDescription>Current stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">94%</div>
                  <p className="text-sm text-amber-600 flex items-center mt-1">
                    <span>↓ 3%</span>
                    <span className="text-muted-foreground ml-1">since last week</span>
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <Card className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Sales Trends</CardTitle>
                    <CardDescription>Track your sales performance over time</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Select value={timeRange} onValueChange={setTimeRange}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ChartContainer config={{
                    sales: { color: "#8B5CF6" },
                    inventory: { color: "#F97316" },
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8B5CF6" name="Sales" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeIn delay={0.5}>
              <Card>
                <CardHeader>
                  <CardTitle>Consumer Demographics</CardTitle>
                  <CardDescription>Age distribution of customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer config={{
                      consumers: { color: "#D946EF" },
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={consumerData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={90}
                            fill="#D946EF"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {consumerData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Breakdown</CardTitle>
                  <CardDescription>Current stock by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer config={{
                      inventory: { color: "#0EA5E9" },
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={inventoryData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" name="Items" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.7}>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Customizable Reports</CardTitle>
                    <CardDescription>Generate detailed reports for tracking performance</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <FileSpreadsheet className="mr-2 h-4 w-4" />
                      Export as CSV
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={reportType} onValueChange={setReportType} className="w-full">
                  <TabsList className="mb-6 grid grid-cols-3 w-full md:w-[400px]">
                    <TabsTrigger value="sales" className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Sales
                    </TabsTrigger>
                    <TabsTrigger value="consumer" className="flex items-center">
                      <LineChartIcon className="mr-2 h-4 w-4" />
                      Consumer
                    </TabsTrigger>
                    <TabsTrigger value="inventory" className="flex items-center">
                      <PieChartIcon className="mr-2 h-4 w-4" />
                      Inventory
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="sales" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Select defaultValue="weekly">
                        <SelectTrigger>
                          <SelectValue placeholder="Time Period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Product Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="fruits">Fruits</SelectItem>
                          <SelectItem value="grains">Grains</SelectItem>
                          <SelectItem value="dairy">Dairy</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue="revenue">
                        <SelectTrigger>
                          <SelectValue placeholder="Metric" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="revenue">Revenue</SelectItem>
                          <SelectItem value="orders">Orders</SelectItem>
                          <SelectItem value="items">Items Sold</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue="desc">
                        <SelectTrigger>
                          <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desc">Highest First</SelectItem>
                          <SelectItem value="asc">Lowest First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="h-[300px]">
                      <ChartContainer config={{ sales: { color: "#8B5CF6" } }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey="value" name="Sales" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="consumer" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Select defaultValue="age">
                        <SelectTrigger>
                          <SelectValue placeholder="Demographic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="age">Age Group</SelectItem>
                          <SelectItem value="location">Location</SelectItem>
                          <SelectItem value="activity">Activity Level</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Customer Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Customers</SelectItem>
                          <SelectItem value="new">New Customers</SelectItem>
                          <SelectItem value="returning">Returning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="h-[300px]">
                      <ChartContainer config={{ consumers: { color: "#D946EF" } }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={consumerData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={90}
                              fill="#D946EF"
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                              {consumerData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </PieChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="inventory" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Select defaultValue="category">
                        <SelectTrigger>
                          <SelectValue placeholder="Group By" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="category">Category</SelectItem>
                          <SelectItem value="supplier">Supplier</SelectItem>
                          <SelectItem value="status">Status</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Stock Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Stock</SelectItem>
                          <SelectItem value="low">Low Stock</SelectItem>
                          <SelectItem value="outofstock">Out of Stock</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="h-[300px]">
                      <ChartContainer config={{ inventory: { color: "#0EA5E9" } }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={inventoryData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="value" name="Items" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;
