import React from 'react';
import { Sparkles, Flame, Heart, Utensils } from 'lucide-react';
import { invitationData } from '../config/invitation';
import { useLanguage } from '../config/language';

export const SacredMoments: React.FC = () => {
  const { t } = useLanguage();
  const getIcon = (idx: number) => {
    if (idx === 0) return <Heart className="w-4 h-4 text-[#f39c12]" />;
    if (idx === 1) return <Flame className="w-4 h-4 text-[#f39c12]" />;
    return <Utensils className="w-4 h-4 text-[#f39c12]" />;
  };

  return (
    <section id="moments" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2a1217] border border-[#d4af37]/30 text-xs font-devanagari text-[#e2b866] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#f39c12]" />
          <span>{t('॥ पावन क्षण ॥', '॥ Sacred moments ॥')}</span>
        </div>
        <h2 className="font-devanagari text-3xl sm:text-5xl font-bold text-[#faf5ee] tracking-tight">
          {t('उत्सव के अनमोल पल', 'Precious Moments of Celebration')}
        </h2>
        <p className="font-devanagari text-sm sm:text-lg text-[#e6dcce] mt-2">
          {t('घर के उत्सव की छोटी-छोटी सुंदर यादें जो मन को तृप्त कर देती हैं', 'Beautiful little memories from our home celebration.')}
        </p>
      </div>

      {/* Moments Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {invitationData.sacredMoments.map((moment, index) => (
          <article
            key={moment.id}
            className="group rounded-3xl bg-[#1f0d11]/85 border border-[#d4af37]/30 overflow-hidden shadow-xl hover:border-[#f39c12] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src={moment.imageUrl}
                alt={moment.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f0d11] via-transparent to-black/30" />

              {/* Moment Number Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#12070a]/80 backdrop-blur-md border border-[#d4af37]/40 text-xs font-devanagari font-bold text-[#e2b866]">
                  {t(moment.num)}
              </div>

              {/* Badge */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a1217]/90 border border-[#f39c12]/40 text-xs font-devanagari text-[#faf5ee]">
                {getIcon(index)}
                <span>{t(moment.badge)}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-devanagari text-2xl font-bold text-[#faf5ee] mb-2">
                  {t(moment.title)}
                </h3>
                <p className="font-devanagari text-sm sm:text-base text-[#e6dcce] leading-relaxed">
                  {t(moment.desc)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs font-devanagari text-[#e2b866]">
                <span>{t('गृह गणेशोत्सव', 'Home Ganeshotsav')}</span>
                <span>• Yadav’s Residence</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
