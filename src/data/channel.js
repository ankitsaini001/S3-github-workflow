// All site content lives here — add a new video by adding an entry to SHORTS or changing FEATURED.

export const CHANNEL = {
  name: 'TechByte Chronicles',
  tagline: 'IT, coding & AI, made simple',
  motto: ['Learn', 'Code', 'Build', 'Grow'],
  youtube: {
    url: 'https://www.youtube.com/@techbytechronicles-AJ',
    handle: '@techbytechronicles-AJ',
  },
  instagram: {
    url: 'https://www.instagram.com/techbytechronicles',
    handle: '@techbytechronicles',
  },
}

export const TOPICS = [
  {
    id: 'dsa',
    title: 'DSA Visualized',
    text: 'Sorting, searching, recursion, trees, graphs and dynamic programming — animated step by step.',
    tags: ['Sorting', 'Binary Search', 'Recursion'],
  },
  {
    id: 'ai',
    title: 'AI & GenAI',
    text: 'AI concepts, generative AI and the tools that are changing how developers work.',
    tags: ['Generative AI', 'AI Tools'],
  },
  {
    id: 'web',
    title: 'Web Development',
    text: 'Frontend, backend, APIs and databases — how modern web apps fit together.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    id: 'code',
    title: 'Programming',
    text: 'Python, PHP, JavaScript and the fundamentals that carry over to every language.',
    tags: ['Python', 'PHP', 'JavaScript'],
  },
  {
    id: 'deploy',
    title: 'Development & Deployment',
    text: 'Git, CI/CD and the cloud — taking code from your laptop all the way to production.',
    tags: ['Git', 'GitHub Actions', 'AWS'],
  },
  {
    id: 'news',
    title: 'Tech Updates',
    text: 'Security fixes, platform changes and tech news, explained without the jargon.',
    tags: ['Security', 'Tech News'],
  },
]

export const FEATURED = {
  id: 'Dl8kJx16FHM',
  title: 'What is SIM Binding? How It Works & Why WhatsApp May Stop Without Your SIM',
  description:
    'A clear walkthrough of SIM binding — what it is, how messaging apps use it, and what it means for your WhatsApp account.',
  duration: '3:48',
  tag: 'Tech Updates',
}

export const SHORTS = [
  { id: 'X34869Yn_7k', title: "Bubble Sort vs Merge Sort: What's the Real Difference?", tag: 'DSA' },
  { id: '-99R74QzA94', title: 'What is SIM Binding? Why WhatsApp May Stop Without Your SIM', tag: 'Tech Updates' },
  { id: 'DmcfWKsyphY', title: 'How to Find a Number Without Checking Every Element? Binary Search Explained', tag: 'DSA' },
  { id: 'gQ5vMOzJVB4', title: 'Quick Sort Explained in 60 Seconds', tag: 'DSA' },
  { id: '2kGMioC-fj0', title: 'AI Found a Bug Hiding in PHP for 10+ Years — PHP2Shell Explained', tag: 'AI & Security' },
  { id: 'ww0ZcyaTjC4', title: 'Merge Sort Explained in 60 Seconds', tag: 'DSA' },
]

export const videoUrl = (id) => `https://www.youtube.com/watch?v=${id}`
export const shortUrl = (id) => `https://www.youtube.com/shorts/${id}`
export const thumbnail = (id, size = 'maxresdefault') => `https://i.ytimg.com/vi/${id}/${size}.jpg`
