import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

const HappyNewYear = () => {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }
  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat", "Tahun", "Baru", "2024", "Semoga", "Tahun", "Ini", "Lebih", "Baik", "Dari", "Tahun", "Kemarin"])}/>
        </div>
      </div>
    </>
  );
};

export default HappyNewYear;
