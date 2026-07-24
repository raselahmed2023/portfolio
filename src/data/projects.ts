export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: ProjectTag[];
  technologies: string[];
  mainFeatures: string[];
  challenges: string[];
  futurePlans: string[];
  liveLink?: string;
  clientRepo: string;
  serverRepo?: string;
  clientLabel?: string;
  serverLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "tripmind",
    title: "TripMind",
    shortDescription:
      "An AI-powered travel planning platform that creates personalized itineraries based on destination, budget, interests, and travel preferences.",
    fullDescription:
      "TripMind is a full-stack agentic AI travel planning application. It allows users to generate personalized travel plans based on their destination, travel dates, budget, interests, and preferences. The application uses Gemini as the primary AI provider and Groq as a fallback provider. It also includes authentication, saved destinations, trip history, administrative features, secure API architecture, and a responsive user interface.",
    image: "/projects/tripmind.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "TypeScript",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
      {
        name: "Gemini AI",
        color: "bg-purple-100 text-purple-700 border-purple-300",
      },
      {
        name: "MongoDB",
        color: "bg-green-100 text-green-700 border-green-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Gemini AI",
      "Groq AI",
    ],
    mainFeatures: [
      "AI-generated personalized travel itineraries.",
      "Gemini AI with Groq fallback integration.",
      "Secure email and password authentication.",
      "User and administrator role management.",
      "Saved destinations and trip history.",
      "Responsive dashboard and destination pages.",
    ],
    challenges: [
      "Creating structured travel plans from AI-generated responses.",
      "Implementing automatic fallback between multiple AI providers.",
      "Managing authentication using access and refresh tokens.",
      "Connecting separate frontend and backend applications.",
    ],
    futurePlans: [
      "Add real-time flight and hotel information.",
      "Introduce interactive maps and route visualization.",
      "Add collaborative trip planning.",
      "Improve AI recommendations using user history.",
    ],
    liveLink: "https://tripmind-client.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/Tripmind-Client",
    serverRepo:
      "https://github.com/raselahmed2023/Tripmind",
    clientLabel: "Client Code",
    serverLabel: "Server Code",
  },

  {
    slug: "rentora",
    title: "Rentora",
    shortDescription:
      "A modern property rental and management platform for discovering, listing, and managing rental properties.",
    fullDescription:
      "Rentora is a full-stack property rental application where users can explore available properties and view detailed property information. Property owners can create and manage rental listings through a dedicated interface. The application uses a separate frontend and backend architecture and includes authentication, property management, responsive pages, filtering, and secure API communication.",
    image: "/projects/rentora.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "Express",
        color: "bg-gray-100 text-gray-700 border-gray-300",
      },
      {
        name: "MongoDB",
        color: "bg-green-100 text-green-700 border-green-300",
      },
      {
        name: "TypeScript",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "REST API",
    ],
    mainFeatures: [
      "Browse available rental properties.",
      "View detailed property information.",
      "Create and manage property listings.",
      "Secure user authentication.",
      "Property filtering and searching.",
      "Responsive interface for all devices.",
    ],
    challenges: [
      "Connecting separate frontend and backend deployments.",
      "Managing property information and image data.",
      "Implementing protected property-management routes.",
      "Building responsive property listing cards.",
    ],
    futurePlans: [
      "Add property booking and rent-payment functionality.",
      "Introduce map-based property searching.",
      "Add landlord and tenant messaging.",
      "Add property ratings and reviews.",
    ],
    liveLink: "https://rentora-woad.vercel.app/",
    clientRepo: "https://github.com/raselahmed2023/Rentora",
    serverRepo:
      "https://github.com/raselahmed2023/rentora-backend",
    clientLabel: "Frontend Code",
    serverLabel: "Backend Code",
  },

  {
    slug: "life-link",
    title: "LifeLink",
    shortDescription:
      "A blood donor discovery platform that helps users search for compatible donors and access important donor information.",
    fullDescription:
      "LifeLink is a responsive blood donor discovery application designed to connect people who need blood with available donors. Users can browse donor information, filter donors by blood group, review donor details, and use contact-request features. The project focuses on creating an accessible and easy-to-use interface for an important social purpose.",
    image: "/projects/life-link.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "React",
        color: "bg-cyan-100 text-cyan-700 border-cyan-300",
      },
      {
        name: "Tailwind",
        color: "bg-sky-100 text-sky-700 border-sky-300",
      },
      {
        name: "TypeScript",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    mainFeatures: [
      "Browse registered blood donors.",
      "Filter donors by blood group.",
      "View individual donor information.",
      "Contact-request interface.",
      "Responsive design for mobile and desktop.",
    ],
    challenges: [
      "Creating a clear donor-searching experience.",
      "Presenting important donor information safely.",
      "Building responsive donor cards.",
      "Designing an accessible interface for urgent use.",
    ],
    futurePlans: [
      "Add secure donor registration and authentication.",
      "Add location-based donor searching.",
      "Introduce emergency blood-request notifications.",
      "Add a backend database and verification process.",
    ],
    liveLink: "https://life-link-cyan-two.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/Life-Link",
    clientLabel: "GitHub Code",
  },

  {
    slug: "resell-hub",
    title: "ReSell Hub",
    shortDescription:
      "A full-stack second-hand marketplace with buyer, seller, and administrator dashboards.",
    fullDescription:
      "ReSell Hub is a complete second-hand marketplace where users can buy and sell pre-owned products. Sellers can publish products, buyers can browse products, add products to a wishlist, and place orders. Administrators can review listings and manage marketplace activities.",
    image: "/projects/resell-hub.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "MongoDB",
        color: "bg-green-100 text-green-700 border-green-300",
      },
      {
        name: "Stripe",
        color: "bg-indigo-100 text-indigo-700 border-indigo-300",
      },
      {
        name: "Better Auth",
        color: "bg-orange-100 text-orange-700 border-orange-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Tailwind CSS",
    ],
    mainFeatures: [
      "Buyer, seller, and administrator dashboards.",
      "Second-hand product listing and browsing.",
      "Wishlist and order management.",
      "Product approval workflow.",
      "Stripe payment integration.",
    ],
    challenges: [
      "Implementing role-based permissions.",
      "Managing product approval and order status.",
      "Integrating Stripe checkout.",
      "Creating multiple responsive dashboards.",
    ],
    futurePlans: [
      "Add buyer and seller messaging.",
      "Introduce product reviews and ratings.",
      "Add advanced product recommendations.",
      "Improve administrator analytics.",
    ],
    liveLink: "https://resell-hub-rho.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/resellHub",
    clientLabel: "Client Code",
  },

  {
    slug: "sportnest",
    title: "SportNest",
    shortDescription:
      "A sports facility booking platform where users can browse and reserve available sports facilities.",
    fullDescription:
      "SportNest is a full-stack sports facility booking platform. Users can explore available venues, review facility information, and place bookings. Facility owners can manage listings and reservations using role-based dashboards.",
    image: "/projects/sportnest.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "MongoDB",
        color: "bg-green-100 text-green-700 border-green-300",
      },
      {
        name: "Express",
        color: "bg-gray-100 text-gray-700 border-gray-300",
      },
      {
        name: "Better Auth",
        color: "bg-orange-100 text-orange-700 border-orange-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
    mainFeatures: [
      "Browse sports facilities.",
      "Facility booking management.",
      "Owner and user dashboards.",
      "Protected application routes.",
      "Responsive booking interface.",
    ],
    challenges: [
      "Preventing booking conflicts.",
      "Managing multiple user roles.",
      "Connecting the frontend with the API.",
      "Handling protected routes.",
    ],
    futurePlans: [
      "Add booking payments.",
      "Introduce booking cancellation.",
      "Add facility ratings and reviews.",
      "Add map-based facility searching.",
    ],
    liveLink: "https://sports-nest-gules.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/sports-nest",
    clientLabel: "Client Code",
  },

  {
    slug: "online-book-borrowing-platform",
    title: "Online Book Borrowing Platform",
    shortDescription:
      "A modern platform where users can discover, explore, and borrow books.",
    fullDescription:
      "The Online Book Borrowing Platform allows users to discover books, browse categories, view book information, and borrow available books. Users can sign in with Google or email and manage borrowed books through a personal dashboard.",
    image: "/projects/book-platform.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "MongoDB",
        color: "bg-green-100 text-green-700 border-green-300",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-700 border-cyan-300",
      },
      {
        name: "Better Auth",
        color: "bg-orange-100 text-orange-700 border-orange-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Google OAuth",
      "Tailwind CSS",
    ],
    mainFeatures: [
      "Email and Google authentication.",
      "Browse books by category.",
      "Borrow available books.",
      "Track borrowed books.",
      "Responsive personal dashboard.",
    ],
    challenges: [
      "Implementing Google authentication.",
      "Managing book availability.",
      "Protecting dashboard routes.",
      "Handling borrowing records.",
    ],
    futurePlans: [
      "Add book-return reminders.",
      "Introduce book reviews.",
      "Add advanced book filtering.",
      "Create an administrator dashboard.",
    ],
    liveLink:
      "https://online-book-borrowing-platform-mocha.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/Online_Book_Borrowing_Platform",
    clientLabel: "Client Code",
  },

  {
    slug: "digitools",
    title: "DigiTools",
    shortDescription:
      "A digital productivity tools marketplace with product browsing and cart management.",
    fullDescription:
      "DigiTools is a responsive digital productivity marketplace. Users can browse available tools, review product information, manage products in a cart, and explore trial options.",
    image: "/projects/digitools.jpg",
    tags: [
      {
        name: "React",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-700 border-cyan-300",
      },
      {
        name: "DaisyUI",
        color: "bg-purple-100 text-purple-700 border-purple-300",
      },
      {
        name: "JavaScript",
        color: "bg-yellow-100 text-yellow-700 border-yellow-300",
      },
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Local Storage",
    ],
    mainFeatures: [
      "Browse digital products.",
      "View product information.",
      "Cart management.",
      "Trial-product options.",
      "Responsive interface.",
    ],
    challenges: [
      "Creating reusable product components.",
      "Managing cart state.",
      "Building responsive product cards.",
      "Persisting selected products.",
    ],
    futurePlans: [
      "Add user authentication.",
      "Connect a real database.",
      "Add online payments.",
      "Introduce product reviews.",
    ],
    liveLink: "https://digitools-react.netlify.app/",
    clientRepo:
      "https://github.com/raselahmed2023/digiTools",
    clientLabel: "Client Code",
  },

  {
    slug: "keenkeeper",
    title: "KeenKeeper",
    shortDescription:
      "A friendship-management dashboard with check-ins, timelines, and visual activity tracking.",
    fullDescription:
      "KeenKeeper is a friendship-management dashboard that helps users stay connected with important people. Users can add friends, record communication, create check-ins, and view relationship activities through timelines and charts.",
    image: "/projects/keenkeeper.jpg",
    tags: [
      {
        name: "Next.js",
        color: "bg-black text-white border-black",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-700 border-cyan-300",
      },
      {
        name: "Recharts",
        color: "bg-pink-100 text-pink-700 border-pink-300",
      },
      {
        name: "React",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Local Storage",
    ],
    mainFeatures: [
      "Friendship activity tracking.",
      "Quick friend check-ins.",
      "Interactive relationship timeline.",
      "Recharts data visualization.",
      "Responsive dashboard.",
    ],
    challenges: [
      "Designing meaningful dashboard statistics.",
      "Displaying relationship data through charts.",
      "Managing activity records.",
      "Making dashboard widgets responsive.",
    ],
    futurePlans: [
      "Add automatic reminders.",
      "Add cloud data synchronization.",
      "Introduce user authentication.",
      "Add calendar integration.",
    ],
    liveLink:
      "https://kin-keeper-seven-self.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/ken-keeper",
    clientLabel: "Client Code",
  },

  {
    slug: "job-application-tracker",
    title: "Job Application Tracker",
    shortDescription:
      "An interactive dashboard for organizing and tracking job applications.",
    fullDescription:
      "The Job Application Tracker helps job seekers organize applications in one place. Users can add applications, update statuses, filter records, and monitor statistics such as interviews and rejections.",
    image: "/projects/job-tracker.jpg",
    tags: [
      {
        name: "JavaScript",
        color: "bg-yellow-100 text-yellow-700 border-yellow-300",
      },
      {
        name: "HTML5",
        color: "bg-orange-100 text-orange-700 border-orange-300",
      },
      {
        name: "CSS3",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Local Storage",
    ],
    mainFeatures: [
      "Add and manage job applications.",
      "Update application status.",
      "Filter applications.",
      "Dashboard statistics.",
      "Local Storage persistence.",
    ],
    challenges: [
      "Managing application data.",
      "Updating statistics dynamically.",
      "Implementing status filters.",
      "Persisting application information.",
    ],
    futurePlans: [
      "Add user authentication.",
      "Add application reminders.",
      "Add performance charts.",
      "Allow CSV data export.",
    ],
    liveLink:
      "https://statuesque-salmiakki-676652.netlify.app/",
    clientRepo:
      "https://github.com/raselahmed2023/job-tracker",
    clientLabel: "Client Code",
  },

  {
    slug: "cinetrack",
    title: "CineTrack",
    shortDescription:
      "A responsive movie watchlist for managing watched and unwatched movies.",
    fullDescription:
      "CineTrack is a responsive movie watchlist built with React and Vite. Users can add movies, search and filter their collection, update watched status, remove movies, and preserve data using Local Storage.",
    image: "/projects/cinetrack.jpg",
    tags: [
      {
        name: "React",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
      {
        name: "Vite",
        color: "bg-purple-100 text-purple-700 border-purple-300",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-700 border-cyan-300",
      },
      {
        name: "LocalStorage",
        color: "bg-green-100 text-green-700 border-green-300",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Local Storage",
    ],
    mainFeatures: [
      "Add movies to a personal watchlist.",
      "Search and filter movies.",
      "Toggle watched status.",
      "Delete and reset movies.",
      "Local Storage persistence.",
    ],
    challenges: [
      "Managing multiple movie states.",
      "Synchronizing Local Storage.",
      "Implementing search and filters.",
      "Building a responsive interface.",
    ],
    futurePlans: [
      "Connect to a movie API.",
      "Add movie ratings and trailers.",
      "Add cloud synchronization.",
      "Create custom collections.",
    ],
    liveLink: "https://cine-track-nine.vercel.app/",
    clientRepo:
      "https://github.com/raselahmed2023/cineTrack",
    clientLabel: "Client Code",
  },

  {
    slug: "github-issue-tracker",
    title: "GitHub Issue Tracker",
    shortDescription:
      "A clean interface for viewing and organizing repository issues.",
    fullDescription:
      "The GitHub Issue Tracker uses the GitHub API to retrieve and display repository issues. It demonstrates REST API integration, asynchronous data fetching, error handling, and dynamic interface rendering.",
    image: "/projects/github-issue.jpg",
    tags: [
      {
        name: "React",
        color: "bg-blue-100 text-blue-700 border-blue-300",
      },
      {
        name: "GitHub API",
        color: "bg-gray-100 text-gray-700 border-gray-300",
      },
      {
        name: "JavaScript",
        color: "bg-yellow-100 text-yellow-700 border-yellow-300",
      },
    ],
    technologies: [
      "React",
      "JavaScript",
      "GitHub API",
      "REST API",
      "CSS3",
    ],
    mainFeatures: [
      "Fetch repository issues.",
      "Display issue information.",
      "Handle loading and API errors.",
      "Responsive issue cards.",
      "GitHub API integration.",
    ],
    challenges: [
      "Fetching GitHub API data.",
      "Handling loading and error states.",
      "Rendering dynamic issue information.",
      "Creating a clear issue interface.",
    ],
    futurePlans: [
      "Add repository search.",
      "Filter open and closed issues.",
      "Add pagination.",
      "Add labels and assignee filters.",
    ],
    liveLink:
      "https://resilient-panda-f132a7.netlify.app/",
    clientRepo:
      "https://github.com/raselahmed2023/github-issue",
    clientLabel: "Client Code",
  },
];

export const getProjectBySlug = (
  slug: string
): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};