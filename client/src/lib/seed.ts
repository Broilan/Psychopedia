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
    title: string; // Infobox title (e.g., "Plant Biology Overview")
    rows: {
        label: string; // Label for the row
        value: string | number | MediaElement; // Value for the row (could include media)
    }[];
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

export const seedArticleData : WikiArticle = {
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
                        source: "/images/photosynthesis-diagram.png",
                        dimensions: { width: 800, height: 600 },
                        attribution: "John Doe"
                    }
                ],
                subsections: [
                    {
                        title: "Light-dependent Reactions",
                        content: "These reactions occur in the thylakoid membranes and require light.",
                        media: [
                            {
                                id: "chart1",
                                type: "chart",
                                caption: "Light-dependent Reaction Pathway",
                                data: { /* Structured data for the chart */ }
                            }
                        ]
                    },
                    {
                        title: "Calvin Cycle",
                        content: "The Calvin Cycle occurs in the stroma and does not require light."
                    }
                ]
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
                        dimensions: { width: 1280, height: 720 }
                    }
                ]
            }
        ]
    },
    infobox: {
        title: "Photosynthesis Overview",
        rows: [
            { label: "Scientific Term", value: "Photosynthesis" },
            { label: "Process Type", value: "Biochemical" },
            { label: "Key Element", value: "Chlorophyll" },
            { label: "Image", value: { id: "img1", type: "image", source: "/images/leaf.png", caption: "Leaf structure" } }
        ]
    },
    references: [
        {
            title: "The Biology of Plants",
            author: "Peter H. Raven",
            publicationDate: "2013-03-15",
            type: "book"
        },
        {
            title: "Photosynthesis: The Essentials",
            url: "https://example.com/photosynthesis",
            type: "website"
        }
    ],
    media: [
        {
            id: "img1",
            type: "image",
            caption: "Diagram of Photosynthesis",
            source: "/images/photosynthesis-diagram.png",
            dimensions: { width: 800, height: 600 },
            attribution: "John Doe"
        },
        {
            id: "vid1",
            type: "video",
            caption: "Animation of Photosynthesis",
            source: "https://example.com/photosynthesis-video.mp4",
            dimensions: { width: 1280, height: 720 }
        }
    ],
    contributors: [
        {
            name: "Jane Doe",
            userId: "jdoe",
            contributions: ["added introduction", "edited references"]
        },
        {
            name: "John Smith",
            userId: "jsmith",
            contributions: ["added 'Importance' section"]
        }
    ],
    revisions: [
        {
            timestamp: "2024-11-20T10:15:00Z",
            userId: "jdoe",
            changes: "Added introduction and references."
        },
        {
            timestamp: "2024-11-21T09:00:00Z",
            userId: "jsmith",
            changes: "Added 'Importance' section and video."
        }
    ],
    lastUpdated: "2024-11-21T10:00:00Z",
    created: "2024-11-10T14:00:00Z",
    status: "published"
};
