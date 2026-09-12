import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';
import { invitationData } from '../config/invitation';
import { useLanguage } from '../config/language';

interface HeroProps {
  onScrollToDarshan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDarshan }) => {
  const { language, t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(invitationData.gregorianDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const toDevanagariDigits = (num: number) => {
    return String(num);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center pt-24 pb-12 px-4 overflow-hidden text-center"
    >
      {/* Background Image with Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567591370504-8b631d87e076?auto=format&fit=crop&w=1920&q=85"
          alt="Beautiful Ganesh idol in the home shrine"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Multilayered radial and linear dark gradients for soft contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12070a] via-[#12070a]/75 to-[#12070a]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#12070a]/40 to-[#12070a]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a1217]/80 border border-[#d4af37]/40 backdrop-blur-md mb-5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#e2b866]" />
          <span className="font-devanagari text-xs sm:text-sm font-semibold tracking-wider text-[#e2b866]">
            {t(invitationData.shlokas.pranam, 'Om Gan Ganapataye Namah')}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#e2b866]" />
        </div>

        <h1 className="font-devanagari text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#faf5ee] leading-tight drop-shadow-2xl">
            Ganpati Bappa <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f39c12] via-[#ffd56b] to-[#f39c12]">
            Morya
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 font-devanagari text-lg sm:text-2xl text-[#f5ebd7] font-medium max-w-2xl leading-relaxed">
          “Bappa has graced our home with His divine presence..” 🪔🙏
        </p>

        <p className="mt-1 font-devanagari text-sm sm:text-base text-[#e2b866]/90">
          With hearts filled with love and devotion, we warmly invite you and your family to join us in welcoming Bappa and seeking His divine blessings.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-devanagari">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241014]/90 border border-[#d4af37]/30 text-[#faf5ee] backdrop-blur-md">
            <Calendar className="w-4 h-4 text-[#f39c12]" />
            <span>{language === 'en' ? 'Monday, 14 September 2026' : invitationData.date}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241014]/90 border border-[#d4af37]/30 text-[#faf5ee] backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#f39c12]" />
            <span>{language === 'en' ? "Yadav's Residence" : invitationData.venueName}</span>
          </div>
        </div>

        <div className="mt-6 p-3 sm:p-4 rounded-2xl bg-[#1e0d11]/80 border border-[#d4af37]/30 backdrop-blur-md max-w-md w-full">
          <span className="text-[11px] sm:text-xs font-devanagari text-[#e2b866] block mb-2 font-medium">
            ⏳ Time remaining until Ganeshotsav darshan:
          </span>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[['days', timeLeft.days], ['hours', timeLeft.hours], ['minutes', timeLeft.minutes], ['seconds', timeLeft.seconds]].map(([label, value]) => (
              <div key={label} className="bg-[#2d1419] p-2 rounded-lg border border-[#d4af37]/20">
                <span className="block text-lg sm:text-2xl font-bold text-[#faf5ee] font-mono">{language === 'en' ? value : toDevanagariDigits(value as number)}</span>
                <span className="text-[10px] text-[#a89e92] font-devanagari">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <button onClick={onScrollToDarshan} aria-label="Scroll down for darshan" className="relative z-10 mt-8 flex flex-col items-center gap-1 text-[#e2b866]/80 hover:text-[#e2b866] transition-colors cursor-pointer group">
        <span className="text-xs font-devanagari tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#e2b866]" />
      </button>
    </section>
  );
};
