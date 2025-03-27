import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white py-4 shadow-md sticky top-0 z-50">
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-white text-center py-24 px-4 bg-gradient-to-r from-blue-900 to-blue-700">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Empowering Support Through Blockchain</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          SUP4Israel (S4IL) is an Ethereum token created to support trusted causes in Israel with transparency and impact.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://app.uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-800 px-6 py-3 font-medium rounded hover:bg-gray-100"
          >
            Buy on Uniswap
          </a>
          <a
            href="https://x.com/SUP4IL"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900 transition"
          >
            Follow on X
          </a>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Token Information</h2>
        <p className="text-gray-700 mb-3 font-medium">Contract Address:</p>
        <code className="text-blue-600 text-sm break-words block mb-2">
          0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d
        </code>
        <a
          href="https://etherscan.io/token/0xA8C0e61a46Fd6bc1aA8e45ED6fEFBE8a09Cedb2d"
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Etherscan
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Support with S4IL?</h2>
          <p className="text-gray-700 text-lg">
            Every transaction made with S4IL contributes to verified efforts making a difference on the ground. It's a token of solidarity and trust, built on the Ethereum blockchain, empowering global citizens to make a real impact.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white w-full py-3 rounded font-semibold hover:bg-blue-800 transition"
            >
              Send
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Or email: <a href="mailto:official.sup4israel@gmail.com" className="text-blue-700 underline">official.sup4israel@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} SUP4Israel. Powered by Purpose.</p>
      </footer>
    </main>
  );
}
