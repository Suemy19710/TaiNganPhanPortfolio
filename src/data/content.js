// All portfolio text lives here, so content can be updated without touching components.
import portrait from '../assets/portrait.jpg'
import cidKiosk from '../assets/cid-kiosk.png'
import cidTeam from '../assets/cid-team-stand.png'
import cidLogo from '../assets/cid-logo.png'
import tiktokProfile from '../assets/tiktok-profile.jpg'
import tiktokOverview from '../assets/tiktok-overview-365.jpg'
import tiktokViewers from '../assets/tiktok-viewers.jpg'
import tiktok60 from '../assets/tiktok-60-days.jpg'
import tiktokTopPosts from '../assets/tiktok-top-posts.jpg'
import cidCollaborations from '../assets/cid-collaborations.webp'
import cidOpenDay from '../assets/cid-open-day.webp'
import cidOoh from '../assets/cid-ooh-poster.webp'
import etWood from '../assets/et-wood.jpg'
import etFire from '../assets/et-fire.jpg'
import etEarth from '../assets/et-earth.jpg'
import etWater from '../assets/et-water.jpg'
import etMetal from '../assets/et-metal.jpg'
import etSketch from '../assets/et-sketch.jpg'
import etPoster from '../assets/et-poster.jpg'
import etMoodboard from '../assets/et-moodboard.jpg'
import etFocusGroup from '../assets/et-focus-group.webp'
import etAffinity from '../assets/et-affinity-map.webp'
import etDesk from '../assets/et-desk-observation.webp'
import vsnl1 from '../assets/vsnl-1.jpg'
import vsnl2 from '../assets/vsnl-2.jpg'
import vsnl3 from '../assets/vsnl-3.jpg'
import vsnl4 from '../assets/vsnl-4.jpg'
import vsnlGroup from '../assets/vsnl-group.webp'
import ksFacade from '../assets/ks-facade.jpg'
import ksInterior from '../assets/ks-interior.jpg'
import ksLogo from '../assets/ks-logo.png'
import ksChart from '../assets/ks-review-chart.png'
import ksReel from '../assets/ks-reel.png'
import ksPoster from '../assets/ks-poster.jpg'
import ksStoryboard from '../assets/ks-storyboard.jpg'
import certHague from '../assets/cert-hague.jpg'
import certGA from '../assets/cert-google-analytics.jpg'
import certDigital from '../assets/cert-hubspot-digital.jpg'
import certSocial from '../assets/cert-hubspot-social.jpg'

export const profile = {
  shortName: 'Tai Ngan Phan',
  fullName: 'Tai Ngan (Tiffany) Phan',
  firstName: 'Tai Ngan',
  lastName: 'Phan',
  status: 'Open to marketing & communication internships',
  portrait,
  email: 'phantaingan250511@gmail.com',
  phone: '+31 686 147 455',
  phoneRaw: '+31686147455',
  linkedin: 'https://www.linkedin.com/in/tai-ngan-phan-b40998332/',
  linkedinLabel: 'linkedin.com/in/tai-ngan-phan',
  location: 'Netherlands',
  footerTagline: 'Marketing & Communication · Netherlands',
}

export const facts = [
  { label: 'Based in', value: 'Netherlands' },
  { label: 'Studying', value: 'BA ICM · THUAS' },
  { label: 'Graduating', value: '2027' },
  { label: 'Languages', value: 'Vietnamese · English' },
]

export const tickerItems = [
  'Audience research',
  'Communication strategy',
  'Brand storytelling',
  'Competitor analysis',
  'Concept development',
  'Social media content',
  'Digital marketing',
]

export const about = {
  intro: 'Curious, adaptable and at my best when research becomes an idea that genuinely fits the audience.',
  paragraphs: [
    "I'm completing a Bachelor's degree in International Communication Management at The Hague University of Applied Sciences, with a strong interest in digital marketing, communication strategy and creative storytelling.",
    'Through client-based projects, freelance work and self-initiated case studies, I have built experience in audience research, communication strategy, concept development and digital content. I especially enjoy turning research and insights into creative ideas that are meaningful to the audience and practical to bring to life.',
    "I'm curious, adaptable and eager to keep learning while contributing to communication and marketing projects in an international environment.",
  ],
  seeking: {
    title: 'An internship in marketing or communication',
    roles: ['Marketing', 'Communication Strategy', 'Social media', 'Concept', 'Brand'],
    where: 'Anywhere in the Netherlands, working in-office with the team',
    strengths: 'Research-led thinking, clear messaging, hands-on content work',
  },
}

// Order follows the Canva portfolio: work experience, then projects one to three, then the self-initiated case.
export const cases = [
  {
    id: 'tiktok',
    kicker: 'Work experience',
    meta: ['Freelance · Remote · 2023–present', 'Client: Pet shop, Vietnam'],
    title: 'Freelance TikTok Content Support',
    sub: "Managing day-to-day publishing for a pet shop's channel",
    brief: [
      { k: 'What I do', v: "Since 2023, I have remotely supported a pet shop's TikTok channel: selecting suitable content from the business's own footage, organising the publishing schedule and posting consistently." },
      { k: 'How', v: 'Monitor post performance to understand which types of content receive stronger audience engagement, and use that to plan what comes next.' },
      { k: 'Learned', v: 'Practical, performance-based content decisions', emphasis: true, after: ' that complement the communication and marketing knowledge from my studies.' },
    ],
    stats: [
      { n: '6,825+', l: 'followers' },
      { n: '498.9K', l: 'total likes' },
      { n: '3+ yrs', l: 'of ongoing, remote collaboration' },
    ],
    visual: [
      { type: 'phone', fit: 'cover', src: tiktokProfile, alt: "The pet shop's TikTok profile with 6,825 followers and 499K likes" },
      { type: 'phone', src: tiktokOverview, alt: 'TikTok Studio key metrics for Sep 30, 2025 – Sep 29, 2026: 810.9K post views, 11K profile views, 37.8K likes, 722 comments and 24.4K shares' },
    ],
    extra: [
      {
        type: 'metrics',
        title: 'One year of results',
        period: 'Sep 2025 – Sep 2026',
        items: [
          { n: '810.9K', l: 'post views' },
          { n: '700.9K', l: 'total viewers' },
          { n: '475.2K', l: 'new viewers' },
          { n: '37.8K', l: 'likes' },
          { n: '24.4K', l: 'shares' },
        ],
      },
      {
        type: 'screens',
        title: 'Behind the numbers',
        text: 'Most reach comes from the For You feed, and a recent spike shows how quickly the right story can travel: post views grew 744.8% over the last 60 days.',
        images: [
          { src: tiktokViewers, alt: 'Viewer insights: 700.9K total viewers, 475.2K new viewers; 66% female, 33% male', caption: 'Reach · 475.2K new viewers in a year' },
          { src: tiktok60, alt: 'Last 60 days: 227.9K post views, up 744.8%; 84.2% of traffic from the For You feed', caption: 'Last 60 days · +744.8% post views' },
          { src: tiktokTopPosts, alt: 'Top posts by views over the last year, led by a post with 187K views', caption: 'Top post · 187K views' },
        ],
      },
    ],
  },
  {
    id: 'cid',
    kicker: 'First project',
    meta: ['Client project · Team · Feb–Jun 2026', 'Client: Municipality of The Hague'],
    title: 'THUAS x Central Innovation District (CID)',
    sub: 'Beyond the Blueprint: Experience the Future of The Hague',
    brief: [
      { k: 'Challenge', v: 'Develop a communication strategy that helps people understand CID as an innovation ecosystem, rather than simply an urban development area.' },
      { k: 'Research', v: 'Surveys, stakeholder interviews, desk research and benchmarking against other innovation districts.' },
      { k: 'Insight', v: 'Innovation becomes more meaningful when people can see how it connects to their everyday lives.', emphasis: true },
      { k: 'Concept', v: '“Beyond the Blueprint – Experience the Future of The Hague”: making CID feel more visible, tangible and human.' },
      { k: 'Channels', chips: ['Social media', 'LinkedIn', 'OOH', 'Physical activations'] },
      { k: 'My role', v: 'Research and analysis, audience insights, strategic direction, concept development and success measurement.' },
      { k: 'Recognition', v: 'Certificate of completion from the Municipality of The Hague, Communications & City Branding department.' },
    ],
    stats: [
      { n: '40', l: 'survey responses' },
      { n: '7', l: 'stakeholder interviews' },
      { n: '7', l: 'innovation districts benchmarked' },
    ],
    visual: [
      {
        type: 'gallery',
        images: [
          { src: cidTeam, alt: 'The FutureFlow team at the Beyond the Blueprint stand with campaign posters and merchandise', variant: 'wide' },
          { src: cidLogo, alt: 'Beyond the Blueprint campaign logo by FutureFlow', variant: 'wide logo-fig' },
        ],
      },
    ],
    extra: [
      {
        type: 'figures',
        title: 'Campaign touchpoints',
        text: 'Beyond the Blueprint brings CID to life where people meet it: out-of-home posters in the city, an open day invitation for residents, interactive information points and a collaboration moment that connects partners around the district.',
        layout: 'justified',
        rows: [
          [
            { src: cidOoh, ratio: 960 / 678, alt: 'OOH concept: Beyond the Blueprint poster at a bus shelter, “Not just a plan on paper. CID is where innovation is applied to real societal challenges in urban life.”', caption: 'Out-of-home poster' },
            { src: cidOpenDay, ratio: 725 / 910, alt: 'Concept poster: CID Open Day at the Central Library, with a register-now QR code', caption: 'CID Open Day poster' },
          ],
          [
            { src: cidCollaborations, ratio: 960 / 639, alt: 'Concept visual: partners gathered around a CID district model at a partner collaboration summit', caption: 'CID Collaborations' },
            { src: cidKiosk, ratio: 634 / 438, alt: 'Concept visual: an interactive CID information kiosk with a district map', caption: 'Interactive information point' },
          ],
        ],
      },
    ],
  },
  {
    id: 'elementtea',
    kicker: 'Second project',
    meta: ['Client project · Team · Feb–Jun 2025', 'Client: Biu!Tea'],
    title: 'THUAS x Biu!Tea: Element Tea',
    sub: 'A Pause for Your Soul · Brand experience & communication',
    brief: [
      { k: 'Challenge', v: 'Explore how Biu!Tea could create a more meaningful tea experience by connecting Chinese culture, storytelling and tea rituals with contemporary consumers.' },
      { k: 'Research', v: 'Desk and consumer research, including three consumer interviews and a focus group with ten participants.' },
      { k: 'Output', v: 'A persona and customer journey that became the foundation for the ideation process.' },
      { k: 'Concept', v: 'Tea as more than a drink: a moment of pause and personal experience,', emphasis: true, after: ' inspired by the Chinese Five Elements.' },
      { k: 'My role', v: 'Desk and consumer research, interviews, research analysis, persona and customer journey, ideation and concept development, and concept testing.' },
    ],
    stats: [],
    visual: [
      {
        type: 'persona',
        label: 'Research to concept',
        quote: 'A pause for your soul.',
        elements: ['Wood', 'Fire', 'Earth', 'Water', 'Metal'],
        numbers: [
          { n: '3', l: 'consumer interviews' },
          { n: '10', l: 'focus group participants' },
        ],
      },
    ],
    extra: [
      {
        type: 'figures',
        title: 'From research to insight',
        text: 'Desk research into boba culture and the European bubble tea market, plus observation of tea shops, set the context. A focus group and consumer interviews followed, and idea development sessions turned what we heard into themes for the persona and customer journey.',
        layout: 'et-research',
        images: [
          { src: etDesk, alt: 'Desk research on boba culture and the European bubble tea market, alongside a Miro board of tea shop observation photos and notes', caption: 'Desk research & field observation' },
          { src: etFocusGroup, alt: 'Focus group session with participants around a table', caption: 'Focus group · 10 participants' },
          { src: etAffinity, alt: 'Wall of colour-coded sticky notes from the idea development session', caption: 'Idea development' },
        ],
      },
      {
        type: 'elements',
        title: 'Five Elements, five moods',
        text: 'Building on our research, we explored how tea could become more than a drink. I contributed to the ideation and creative direction, which combined the audience insight with inspiration from the Chinese Five Elements. Each element became its own mood, ingredient palette and space.',
        items: [
          { name: 'Wood', src: etWood, notes: 'Schisandra berry · Green sencha · Lemongrass · Matcha' },
          { name: 'Fire', src: etFire, notes: 'Rose petal · Strawberry · Holy basil · Chai · Hibiscus' },
          { name: 'Earth', src: etEarth, notes: 'Oolong · Brown sugar · Mocha · Hojicha · Rooibos · Chamomile' },
          { name: 'Water', src: etWater, notes: 'Black sesame · Black tea · Black soy · Sea salt · Pu-erh' },
          { name: 'Metal', src: etMetal, notes: 'White tea · Cold brew · Earl Grey · Jasmine' },
        ],
      },
      {
        type: 'figures',
        title: 'Space, atmosphere & identity',
        layout: 'et',
        images: [
          { src: etMoodboard, alt: 'Atmosphere moodboard: tea rituals, calligraphy, warm light and garden views', caption: 'Atmosphere moodboard' },
          { src: etSketch, alt: 'Sketch of the tea house interior with colour-coded element zones', caption: 'Interior concept sketch' },
          { src: etPoster, alt: 'Element Tea brand poster: line-art logo and the tagline “A pause for your soul” over misty mountains', caption: 'Brand poster', className: 'contain' },
        ],
      },
    ],
  },
  {
    id: 'vsnl',
    kicker: 'Third project',
    meta: ['HR Committee Member · 2025–present', 'Vietnamese Student Association in the Netherlands'],
    title: 'VSNL: HR Committee & Career Fair',
    brief: [
      { k: 'Role', v: 'As part of the HR Committee, I support internal coordination and student activities within the association.' },
      { k: 'Career Fair', v: 'As HR sub-lead for the online Career Fair, I coordinated around 25 participant time slots, prepared online forms and managed confirmation emails.' },
      { k: 'Takeaway', v: 'Organising people, time and information behind the scenes,', emphasis: true, after: ' and keeping communication clear and consistent so every participant knew exactly when and where to join.' },
      { k: 'Contributed', chips: ['HR support', 'Scheduling & coordination', 'Online forms', 'Email communication'] },
    ],
    stats: [
      { n: '~25', l: 'participant time slots coordinated' },
    ],
    visual: [
      {
        type: 'gallery',
        images: [
          { src: vsnlGroup, alt: 'Large group photo of VSNL members and students at an outdoor association event', variant: 'wide' },
          { src: vsnl1, alt: 'Tai Ngan with two VSNL members at an outdoor association event', variant: 'sq tile' },
          { src: vsnl2, alt: 'VSNL Career Fair 2026 agenda announcement', variant: 'sq tile' },
          { src: vsnl3, alt: 'Career Fair agenda: mentor sharing session, networking and one-on-one services', variant: 'sq tile' },
          { src: vsnl4, alt: 'VSNL HR committee group photo', variant: 'sq tile' },
        ],
      },
    ],
  },
  {
    id: 'kimsso',
    kicker: 'Self-initiated',
    meta: ['Self-initiated case study · Amsterdam · 2026', "Brand: Kim's So Centrum"],
    title: "Kim's So Centrum: Around the Table",
    sub: 'Digital marketing & communication case study',
    brief: [
      { k: 'Context', v: "Working part-time at Kim's So gave me a closer view of the customer experience and the brand, and inspired me to explore how it could strengthen its digital brand communication." },
      { k: 'Question', v: "How does Kim's So Centrum currently communicate its brand online, and what opportunities exist to strengthen its digital brand communication?" },
      { k: 'Goal', v: "Help Kim's So become a stronger choice for people considering Korean restaurants in Amsterdam." },
      { k: 'Insight', v: 'Customers value the food and service, but the brand mostly shows dishes rather than the shared dining experience around them.', emphasis: true },
      { k: 'Concept', v: 'Bringing People Together. Content idea “Around the Table”: real, relatable dining moments of sharing dishes, trying new flavours and enjoying time together.' },
      { k: 'Key message', v: 'Korean comfort food that brings people together.' },
    ],
    stats: [
      { n: '96', l: 'Google reviews coded by theme' },
      { n: '3', l: 'brands benchmarked' },
      { n: '4', l: 'non-branded keywords analysed' },
    ],
    visual: [
      {
        type: 'gallery',
        images: [
          { src: ksFacade, alt: "Kim's So Korean Fusion illuminated storefront", variant: 'wide' },
          { src: ksInterior, alt: "Guests dining under woven pendant lamps inside Kim's So Centrum", variant: 'sq' },
          { src: ksLogo, alt: "Kim's So Korean Food logo", variant: 'sq logo-fig brand' },
        ],
      },
    ],
    extra: [
      {
        type: 'research',
        title: 'Research & analysis',
        text: "I researched four areas: the website, customer reviews, competitors and search. Customers particularly value Kim's So for its food and service, while the website tells the brand story mainly through written copy and focuses visually on dishes rather than the social dining experience.",
        chart: {
          src: ksChart,
          alt: "Bar chart of customer perceptions by theme across 96 Google reviews: Food & Authenticity is by far the most positive theme, followed by Service; Atmosphere, Value & Portion and Convenience draw more mixed and negative mentions.",
          caption: "Customer perceptions by theme · coding of 96 unique Google reviews (reviews may mention more than one theme)",
        },
        keywords: [
          { k: 'Korean restaurant Amsterdam', vol: '>100', rank: '#3' },
          { k: 'Best Korean restaurant Amsterdam', vol: '<100', rank: '#8' },
          { k: 'Korean restaurant Amsterdam Centrum', vol: '<100', rank: '#7' },
          { k: 'Halal Korean restaurant Amsterdam', vol: '<100', rank: '#2' },
        ],
        keywordNote: 'Basic search visibility is not the main communication challenge. The real opportunity lies in how the brand tells its story.',
        competitors: [
          { name: "Kim's So", tone: 'Warm + approachable', text: 'Strong food focus, but less people-led visual storytelling. Communicates Korean comfort food, variety and social dining.', self: true },
          { name: 'Sojubar De Pijp', tone: 'Social + energetic', text: 'Owns the youthful Korean eating-and-drinking experience: fried chicken, soju and togetherness.' },
          { name: 'THE BAB', tone: 'Authentic + personal', text: 'Differentiates through its founders, heritage, Korean roots and homemade recipes.' },
        ],
      },
      {
        type: 'campaign',
        title: 'Bringing the idea to life',
        text: 'I translated “Around the Table” into an Instagram Reel concept and campaign posters. Rather than focusing only on food shots, the content brings the dining experience to life through friendly service, family moments, friends sharing food and people gathering around the same table.',
        reel: { src: ksReel, alt: '“Around the Table” Instagram Reel mock-up on a phone' },
        poster: { src: ksPoster, alt: "Campaign poster: “Good food brings everyone together” with Kim's So dishes" },
        storyboard: { src: ksStoryboard, alt: 'Nine-frame, 30-second Reel storyboard showing warm service, families and friends sharing Korean dishes', caption: '30-second Reel storyboard, nine scenes' },
      },
    ],
  },
]

// kind is optional; entries without one show no tag.
export const experience = [
  {
    when: 'Feb 2026 – Jun 2026',
    title: 'THUAS x CID — Municipality of The Hague',
    text: 'Communication strategy for the Central Innovation District: research, audience insights, positioning, key messaging and a cross-channel concept, including concept testing and success measurement.',
    kind: 'Client project',
  },
  {
    when: '2026',
    title: "Kim's So Centrum — Digital brand communication case study",
    text: 'Self-initiated research into the brand’s online communication (website, reviews, competitors and search), leading to the “Around the Table” Instagram Reel concept and campaign posters.',
    kind: 'Self-initiated',
  },
  {
    when: '2025 – present',
    title: 'Vietnamese Student Association in the Netherlands — HR Committee',
    text: 'Support internal coordination and student activities. As HR sub-lead for the online Career Fair, coordinated around 25 participant time slots, prepared online forms and managed confirmation emails.',
  },
  {
    when: 'Feb 2025 – Jun 2025',
    title: 'THUAS x Biu!Tea — Brand Experience & Communication',
    text: 'Consumer interviews and focus group research, persona and customer journey, and the “Element Tea — A Pause for Your Soul” creative concept, including concept testing.',
    kind: 'Client project',
  },
  {
    when: '2023 – present',
    title: 'Freelance TikTok Content Support — Pet shop, Vietnam',
    text: 'Remote content selection, scheduling, publishing and performance monitoring for a channel with 6,825+ followers.',
    kind: 'Freelance',
  },
]

export const skills = [
  { icon: 'search', title: 'Research', items: ['Desk research', 'Interviews & surveys', 'Audience analysis', 'Competitor research', 'Review analysis', 'Keyword & search analysis'] },
  { icon: 'lines', title: 'Strategy & communication', items: ['Communication strategy', 'Key messaging', 'Concept development', 'Storytelling'] },
  { icon: 'phone', title: 'Digital & content', items: ['Content publishing', 'Content scheduling', 'Performance monitoring', 'Basic digital marketing'] },
  { icon: 'tool', title: 'Tools', items: ['Microsoft Word', 'PowerPoint', 'Excel', 'Canva', 'CapCut', 'Google Forms'] },
  { icon: 'globe', title: 'Languages', items: ['Vietnamese', 'English'] },
]

export const certifications = [
  {
    name: 'Certificate of Completion',
    detail: '“Putting innovation district CID on the map”, Communications & City Branding',
    by: 'Municipality of The Hague',
    date: 'Jun 2026',
    src: certHague,
    featured: true,
  },
  { name: 'Google Analytics Certification', by: 'Google', date: 'Sep 2026', src: certGA },
  { name: 'Social Media Certified', by: 'HubSpot Academy', date: 'Sep 2026', src: certSocial },
  { name: 'Digital Marketing Certified', by: 'HubSpot Academy', date: 'Sep 2026', src: certDigital },
]

export const education = {
  school: 'The Hague University of Applied Sciences',
  degree: 'Bachelor of International Communication Management (ICM)',
  when: 'Sep 2024 – 2027 (expected)',
}
