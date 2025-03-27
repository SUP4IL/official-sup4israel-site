import React, { useEffect, useState } from "react";

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
    <main className="min-h-screen bg-black text-white font-sans">
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
          </div>
        </div>
      </nav>

      {/* Hero with Countdown */}
      <section className="text-center py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">THE PRESALE IS COMING</h2>
          <p className="text-lg text-gray-300 mb-10">
            Be among the first to join the presale of 1,000,000 tokens. Your chance to support a purpose-driven movement.
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

      {/* Remaining sections remain unchanged */}
    </main>
  );
}
