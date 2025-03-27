import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const countdownDate = new Date("2025-04-01T00:00:00-04:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
              alt="Flag of Israel"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="font-bold text-lg">SUP4Israel (S4IL)</h1>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className={`space-x-6 text-sm hidden md:flex`}>
            <a href="#token" className="hover:underline">Token</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#howtobuy" className="hover:underline">How to Buy</a>
            <a href="https://x.com/SUP4IL" target="_blank" className="hover:underline font-semibold text-blue-400">Follow us on X</a>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d" target="_blank" className="hover:underline font-semibold text-green-400">Trade S4IL</a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-2 flex flex-col space-y-2">
            <a href="#token" className="hover:underline">Token</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#howtobuy" className="hover:underline">How to Buy</a>
            <a href="https://x.com/SUP4IL" target="_blank" className="hover:underline font-semibold text-lg text-blue-400 bg-white text-black px-4 py-2 rounded-lg text-center">Follow us on X</a>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d" target="_blank" className="hover:underline font-semibold text-lg text-green-400 bg-white text-black px-4 py-2 rounded-lg text-center">Trade S4IL</a>
          </div>
        )}
      </nav>

      {/* Hero with Countdown */}
      ...

      {/* About Section */}
      ...

      {/* How to Buy Section */}
      <section id="howtobuy" className="bg-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">How to Buy S4IL</h2>
          <ol className="text-left text-gray-300 text-lg space-y-4">
            <li><span className="text-green-400 font-semibold">Step 1:</span> Install a crypto wallet like MetaMask and connect it to the Ethereum network.</li>
            <li><span className="text-green-400 font-semibold">Step 2:</span> Add ETH to your wallet (this will be used to purchase S4IL).</li>
            <li><span className="text-green-400 font-semibold">Step 3:</span> Go to <a href="https://app.uniswap.org/#/swap?outputCurrency=0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d" target="_blank" className="text-blue-400 underline">Uniswap</a> and connect your wallet.</li>
            <li><span className="text-green-400 font-semibold">Step 4:</span> Swap ETH for S4IL. Confirm the token address: <code className="bg-gray-800 p-1 rounded">0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d</code></li>
            <li><span className="text-green-400 font-semibold">Step 5:</span> Confirm the transaction in your wallet and you're done!</li>
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      ...

      {/* Footer */}
      ...

      {/* Analytics */}
      <Analytics />
    </main>
  );
}
