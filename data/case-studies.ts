export interface CaseStudy {
  id: number
  slug: string
  title: string
  category: string
  description: string
  bannerImage: string
  overview: string[]
  problemStatement: string[]
  research?: string[]
  designProcess?: string[]
  wireframes?: {
    image: string
    caption?: string
  }[]
  finalDesign?: {
    description: string[]
    images?: {
      image: string
      caption?: string
    }[]
    figmaEmbed?: string
  }
  keyLearnings?: string[]
  demoUrl?: string
  githubUrl?: string
  prevProject?: {
    slug: string
    title: string
  }
  nextProject?: {
    slug: string
    title: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "flappy-kirby",
    title: "FLAPPY KIRBY",
    category: "GAME",
    description:
      "A fun and addictive game inspired by Flappy Bird but featuring Kirby. Built with JavaScript and HTML5 Canvas.",
    bannerImage: "/placeholder.svg?height=800&width=1600",
    overview: [
      "Flappy Kirby is a browser-based game inspired by the viral hit Flappy Bird, but with a twist - it features the beloved character Kirby. The game was built using vanilla JavaScript and HTML5 Canvas, focusing on smooth animations and responsive controls.",
      "The project was developed as a personal challenge to create an engaging game without relying on game engines or libraries, demonstrating core JavaScript skills and game development fundamentals.",
    ],
    problemStatement: [
      "The main challenge was to create a game that was simple enough for casual players but still engaging and challenging. The original Flappy Bird was known for its difficulty curve that kept players coming back for more.",
      "Additionally, I needed to implement proper collision detection, physics simulation, and game state management while ensuring the game performed well across different devices and screen sizes.",
    ],
    research: [
      "Before development, I analyzed several successful casual games, including the original Flappy Bird, to understand what made them addictive and appealing to a wide audience.",
      "I found that the most successful games in this genre share certain characteristics: simple one-touch controls, quick game sessions, immediate feedback, and a clear scoring system that encourages players to beat their high score.",
      "I also researched HTML5 Canvas performance optimization techniques to ensure smooth gameplay even on lower-end devices.",
    ],
    designProcess: [
      "The design process began with sketching the game mechanics and visual elements. I wanted to maintain the simplicity of Flappy Bird while adding unique elements that would make the game stand out.",
      "I chose Kirby as the main character due to his popularity and distinctive appearance. The visual style was designed to be colorful and appealing, with a clean interface that wouldn't distract from the gameplay.",
      "The game mechanics were kept intentionally simple: tap/click to make Kirby float, avoid obstacles, and collect stars for bonus points.",
    ],
    wireframes: [
      {
        image: "/placeholder.svg?height=600&width=800",
        caption: "Initial game layout wireframe",
      },
      {
        image: "/placeholder.svg?height=600&width=800",
        caption: "UI elements and scoring system",
      },
    ],
    finalDesign: {
      description: [
        "The final design features a side-scrolling environment with procedurally generated obstacles. Kirby floats through a dreamlike landscape, avoiding pipes and collecting stars.",
        "The game includes a scoring system, high score tracking using local storage, and sound effects that enhance the gaming experience.",
        "The controls were fine-tuned through multiple iterations to find the perfect balance between challenge and fairness.",
      ],
      images: [
        {
          image: "/placeholder.svg?height=600&width=800",
          caption: "Game start screen",
        },
        {
          image: "/placeholder.svg?height=600&width=800",
          caption: "Gameplay in action",
        },
        {
          image: "/placeholder.svg?height=600&width=800",
          caption: "Game over screen with score display",
        },
      ],
    },
    keyLearnings: [
      "Implementing game physics from scratch provided deep insights into JavaScript's requestAnimationFrame and timing functions.",
      "Optimizing Canvas rendering taught me valuable techniques for improving performance in graphics-intensive web applications.",
      "User testing revealed the importance of fine-tuning difficulty - too easy and players get bored, too hard and they quit in frustration.",
      "Adding small details like screen shake on collision and particle effects for collecting items significantly enhanced the game feel with minimal code.",
    ],
    demoUrl: "https://example.com/flappy-kirby",
    githubUrl: "https://github.com/AnneMerieN/example/flappy-kirby",
    nextProject: {
      slug: "cosmic-defender",
      title: "COSMIC DEFENDER",
    },
  },
  {
    id: 2,
    slug: "cosmic-defender",
    title: "COSMIC DEFENDER",
    category: "GAME",
    description:
      "A space shooter game with multiple enemy types, power-ups, and boss battles. Built with Phaser and TypeScript.",
    bannerImage: "/placeholder.svg?height=800&width=1600",
    overview: [
      "Cosmic Defender is a modern take on classic space shooter games, featuring multiple levels, enemy types, power-ups, and epic boss battles. The game was built using the Phaser game framework and TypeScript.",
      "This project showcases advanced game development concepts including enemy AI patterns, weapon systems, particle effects, and level progression.",
    ],
    problemStatement: [
      "The challenge was to create a compelling space shooter that would stand out in a crowded genre. This required implementing engaging gameplay mechanics, visually impressive effects, and a difficulty curve that would keep players challenged but not frustrated.",
      "Additionally, the game needed to be performant across different devices while maintaining visual quality and responsive controls.",
    ],
    research: [
      "I researched classic arcade shooters like Galaga and R-Type, as well as modern interpretations of the genre, to understand what elements make space shooters engaging.",
      "I also conducted a technical evaluation of different game frameworks before settling on Phaser for its robust feature set, active community, and excellent TypeScript support.",
    ],
    designProcess: [
      "The design process began with defining the core gameplay loop and enemy behavior patterns. I created a progression system that gradually introduces new enemy types and challenges.",
      "The visual design aimed for a neon-cyberpunk aesthetic with bright weapon effects contrasting against the dark space background. Each level was designed with a unique visual theme and enemy set.",
    ],
    wireframes: [
      {
        image: "/placeholder.svg?height=600&width=800",
        caption: "Game layout and UI wireframe",
      },
      {
        image: "/placeholder.svg?height=600&width=800",
        caption: "Enemy movement patterns and spawn timing",
      },
    ],
    finalDesign: {
      description: [
        "The final game features 5 distinct levels, each with unique enemies and environmental hazards. Players can collect power-ups to enhance their ship's capabilities and unleash special weapons.",
        "The boss battles serve as skill checks at the end of each level, requiring players to learn patterns and exploit weaknesses.",
        "A scoring system with multipliers encourages skillful play and replayability.",
      ],
      images: [
        {
          image: "/placeholder.svg?height=600&width=800",
          caption: "Intense gameplay with multiple enemies and weapon effects",
        },
        {
          image: "/placeholder.svg?height=600&width=800",
          caption: "Epic boss battle with pattern-based attacks",
        },
      ],
    },
    keyLearnings: [
      "Using TypeScript with Phaser significantly improved code organization and reduced bugs through type safety.",
      "Implementing a flexible power-up system taught me about designing extensible game systems.",
      "Creating varied enemy behaviors required thoughtful implementation of state machines and AI patterns.",
      "Performance optimization was crucial - techniques like object pooling and texture atlases helped maintain smooth gameplay even during intense sequences.",
    ],
    demoUrl: "https://example.com/cosmic-defender",
    githubUrl: "https://github.com/AnneMerieN/example/cosmic-defender",
    prevProject: {
      slug: "flappy-kirby",
      title: "FLAPPY KIRBY",
    },
    nextProject: {
      slug: "neon-puzzle",
      title: "NEON PUZZLE",
    },
  },
  {
    id: 3,
    slug: "neon-puzzle",
    title: "NEON PUZZLE",
    category: "GAME",
    description:
      "A cyberpunk-themed puzzle game with challenging levels and unique mechanics. Built with React and Three.js.",
    bannerImage: "/placeholder.svg?height=800&width=1600",
    overview: [
      "Neon Puzzle is a cyberpunk-themed 3D puzzle game that challenges players to manipulate light paths in a virtual environment. The game was built using React for the UI and Three.js for 3D rendering.",
      "This project demonstrates the integration of modern web technologies to create an immersive gaming experience directly in the browser, without requiring any plugins or downloads.",
    ],
    problemStatement: [
      "The main challenge was creating a 3D puzzle game that would run smoothly in browsers while providing engaging gameplay. This required optimizing 3D rendering performance and designing intuitive controls for manipulating objects in 3D space.",
      "Additionally, I needed to design puzzles that were challenging but solvable, with a difficulty curve that gradually introduced new concepts.",
    ],
    prevProject: {
      slug: "cosmic-defender",
      title: "COSMIC DEFENDER",
    },
    nextProject: {
      slug: "cyber-runner",
      title: "CYBER RUNNER",
    },
  },
  {
    id: 4,
    slug: "cyber-runner",
    title: "CYBER RUNNER",
    category: "GAME",
    description:
      "A fast-paced platformer with procedurally generated levels and a unique art style. Built with Unity and C#.",
    bannerImage: "/placeholder.svg?height=800&width=1600",
    overview: [
      "Cyber Runner is a high-speed platformer set in a dystopian cyberpunk future. The game features procedurally generated levels, ensuring a unique experience each time. It was developed using Unity and C#.",
      "This project showcases advanced game development techniques including procedural level generation, character physics, and dynamic difficulty adjustment.",
    ],
    problemStatement: [
      "The challenge was to create a platformer that remained fresh and exciting through multiple playthroughs. This required implementing a robust procedural generation system that could create levels that were both challenging and fair.",
      "Additionally, the game needed responsive controls and character physics that felt satisfying while maintaining the fast pace that defines the game.",
    ],
    prevProject: {
      slug: "neon-puzzle",
      title: "NEON PUZZLE",
    },
  },
]
