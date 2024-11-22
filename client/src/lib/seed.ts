import img from "@/assets/brain.jpg";

type WikiArticle = {
    id: string; // Unique identifier for the article
    title: string; // The article's title
    urlSlug: string; // URL-friendly version of the title
    summary: string; // Brief summary or abstract of the article
    categories: string[]; // Categories the article belongs to
    tags: string[]; // Tags associated with the article
    content: {
        introduction: string; // Introduction or lead paragraph
        sections: {
            title: string; // Section title
            content: string; // Section content (can include markdown or HTML)
            media?: MediaElement[]; // Images, charts, videos, or tables within the section
            subsections?: {
                title: string; // Subsection title
                content: string; // Subsection content
                media?: MediaElement[]; // Media within the subsection
            }[];
        }[];
    };
    infobox?: Infobox; // Infobox for quick reference data
    references: Reference[]; // List of references
    media: MediaElement[]; // Global list of images, videos, charts, or other media
    contributors: Contributor[]; // List of contributors
    revisions: Revision[]; // List of revisions with timestamps
    lastUpdated: string; // Last updated date (ISO format)
    created: string; // Creation date (ISO format)
    status: 'draft' | 'published' | 'archived'; // Status of the article
};

// Media element (e.g., image, video, chart, or table)
type MediaElement = {
    id: string; // Unique media identifier
    type: 'image' | 'video' | 'chart' | 'table'; // Type of media
    caption?: string; // Optional caption or description
    source?: string; // URL or file path to the media
    attribution?: string; // Author or source attribution
    dimensions?: { width: number; height: number }; // Dimensions for images/videos
    data?: any; // For charts and tables, contains structured data
};

// Infobox for key facts or details (e.g., for biographical or scientific articles)
type Infobox = {
    title: string;
    image?: string;
    data: { label: string; value: string | number }[];
};

// References for the article
type Reference = {
    title: string; // Title of the source
    author?: string; // Author of the source
    publicationDate?: string; // Publication date (ISO format)
    url?: string; // URL for the reference
    type: 'book' | 'article' | 'website' | 'other'; // Type of reference
};

// Contributor information
type Contributor = {
    name: string; // Name of the contributor
    userId: string; // User ID of the contributor
    contributions: string[]; // List of contribution types (e.g., "added section", "edited summary")
};

// Revision history for the article
type Revision = {
    timestamp: string; // Timestamp of the revision
    userId: string; // User ID of the contributor who made the revision
    changes: string; // Description of the changes made
};

const seedArticleData: WikiArticle = {
  id: "12345",
  title: "Photosynthesis",
  urlSlug: "photosynthesis",
  summary: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.",
  categories: ["Biology", "Science"],
  tags: ["plants", "chlorophyll", "light energy"],
  content: {
    introduction: "Photosynthesis is a crucial biological process that sustains life on Earth.",
    sections: [
      {
        title: "Overview",
        content: "Photosynthesis primarily occurs in the chloroplasts of plant cells.",
        media: [
          {
            id: "img1",
            type: "image",
            caption: "Diagram of Photosynthesis",
            source: img,
            dimensions: { width: 800, height: 600 },
            attribution: "John Doe",
          },
        ],
        subsections: [
          {
            title: "Light-dependent Reactions",
            content: "These reactions occur in the thylakoid membranes and require light.",
            media: [],
          },
          {
            title: "Calvin Cycle",
            content: "The Calvin Cycle occurs in the stroma and does not require light.",
          },
        ],
      },
      {
        title: "Importance",
        content: "Photosynthesis is essential for oxygen production and energy flow in ecosystems.",
        media: [
          {
            id: "vid1",
            type: "video",
            caption: "Animation of Photosynthesis",
            source: "https://example.com/photosynthesis-video.mp4",
            dimensions: { width: 1280, height: 720 },
          },
        ],
      },
    ],
  },
  infobox: {
    title: "Photosynthesis Overview",
    image: img,
    data: [
      { label: "Scientific Term", value: "Photosynthesis" },
      { label: "Process Type", value: "Biochemical" },
      { label: "Key Element", value: "Chlorophyll" },
    ],
  },
  references: [
    {
      title: "The Biology of Plants",
      author: "Peter H. Raven",
      publicationDate: "2013-03-15",
      type: "book",
    },
    {
      title: "Photosynthesis: The Essentials",
      url: "https://example.com/photosynthesis",
      type: "website",
    },
  ],
  media: [
    {
      id: "img1",
      type: "image",
      caption: "Diagram of Photosynthesis",
      source: img,
      dimensions: { width: 800, height: 600 },
      attribution: "John Doe",
    },
    {
      id: "vid1",
      type: "video",
      caption: "Animation of Photosynthesis",
      source: "https://example.com/photosynthesis-video.mp4",
      dimensions: { width: 1280, height: 720 },
    },
  ],
  contributors: [
    {
      name: "Jane Doe",
      userId: "jdoe",
      contributions: ["added introduction", "edited references"],
    },
    {
      name: "John Smith",
      userId: "jsmith",
      contributions: ["added 'Importance' section"],
    },
  ],
  revisions: [
    {
      timestamp: "2024-11-20T10:15:00Z",
      userId: "jdoe",
      changes: "Added introduction and references.",
    },
    {
      timestamp: "2024-11-21T09:00:00Z",
      userId: "jsmith",
      changes: "Added 'Importance' section and video.",
    },
  ],
  lastUpdated: "2024-11-21T10:00:00Z",
  created: "2024-11-10T14:00:00Z",
  status: "published",
};

const seedArticleData2: WikiArticle = {
  id: "67890",
  title: "Quantum Mechanics",
  urlSlug: "quantum-mechanics",
  summary: "Quantum mechanics is a fundamental theory in physics describing the properties of nature on an atomic scale.",
  categories: ["Physics", "Science"],
  tags: ["quantum", "particles", "wave-function"],
  content: {
    introduction: "Quantum mechanics is the branch of physics that deals with the behavior of matter and energy at the smallest scales.",
    sections: [
      {
        title: "History and Development",
        content: "Quantum mechanics emerged in the early 20th century, revolutionizing our understanding of atomic and subatomic processes.",
        media: [
          {
            id: "img2",
            type: "image",
            caption: "Key Figures in Quantum Mechanics",
            source: img,
            dimensions: { width: 700, height: 500 },
            attribution: "Physics Archive",
          },
        ],
      },
      {
        title: "Key Principles",
        content: "Quantum mechanics is based on principles such as wave-particle duality, superposition, and uncertainty.",
        media: [],
      },
    ],
  },
  infobox: {
    title: "Quantum Mechanics Overview",
    image: img,
    data: [
      { label: "Discipline", value: "Physics" },
      { label: "Key Figures", value: "Planck, Einstein, Schrödinger" },
    ],
  },
  references: [
    {
      title: "Introduction to Quantum Mechanics",
      author: "David J. Griffiths",
      publicationDate: "1995-08-25",
      type: "book",
    },
    {
      title: "Quantum Physics and Beyond",
      url: "https://example.com/quantum",
      type: "website",
    },
  ],
  media: [
    {
      id: "img2",
      type: "image",
      caption: "Key Figures in Quantum Mechanics",
      source: img,
      dimensions: { width: 700, height: 500 },
      attribution: "Physics Archive",
    },
  ],
  contributors: [
    {
      name: "Alice Quantum",
      userId: "aquanta",
      contributions: ["added 'Key Principles' section"],
    },
  ],
  revisions: [
    {
      timestamp: "2024-11-21T12:30:00Z",
      userId: "aquanta",
      changes: "Updated introduction and added contributors.",
    },
  ],
  lastUpdated: "2024-11-21T12:45:00Z",
  created: "2024-11-01T09:00:00Z",
  status: "published",
};

const seedArticleData3: WikiArticle = {
  id: "112233",
  title: "Ancient Rome",
  urlSlug: "ancient-rome",
  summary: "Ancient Rome was one of the greatest civilizations in history, influencing law, culture, and governance.",
  categories: ["History", "Civilization"],
  tags: ["Rome", "history", "empire"],
  content: {
    introduction: "Ancient Rome flourished for centuries, leaving an enduring legacy on the modern world.",
    sections: [
      {
        title: "Foundation and Early Republic",
        content: "Rome was founded in 753 BCE and grew from a small city-state to a powerful republic.",
        media: [
          {
            id: "img3",
            type: "image",
            caption: "Roman Forum",
            source: img,
            dimensions: { width: 700, height: 400 },
            attribution: "Historical Archives",
          },
        ],
      },
      {
        title: "Rise of the Empire",
        content: "Under Augustus, Rome transitioned from a republic to an empire, dominating the Mediterranean.",
        subsections: [
          {
            title: "Key Emperors",
            content: "Notable emperors include Augustus, Nero, and Constantine.",
            media: [],
          },
        ],
      },
    ],
  },
  infobox: {
    title: "Ancient Rome Overview",
    image: img,
    data: [
      { label: "Founded", value: "753 BCE" },
      { label: "Language", value: "Latin" },
    ],
  },
  references: [
    {
      title: "The History of Rome",
      author: "Livy",
      type: "book",
    },
    {
      title: "Rome: Engineering an Empire",
      url: "https://example.com/rome-empire",
      type: "website",
    },
  ],
  media: [
    {
      id: "img3",
      type: "image",
      caption: "Roman Forum",
      source: img,
      dimensions: { width: 700, height: 400 },
      attribution: "Historical Archives",
    },
  ],
  contributors: [
    {
      name: "Marcus Historicus",
      userId: "mhistory",
      contributions: ["added 'Rise of the Empire' section"],
    },
  ],
  revisions: [
    {
      timestamp: "2024-11-21T14:00:00Z",
      userId: "mhistory",
      changes: "Added media to 'Rise of the Empire' section.",
    },
  ],
  lastUpdated: "2024-11-21T14:30:00Z",
  created: "2024-11-05T15:00:00Z",
  status: "published",
};


const seedArticleData4: WikiArticle = {
    id: "445566",
    title: "Neural Networks",
    urlSlug: "neural-networks",
    summary: "Neural networks are algorithms inspired by the structure of the human brain, used in AI and machine learning.",
    categories: ["Artificial Intelligence", "Machine Learning"],
    tags: ["AI", "neural-networks", "deep-learning"],
    content: {
        introduction: "Neural networks are the backbone of modern artificial intelligence applications, from image recognition to language translation.",
        sections: [
            {
                title: "Structure and Function",
                content: "Neural networks consist of layers of nodes, with each node mimicking a biological neuron.",
                media: [
                    {
                        id: "img3",
                        type: "image",
                        caption: "A Neural Network Diagram",
                        source: img,
                        dimensions: { width: 800, height: 600 },
                        attribution: "AI Labs",
                    },
                ],
            },
            {
                title: "Training Neural Networks",
                content: "Training involves feeding data through the network and adjusting weights using backpropagation.",
                media: [],
            },
        ],
    },
    media: [
        {
            id: "img3",
            type: "image",
            caption: "A Neural Network Diagram",
            source: img,
            dimensions: { width: 800, height: 600 },
            attribution: "AI Labs",
        },
    ],
    references: [
        {
            title: "Deep Learning",
            author: "Ian Goodfellow",
            type: "book",
        },
        {
            title: "Neural Networks Simplified",
            url: "https://example.com/neural-networks",
            type: "website",
        },
    ],
    contributors: [
        {
            name: "AI Enthusiast",
            userId: "aienergy",
            contributions: ["added 'Structure and Function' section"],
        },
    ],
    revisions: [
        {
            timestamp: "2024-11-21T16:00:00Z",
            userId: "aienergy",
            changes: "Updated Neural Network Diagram media.",
        },
    ],
    lastUpdated: "2024-11-21T16:15:00Z",
    created: "2024-11-10T12:00:00Z",
    status: "published",
};



export { seedArticleData, seedArticleData2, seedArticleData3, seedArticleData4 };