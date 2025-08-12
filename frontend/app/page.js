import { Wrench, PiggyBank, ReceiptText, LineChart, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

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
  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-white text-gray-900">

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-28 px-6 relative z-10 text-gray-900 bg-white">
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

          {/* Call-to-Action Buttons */}
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

      {/* Features */}
      <section className="py-20 px-6 bg-gray-200">
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
      <section className="py-20 px-6 bg-gray-300">
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

      {/* Footer */}
      <footer className="py-8 text-center text-sm bg-gray-900 border-t border-gray-800 text-gray-400">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Vyaapar Mitra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;