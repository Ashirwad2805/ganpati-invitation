import { useState } from "react";
import OpeningScreen from "./components/OpeningScreen";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractivePuja } from './components/InteractivePuja';
import { StorySection } from './components/StorySection';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { VenueDetails } from './components/VenueDetails';
import { ClosingBlessing } from './components/ClosingBlessing';
import { BottomDock } from './components/BottomDock';
import { Toast } from './components/Toast';
import { invitationData } from './config/invitation';
import { sacredAudio } from './utils/audio';
import { LanguageProvider, useLanguage } from './config/language';

function InvitationApp() {
  const { language, setLanguage, t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [flowerCount, setFlowerCount] = useState<number>(0);
  const [diyaCount, setDiyaCount] = useState<number>(0);
  const [isDiyaLit, setIsDiyaLit] = useState<boolean>(false);
  const [opened, setOpened] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleOfferFlower = () => {
    setFlowerCount((prev) => prev + 1);
    sacredAudio.playFlowerChime();
    showToast('🌸 Flowers have been offered at Bappa’s feet!');
  };

  const handleLightDiya = () => {
    setIsDiyaLit(true);
    setDiyaCount((prev) => prev + 1);
    sacredAudio.playSingingBowl();
    showToast('🪔 A diya has been lit for Bappa’s Maha Aarti!');
  };

  const handleRingBell = () => {
    sacredAudio.playTempleBell();
    showToast('🔔 The auspicious temple bells are ringing!');
  };

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyAddress = async () => {
    const fullAddress = `${invitationData.venueName}, ${invitationData.venueAddress}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const input = document.createElement('textarea');
        input.value = fullAddress;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      showToast('📋 Address copied successfully!');
    } catch {
      showToast(`Address: ${fullAddress}`);
    }
  };

  const handleOpenMap = () => {
    if (invitationData.mapsUrl) {
      window.open(invitationData.mapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCallHost = (number: string) => {
    if (number) {
      window.location.href = `tel:${number.replace(/[^+\d]/g, '')}`;
    } else {
      showToast('Please contact us via WhatsApp.');
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Ganeshotsav Darshan & Maha Aarti — ${invitationData.hostName}`);
    const details = encodeURIComponent(
      `Bappa has arrived at our home. You and your family are warmly invited for Darshan, Maha Aarti, and Maha Prasad.\nVenue: ${invitationData.venueName}\nAddress: ${invitationData.venueAddress}`
    );
    const location = encodeURIComponent(`${invitationData.venueName}, ${invitationData.venueAddress}`);
    const dates = '20260914T043000Z/20260914T163000Z';
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;

    window.open(gcalUrl, '_blank', 'noopener,noreferrer');
    showToast('📅 The Google Calendar link has been opened.');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Ganpati Bappa Morya | Ganeshotsav Invitation',
      text: 'Bappa has arrived at our home. With love and devotion, we warmly invite you and your family for Darshan. 🙏🌺',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
      }
    } else {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          showToast('📤 The invitation link has been copied!');
        }
      } catch {
        showToast(`Link: ${window.location.href}`);
      }
    }
  };

  return (
    <div className="invitation-shell animate-mainReveal min-h-screen bg-[#12070a] text-[#faf5ee] selection:bg-[#f39c12]/30 selection:text-[#ffd56b] overflow-x-hidden font-sans">
      <div className="invitation-background" aria-hidden="true" />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <Navbar language={language} onLanguageChange={setLanguage} onRingBell={handleRingBell} />
      <main className="relative z-[1] pb-20 sm:pb-12">
        <Hero onScrollToDarshan={() => handleScrollTo('#darshan')} />
        <InteractivePuja flowerCount={flowerCount} diyaCount={diyaCount} isDiyaLit={isDiyaLit} onOfferFlower={handleOfferFlower} onLightDiya={handleLightDiya} onRingBell={handleRingBell} />
        <StorySection />
        <ScheduleTimeline onAddToCalendar={handleAddToCalendar} onShare={handleShare} />
        <VenueDetails onCopyAddress={handleCopyAddress} onOpenMap={handleOpenMap} onCallHost={handleCallHost} />
        <ClosingBlessing onScrollToTop={handleScrollToTop} />
      </main>
      <BottomDock onScrollTo={handleScrollTo} onOfferFlower={handleOfferFlower} />
    </div>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <OpeningScreen
          onOpen={() => {
            sacredAudio.playTempleBell();
            sacredAudio.startAmbient();
            setOpened(true);
          }}
        />
      )}

      {opened && (
        <LanguageProvider>
          <InvitationApp />
        </LanguageProvider>
      )}
    </>
  );
}

