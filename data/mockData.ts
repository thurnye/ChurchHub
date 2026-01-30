// Mock data for the church aggregator app

export enum FeedSourceType {
  Church = 'church',
  Clergy = 'clergy',
  Group = 'group',
  Event = 'event',
  Individual = 'individual',
  Community = 'community',
}

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
  membersCount: number;
  memberCount: number;
  isVerified: boolean;
  postsCount: number;
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
    id: '1',
    name: 'Grace Community Church',
    denomination: 'Pentecostal',
    distance: '0.8 km',
    nextService: 'Today, 6:00 PM',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    description:
      'A vibrant community of believers passionate about worship and serving our city.',
    mission:
      'To glorify God by sharing the gospel and building a community of faith.',
    vision: 'A world where every person knows and loves Jesus Christ.',
    address: '123 Main Street, Downtown',
    phone: '+1 (555) 123-4567',
    email: 'info@gracecommunity.org',
    website: 'gracecommunity.org',
    lat: 40.7128,
    lng: -74.006,
    hasLivestream: true,
    pastor: {
      name: 'Rev. James Thompson',
      role: 'Senior Pastor',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Rev. James Thompson has been serving as the Senior Pastor of Grace Community Church for over 10 years. He is known for his dynamic preaching and commitment to building a strong, faith-based community.',
    },
    clergy: [
      {
        name: 'Sister Mary Johnson',
        role: 'Associate Pastor',
        photo:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        email: 'mary.johnson@gracecommunity.org',
      },
      {
        name: 'Brother David Lee',
        role: 'Youth Pastor',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'david.lee@gracecommunity.org',
      },
    ],
    serviceTimes: [
      { day: 'Sunday', time: '9:00 AM', type: 'Morning Worship' },
      { day: 'Sunday', time: '11:30 AM', type: 'Main Service' },
      { day: 'Wednesday', time: '6:00 PM', type: 'Bible Study' },
    ],
    ministries: ['Youth', 'Children', 'Worship', 'Outreach', 'Prayer'],
    accentColor: '#8B5CF6',
    parkingInfo: 'Free parking available in the rear of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
  {
    id: '2',
    name: "St. Mary's Anglican Church",
    denomination: 'Anglican',
    distance: '1.2 km',
    nextService: 'Sunday, 10:00 AM',
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    description:
      'A traditional Anglican parish with a warm, welcoming community.',
    mission:
      'To glorify God and serve our neighbors through worship, prayer, and service.',
    vision:
      'A community where faith and love are lived out in every aspect of life.',
    address: '456 Church Avenue, Midtown',
    phone: '+1 (555) 234-5678',
    email: 'contact@stmarys.org',
    website: 'stmarys.org',
    lat: 40.758,
    lng: -73.9855,
    hasLivestream: false,
    pastor: {
      name: 'Fr. Michael Roberts',
      role: 'Vicar',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: "Fr. Michael Roberts has been serving as the Vicar of St. Mary's Anglican Church for 5 years. He is dedicated to fostering a community of faith and service.",
    },
    clergy: [
      {
        name: 'Sister Jane Smith',
        role: 'Deaconess',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'jane.smith@stmarys.org',
      },
    ],
    serviceTimes: [
      { day: 'Sunday', time: '8:00 AM', type: 'Holy Communion' },
      { day: 'Sunday', time: '10:00 AM', type: 'Sung Eucharist' },
      { day: 'Thursday', time: '7:00 PM', type: 'Evening Prayer' },
    ],
    ministries: ['Choir', 'Sunday School', 'Missions', 'Care Ministry'],
    accentColor: '#059669',
    parkingInfo: 'Limited parking available in the front of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Sacred Heart Catholic Church',
    denomination: 'Catholic',
    distance: '2.1 km',
    nextService: 'Saturday, 5:00 PM',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    description:
      'A Catholic parish serving the community with faith, hope, and love.',
    mission:
      'To proclaim the gospel of Jesus Christ and to serve the needs of our community.',
    vision:
      'A community where faith and love are lived out in every aspect of life.',
    address: '789 Cathedral Lane, Westside',
    phone: '+1 (555) 345-6789',
    email: 'parish@sacredheart.org',
    website: 'sacredheart.org',
    lat: 40.7489,
    lng: -73.968,
    hasLivestream: true,
    pastor: {
      name: 'Fr. David Martinez',
      role: 'Parish Priest',
      photo:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Fr. David Martinez has been serving as the Parish Priest of Sacred Heart Catholic Church for 8 years. He is dedicated to fostering a community of faith and service.',
    },
    clergy: [
      {
        name: 'Sister Maria Rodriguez',
        role: 'Deaconess',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'maria.rodriguez@sacredheart.org',
      },
    ],
    serviceTimes: [
      { day: 'Saturday', time: '5:00 PM', type: 'Vigil Mass' },
      { day: 'Sunday', time: '8:00 AM', type: 'Morning Mass' },
      { day: 'Sunday', time: '10:30 AM', type: 'Family Mass' },
      { day: 'Sunday', time: '12:30 PM', type: 'Spanish Mass' },
    ],
    ministries: ['RCIA', 'Youth Group', 'St. Vincent de Paul', 'Adoration'],
    accentColor: '#DC2626',
    parkingInfo: 'Free parking available in the rear of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
  {
    id: '4',
    name: 'New Life Baptist Church',
    denomination: 'Baptist',
    distance: '3.4 km',
    nextService: 'Sunday, 11:00 AM',
    image: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    description:
      'Building disciples and transforming lives through the gospel.',
    mission:
      'To glorify God and serve our neighbors through worship, prayer, and service.',
    vision:
      'A community where faith and love are lived out in every aspect of life.',
    address: '321 Hope Boulevard, Eastside',
    phone: '+1 (555) 456-7890',
    email: 'welcome@newlifebaptist.org',
    website: 'newlifebaptist.org',
    lat: 40.7282,
    lng: -73.9942,
    hasLivestream: true,
    pastor: {
      name: 'Pastor John Williams',
      role: 'Lead Pastor',
      photo:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      bio: 'Pastor John Williams has been serving as the Lead Pastor of New Life Baptist Church for 7 years. He is dedicated to fostering a community of faith and service.',
    },
    clergy: [
      {
        name: 'Sister Sarah Johnson',
        role: 'Associate Pastor',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'sarah.johnson@newlifebaptist.org',
      },
    ],
    serviceTimes: [
      { day: 'Sunday', time: '9:30 AM', type: 'Sunday School' },
      { day: 'Sunday', time: '11:00 AM', type: 'Worship Service' },
      { day: 'Sunday', time: '6:00 PM', type: 'Evening Service' },
    ],
    ministries: ['Missions', 'College Ministry', 'Seniors', 'Discipleship'],
    accentColor: '#0891B2',
    parkingInfo: 'Free parking available in the rear of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
  {
    id: '5',
    name: 'Seventh-day Adventist Church',
    denomination: 'Adventist',
    distance: '4.0 km',
    nextService: 'Saturday, 9:30 AM',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    description: "Keeping the Sabbath holy and sharing Christ's soon return.",
    mission:
      'To glorify God and serve our neighbors through worship, prayer, and service.',
    vision:
      'A community where faith and love are lived out in every aspect of life.',
    address: '555 Sabbath Street, Northside',
    phone: '+1 (555) 567-8901',
    email: 'info@sdachurch.org',
    website: 'sdachurch.org',
    lat: 40.7589,
    lng: -73.9851,
    hasLivestream: true,
    pastor: {
      name: 'Pastor Samuel Anderson',
      role: 'Senior Pastor',
      photo:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
      bio: 'Pastor Samuel Anderson has been serving as the Senior Pastor of Seventh-day Adventist Church for 6 years. He is dedicated to fostering a community of faith and service.',
    },
    clergy: [
      {
        name: 'Sister Linda Brown',
        role: 'Associate Pastor',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'linda.brown@sdachurch.org',
      },
    ],
    serviceTimes: [
      { day: 'Saturday', time: '9:30 AM', type: 'Sabbath School' },
      { day: 'Saturday', time: '11:00 AM', type: 'Divine Service' },
      { day: 'Wednesday', time: '7:00 PM', type: 'Prayer Meeting' },
    ],
    ministries: [
      'Health Ministry',
      'Pathfinders',
      'Community Services',
      'Education',
    ],
    accentColor: '#7C3AED',
    parkingInfo: 'Free parking available in the rear of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
  {
    id: '6',
    name: 'Zion African Methodist Episcopal',
    denomination: 'African-initiated',
    distance: '2.8 km',
    nextService: 'Sunday, 10:30 AM',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    description:
      'An historic African-American church rooted in faith and community.',
    mission:
      'To glorify God and serve our neighbors through worship, prayer, and service.',
    vision:
      'A community where faith and love are lived out in every aspect of life.',
    address: '888 Freedom Way, Southside',
    phone: '+1 (555) 678-9012',
    email: 'contact@zionAME.org',
    website: 'zionAME.org',
    lat: 40.738,
    lng: -73.9916,
    hasLivestream: true,
    pastor: {
      name: 'Rev. Dr. Patricia Johnson',
      role: 'Presiding Elder',
      photo:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Rev. Dr. Patricia Johnson has been serving as the Presiding Elder of Zion African Methodist Episcopal for 9 years. She is dedicated to fostering a community of faith and service.',
    },
    clergy: [
      {
        name: 'Sister Mary Davis',
        role: 'Associate Pastor',
        photo:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        email: 'mary.davis@zionAME.org',
      },
    ],
    serviceTimes: [
      { day: 'Sunday', time: '8:00 AM', type: 'Early Service' },
      { day: 'Sunday', time: '10:30 AM', type: 'Celebration Service' },
      { day: 'Tuesday', time: '6:30 PM', type: 'Bible Study' },
    ],
    ministries: [
      'Social Justice',
      'Music Ministry',
      "Men's Fellowship",
      "Women's Ministry",
    ],
    accentColor: '#F59E0B',
    parkingInfo: 'Free parking available in the rear of the building.',
    accessibilityInfo: 'Wheelchair accessible entrance and restrooms.',
    officeHours: 'Monday-Friday, 9:00 AM - 5:00 PM',
    postsCount: Math.floor(Math.random() * 200),
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Youth Revival Night',
    church: 'Grace Community Church',
    denomination: 'Pentecostal',
    date: 'Jan 25, 2026',
    time: '7:00 PM',
    description:
      'A special night of worship and teaching for youth and young adults.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
  },
  {
    id: '2',
    title: 'Community Food Drive',
    church: 'Sacred Heart Catholic Church',
    denomination: 'Catholic',
    date: 'Jan 27, 2026',
    time: '10:00 AM',
    description:
      'Join us in serving our community by collecting and distributing food.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
  },
  {
    id: '3',
    title: 'Easter Choir Practice',
    church: "St. Mary's Anglican Church",
    denomination: 'Anglican',
    date: 'Jan 28, 2026',
    time: '6:30 PM',
    description: 'Preparing for Easter Sunday with weekly choir rehearsals.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
  {
    id: '4',
    title: 'Marriage Enrichment Workshop',
    church: 'New Life Baptist Church',
    denomination: 'Baptist',
    date: 'Feb 1, 2026',
    time: '9:00 AM',
    description:
      'A day-long workshop for couples to strengthen their marriages.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
  },
];

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Faith',
    church: 'Grace Community Church',
    speaker: 'Rev. James Thompson',
    date: 'Jan 21, 2026',
    duration: '45 min',
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    isLive: true,
    topic: 'Faith',
  },
  {
    id: '2',
    title: 'The Power of Prayer',
    church: 'New Life Baptist Church',
    speaker: 'Pastor John Williams',
    date: 'Jan 21, 2026',
    duration: '38 min',
    thumbnail:
      'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    topic: 'Prayer',
  },
  {
    id: '3',
    title: 'Living in Community',
    church: 'Sacred Heart Catholic Church',
    speaker: 'Fr. David Martinez',
    date: 'Jan 20, 2026',
    duration: '32 min',
    thumbnail:
      'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    topic: 'Community',
  },
  {
    id: '4',
    title: 'Hope for Tomorrow',
    church: 'Seventh-day Adventist Church',
    speaker: 'Pastor Samuel Anderson',
    date: 'Jan 18, 2026',
    duration: '50 min',
    thumbnail:
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    topic: 'Hope',
  },
  {
    id: '5',
    title: "God's Love for All",
    church: "St. Mary's Anglican Church",
    speaker: 'Fr. Michael Roberts',
    date: 'Jan 14, 2026',
    duration: '28 min',
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    topic: 'Love',
  },
  {
    id: '6',
    title: 'Justice and Mercy',
    church: 'Zion African Methodist Episcopal',
    speaker: 'Rev. Dr. Patricia Johnson',
    date: 'Jan 14, 2026',
    duration: '42 min',
    thumbnail:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    topic: 'Justice',
  },
];

export const denominations: Denomination[] = [
  {
    id: '1',
    name: 'Pentecostal',
    description:
      'Churches emphasizing the baptism of the Holy Spirit, spiritual gifts, and dynamic worship.',
    beliefs: [
      'Baptism in the Holy Spirit',
      'Speaking in tongues',
      'Divine healing',
      'Biblical authority',
    ],
    churchCount: 1250,
  },
  {
    id: '2',
    name: 'Anglican',
    description:
      'Part of the worldwide Anglican Communion, blending Catholic and Reformed traditions.',
    beliefs: [
      'Scripture, Tradition, and Reason',
      'Sacramental worship',
      'Episcopal governance',
      'Book of Common Prayer',
    ],
    churchCount: 892,
  },
  {
    id: '3',
    name: 'Catholic',
    description:
      'The Roman Catholic Church, led by the Pope and rooted in ancient Christian tradition.',
    beliefs: [
      'Seven Sacraments',
      'Apostolic succession',
      'Sacred Tradition',
      'Communion of Saints',
    ],
    churchCount: 2340,
  },
  {
    id: '4',
    name: 'Baptist',
    description:
      "Churches emphasizing believer's baptism, congregational governance, and soul liberty.",
    beliefs: [
      "Believer's baptism by immersion",
      'Autonomy of local church',
      'Priesthood of all believers',
      'Separation of church and state',
    ],
    churchCount: 1680,
  },
  {
    id: '5',
    name: 'Adventist',
    description:
      "Seventh-day Adventist churches observing Saturday Sabbath and Christ's return.",
    beliefs: [
      'Seventh-day Sabbath',
      'Second Coming of Christ',
      'State of the dead',
      'Health message',
    ],
    churchCount: 445,
  },
  {
    id: '6',
    name: 'African-initiated',
    description:
      'Churches founded within African communities, blending Christian faith with cultural context.',
    beliefs: [
      'Contextual theology',
      'Community emphasis',
      'Prophetic ministry',
      'Social justice',
    ],
    churchCount: 723,
  },
];

export const ministries = [
  'Youth Ministry',
  "Children's Church",
  'Worship Team',
  'Prayer Ministry',
  'Missions',
  'Community Outreach',
  "Men's Fellowship",
  "Women's Ministry",
  'Seniors',
  'College & Career',
  'Bible Study',
  'Discipleship',
];

export const devotional = {
  title: 'Strength in Weakness',
  verse: '2 Corinthians 12:9',
  text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
  reflection:
    "Today, remember that God's strength shines brightest in our moments of weakness. When we feel inadequate, His grace is more than enough.",
  date: 'January 24, 2026',
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
    id: '1',
    title: 'Community Food Bank',
    category: 'Outreach & Charity',
    description:
      'Providing food assistance to families in need every Wednesday and Saturday.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
    contact: 'foodbank@community.org',
  },
  {
    id: '2',
    title: 'Free Health Clinic',
    category: 'Health & Counseling',
    description:
      'Free medical screenings and health consultations every first Saturday.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    contact: 'health@community.org',
  },
  {
    id: '3',
    title: 'Refugee Support Services',
    category: 'Outreach & Charity',
    description:
      'Supporting refugees and immigrants with resettlement, language classes, and job placement.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
    contact: 'refugee@community.org',
  },
  {
    id: '4',
    title: 'Youth Mentorship Program',
    category: 'Community Programs',
    description:
      'Connecting young people with mentors for guidance and support.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    contact: 'youth@community.org',
  },
  {
    id: '5',
    title: 'Counseling Services',
    category: 'Health & Counseling',
    description:
      'Free pastoral counseling and mental health support for individuals and families.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
    contact: 'counseling@community.org',
  },
  {
    id: '6',
    title: 'Volunteer Network',
    category: 'Volunteer Opportunities',
    description:
      'Join our community of volunteers serving in various ministries and programs.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    contact: 'volunteer@community.org',
  },
  {
    id: '7',
    title: 'Drop-in Center',
    category: 'Outreach & Charity',
    description:
      'A safe space offering hot meals, showers, and support services for the homeless.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    contact: 'dropin@community.org',
  },
  {
    id: '8',
    title: 'Social Justice Initiatives',
    category: 'Charity & Justice',
    description:
      'Advocating for justice, equality, and human rights in our community.',
    image: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=800',
    contact: 'justice@community.org',
  },
];

export interface ChurchGroup {
  id: string;
  name: string;
  church: string;
  description: string;
  image: string;
  leaders: { name: string; role: string }[];
  meetingSchedule: string;
  memberCount: number;
  category: string;
}

export const churchGroups: ChurchGroup[] = [
  {
    id: '1',
    name: 'Young Adults Fellowship',
    church: 'Grace Community Church',
    description:
      'A community for young adults (18-35) to grow in faith together through fellowship, Bible study, and service.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
    leaders: [
      { name: 'Sarah Mitchell', role: 'Group Leader' },
      { name: 'David Chen', role: 'Co-Leader' },
    ],
    meetingSchedule: 'Fridays at 7:00 PM',
    memberCount: 45,
    category: 'Young Adults',
  },
  {
    id: '2',
    name: "Women's Prayer Circle",
    church: 'Sacred Heart Catholic Church',
    description:
      'Join us for weekly prayer, encouragement, and spiritual growth.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    leaders: [{ name: 'Sister Maria Rodriguez', role: 'Facilitator' }],
    meetingSchedule: 'Tuesdays at 10:00 AM',
    memberCount: 28,
    category: "Women's Ministry",
  },
  {
    id: '3',
    name: "Men's Breakfast Club",
    church: 'New Life Baptist Church',
    description:
      'Men gathering for fellowship, food, and faith-building discussions.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    leaders: [
      { name: 'Pastor John Williams', role: 'Leader' },
      { name: 'Michael Brown', role: 'Coordinator' },
    ],
    meetingSchedule: 'Saturdays at 8:00 AM',
    memberCount: 32,
    category: "Men's Ministry",
  },
  {
    id: '4',
    name: 'Youth Worship Band',
    church: 'Grace Community Church',
    description: 'For teens passionate about worship and music ministry.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    leaders: [
      { name: 'Brother David Lee', role: 'Youth Pastor' },
      { name: 'Emily Johnson', role: 'Music Director' },
    ],
    meetingSchedule: 'Wednesdays at 6:00 PM',
    memberCount: 18,
    category: 'Youth & Music',
  },
];

export interface Conference {
  id: string;
  title: string;
  theme: string;
  church: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  speakers: string[];
  registrationFee: string;
  accommodation: string;
}

export const conferences: Conference[] = [
  {
    id: '1',
    title: 'Spring Faith Conference 2026',
    theme: 'Renewed in Spirit',
    church: 'Grace Community Church',
    dates: 'March 14-16, 2026',
    location: 'Grace Community Center, Downtown',
    description:
      'Three days of powerful worship, teaching, and fellowship to renew your faith.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    speakers: [
      'Rev. James Thompson',
      'Dr. Sarah Williams',
      'Pastor Michael Chen',
    ],
    registrationFee: '$75 (Early bird: $60)',
    accommodation: 'Hotel partnerships available. Contact for details.',
  },
  {
    id: '2',
    title: 'Youth Summer Retreat',
    theme: 'Called to Serve',
    church: 'New Life Baptist Church',
    dates: 'July 5-8, 2026',
    location: 'Lakeside Retreat Center',
    description:
      'A transformative retreat for youth to encounter God in nature.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
    speakers: ['Brother David Lee', 'Sister Rachel Anderson'],
    registrationFee: '$125 (includes meals and lodging)',
    accommodation: 'Cabin-style lodging included in registration.',
  },
];

export interface VolunteerProgram {
  id: string;
  title: string;
  church: string;
  description: string;
  image: string;
  timeCommitment: string;
  skillsNeeded: string[];
  coordinator: string;
  category: string;
}

export const volunteerPrograms: VolunteerProgram[] = [
  {
    id: '1',
    title: 'Sunday School Teacher',
    church: 'Grace Community Church',
    description:
      "Teach children ages 5-10 about God's love through engaging lessons and activities.",
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    timeCommitment: 'Sundays 9:00-10:30 AM',
    skillsNeeded: ['Passion for children', 'Patience', 'Basic Bible knowledge'],
    coordinator: 'sarah.mitchell@gracecommunity.org',
    category: "Children's Ministry",
  },
  {
    id: '2',
    title: 'Worship Team Musician',
    church: 'Grace Community Church',
    description:
      'Join our worship band and use your musical gifts to lead the congregation in praise.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    timeCommitment: 'Sundays + Weekly practice',
    skillsNeeded: ['Musical ability', 'Team player', 'Heart for worship'],
    coordinator: 'worship@gracecommunity.org',
    category: 'Music Ministry',
  },
  {
    id: '3',
    title: 'Food Bank Coordinator',
    church: 'Sacred Heart Catholic Church',
    description: 'Help organize and distribute food to families in need.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
    timeCommitment: 'Saturdays 9:00 AM - 1:00 PM',
    skillsNeeded: ['Organization', 'Compassion', 'Physical ability'],
    coordinator: 'foodbank@sacredheart.org',
    category: 'Outreach',
  },
];

export interface Career {
  id: string;
  title: string;
  church: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
  location: string;
  postedDate: string;
}

export const careers: Career[] = [
  {
    id: '1',
    title: 'Youth Ministry Director',
    church: 'Grace Community Church',
    department: 'Youth Ministry',
    type: 'Full-time',
    description:
      'Lead and develop our youth ministry program for ages 13-18, creating engaging events and discipleship opportunities.',
    requirements: [
      "Bachelor's degree in Theology or related field",
      '3+ years youth ministry experience',
      'Strong leadership and communication skills',
      'Heart for reaching young people',
    ],
    location: 'Downtown Campus',
    postedDate: 'Jan 15, 2026',
  },
  {
    id: '2',
    title: 'Worship Leader (Part-time)',
    church: 'New Life Baptist Church',
    department: 'Worship Ministry',
    type: 'Part-time',
    description:
      'Lead Sunday worship services and coordinate the worship team.',
    requirements: [
      'Strong vocal and instrumental skills',
      'Experience leading worship',
      'Team leadership ability',
      'Commitment to spiritual growth',
    ],
    location: 'Eastside Campus',
    postedDate: 'Jan 10, 2026',
  },
];

export interface Notification {
  id: string;
  title: string;
  message: string;
  source: string;
  sourceType: 'church' | 'pastor' | 'group' | 'event';
  timestamp: string;
  read: boolean;
  actionType?: 'view_event' | 'watch' | 'reply' | 'rsvp';
  actionLabel?: string;
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Sunday Service Reminder',
    message:
      "Join us tomorrow at 11:30 AM for our main service. Rev. James Thompson will be preaching on 'Walking in Faith'.",
    source: 'Grace Community Church',
    sourceType: 'church',
    timestamp: '2 hours ago',
    read: false,
    actionType: 'view_event',
    actionLabel: 'View Details',
  },
  {
    id: '2',
    title: 'New Sermon Available',
    message:
      "Pastor John Williams' latest sermon 'The Power of Prayer' is now available to watch.",
    source: 'New Life Baptist Church',
    sourceType: 'pastor',
    timestamp: '5 hours ago',
    read: false,
    actionType: 'watch',
    actionLabel: 'Watch Now',
  },
  {
    id: '3',
    title: 'Group Meeting Update',
    message:
      'Our Young Adults Fellowship meeting has been moved to Friday 7:30 PM this week.',
    source: 'Young Adults Fellowship',
    sourceType: 'group',
    timestamp: '1 day ago',
    read: true,
  },
  {
    id: '4',
    title: 'Event Registration Confirmed',
    message:
      "You're registered for the Spring Faith Conference 2026. See you there!",
    source: 'Grace Community Church',
    sourceType: 'event',
    timestamp: '2 days ago',
    read: true,
    actionType: 'view_event',
    actionLabel: 'View Event',
  },
];

export interface IProfileData {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  postsCount: number;
  membersCount: number;
  memberCount: number;
  isVerified?: boolean;
  sourceType: FeedSourceType;
  posts: IPost[];
}

export const userProfiles = [
  {
    id: 'user-101',
    name: 'Daniel Okafor',
    username: '@danielokafor',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    bio: 'Learning, building, and sharing faith-filled moments. 🙏🏾✨',
    postsCount: 38,
    membersCount: 1120,
    memberCount: 248,
    isVerified: false,
  },
  {
    id: 'user-102',
    name: 'Amina Bello',
    username: '@aminabello',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    bio: 'Faith, service, and small acts of kindness. 🌿💛',
    postsCount: 54,
    membersCount: 2040,
    memberCount: 412,
    isVerified: true,
  },
];

export interface PrayerRequest {
  id: string;
  title: string;
  message: string;
  submittedBy: string;
  anonymous: boolean;
  visibility: (
    | 'everyone'
    | 'pastor_only'
    | 'clergy'
    | 'groups'
    | 'church_units'
  )[];
  targetGroups?: string[];
  targetClergy?: string[];
  targetChurches?: string[];
  status: 'praying' | 'answered';
  timestamp: string;
  responseCount: number;
}

export const prayerRequests: PrayerRequest[] = [
  {
    id: '1',
    title: 'Healing for My Mother',
    message:
      'Please pray for my mother who is recovering from surgery. Pray for complete healing and strength.',
    submittedBy: 'Sarah M.',
    anonymous: false,
    visibility: ['everyone'],
    status: 'praying',
    timestamp: '2 hours ago',
    responseCount: 15,
  },
  {
    id: '2',
    title: 'Job Search Guidance',
    message:
      "I'm seeking God's direction in my career path. Praying for doors to open.",
    submittedBy: 'Anonymous',
    anonymous: true,
    visibility: ['pastor_only', 'clergy'],
    targetClergy: ['Rev. James Thompson', 'Sister Mary Johnson'],
    status: 'praying',
    timestamp: '1 day ago',
    responseCount: 3,
  },
  {
    id: '3',
    title: 'Thanksgiving for Answered Prayer',
    message:
      'My family has been reunited after years apart. Thank you all for your prayers!',
    submittedBy: 'Michael B.',
    anonymous: false,
    visibility: ['everyone'],
    status: 'answered',
    timestamp: '3 days ago',
    responseCount: 42,
  },
];

export interface ExtendedDevotional {
  id: string;
  title: string;
  date: string;
  verse: string;
  verseText: string;
  reflection: string;
  author: string;
  audioUrl?: string;
  category: string;
}

export const devotionals: ExtendedDevotional[] = [
  {
    id: '1',
    title: 'Strength in Weakness',
    date: 'January 26, 2026',
    verse: '2 Corinthians 12:9',
    verseText:
      "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
    reflection:
      "Today, remember that God's strength shines brightest in our moments of weakness. When we feel inadequate, His grace is more than enough. Embrace your weakness as an opportunity for God's power to be revealed.",
    author: 'Rev. James Thompson',
    audioUrl: 'https://example.com/audio/devotional-1.mp3',
    category: 'Faith',
  },
  {
    id: '2',
    title: 'The Gift of Today',
    date: 'January 25, 2026',
    verse: 'Psalm 118:24',
    verseText:
      'This is the day that the Lord has made; let us rejoice and be glad in it.',
    reflection:
      'Each day is a precious gift from God. Instead of worrying about tomorrow or dwelling on yesterday, focus on the present moment. Find joy in the simple blessings around you today.',
    author: 'Sister Mary Johnson',
    category: 'Gratitude',
  },
  {
    id: '3',
    title: 'Love Without Limits',
    date: 'January 24, 2026',
    verse: '1 Corinthians 13:4-7',
    verseText:
      'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.',
    reflection:
      "True love mirrors God's unconditional love for us. It requires patience, kindness, and selflessness. Today, ask God to help you love others the way He loves you.",
    author: 'Fr. David Martinez',
    audioUrl: 'https://example.com/audio/devotional-3.mp3',
    category: 'Love',
  },
];

export interface Story {
  id: string;
  churchId: string;
  churchName: string;
  avatar: string;
  image: string;
  timestamp: string;
  hasNew: boolean;
  ctaLabel?: string;
  ctaRoute?: string;
}

export const Stories: Story[] = [
  {
    avatar:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    churchId: '1',
    churchName: 'Grace Community Church',
    ctaLabel: 'Watch Live',
    ctaRoute: '/church/1',
    hasNew: true,
    id: 'story-1',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    timestamp: '2h ago',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    churchId: '2',
    churchName: "St. Mary's Anglican Church",
    ctaLabel: 'View Church',
    ctaRoute: '/church/2',
    hasNew: true,
    id: 'story-2',
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    timestamp: '5h ago',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    churchId: '3',
    churchName: 'Sacred Heart Catholic Church',
    ctaLabel: 'Watch Live',
    ctaRoute: '/church/3',
    hasNew: true,
    id: 'story-3',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    timestamp: '1d ago',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    churchId: '4',
    churchName: 'New Life Baptist Church',
    ctaLabel: 'Watch Live',
    ctaRoute: '/church/4',
    hasNew: false,
    id: 'story-4',
    image: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    timestamp: '1d ago',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    churchId: '5',
    churchName: 'Seventh-day Adventist Church',
    ctaLabel: 'Watch Live',
    ctaRoute: '/church/5',
    hasNew: false,
    id: 'story-5',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    timestamp: '1d ago',
  },
];

export interface FeedItem {
  id: string;
  kind: 'video' | 'image' | 'live' | 'quote';
  thumbnail: string;
  postOwner: string;
  denomination?: string;
  title?: string;
  speaker?: string;
  description?: string;
  isLive?: boolean;
  viewerCount?: number;
  sourceType: FeedSourceType;
  sourceId: string;
  primaryRoute: { pathname: string; params: Record<string, any> };
  hasAudio?: boolean;
}

export const FeedItems: FeedItem[] = [
  {
    description: 'Love • 28 min',
    hasAudio: true,
    id: 'sermon-5',
    kind: 'video',
    postOwner: "St. Mary's Anglican Church",
    primaryRoute: { params: [Object], pathname: '/media-player/[id]' },
    sourceId: '2',
    sourceType: FeedSourceType.Church,
    speaker: 'Fr. Michael Roberts',
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    title: "God's Love for All",
  },
  {
    id: 'post-101-1',
    kind: 'quote',
    thumbnail:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    postOwner: 'Daniel Okafor',
    title: '"Peace I leave with you; my peace I give you."',
    description: 'A reminder to breathe, pray, and trust the process.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-101',
    primaryRoute: { pathname: '/profile', params: { id: 'user-101' } },
    hasAudio: false,
  },
  {
    id: 'post-101-2',
    kind: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    postOwner: 'Daniel Okafor',
    title: 'Sunday reflections',
    description: 'Grateful for community, worship, and a fresh week.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-101',
    primaryRoute: { pathname: '/profile', params: { id: 'user-101' } },
    hasAudio: false,
  },
  {
    description: 'Community • 32 min',
    hasAudio: true,
    id: 'sermon-3',
    kind: 'video',
    postOwner: 'Sacred Heart Catholic Church',
    primaryRoute: { params: [Object], pathname: '/media-player/[id]' },
    sourceId: '3',
    sourceType: FeedSourceType.Church,
    speaker: 'Fr. David Martinez',
    thumbnail:
      'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    title: 'Living in Community',
  },
  {
    description: 'Faith • 45 min',
    hasAudio: true,
    id: 'sermon-1',
    isLive: true,
    kind: 'live',
    postOwner: 'Grace Community Church',
    primaryRoute: { params: [Object], pathname: '/profile' },
    sourceId: '1',
    sourceType: FeedSourceType.Church,
    speaker: 'Rev. James Thompson',
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    title: 'Walking in Faith',
    viewerCount: 194,
  },
  {
    denomination: 'Pentecostal',
    description: 'Jan 25, 2026 • 7:00 PM',
    id: 'event-1',
    kind: 'image',
    postOwner: 'Grace Community Church',
    primaryRoute: {
      params: {from: '/'},
      pathname: '/events/[eventId]',
      
    },
    sourceId: '1',
    sourceType: FeedSourceType.Event,
    thumbnail:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
    title: 'Youth Revival Night',
  },
  {
    denomination: 'Anglican',
    description: 'Jan 28, 2026 • 6:30 PM',
    id: 'event-3',
    kind: 'image',
    postOwner: "St. Mary's Anglican Church",
    primaryRoute: { params: {from: '/'}, pathname: '/events/[eventId]' },
    sourceId: '3',
    sourceType: FeedSourceType.Event,
    thumbnail:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    title: 'Easter Choir Practice',
  },
  {
    description: 'Justice • 42 min',
    hasAudio: true,
    id: 'sermon-6',
    kind: 'video',
    postOwner: 'Zion African Methodist Episcopal',
    primaryRoute: { params: [Object], pathname: '/media-player/[id]' },
    sourceId: '6',
    sourceType: FeedSourceType.Church,
    speaker: 'Rev. Dr. Patricia Johnson',
    thumbnail:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    title: 'Justice and Mercy',
  },
  {
    id: 'post-102-1',
    kind: 'video',
    thumbnail:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800',
    postOwner: 'Amina Bello',
    title: 'A short prayer for your week',
    description: 'If you’re overwhelmed, pause—God is with you.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-102',
    primaryRoute: { pathname: '/profile', params: { id: 'user-102' } },
    hasAudio: true,
  },
  {
    id: 'post-102-2',
    kind: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1520975958225-1a1fbd7f6d10?w=800',
    postOwner: 'Amina Bello',
    title: 'Community day',
    description: 'Serving together is worship too.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-102',
    primaryRoute: { pathname: '/profile', params: { id: 'user-102' } },
    hasAudio: false,
  },
  {
    description: 'Prayer • 38 min',
    hasAudio: true,
    id: 'sermon-2',
    kind: 'video',
    postOwner: 'New Life Baptist Church',
    primaryRoute: { params: [Object], pathname: '/media-player/[id]' },
    sourceId: '4',
    sourceType: FeedSourceType.Church,
    speaker: 'Pastor John Williams',
    thumbnail:
      'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    title: 'The Power of Prayer',
  },
  {
    id: 'post-101-1',
    kind: 'quote',
    thumbnail:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    postOwner: 'Daniel Okafor',
    title: '"Peace I leave with you; my peace I give you."',
    description: 'A reminder to breathe, pray, and trust the process.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-101',
    primaryRoute: { pathname: '/profile', params: { id: 'user-101' } },
    hasAudio: false,
  },
  {
    id: 'post-101-2',
    kind: 'image',
    thumbnail:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    postOwner: 'Daniel Okafor',
    title: 'Sunday reflections',
    description: 'Grateful for community, worship, and a fresh week.',
    sourceType: FeedSourceType.Individual,
    sourceId: 'user-101',
    primaryRoute: { pathname: '/profile', params: { id: 'user-101' } },
    hasAudio: false,
  },
  {
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptatem optio hic sequi at corrupti, numquam, fugiat commodi rerum maxime sed ducimus debitis, earum veniam facilis architecto et laboriosam repudiandae illo? Praesentium cum aut officia rem expedita aliquam, dicta fuga nulla quas! Dolores voluptatum at adipisci, vel dolorum aliquam ipsam?',
    id: 'quote-1',
    kind: 'quote',
    postOwner: 'Daily Inspiration',
    primaryRoute: { params: [Object], pathname: '/church/[id]' },
    sourceId: '1',
    sourceType: FeedSourceType.Individual,
    thumbnail:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title:
      '"My grace is sufficient for you, for my power is made perfect in weakness."',
  },
  {
    denomination: 'Catholic',
    description: 'Jan 27, 2026 • 10:00 AM',
    id: 'event-2',
    kind: 'image',
    postOwner: 'Sacred Heart Catholic Church',
    primaryRoute: { params: {from: '/'}, pathname: '/events/[eventId]' },
    sourceId: '2',
    sourceType: FeedSourceType.Event,
    thumbnail:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
    title: 'Community Food Drive',
  },
  {
    description: 'Hope • 50 min',
    hasAudio: true,
    id: 'sermon-4',
    kind: 'video',
    postOwner: 'Seventh-day Adventist Church',
    primaryRoute: { params: [Object], pathname: '/media-player/[id]' },
    sourceId: '5',
    sourceType: FeedSourceType.Church,
    speaker: 'Pastor Samuel Anderson',
    thumbnail:
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    title: 'Hope for Tomorrow',
  },
];

export interface IPost {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  likesCount: number;
  commentsCount: number;
  viewsCount?: number;
  description?: string;
  speaker?: string;
  isLive?: boolean;
  owner: {
    id: string;
  };
}

const Posts = [
  {
    commentsCount: 50,
    description: 'Today’s devotional hit differently. 📖✨',
    id: 'user-102-post-1',
    isLive: false,
    likesCount: 150,
    owner: { id: 'user-102' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520974735194-6f64a33d6b49?w=1200',
    type: 'video' as const,
    viewsCount: 7775,
  },
  {
    commentsCount: 6,
    description: 'Faith step by step — one day at a time.',
    id: 'user-102-post-5',
    isLive: false,
    likesCount: 454,
    owner: { id: 'user-102' },
    speaker: 'Pastor John Williams',
    thumbnail:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200',
    type: 'video' as const,
    viewsCount: 3695,
  },
  {
    commentsCount: 16,
    description: 'Grateful for church family and community.',
    id: 'user-101-post-1',
    isLive: undefined,
    likesCount: 344,
    owner: { id: 'user-101' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200',
    type: 'image' as const,
    viewsCount: 15470,
  },
  {
    commentsCount: 76,
    description: 'Youth fellowship energy — faith and fun.',
    id: '5-post-3',
    isLive: undefined,
    likesCount: 747,
    owner: { id: '5' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975958221-7087e3edb3c2?w=1200',
    type: 'image' as const,
    viewsCount: 11254,
  },
  {
    commentsCount: 71,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '2-post-3',
    isLive: undefined,
    likesCount: 73,
    owner: { id: '2' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'image' as const,
    viewsCount: 23618,
  },
  {
    commentsCount: 73,
    description: 'Youth fellowship energy — faith and fun.',
    id: '5-post-1',
    isLive: false,
    likesCount: 412,
    owner: { id: '5' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200',
    type: 'video' as const,
    viewsCount: 1299,
  },
  {
    commentsCount: 85,
    description: 'Community outreach — food drive and prayer.',
    id: '2-post-5',
    isLive: undefined,
    likesCount: 739,
    owner: { id: '2' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'image' as const,
    viewsCount: 16561,
  },
  {
    commentsCount: 14,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '1-post-6',
    isLive: undefined,
    likesCount: 273,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1542395975-1913c290082f?w=1200',
    type: 'image' as const,
    viewsCount: 20095,
  },
  {
    commentsCount: 39,
    description: 'Upcoming service reminder — join us live.',
    id: '5-post-4',
    isLive: undefined,
    likesCount: 369,
    owner: { id: '5' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=1200',
    type: 'image' as const,
    viewsCount: 21142,
  },
  {
    commentsCount: 107,
    description: 'Community outreach — food drive and prayer.',
    id: '3-post-3',
    isLive: undefined,
    likesCount: 665,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1542395975-1913c290082f?w=1200',
    type: 'image' as const,
    viewsCount: 21215,
  },
  {
    commentsCount: 58,
    description: 'Upcoming service reminder — join us live.',
    id: '5-post-2',
    isLive: false,
    likesCount: 365,
    owner: { id: '5' },
    speaker: 'Rev. James Thompson',
    thumbnail:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200',
    type: 'video' as const,
    viewsCount: 3664,
  },
  {
    commentsCount: 45,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '3-post-7',
    isLive: false,
    likesCount: 509,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'video' as const,
    viewsCount: 12002,
  },
  {
    commentsCount: 102,
    description: 'Faith step by step — one day at a time.',
    id: 'user-102-post-2',
    isLive: true,
    likesCount: 624,
    owner: { id: 'user-102' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'video' as const,
    viewsCount: 9277,
  },
  {
    commentsCount: 101,
    description: 'Faith step by step — one day at a time.',
    id: 'user-102-post-3',
    isLive: undefined,
    likesCount: 84,
    owner: { id: 'user-102' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=1200',
    type: 'image' as const,
    viewsCount: 6739,
  },
  {
    commentsCount: 87,
    description: 'Midweek Bible study recap. 📖',
    id: '2-post-4',
    isLive: false,
    likesCount: 383,
    owner: { id: '2' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200',
    type: 'video' as const,
    viewsCount: 6062,
  },
  {
    commentsCount: 34,
    description: 'Today’s devotional hit differently. 📖✨',
    id: 'user-102-post-6',
    isLive: false,
    likesCount: 283,
    owner: { id: 'user-102' },
    speaker: 'Pastor Samuel Anderson',
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200',
    type: 'video' as const,
    viewsCount: 720,
  },
  {
    commentsCount: 110,
    description: 'Upcoming service reminder — join us live.',
    id: '3-post-6',
    isLive: undefined,
    likesCount: 128,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'image' as const,
    viewsCount: 12498,
  },
  {
    commentsCount: 66,
    description: 'Community outreach — food drive and prayer.',
    id: '4-post-2',
    isLive: undefined,
    likesCount: 87,
    owner: { id: '4' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200',
    type: 'image' as const,
    viewsCount: 15071,
  },
  {
    commentsCount: 108,
    description: 'Sunday service highlights — worship and the Word.',
    id: '3-post-10',
    isLive: undefined,
    likesCount: 464,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200',
    type: 'image' as const,
    viewsCount: 6288,
  },
  {
    commentsCount: 105,
    description: 'Community outreach — food drive and prayer.',
    id: '4-post-1',
    isLive: false,
    likesCount: 142,
    owner: { id: '4' },
    speaker: 'Fr. David Martinez',
    thumbnail:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200',
    type: 'video' as const,
    viewsCount: 9963,
  },
  {
    commentsCount: 27,
    description: 'Today’s devotional hit differently. 📖✨',
    id: 'user-101-post-3',
    isLive: undefined,
    likesCount: 353,
    owner: { id: 'user-101' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'image' as const,
    viewsCount: 24049,
  },
  {
    commentsCount: 8,
    description: 'Community outreach — food drive and prayer.',
    id: '3-post-9',
    isLive: undefined,
    likesCount: 68,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'image' as const,
    viewsCount: 20681,
  },
  {
    commentsCount: 51,
    description: 'Sunday service highlights — worship and the Word.',
    id: '1-post-3',
    isLive: undefined,
    likesCount: 353,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=1200',
    type: 'image' as const,
    viewsCount: 2166,
  },
  {
    commentsCount: 65,
    description: 'Community outreach — food drive and prayer.',
    id: '1-post-2',
    isLive: false,
    likesCount: 688,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'video' as const,
    viewsCount: 10140,
  },
  {
    commentsCount: 39,
    description: 'Community outreach — food drive and prayer.',
    id: '3-post-4',
    isLive: false,
    likesCount: 472,
    owner: { id: '3' },
    speaker: 'Rev. Dr. Patricia Johnson',
    thumbnail:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
    type: 'video' as const,
    viewsCount: 10784,
  },
  {
    commentsCount: 96,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '2-post-1',
    isLive: undefined,
    likesCount: 198,
    owner: { id: '2' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?w=1200',
    type: 'image' as const,
    viewsCount: 12283,
  },
  {
    commentsCount: 111,
    description: 'Community outreach — food drive and prayer.',
    id: '3-post-2',
    isLive: false,
    likesCount: 265,
    owner: { id: '3' },
    speaker: 'Fr. Michael Roberts',
    thumbnail:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
    type: 'video' as const,
    viewsCount: 6433,
  },
  {
    commentsCount: 82,
    description: 'Faith step by step — one day at a time.',
    id: 'user-101-post-2',
    isLive: false,
    likesCount: 437,
    owner: { id: 'user-101' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'video' as const,
    viewsCount: 17559,
  },
  {
    commentsCount: 12,
    description: 'Youth fellowship energy — faith and fun.',
    id: '1-post-1',
    isLive: true,
    likesCount: 672,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200',
    type: 'video' as const,
    viewsCount: 12110,
  },
  {
    commentsCount: 36,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '6-post-2',
    isLive: false,
    likesCount: 239,
    owner: { id: '6' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200',
    type: 'video' as const,
    viewsCount: 2329,
  },
  {
    commentsCount: 78,
    description: 'Midweek Bible study recap. 📖',
    id: '3-post-1',
    isLive: false,
    likesCount: 69,
    owner: { id: '3' },
    speaker: 'Rev. Dr. Patricia Johnson',
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200',
    type: 'video' as const,
    viewsCount: 5896,
  },
  {
    commentsCount: 81,
    description: 'Community outreach — food drive and prayer.',
    id: '6-post-3',
    isLive: undefined,
    likesCount: 760,
    owner: { id: '6' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200',
    type: 'image' as const,
    viewsCount: 7352,
  },
  {
    commentsCount: 21,
    description: 'Choir rehearsal moments — praise night warmup.',
    id: '1-post-4',
    isLive: undefined,
    likesCount: 550,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200',
    type: 'image' as const,
    viewsCount: 23084,
  },
  {
    commentsCount: 84,
    description: 'Grateful for church family and community.',
    id: 'user-102-post-4',
    isLive: undefined,
    likesCount: 440,
    owner: { id: 'user-102' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200',
    type: 'image' as const,
    viewsCount: 7850,
  },
  {
    commentsCount: 118,
    description: 'Midweek Bible study recap. 📖',
    id: '1-post-5',
    isLive: undefined,
    likesCount: 315,
    owner: { id: '1' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975958221-7087e3edb3c2?w=1200',
    type: 'image' as const,
    viewsCount: 24837,
  },
  {
    commentsCount: 41,
    description: 'Community outreach — food drive and prayer.',
    id: '6-post-1',
    isLive: false,
    likesCount: 414,
    owner: { id: '6' },
    speaker: 'Rev. James Thompson',
    thumbnail:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200',
    type: 'video' as const,
    viewsCount: 23488,
  },
  {
    commentsCount: 57,
    description: 'A small reminder that God is still working. 🙏🏾',
    id: 'user-101-post-6',
    isLive: undefined,
    likesCount: 268,
    owner: { id: 'user-101' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=1200',
    type: 'image' as const,
    viewsCount: 13488,
  },
  {
    commentsCount: 89,
    description: 'Youth fellowship energy — faith and fun.',
    id: '2-post-2',
    isLive: undefined,
    likesCount: 422,
    owner: { id: '2' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1520975958221-7087e3edb3c2?w=1200',
    type: 'image' as const,
    viewsCount: 18043,
  },
  {
    commentsCount: 88,
    description: 'Community outreach — food drive and prayer.',
    id: '4-post-4',
    isLive: false,
    likesCount: 50,
    owner: { id: '4' },
    speaker: 'Rev. James Thompson',
    thumbnail:
      'https://images.unsplash.com/photo-1520974735194-6f64a33d6b49?w=1200',
    type: 'video' as const,
    viewsCount: 19212,
  },
  {
    commentsCount: 41,
    description: 'A small reminder that God is still working. 🙏🏾',
    id: 'user-101-post-5',
    isLive: false,
    likesCount: 129,
    owner: { id: 'user-101' },
    speaker: 'Pastor Samuel Anderson',
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'video' as const,
    viewsCount: 15746,
  },
  {
    commentsCount: 10,
    description: 'Youth fellowship energy — faith and fun.',
    id: '3-post-5',
    isLive: undefined,
    likesCount: 796,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200',
    type: 'image' as const,
    viewsCount: 20175,
  },
  {
    commentsCount: 0,
    description: 'Grateful for church family and community.',
    id: 'user-101-post-4',
    isLive: false,
    likesCount: 435,
    owner: { id: 'user-101' },
    speaker: 'Pastor John Williams',
    thumbnail:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200',
    type: 'video' as const,
    viewsCount: 8160,
  },
  {
    commentsCount: 45,
    description: 'Sunday service highlights — worship and the Word.',
    id: '3-post-8',
    isLive: false,
    likesCount: 561,
    owner: { id: '3' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200',
    type: 'video' as const,
    viewsCount: 1786,
  },
  {
    commentsCount: 78,
    description: 'Quick encouragement: keep going.',
    id: 'user-101-post-7',
    isLive: undefined,
    likesCount: 573,
    owner: { id: 'user-101' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200',
    type: 'image' as const,
    viewsCount: 6536,
  },
  {
    commentsCount: 49,
    description: 'Midweek Bible study recap. 📖',
    id: '4-post-3',
    isLive: undefined,
    likesCount: 705,
    owner: { id: '4' },
    speaker: undefined,
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'image' as const,
    viewsCount: 12203,
  },
  {
    commentsCount: 87,
    description: 'Today’s devotional hit differently. 📖✨',
    id: 'user-101-post-8',
    isLive: true,
    likesCount: 323,
    owner: { id: 'user-101' },
    speaker: 'Fr. David Martinez',
    thumbnail:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200',
    type: 'video' as const,
    viewsCount: 7553,
  },
];

export const ProfileData: IProfileData[] = [
  {
    id: '1',
    name: 'Grace Community Church',
    username: '@gracecommunitychurch',
    avatar:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    bio: 'A vibrant community of believers passionate about worship and serving our city. 🙏✨',
    postsCount: 247,
    membersCount: 18420,
    memberCount: 132,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '1'),
  },
  {
    id: '2',
    name: "St. Mary's Anglican Church",
    username: '@stmarysanglicanchurch',
    avatar:
      'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800',
    bio: 'A traditional Anglican parish with a warm, welcoming community. ⛪💚',
    postsCount: 193,
    membersCount: 12650,
    memberCount: 98,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '2'),
  },
  {
    id: '3',
    name: 'Sacred Heart Catholic Church',
    username: '@sacredheartcatholic',
    avatar: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800',
    bio: 'A Catholic parish serving the community with faith, hope, and love. ✝️❤️',
    postsCount: 312,
    membersCount: 22140,
    memberCount: 164,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '3'),
  },
  {
    id: '4',
    name: 'New Life Baptist Church',
    username: '@newlifebaptist',
    avatar:
      'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800',
    bio: 'Building disciples and transforming lives through the gospel. 🌱🔥',
    postsCount: 278,
    membersCount: 15780,
    memberCount: 121,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '4'),
  },
  {
    id: '5',
    name: 'Seventh-day Adventist Church',
    username: '@seventhdayadventist',
    avatar:
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    bio: "Keeping the Sabbath holy and sharing Christ's soon return. 🌅📖",
    postsCount: 201,
    membersCount: 13490,
    memberCount: 109,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '5'),
  },
  {
    id: '6',
    name: 'Zion African Methodist Episcopal',
    username: '@zionamechurch',
    avatar:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    bio: 'An historic African-American church rooted in faith and community. ✊🏾⛪',
    postsCount: 289,
    membersCount: 16930,
    memberCount: 143,
    isVerified: true,
    sourceType: FeedSourceType.Church,
    posts: Posts.filter((post) => post.owner.id === '6'),
  },
  {
    id: '1',
    name: 'Daily Inspiration',
    username: `@dailyInspiration`,
    avatar:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    bio: 'A vibrant community of believers passionate about worship and serving our city. 🙏✨',
    postsCount: 247,
    membersCount: Math.floor(Math.random() * 20000) + 5000,
    memberCount: Math.floor(Math.random() * 200) + 50,
    isVerified: true,
    sourceType: FeedSourceType.Individual,
    posts: Posts.filter((post) => post.owner.id === '1'),
  },
  {
    id: 'user-101',
    name: 'Daniel Okafor',
    username: '@danielokafor',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    bio: 'Learning, building, and sharing faith-filled moments. 🙏🏾✨',
    postsCount: 38,
    membersCount: 1120,
    memberCount: 248,
    isVerified: false,
    sourceType: FeedSourceType.Individual,
    posts: Posts.filter((post) => post.owner.id === 'user-101'),
  },
  {
    id: 'user-102',
    name: 'Amina Bello',
    username: '@aminabello',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    bio: 'Faith, service, and small acts of kindness. 🌿💛',
    postsCount: 54,
    membersCount: 2040,
    memberCount: 412,
    isVerified: true,
    sourceType: FeedSourceType.Individual,
    posts: Posts.filter((post) => post.owner.id === 'user-102'),
  },
];
