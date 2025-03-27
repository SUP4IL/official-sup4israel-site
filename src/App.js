import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({});

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
          <div className="space-x-6 text-sm">
            <a href="#token" className="hover:underline">Token</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="https://x.com/SUP4IL" target="_blank" className="hover:underline">X</a>
          </div>
        </div>
      </nav>

      {/* Hero with Countdown */}
      <section
        className="text-center py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601632437633-037dedf3c9ed?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="bg-black bg-opacity-70 py-16 px-6 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">THE PRESALE IS COMING</h2>
          <p className="text-lg text-gray-300 mb-10">
            Be among the first to join the presale of 1,000,000 tokens. Your chance to support a purpose-driven movement for Israel and crypto transparency.
          </p>

          {/* Countdown Styled like Mercedes */}
          {timeLeft ? (
            <div className="text-center text-4xl md:text-5xl font-bold tracking-widest mb-10">
              <div className="flex justify-center space-x-6">
                <div>
                  <div>{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-sm mt-1">Days</div>
                </div>
                <div>:</div>
                <div>
                  <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-sm mt-1">Hours</div>
                </div>
                <div>:</div>
                <div>
                  <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-sm mt-1">Minutes</div>
                </div>
                <div>:</div>
                <div>
                  <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-sm mt-1">Seconds</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-5xl font-extrabold text-green-400">Presale is LIVE!</div>
          )}

          <a
            href="https://app.uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-white rounded-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Keep me updated
          </a>
        </div>
      </section>

      {/* Token Info */}
      <section id="token" className="py-20 px-4 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Token Details</h2>
          <p className="text-gray-300 mb-2">Smart contract on Ethereum. Transparency you can verify.</p>
          <p className="text-blue-500 text-sm">Contract: 0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d</p>
          <a
            href="https://etherscan.io/token/0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d"
            className="text-blue-400 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Etherscan
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About S4IL</h2>
          <p className="text-gray-300 text-lg">
            SUP4Israel is a decentralized crypto project built to support trusted causes in Israel. Each transaction contributes to impact. Built by the people, for the people — on the blockchain.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-600 p-3 rounded bg-black text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-600 p-3 rounded bg-black text-white"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-600 p-3 rounded bg-black text-white"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black w-full py-3 rounded font-semibold hover:bg-gray-300 transition"
            >
              Send
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            Or email: <a href="mailto:official.sup4israel@gmail.com" className="text-blue-400 underline">official.sup4israel@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} SUP4Israel — Built on Ethereum, powered by unity.</p>
      </footer>

      {/* Analytics */}
      <Analytics />
    </main>
  );
}
