import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { invitationData } from '../config/invitation';
import { useLanguage } from '../config/language';

export const StorySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="story" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Decorative Traditional Border Container */}
      <div className="relative bg-[#1f0d11]/85 border border-[#d4af37]/35 rounded-3xl p-6 sm:p-10 md:p-14 backdrop-blur-md shadow-2xl overflow-hidden text-center">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f39c12]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Sacred Shloka Header */}
        <div className="inline-flex items-center gap-2 text-[#e2b866] font-devanagari text-xs sm:text-sm font-medium tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-[#f39c12]" />
          <span>{t('॥ श्री गणेशाय नमः ॥', '॥ Shri Ganeshaya Namah ॥')}</span>
          <Sparkles className="w-4 h-4 text-[#f39c12]" />
        </div>

        {/* Main Sanskrit Vrat Katha Shloka */}
        <p className="font-devanagari text-base sm:text-xl text-[#f3d99f] font-serif leading-relaxed max-w-2xl mx-auto italic">
          {invitationData.shlokas.vratKatha}
        </p>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto my-8" />

        {/* Narrative Flow */}
        <div className="space-y-4 font-devanagari text-lg sm:text-2xl text-[#f5ebd7] leading-relaxed max-w-3xl mx-auto">
          <p className="text-[#e2b866] font-semibold">
            {t('हर वर्ष की तरह...', 'As we welcome Him every year,')}
          </p>
          <p>
            {t('इस बार भी हमारे घर सुख, शांति, समृद्धि और मंगल आशीर्वाद लेकर बप्पा पधारे हैं।', 'Bappa has once again graced our home with His divine presence, filling our hearts with joy, peace, prosperity, and auspicious blessings. 🪔🙏')}
          </p>
        </div>

        {/* Emotional Personal Invitation Body */}
        <div className="mt-8 p-5 sm:p-8 rounded-2xl bg-[#281116]/80 border border-[#d4af37]/25 text-left sm:text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-devanagari text-[#f39c12] font-semibold mb-3">
            <Heart className="w-4 h-4 fill-[#f39c12]" />
            <span>{invitationData.shlokas.greeting}</span>
          </div>

          <p className="font-devanagari text-sm sm:text-base text-[#e6dcce] mt-3 leading-relaxed">
            {t('आइए, सपरिवार पधारकर बप्पा के दर्शन करें, महाआरती में सम्मिलित हों और इस मंगलमय उत्सव की खुशियों को साझा करें।', 'We warmly invite you and your family to seek Bappa’s blessings, join us for the Maha Aarti, and celebrate this auspicious occasion together with love, devotion, and happiness.')}
          </p>

          <p className="font-devanagari text-base sm:text-lg text-[#f39c12] mt-4 font-semibold leading-relaxed">
            {t('गणपति बाप्पा मोरया! 🪔🙏', 'Ganpati Bappa Morya! 🪔🙏')}
          </p>
        </div>

        {/* Host Family Signature */}
        <div className="mt-10 font-devanagari">
          <span className="text-xs uppercase tracking-widest text-[#a89e92] block mb-1">
            {t(invitationData.hostSubtext)}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#faf5ee] text-transparent bg-clip-text bg-gradient-to-r from-[#ffd56b] via-[#faf5ee] to-[#ffd56b]">
            {t(invitationData.hostName)}
          </h3>
        </div>
      </div>
    </section>
  );
};
