"use client"

import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { Menu, X, Wrench, PiggyBank, ReceiptText, LineChart, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

const features = [
  { Icon: ReceiptText, title: "Smart Invoicing", desc: "Create and manage invoices effortlessly with automated tracking." },
  { Icon: LineChart, title: "Powerful Analytics", desc: "Visualize sales trends daily, weekly, and monthly." },
  { Icon: Wrench, title: "Inventory Control", desc: "Track products & categories in real time to avoid stockouts." },
  { Icon: PiggyBank, title: "POS Integration", desc: "Process sales and payments seamlessly from one dashboard." },
];

const whyChooseUs = [
  { Icon: ShieldCheck, title: "Security First", desc: "Top-tier encryption & data protection for your business." },
  { Icon: TrendingUp, title: "Grow Your Business", desc: "AI-powered insights to help you scale with confidence." },
  { Icon: Handshake, title: "Dedicated Support", desc: "24/7 assistance to help you make the most of the platform." },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-white text-gray-900 scroll-smooth">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h2 className="text-2xl font-extrabold text-blue-600">Vyaapar Mitra</h2>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#why" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="/login"
              className="px-4 py-2 rounded-full border-2 border-gray-700 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
            >
              Register
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 flex flex-col items-start px-6 py-4 gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About Us</a>
            <a href="#why" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Features</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</a>
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-4 py-2 rounded-full border-2 border-gray-700 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              Login
            </a>
            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
            >
              Register
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col items-center justify-center text-center py-40 px-6 relative z-10 text-gray-900 bg-white scroll-mt-20"
      >
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Your Business, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Simplified with Vyaapar Mitra
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-700">
            The all-in-one ERP solution for inventory, sales, invoicing & analytics — built to help you grow smarter and faster.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a
              href="/register"
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all hover:scale-105 border-gray-700 text-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Log In
            </a>
          </div>
        </div>
      </main>

      {/* About Us */}
      <section id="about" className="py-20 px-6 bg-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-blue-600">About Us</h2>
          <p className="text-lg text-gray-700">
            Vyaapar Mitra is built to simplify business operations for small and medium businesses. 
            From inventory tracking to invoicing and analytics, we provide everything you need in one place.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-200 scroll-mt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl transition-all shadow-xl bg-white border border-gray-200 hover:scale-105 hover:border-blue-400"
            >
              <f.Icon className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 px-6 bg-gray-300 scroll-mt-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Why Choose Vyaapar Mitra?
          </span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-14 text-center">
          Built for efficiency, security, and growth — our platform is your trusted business partner.
        </p>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {whyChooseUs.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl transition-all shadow-xl bg-white border border-gray-200 hover:scale-105 hover:border-blue-400"
            >
              <f.Icon className="h-14 w-14 mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center scroll-mt-20">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600">Contact Us</h2>
        <p className="text-lg text-gray-700">
          Have questions? Reach out to us at{" "}
          <a href="mailto:support@vyaaparmitra.com" className="text-blue-600 underline">
            support@vyaaparmitra.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-sm">© VyaaparMitra | Made by Abhinav</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/atleast-i-tried" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/abhhinavguptaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
