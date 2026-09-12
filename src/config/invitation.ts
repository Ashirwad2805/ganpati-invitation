import { InvitationData } from '../types';

export const invitationData: InvitationData = {
  shlokas: {
    pranam: "Om Gan Ganapataye Namah",
    invocation: "॥ Shri Ganeshaya Namah ॥",
    vratKatha: "O Lord with the curved trunk and immense form, radiant like a million suns, remove all obstacles from my endeavors, always.",
    morya: "Ganpati Bappa Morya • Mangalmurti Morya",
    greeting: "With love and devotion"
  },

  hostName: "Yadav Family",
  familyMembers: "Vinay, Savita & Family",
  hostSubtext: "With love, your hosts",

  date: "Monday, 14 September 2026",
  dateDetail: "Ganesh Chaturthi Festival",
  gregorianDate: "2026-09-14T10:00:00+05:30",

  darshanTime: "10:00 AM to 10:00 PM",
  darshanSubtext: "Our doors are open all day to welcome you",

  aartiMorningTime: "11:30 AM (Morning Maha Aarti)",
  aartiEveningTime: "7:30 PM (Evening Diya Maha Aarti)",
  prasadDetail: "Modak bhog and a sacred community feast after the aarti",

  venueName: "Yadav's Residence",
  venueAddress: "Flat B-405, Rupali Darshan Near Hanuman Mandir Navghar road , Bhayander East, Thane - 401105",
  landmark: "Near Hanuman Mandir, Navghar Road",
  city: "Bhayander, Mumbai - 401105",
  phoneContact: "+91 9136804248/+91 8097738595/+91 7304244534",
  mapsUrl: "https://maps.app.goo.gl/1WPqqEkkHdtCcen5A",
  whatsappNumber: "+919136804248/+918097738595/+917304244534",

  timeline: [
    {
      id: '1',
      title: 'Morning arrival & darshan',
      time: 'From 10:00 AM',
      subtext: 'Peaceful darshan of Bappa and a warm welcome for loved ones.',
      iconType: 'darshan'
    },
    {
      id: '2',
      title: 'Midday maha aarti',
      time: '11:30 AM',
      subtext: 'The first bhog with incense, lamps, conch, and a collective aarti.',
      iconType: 'aarti',
      highlight: true
    },
    {
      id: '3',
      title: 'Bhog & maha prasad',
      time: 'From 1:00 PM',
      subtext: 'Traditional ukadiche modak, naivedya, and a lovingly prepared feast.',
      iconType: 'prasad'
    },
    {
      id: '4',
      title: 'Evening diya maha aarti',
      time: '7:30 PM',
      subtext: 'Hundreds of glowing diyas, manjiras, and devotional singing.',
      iconType: 'aarti',
      highlight: true
    },
    {
      id: '5',
      title: 'Night darshan & blessings',
      time: 'Until 10:00 PM',
      subtext: 'Final darshan of Bappa and farewell blessings in a peaceful setting.',
      iconType: 'darshan'
    }
  ],

  darshanGallery: [
    {
      id: '1',
      title: 'Shri Ganesh idol & complete tableau',
      tag: 'Complete sanctum',
      description: 'Bappa, our home’s divine presence, surrounded by fresh marigolds, champa flowers, and brass lamps.',
      url: 'https://images.unsplash.com/photo-1567591370317-5e669e4693b7?auto=format&fit=crop&w=1600&q=85',
      aspect: 'wide'
    },
    {
      id: '2',
      title: 'Beautiful face & crown',
      tag: 'Gentle darshan',
      description: 'Bappa’s peaceful eyes, sacred kumkum tilak, and a captivating crown with a golden glow.',
      url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85',
      aspect: 'portrait'
    },
    {
      id: '3',
      title: 'Blessing gesture & modak hand',
      tag: 'Blessings & grace',
      description: 'Sacred hands that remove devotees’ troubles and offer blessings of boundless peace.',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      aspect: 'portrait'
    },
    {
      id: '4',
      title: 'Glowing lamps & aarti flame',
      tag: 'Sacred light',
      description: 'The gentle glow of pure ghee lamps filling the home with positivity and divinity.',
      url: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide'
    }
  ],

  sacredMoments: [
    {
      id: 'm1',
      num: 'Moment 01',
      title: 'Sacred darshan',
      desc: 'Boundless peace and Bappa’s presence. Seeing Bappa at the home shrine fills the heart with joy.',
      imageUrl: 'https://images.unsplash.com/photo-1567591370504-8b631d87e076?auto=format&fit=crop&w=800&q=80',
      badge: 'Peace & devotion'
    },
    {
      id: 'm2',
      num: 'Moment 02',
      title: 'Maha aarti',
      desc: 'Sacred lamp flames, conch sounds, manjiras, and the whole family singing Bappa’s aarti together.',
      imageUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80',
      badge: 'Collective prayer'
    },
    {
      id: 'm3',
      num: 'Moment 03',
      title: 'Modak & maha prasad',
      desc: 'Ukadiche modak made with devotion, panchamrit, and sacred bhog served with affection.',
      imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      badge: 'Love & sweetness'
    }
  ]
};
