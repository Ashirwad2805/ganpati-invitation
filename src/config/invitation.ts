import { InvitationData } from '../types';

export const invitationData: InvitationData = {
  shlokas: {
    pranam: "Om Gan Ganapataye Namah",
    invocation: "॥ Shri Ganeshaya Namah ॥",
    vratKatha: "O Lord Ganesha, remover of all obstacles, bless our journey with wisdom, prosperity, and success. 🙏✨",
    morya: "Ganpati Bappa Morya • Mangalmurti Morya",
    greeting: "With Love and Devotion 🙏"
  },

  hostName: "Yadav Family",
  hostSubtext: "With love, from your hosts",

  date: "Monday, 14 September 2026",
  dateDetail: "Ganesh Chaturthi Festival",
  gregorianDate: "2026-09-14T10:00:00+05:30",

  darshanTime: "10:00 AM to 10:00 PM",
  darshanSubtext: "Our doors are open all day to welcome you.",

  aartiMorningTime: "11:30 AM (Morning Maha Aarti)",
  aartiEveningTime: "7:30 PM (Evening Diya Maha Aarti)",
  prasadDetail: "Modak bhog and a sacred community feast after the aarti.",

  venueName: "Yadav's Residence",
  venueAddress: "Flat B-405, Rupali Darshan, near Hanuman Mandir, Navghar Road, Bhayander East, Thane - 401105",
  landmark: "Near Hanuman Mandir, Navghar Road",
  city: "Bhayander, Mumbai - 401105",
  phoneContact: "+91 9136804248/+91 8097738595/+91 7304244534",
  mapsUrl: "https://maps.app.goo.gl/1WPqqEkkHdtCcen5A",
  whatsappNumber: "+919136804248/+918097738595/+917304244534",

  timeline: [
    {
      id: '1',
      title: 'Bappa Aagman',
      time: '06:00 PM, 13 September',
      subtext: 'A peaceful arrival of Bappa and a warm welcome for loved ones.',
      iconType: 'darshan'
    },
    {
      id: '2',
      title: 'Sthapna',
      time: '09:30 AM, 14 September',
      subtext: 'The installation ceremony with incense, lamps, a conch, and prayers.',
      iconType: 'aarti',
      highlight: true
    },
    {
      id: '3',
      title: 'Bhajan Sandhya',
      time: '06:00 PM, 14 September',
      subtext: 'An evening of devotional singing and heartfelt prayers.',
      iconType: 'aarti'
    },
    {
      id: '4',
      title: 'Maha Prasad',
      time: '08:00 PM, 14 September',
      subtext: 'A lovingly prepared feast featuring traditional ukadiche modak and naivedya.',
      iconType: 'prasad',
      highlight: true
    },
    {
      id: '5',
      title: 'Satyanarayan Puja',
      time: '10:00 AM, 15 September',
      subtext: 'A sacred Satyanarayan Puja followed by blessings and prasad.',
      iconType: 'darshan'
    },
    {
      id: '6',
      title: 'Visarjan',
      time: '07:00 PM, 15 September',
      subtext: 'Farewell to Bappa with heartfelt prayers and a sacred immersion ceremony.',
      iconType: 'visarjan'
    }
  ],

  darshanGallery: [
    {
      id: '1',
      title: 'Shri Ganesh Idol and Complete Tableau',
      tag: 'Complete sanctum',
      description: 'Bappa, the divine presence in our home, surrounded by fresh marigolds, champa flowers, and brass lamps.',
      url: 'https://images.unsplash.com/photo-1567591370317-5e669e4693b7?auto=format&fit=crop&w=1600&q=85',
      aspect: 'wide'
    },
    {
      id: '2',
      title: 'Beautiful Face and Crown',
      tag: 'Gentle darshan',
      description: 'Bappa’s peaceful eyes, sacred kumkum tilak, and a captivating crown with a golden glow.',
      url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85',
      aspect: 'portrait'
    },
    {
      id: '3',
      title: 'Blessing Gesture and Modak-Holding Hand',
      tag: 'Blessings & grace',
      description: 'Sacred hands that remove devotees’ troubles and offer blessings of boundless peace.',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      aspect: 'portrait'
    },
    {
      id: '4',
      title: 'Glowing Lamps and Aarti Flame',
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
      title: 'Sacred Darshan',
      desc: 'Boundless peace and Bappa’s presence. Seeing Bappa at our home shrine fills the heart with joy.',
      imageUrl: 'https://images.unsplash.com/photo-1567591370504-8b631d87e076?auto=format&fit=crop&w=800&q=80',
      badge: 'Peace & devotion'
    },
    {
      id: 'm2',
      num: 'Moment 02',
      title: 'Maha Aarti',
      desc: 'Sacred lamp flames, conch sounds, manjiras, and the whole family singing Bappa’s aarti together.',
      imageUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80',
      badge: 'Collective prayer'
    },
    {
      id: 'm3',
      num: 'Moment 03',
      title: 'Modak and Maha Prasad',
      desc: 'Ukadiche modak made with devotion, panchamrit, and sacred bhog served with affection.',
      imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      badge: 'Love & sweetness'
    }
  ]
};
