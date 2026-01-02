import { ShoppingCart, Phone, Headphones, Cable, Mouse } from "lucide-react";
import { useState } from "react";

export default function MahaNetStore() {
  const [cartOpen, setCartOpen] = useState(false);

  const categories = ["All", "Phones", "Audio", "Chargers", "Accessories"];
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    { id: 1, name: "Wireless Headset", price: "Rs. 3,500", category: "Audio", icon: <Headphones /> },
    { id: 2, name: "Fast Charger", price: "Rs. 1,800", category: "Chargers", icon: <Cable /> },
    { id: 3, name: "Mini Phone", price: "Rs. 7,500", category: "Phones", icon: <Phone /> },
    { id: 4, name: "Phone Cover", price: "Rs. 950", category: "Accessories", icon: <Phone /> },
    { id: 5, name: "Wireless Earbuds", price: "Rs. 4,200", category: "Audio", icon: <Headphones /> },
    { id: 6, name: "USB Mouse", price: "Rs. 1,600", category: "Accessories", icon: <Mouse /> },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Maha Net</h1>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          <ShoppingCart size={18} /> Cart
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Simple Tech. Good Price.</h2>
        <p className="text-gray-600 mb-6">
          Phones, chargers, headsets, and accessories for everyday use.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-xl">
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Shop Products</h3>
        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border ${activeCategory === cat ? "bg-black text-white" : "bg-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products
            .filter(p => activeCategory === "All" || p.category === activeCategory)
            .map((p) => (
            <div
              key={p.id}
              className="border rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-sm"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h4 className="font-medium">{p.name}</h4>
              <p className="text-gray-500 mb-3">{p.price}</p>
              <button className="px-4 py-2 text-sm border rounded-xl">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">About Maha Net</h3>
          <p className="text-gray-600">
            Maha Net is a local communication store. We sell simple and affordable
            tech products. Good quality. Honest price.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-2">📍 Local Store</p>
          <p className="text-gray-600 mb-4">📞 +000 000 000</p>
          <button className="px-6 py-3 bg-black text-white rounded-xl">
            Message on WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-4 text-center text-sm text-gray-500">
        © 2026 Maha Net. All rights reserved.
      </footer>

      {/* Cart Drawer (Demo) */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-end">
          <div className="w-80 bg-white p-6">
            <h4 className="font-semibold mb-4">Your Cart</h4>
            <p className="text-gray-500 text-sm">
              Cart is demo only. Delivery coming soon.
            </p>
            <button
              onClick={() => setCartOpen(false)}
              className="mt-6 text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
