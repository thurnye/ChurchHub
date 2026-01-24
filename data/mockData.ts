// Mock data for the church aggregator app

export interface Church {
  id: string;
  name: string;
  denomination: string;
  distance: string;
  nextService: string;
  image: string;
  description: string;
  mission: string;
  vision: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  lat: number;
  lng: number;
  hasLivestream: boolean;
  pastor: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };
  clergy: {
    name: string;
    role: string;
    photo: string;
    email: string;
  }[];
  serviceTimes: {
    day: string;
    time: string;
    type: string;
  }[];
  ministries: string[];
  accentColor?: string;
  parkingInfo: string;
  accessibilityInfo: string;
  officeHours: string;
}

export interface Event {
  id: string;
  title: string;
  church: string;
  denomination: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export interface Sermon {
  id: string;
  title: string;
  church: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
  isLive?: boolean;
  topic: string;
}

export interface Denomination {
  id: string;
  name: string;
  description: string;
  beliefs: string[];
  churchCount: number;
}

export const churches: Church[] = [
  {
    id: "1",
    name: "Grace Community Church",
    denomination: "Pentecostal",
    distance: "0.8 km",
    nextService: "Today, 6:00 PM",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800",
    description: "A vibrant community of believers passionate about worship and serving our city.",
    mission: "To glorify God by sharing the gospel and building a community of faith.",
    vision: "A world where every person knows and loves Jesus Christ.",
    address: "123 Main Street, Downtown",
    phone: "+1 (555) 123-4567",
    email: "info@gracecommunity.org",
    website: "gracecommunity.org",
    lat: 40.7128,
    lng: -74.0060,
    hasLivestream: true,
    pastor: {
      name: "Rev. James Thompson",
      role: "Senior Pastor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Rev. James Thompson has been serving as the Senior Pastor of Grace Community Church for over 10 years. He is known for his dynamic preaching and commitment to building a strong, faith-based community."
    },
    clergy: [
      {
        name: "Sister Mary Johnson",
        role: "Associate Pastor",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        email: "mary.johnson@gracecommunity.org"
      },
      {
        name: "Brother David Lee",
        role: "Youth Pastor",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "david.lee@gracecommunity.org"
      }
    ],
    serviceTimes: [
      { day: "Sunday", time: "9:00 AM", type: "Morning Worship" },
      { day: "Sunday", time: "11:30 AM", type: "Main Service" },
      { day: "Wednesday", time: "6:00 PM", type: "Bible Study" }
    ],
    ministries: ["Youth", "Children", "Worship", "Outreach", "Prayer"],
    accentColor: "#8B5CF6",
    parkingInfo: "Free parking available in the rear of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "2",
    name: "St. Mary's Anglican Church",
    denomination: "Anglican",
    distance: "1.2 km",
    nextService: "Sunday, 10:00 AM",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800",
    description: "A traditional Anglican parish with a warm, welcoming community.",
    mission: "To glorify God and serve our neighbors through worship, prayer, and service.",
    vision: "A community where faith and love are lived out in every aspect of life.",
    address: "456 Church Avenue, Midtown",
    phone: "+1 (555) 234-5678",
    email: "contact@stmarys.org",
    website: "stmarys.org",
    lat: 40.7580,
    lng: -73.9855,
    hasLivestream: false,
    pastor: {
      name: "Fr. Michael Roberts",
      role: "Vicar",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Fr. Michael Roberts has been serving as the Vicar of St. Mary's Anglican Church for 5 years. He is dedicated to fostering a community of faith and service."
    },
    clergy: [
      {
        name: "Sister Jane Smith",
        role: "Deaconess",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "jane.smith@stmarys.org"
      }
    ],
    serviceTimes: [
      { day: "Sunday", time: "8:00 AM", type: "Holy Communion" },
      { day: "Sunday", time: "10:00 AM", type: "Sung Eucharist" },
      { day: "Thursday", time: "7:00 PM", type: "Evening Prayer" }
    ],
    ministries: ["Choir", "Sunday School", "Missions", "Care Ministry"],
    accentColor: "#059669",
    parkingInfo: "Limited parking available in the front of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "3",
    name: "Sacred Heart Catholic Church",
    denomination: "Catholic",
    distance: "2.1 km",
    nextService: "Saturday, 5:00 PM",
    image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800",
    description: "A Catholic parish serving the community with faith, hope, and love.",
    mission: "To proclaim the gospel of Jesus Christ and to serve the needs of our community.",
    vision: "A community where faith and love are lived out in every aspect of life.",
    address: "789 Cathedral Lane, Westside",
    phone: "+1 (555) 345-6789",
    email: "parish@sacredheart.org",
    website: "sacredheart.org",
    lat: 40.7489,
    lng: -73.9680,
    hasLivestream: true,
    pastor: {
      name: "Fr. David Martinez",
      role: "Parish Priest",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "Fr. David Martinez has been serving as the Parish Priest of Sacred Heart Catholic Church for 8 years. He is dedicated to fostering a community of faith and service."
    },
    clergy: [
      {
        name: "Sister Maria Rodriguez",
        role: "Deaconess",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "maria.rodriguez@sacredheart.org"
      }
    ],
    serviceTimes: [
      { day: "Saturday", time: "5:00 PM", type: "Vigil Mass" },
      { day: "Sunday", time: "8:00 AM", type: "Morning Mass" },
      { day: "Sunday", time: "10:30 AM", type: "Family Mass" },
      { day: "Sunday", time: "12:30 PM", type: "Spanish Mass" }
    ],
    ministries: ["RCIA", "Youth Group", "St. Vincent de Paul", "Adoration"],
    accentColor: "#DC2626",
    parkingInfo: "Free parking available in the rear of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "4",
    name: "New Life Baptist Church",
    denomination: "Baptist",
    distance: "3.4 km",
    nextService: "Sunday, 11:00 AM",
    image: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800",
    description: "Building disciples and transforming lives through the gospel.",
    mission: "To glorify God and serve our neighbors through worship, prayer, and service.",
    vision: "A community where faith and love are lived out in every aspect of life.",
    address: "321 Hope Boulevard, Eastside",
    phone: "+1 (555) 456-7890",
    email: "welcome@newlifebaptist.org",
    website: "newlifebaptist.org",
    lat: 40.7282,
    lng: -73.9942,
    hasLivestream: true,
    pastor: {
      name: "Pastor John Williams",
      role: "Lead Pastor",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      bio: "Pastor John Williams has been serving as the Lead Pastor of New Life Baptist Church for 7 years. He is dedicated to fostering a community of faith and service."
    },
    clergy: [
      {
        name: "Sister Sarah Johnson",
        role: "Associate Pastor",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "sarah.johnson@newlifebaptist.org"
      }
    ],
    serviceTimes: [
      { day: "Sunday", time: "9:30 AM", type: "Sunday School" },
      { day: "Sunday", time: "11:00 AM", type: "Worship Service" },
      { day: "Sunday", time: "6:00 PM", type: "Evening Service" }
    ],
    ministries: ["Missions", "College Ministry", "Seniors", "Discipleship"],
    accentColor: "#0891B2",
    parkingInfo: "Free parking available in the rear of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "5",
    name: "Seventh-day Adventist Church",
    denomination: "Adventist",
    distance: "4.0 km",
    nextService: "Saturday, 9:30 AM",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    description: "Keeping the Sabbath holy and sharing Christ's soon return.",
    mission: "To glorify God and serve our neighbors through worship, prayer, and service.",
    vision: "A community where faith and love are lived out in every aspect of life.",
    address: "555 Sabbath Street, Northside",
    phone: "+1 (555) 567-8901",
    email: "info@sdachurch.org",
    website: "sdachurch.org",
    lat: 40.7589,
    lng: -73.9851,
    hasLivestream: true,
    pastor: {
      name: "Pastor Samuel Anderson",
      role: "Senior Pastor",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
      bio: "Pastor Samuel Anderson has been serving as the Senior Pastor of Seventh-day Adventist Church for 6 years. He is dedicated to fostering a community of faith and service."
    },
    clergy: [
      {
        name: "Sister Linda Brown",
        role: "Associate Pastor",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "linda.brown@sdachurch.org"
      }
    ],
    serviceTimes: [
      { day: "Saturday", time: "9:30 AM", type: "Sabbath School" },
      { day: "Saturday", time: "11:00 AM", type: "Divine Service" },
      { day: "Wednesday", time: "7:00 PM", type: "Prayer Meeting" }
    ],
    ministries: ["Health Ministry", "Pathfinders", "Community Services", "Education"],
    accentColor: "#7C3AED",
    parkingInfo: "Free parking available in the rear of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  },
  {
    id: "6",
    name: "Zion African Methodist Episcopal",
    denomination: "African-initiated",
    distance: "2.8 km",
    nextService: "Sunday, 10:30 AM",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    description: "An historic African-American church rooted in faith and community.",
    mission: "To glorify God and serve our neighbors through worship, prayer, and service.",
    vision: "A community where faith and love are lived out in every aspect of life.",
    address: "888 Freedom Way, Southside",
    phone: "+1 (555) 678-9012",
    email: "contact@zionAME.org",
    website: "zionAME.org",
    lat: 40.7380,
    lng: -73.9916,
    hasLivestream: true,
    pastor: {
      name: "Rev. Dr. Patricia Johnson",
      role: "Presiding Elder",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      bio: "Rev. Dr. Patricia Johnson has been serving as the Presiding Elder of Zion African Methodist Episcopal for 9 years. She is dedicated to fostering a community of faith and service."
    },
    clergy: [
      {
        name: "Sister Mary Davis",
        role: "Associate Pastor",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        email: "mary.davis@zionAME.org"
      }
    ],
    serviceTimes: [
      { day: "Sunday", time: "8:00 AM", type: "Early Service" },
      { day: "Sunday", time: "10:30 AM", type: "Celebration Service" },
      { day: "Tuesday", time: "6:30 PM", type: "Bible Study" }
    ],
    ministries: ["Social Justice", "Music Ministry", "Men's Fellowship", "Women's Ministry"],
    accentColor: "#F59E0B",
    parkingInfo: "Free parking available in the rear of the building.",
    accessibilityInfo: "Wheelchair accessible entrance and restrooms.",
    officeHours: "Monday-Friday, 9:00 AM - 5:00 PM"
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Youth Revival Night",
    church: "Grace Community Church",
    denomination: "Pentecostal",
    date: "Jan 25, 2026",
    time: "7:00 PM",
    description: "A special night of worship and teaching for youth and young adults.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800"
  },
  {
    id: "2",
    title: "Community Food Drive",
    church: "Sacred Heart Catholic Church",
    denomination: "Catholic",
    date: "Jan 27, 2026",
    time: "10:00 AM",
    description: "Join us in serving our community by collecting and distributing food.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800"
  },
  {
    id: "3",
    title: "Easter Choir Practice",
    church: "St. Mary's Anglican Church",
    denomination: "Anglican",
    date: "Jan 28, 2026",
    time: "6:30 PM",
    description: "Preparing for Easter Sunday with weekly choir rehearsals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: "4",
    title: "Marriage Enrichment Workshop",
    church: "New Life Baptist Church",
    denomination: "Baptist",
    date: "Feb 1, 2026",
    time: "9:00 AM",
    description: "A day-long workshop for couples to strengthen their marriages.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
  }
];

export const sermons: Sermon[] = [
  {
    id: "1",
    title: "Walking in Faith",
    church: "Grace Community Church",
    speaker: "Rev. James Thompson",
    date: "Jan 21, 2026",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800",
    isLive: true,
    topic: "Faith"
  },
  {
    id: "2",
    title: "The Power of Prayer",
    church: "New Life Baptist Church",
    speaker: "Pastor John Williams",
    date: "Jan 21, 2026",
    duration: "38 min",
    thumbnail: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800",
    topic: "Prayer"
  },
  {
    id: "3",
    title: "Living in Community",
    church: "Sacred Heart Catholic Church",
    speaker: "Fr. David Martinez",
    date: "Jan 20, 2026",
    duration: "32 min",
    thumbnail: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800",
    topic: "Community"
  },
  {
    id: "4",
    title: "Hope for Tomorrow",
    church: "Seventh-day Adventist Church",
    speaker: "Pastor Samuel Anderson",
    date: "Jan 18, 2026",
    duration: "50 min",
    thumbnail: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    topic: "Hope"
  },
  {
    id: "5",
    title: "God's Love for All",
    church: "St. Mary's Anglican Church",
    speaker: "Fr. Michael Roberts",
    date: "Jan 14, 2026",
    duration: "28 min",
    thumbnail: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800",
    topic: "Love"
  },
  {
    id: "6",
    title: "Justice and Mercy",
    church: "Zion African Methodist Episcopal",
    speaker: "Rev. Dr. Patricia Johnson",
    date: "Jan 14, 2026",
    duration: "42 min",
    thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    topic: "Justice"
  }
];

export const denominations: Denomination[] = [
  {
    id: "1",
    name: "Pentecostal",
    description: "Churches emphasizing the baptism of the Holy Spirit, spiritual gifts, and dynamic worship.",
    beliefs: [
      "Baptism in the Holy Spirit",
      "Speaking in tongues",
      "Divine healing",
      "Biblical authority"
    ],
    churchCount: 1250
  },
  {
    id: "2",
    name: "Anglican",
    description: "Part of the worldwide Anglican Communion, blending Catholic and Reformed traditions.",
    beliefs: [
      "Scripture, Tradition, and Reason",
      "Sacramental worship",
      "Episcopal governance",
      "Book of Common Prayer"
    ],
    churchCount: 892
  },
  {
    id: "3",
    name: "Catholic",
    description: "The Roman Catholic Church, led by the Pope and rooted in ancient Christian tradition.",
    beliefs: [
      "Seven Sacraments",
      "Apostolic succession",
      "Sacred Tradition",
      "Communion of Saints"
    ],
    churchCount: 2340
  },
  {
    id: "4",
    name: "Baptist",
    description: "Churches emphasizing believer's baptism, congregational governance, and soul liberty.",
    beliefs: [
      "Believer's baptism by immersion",
      "Autonomy of local church",
      "Priesthood of all believers",
      "Separation of church and state"
    ],
    churchCount: 1680
  },
  {
    id: "5",
    name: "Adventist",
    description: "Seventh-day Adventist churches observing Saturday Sabbath and Christ's return.",
    beliefs: [
      "Seventh-day Sabbath",
      "Second Coming of Christ",
      "State of the dead",
      "Health message"
    ],
    churchCount: 445
  },
  {
    id: "6",
    name: "African-initiated",
    description: "Churches founded within African communities, blending Christian faith with cultural context.",
    beliefs: [
      "Contextual theology",
      "Community emphasis",
      "Prophetic ministry",
      "Social justice"
    ],
    churchCount: 723
  }
];

export const ministries = [
  "Youth Ministry",
  "Children's Church",
  "Worship Team",
  "Prayer Ministry",
  "Missions",
  "Community Outreach",
  "Men's Fellowship",
  "Women's Ministry",
  "Seniors",
  "College & Career",
  "Bible Study",
  "Discipleship"
];

export const devotional = {
  title: "Strength in Weakness",
  verse: "2 Corinthians 12:9",
  text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
  reflection: "Today, remember that God's strength shines brightest in our moments of weakness. When we feel inadequate, His grace is more than enough.",
  date: "January 24, 2026"
};

export interface CommunityProgram {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  contact: string;
}

export const communityPrograms: CommunityProgram[] = [
  {
    id: "1",
    title: "Community Food Bank",
    category: "Outreach & Charity",
    description: "Providing food assistance to families in need every Wednesday and Saturday.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
    contact: "foodbank@community.org"
  },
  {
    id: "2",
    title: "Free Health Clinic",
    category: "Health & Counseling",
    description: "Free medical screenings and health consultations every first Saturday.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    contact: "health@community.org"
  },
  {
    id: "3",
    title: "Refugee Support Services",
    category: "Outreach & Charity",
    description: "Supporting refugees and immigrants with resettlement, language classes, and job placement.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800",
    contact: "refugee@community.org"
  },
  {
    id: "4",
    title: "Youth Mentorship Program",
    category: "Community Programs",
    description: "Connecting young people with mentors for guidance and support.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800",
    contact: "youth@community.org"
  },
  {
    id: "5",
    title: "Counseling Services",
    category: "Health & Counseling",
    description: "Free pastoral counseling and mental health support for individuals and families.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    contact: "counseling@community.org"
  },
  {
    id: "6",
    title: "Volunteer Network",
    category: "Volunteer Opportunities",
    description: "Join our community of volunteers serving in various ministries and programs.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
    contact: "volunteer@community.org"
  },
  {
    id: "7",
    title: "Drop-in Center",
    category: "Outreach & Charity",
    description: "A safe space offering hot meals, showers, and support services for the homeless.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    contact: "dropin@community.org"
  },
  {
    id: "8",
    title: "Social Justice Initiatives",
    category: "Charity & Justice",
    description: "Advocating for justice, equality, and human rights in our community.",
    image: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=800",
    contact: "justice@community.org"
  }
];
