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
            <a href="#tokensale" className="hover:underline">Token Sale</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="https://x.com/SUP4IL" target="_blank" className="hover:underline font-semibold text-blue-400">Follow us on X</a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-2 flex flex-col space-y-2">
            <a href="#token" className="hover:underline">Token</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#tokensale" className="hover:underline">Token Sale</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="https://x.com/SUP4IL" target="_blank" className="hover:underline font-semibold text-lg text-blue-400 bg-white text-black px-4 py-2 rounded-lg text-center">Follow us on X</a>
          </div>
        )}
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
            Be among the first to join the presale of 500,000 tokens. Your chance to support a purpose-driven movement for Israel and crypto transparency.
          </p>

          <a
            href="https://x.com/SUP4IL"
            target="_blank"
            className="inline-block mb-6 px-5 py-2 text-sm text-black bg-blue-400 rounded-md font-medium shadow hover:bg-blue-500 transition"
          >
            Follow us on X
          </a>

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-4 justify-center text-center text-2xl sm:text-4xl font-bold tracking-widest mb-10">
              <div>
                <div>{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-sm mt-1">Days</div>
              </div>
              <div>
                <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm mt-1">Hours</div>
              </div>
              <div>
                <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm mt-1">Minutes</div>
              </div>
              <div>
                <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm mt-1">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="text-5xl font-extrabold text-green-400">Presale is LIVE Now!</div>
          )}

          <a
            href="#tokensale"
            className="inline-block px-8 py-4 border border-white rounded-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Join the Presale
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
          <p className="text-gray-300 text-lg mb-4">
            SUP4Israel is a decentralized crypto project built to support trusted causes in Israel. Each transaction contributes to impact. Built by the people, for the people — on the blockchain.
          </p>
          <p className="text-gray-300 text-lg">
            A significant portion of the profits from transaction fees will be donated to good causes in Israel that focus on areas like nature preservation and the restoration of old cities, rather than funding the war. We are committed to ensuring that our contributions do not sponsor the war, focusing instead on positive, non-military initiatives that benefit Israel’s heritage and environment.
          </p>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="howtobuy" className="bg-black py-20 px-4 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">How to Buy S4IL</h2>
          <div className="grid md:grid-cols-5 gap-6 text-left">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Step 1</h3>
              <p className="text-gray-300">Download MetaMask or another crypto wallet extension.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Step 2</h3>
              <p className="text-gray-300">Buy ETH from an exchange or send it to your wallet.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Step 3</h3>
              <p className="text-gray-300">Go to <a href="https://app.uniswap.org" target="_blank" className="underline text-blue-400">Uniswap</a>.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Step 4</h3>
              <p className="text-gray-300">Paste our token address:<br /><span className="text-sm text-blue-500 break-all">0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d</span></p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Step 5</h3>
              <p className="text-gray-300">Swap ETH for S4IL. Confirm and you're done!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Sale Section */}
      <section id="tokensale" className="bg-black py-20 px-4 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Token Sale</h2>
          <p className="text-gray-300 mb-6">
            Connect your wallet below to participate in the S4IL token sale.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <iframe
              src="https://tokentool.bitbond.com/tokensale/0xfa44853b8923a355dbef982a60ee331953ed5ced?chainId=1&bgColorPrimary=1F2937&bgColorSecondary=111827&borderColor=374151&ctaPrimary=60A5FA&ctaFontColor=FFFFFF&fontColorPrimary=FFFFFF&fontColorSecondary=D1D5DB"
              width="100%"
              height="1000px"
              frameBorder="0"
              name="tokensale"
              title="S4IL Token Sale"
            ></iframe>
          </div>
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

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-20 px-4 bg-black text-center border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Disclaimer</h2>
          <p className="text-gray-300 text-lg">
            Participating in the S4IL token sale involves risks, including the potential loss of funds. Cryptocurrencies are highly volatile, and you should conduct your own research (DYOR) before participating. SUP4Israel is not responsible for any losses incurred.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} SUP4Israel — Built on Ethereum, powered by unity.</p>
        <p className="text-sm mt-2">
          <a href="/terms" className="text-blue-400 underline mx-2">Terms of Service</a> | 
          <a href="/privacy" className="text-blue-400 underline mx-2">Privacy Policy</a>
        </p>
        <p className="mt-4">
          <a href="https://x.com/SUP4IL" target="_blank" className="inline-block px-6 py-2 mt-2 text-black bg-blue-400 rounded-lg font-semibold shadow hover:bg-blue-500 transition">
            Follow us on X
          </a>
        </p>
      </footer>

      {/* Analytics */}
      <Analytics />
    </main>
  );
}
