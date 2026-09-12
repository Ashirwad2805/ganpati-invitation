import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Bell } from 'lucide-react';
import { sacredAudio } from '../utils/audio';
import { Language, useLanguage } from '../config/language';

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onOpenRsvp: () => void;
  onRingBell: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange, onOpenRsvp, onRingBell }) => {
  const { t } = useLanguage();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sacredAudio.toggleAmbient();
    setIsPlayingAudio(newState);
  };

  const navLinks = [
    { href: '#story', label: t('पावन आगमन', 'Sacred arrival') },
    { href: '#schedule', label: t('आरती व समय', 'Aarti & timings') },
    { href: '#venue', label: t('स्थान व मार्ग', 'Venue & directions') },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#150a0d]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-2.5 shadow-lg'
            : 'bg-gradient-to-b from-[#150a0d]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Sacred Symbol */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-[#faf5ee] hover:text-[#e2b866] transition-colors group"
          >
            <span className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-lg font-serif text-[#e2b866] bg-[#2a1217]/60 group-hover:scale-105 transition-transform">
              ॐ
            </span>
            <div className="flex flex-col">
              <span className="font-devanagari font-bold text-sm tracking-wide text-[#faf5ee]">
                Ganeshotsav 2026
              </span>
              <span className="text-[10px] text-[#e2b866]/80 font-devanagari">
                Yadav's Residence • Invitation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-devanagari text-sm text-[#e6dcce] hover:text-[#e2b866] transition-colors py-1 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e2b866] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Controls: Audio + Bell + RSVP */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-full border border-[#d4af37]/30 bg-[#2a1217]/70 p-0.5 text-[10px] font-sans" aria-label="Choose language">
              <button
                onClick={() => onLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`rounded-full px-2 py-1 transition-colors ${language === 'en' ? 'bg-[#e2b866] text-[#1a0c0e]' : 'text-[#e6dcce]'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                aria-pressed={language === 'hi'}
                className={`rounded-full px-2 py-1 transition-colors ${language === 'hi' ? 'bg-[#e2b866] text-[#1a0c0e]' : 'text-[#e6dcce]'}`}
              >
                हिंदी
              </button>
            </div>
            {/* Quick Temple Bell Ring */}
            <button
              onClick={onRingBell}
              title="Ring temple bell"
              aria-label="Ring temple bell"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#2a1217]/80 hover:bg-[#3d1a22] border border-[#d4af37]/30 text-[#e2b866] transition-all flex items-center gap-1.5 text-xs font-devanagari cursor-pointer active:scale-95"
            >
              <Bell className="w-4 h-4 animate-bounce" style={{ animationDuration: '2s' }} />
              <span className="hidden sm:inline">{t('घंटी', 'Bell')}</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              aria-label="Toggle sacred sound"
              className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-2 text-xs font-devanagari cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#e2b866]'
                  : 'bg-[#2a1217]/60 border-[#d4af37]/30 text-[#e6dcce] hover:border-[#d4af37]/60'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#e2b866] animate-pulse" />
                  <span className="hidden xs:inline">{t('ध्वनि चालू', 'Sound on')}</span>
                  {/* Equalizer animation */}
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-full bg-[#e2b866] animate-pulse" />
                    <span className="w-0.5 h-2 bg-[#e2b866] animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-0.5 h-3 bg-[#e2b866] animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#a89e92]" />
                  <span className="hidden xs:inline">{t('पावन ध्वनि', 'Sacred sound')}</span>
                </>
              )}
            </button>

            {/* RSVP CTA Button (Desktop) */}
            <button
              onClick={onOpenRsvp}
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8e2800] to-[#b33900] hover:from-[#a02e00] hover:to-[#c74000] text-[#faf5ee] border border-[#f39c12]/40 text-xs font-devanagari font-medium shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>{t('सपरिवार न्योता (RSVP)', 'Family RSVP')}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="md:hidden p-2 rounded-full bg-[#2a1217]/80 border border-[#d4af37]/30 text-[#faf5ee] hover:text-[#e2b866] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#12070a]/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#d4af37]/20">
              <span className="text-[#e2b866] font-devanagari text-base font-semibold">
                {t('ॐ श्री गणेशाय नमः', 'Om Shri Ganeshaya Namah')}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[#2a1217] border border-[#d4af37]/30 text-[#faf5ee]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-devanagari text-xl text-[#faf5ee] hover:text-[#e2b866] py-2 flex items-center justify-between border-b border-[#2a1217]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#e2b866]/60 font-mono">0{idx + 1}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#d4af37]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8e2800] to-[#b33900] text-[#faf5ee] font-devanagari font-semibold text-center border border-[#f39c12]/40 shadow-lg"
            >
              {t('सपरिवार उपस्थिति बताएं (RSVP)', 'Confirm family attendance (RSVP)')}
            </button>
            <p className="text-center text-xs text-[#a89e92] font-devanagari">
              {t('गणपती बाप्पा मोरया • मंगलमूर्ती मोरया', 'Ganpati Bappa Morya • Mangalmurti Morya')}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
