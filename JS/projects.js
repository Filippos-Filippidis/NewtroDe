// Shared NEWTRO project data used by Reality Capture and the standalone Projects page.
const PROJECT_DATA = {
  "housing-extension-configurator": {
    title: "3D Housing Extension Configurator",
    type: "Parametric Design • Interactive Prototype",
    location: "Digital",
    year: "2025",
    status: "Prototype",
    description:
      "An early interactive prototype designed to make housing-extension decisions faster, clearer and more intuitive. Built with Rhino and Grasshopper and deployed through ShapeDiver, the configurator turns a parametric design model into an accessible real-time tool for exploring architectural options.",
    bullets: [
      "Adjust the extension's volumetric size in real time.",
      "Compare roof styles and control roof pitch.",
      "Select window types and vary the number of windows.",
    ],
    meta: [
      "Computational Design",
      "Parametric Design",
      "Rhino",
      "Grasshopper",
      "ShapeDiver",
    ],
    deliverables: [
      "Parametric 3D model",
      "Interactive web configurator",
      "Real-time design variations",
    ],
    images: [
      "/img/housing-extension-configurator.mp4",
      "/img/housing-extension-configurator-cover.jpg",
    ],
  },
  "prism-housing-design-app": {
    title: "PRiSM Housing Design App",
    type: "Computational Design • Design Configurator • Open Source",
    location: "London, United Kingdom",
    year: "2019",
    status: "Launched",
    description:
      "PRiSM is an open-source design configurator developed by Bryden Wood with Cast and the Mayor of London to support the early design of high-quality, precision-manufactured housing. While working at Bryden Wood in London as a Senior Computational Designer, Filippos contributed as part of a small team that collaboratively developed the application's design logic and implementation. The tool combined spatial planning requirements with manufacturing knowledge, allowing users to configure residential schemes, compare construction systems and assess design performance. This work was completed during previous employment; project and image rights are held by Bryden Wood.",
    client: {
      label: "Source",
      name: "ArchDaily project coverage",
      url: "https://www.archdaily.com/920962/london-launches-open-source-app-for-homebuilding",
    },
    bullets: [
      "Collaboratively developed the configurator's design logic and application as part of a small computational-design team.",
      "Translated spatial-planning and precision-manufacturing requirements into an interactive early-design workflow.",
      "Enabled users to configure housing layouts and review systemisation, area and project-performance information in a shared 3D environment.",
    ],
    meta: [
      "Computational Design",
      "Design Configurator",
      "Parametric Design",
      "Housing",
      "Design for Manufacture and Assembly",
      "Bryden Wood",
    ],
    deliverables: [
      "Computational design logic",
      "Application development",
      "Parametric building configuration",
      "Systemisation and performance analysis",
    ],
    images: [
      "/img/prism-housing-design-app-01.jpg",
      "/img/prism-housing-design-app-02.jpg",
      "/img/prism-housing-design-app-03.jpg",
    ],
  },
  "kinth-3d-printed-partition": {
    title: "Kinth 3D-Printed Office Partition",
    type: "Computational Design • 3D Printing • Commissioned Concept",
    location: "Athens, Greece",
    year: "2026",
    status: "Concept Completed",
    description:
      "A commissioned concept for a 3D-printed office partition designed for Kinth, an architecture and real-estate developer in Athens. The partition creates a clear spatial threshold and a degree of privacy while remaining visually open, allowing light, views and a sense of connection to pass between the spaces it separates.",
    bullets: [
      "A permeable cellular system balances privacy with visual openness.",
      "Graded cell size, spacing and depth vary porosity and light transmission across the partition.",
      "The geometry was developed for additive manufacturing as a continuous architectural assembly.",
      "An integrated Kinth sign gives the partition a dual role as spatial divider and reception feature.",
    ],
    meta: [
      "Computational Design",
      "3D Printing",
      "Parametric Design",
      "Workplace",
      "Interior Architecture",
      "Athens",
    ],
    deliverables: [
      "Design concept",
      "Computational geometry",
      "3D-printing strategy",
      "Technical drawings",
      "Architectural visualisations",
    ],
    images: [
      "/img/kinth-3d-printed-partition-office.png",
      "/img/kinth-3d-printed-partition-elevation.png",
      "/img/kinth-3d-printed-partition-axonometric.png",
    ],
  },
  "tashkent-thresholds": {
    title: "Doors, Passages, and Thresholds in Tashkent",
    type: "Education • Workshop • Visiting School",
    location: "Tashkent, Uzbekistan",
    year: "2026",
    status: "Completed",
    description:
      "This workshop explores the architectural thresholds of Tashkent—its doors, passages, gateways and liminal spaces—as critical markers of social behaviour, climatic adaptation, political ideology and cultural transition. Through the combined use of contemporary digital documentation tools and critical historical inquiry, participants studied how threshold spaces emerged, what they communicated within their original contexts and how they might be conserved, restored or reinterpreted today.",
    bullets: [],
    meta: ["Education", "Workshop", "Visiting School"],
    deliverables: ["3D scans", "3D-printed models", "Videos", "Drawings"],
    images: [
      "/img/tashkent-workshop.jpg",
      "/img/tashkent-models.png",
      "/img/tashkent-model-study-01.png",
      "/img/tashkent-model-study-02.png",
      "/img/tashkent-model-study-03.png",
      "/img/tashkent-model-study-04.png",
      "/img/tashkent-thresholds.mp4",
    ],
  },
  "recording-culture-baku-2022": {
    title: "Recording Culture: Building Restoration",
    type: "Education • Workshop • Heritage Documentation",
    location: "Xanbaba Hamam, Mardakan, Baku, Azerbaijan",
    year: "2022",
    status: "Completed",
    description:
      "An intensive educational workshop investigating how architecture records social and cultural change, and how threatened heritage can be documented and preserved through contemporary technologies. Centred on Xanbaba Hamam in Mardakan, the programme combined direct observation, historical research and digital capture to understand the building’s material construction and its cultural role within the surrounding urban fabric.",
    bullets: [
      "Divided the investigation into tangible and intangible strands, cross-referencing measured evidence with the site’s social and cultural history.",
      "Recorded scale, structure, texture, materiality and construction techniques through photography, surveying, texture mapping, LiDAR and photogrammetry.",
      "Introduced Rhino and Polycam workflows for producing spatially accurate 3D scans, point clouds and digital models.",
      "Translated the collected material through analysis, design, 3D printing, casting, model-making and a final exhibition.",
    ],
    meta: [
      "Education",
      "Workshop",
      "Heritage",
      "Reality Capture",
      "LiDAR",
      "Baku",
    ],
    deliverables: [
      "Site survey and photographic record",
      "LiDAR scans and point clouds",
      "3D models and texture maps",
      "3D prints, casts and physical models",
      "Final presentation and exhibition",
    ],
    images: ["/img/recording-culture-baku-2022.mp4"],
  },
  "aavs-melbourne-2017": {
    title: "Interior Urbanism: From Laneway to Arcade",
    type: "Education • Workshop • AA Visiting School",
    location: "Melbourne, Australia",
    year: "2017",
    status: "Completed",
    description:
      "Unit 1 of the 2017 AA Visiting School Melbourne, led by Paul Loh and Filippos Filippidis as part of the Design Methods 2.0 programme. The intensive studio investigated materiality and its impact on urbanism, using Melbourne's distinctive laneways, arcades and interstitial spaces as a context for critical design exploration.",
    bullets: [
      "Challenged the conventional podium or slab as an isolated and privatised urban territory.",
      "Explored new treatments of urban ground capable of extending public experience through the city.",
      "Formed part of a 12-day collaboration between the Architectural Association and Melbourne School of Design.",
    ],
    meta: [
      "Education",
      "Workshop",
      "Urbanism",
      "AA Visiting School",
      "Melbourne School of Design",
    ],
    deliverables: [
      "Intensive design studio",
      "Public lecture",
      "Design review",
      "Dulux Gallery exhibition",
    ],
    images: [
      "/img/aavs-melbourne-2017-logo.png",
      "/img/aavs-melbourne-2017-unit-1.jpg",
      "/img/aavs-melbourne-2017-lectures.jpg",
      "/img/aavs-melbourne-2017-laneway-isoptera.png",
      "/img/aavs-melbourne-2017-taxonomy-of-erosion.png",
      "/img/aavs-melbourne-2017-pink-balloons.png",
      "/img/aavs-melbourne-2017-physical-model.png",
    ],
  },
  "mmu-cpu-2020": {
    title: "Complexity, Planning & Urbanism — 2020",
    type: "Education • MArch Atelier • Computational Urbanism",
    location: "Manchester, United Kingdom",
    year: "2020",
    status: "Completed",
    description:
      "Teaching within the Complexity, Planning & Urbanism (CPU) MArch atelier at Manchester School of Architecture. The studio combined complexity science with computational design to explore how dynamic, iterative systems could inform future cities, moving beyond formal biomimicry to examine how natural intelligence generates, tests and adapts design outcomes.",
    client: {
      label: "Project page",
      name: "Manchester School of Architecture — MSA 2020",
      url: "https://www.msa.ac.uk/2020/masters/march/cpu/",
    },
    bullets: [
      "Developed computational and evolutionary design methods for testing multiple outcomes rather than producing singular static objects.",
      "Explored spatial performance at occupancy, building and urban scales.",
      "Connected design investigation with measurable goals including walkability, participation, resilience and well-being.",
      "Supported student work spanning generative urban systems, natural intelligence and citizen-led planning.",
    ],
    meta: [
      "Education",
      "MArch",
      "Computational Design",
      "Urbanism",
      "Complexity Science",
      "Manchester School of Architecture",
    ],
    deliverables: [
      "MArch studio teaching",
      "Design tutorials and reviews",
      "Computational design methods",
      "Student project development",
    ],
    images: [
      "/img/mmu-cpu-2020-nadeem-hanna-work-01.jpg",
      "/img/mmu-cpu-2020-nadeem-hanna-work-02.jpg",
      "/img/mmu-cpu-2020-shambhavi-joshi-work.jpg",
      "/img/mmu-cpu-2020-zohra-abbas-work.jpg",
      "/img/mmu-cpu-2020-design-exploration-workflow.jpg",
      "/img/mmu-cpu-2020-performance-analysis.jpg",
      "/img/mmu-cpu-2020-chen-menghan.jpg",
      "/img/mmu-cpu-2020-jiao-xie.jpg",
      "/img/mmu-cpu-2020-junjie-su.jpg",
      "/img/mmu-cpu-2020-andreas-maragakis.jpg",
      "/img/mmu-cpu-2020-siyu-xie.jpg",
    ],
  },
  "mmu-cpu-2019": {
    title: "Complexity, Planning & Urbanism — 2019",
    type: "Education • MArch Atelier • Computational Urbanism",
    location: "Manchester, United Kingdom",
    year: "2019",
    status: "Completed",
    description:
      "Teaching within the Complexity, Planning & Urbanism (CPU) MArch atelier at Manchester School of Architecture. Working through a complexity-science framework, the studio developed computational methods for understanding future cities as temporal, adaptive systems shaped by climate, participation, development, resilience and changing urban morphology.",
    client: {
      label: "Yearbook",
      name: "MSA Yearbook 2019, pp. 145–155",
      url: "https://www.msa.ac.uk/media/msaacuk/documents/yearbooks/msa_yearbook_19.pdf#page=75",
    },
    bullets: [
      "MArch 2 collaborated with Manchester City Council and the Northern Gateway team on future development around 15,000 planned homes.",
      "Students used a synthetic agent-based population to investigate demands that could not yet be represented by future residents.",
      "Urban transformation scenarios were evaluated through low carbon, walkability, permeability, ecological balance, biodiversity and flood risk.",
      "MArch 1 explored DfMA and BIM for modular high-density housing alongside computational approaches to adaptive reuse on a constrained listed site.",
    ],
    meta: [
      "Education",
      "MArch",
      "Computational Design",
      "Urbanism",
      "Agent-Based Modelling",
      "Manchester School of Architecture",
    ],
    deliverables: [
      "MArch studio teaching",
      "Design tutorials and reviews",
      "Computational urban design methods",
      "Student project development",
    ],
    images: [
      "/img/mmu-cpu-2019-yearbook-146-147.jpg",
      "/img/mmu-cpu-2019-yearbook-148-149.jpg",
      "/img/mmu-cpu-2019-yearbook-150-151.jpg",
      "/img/mmu-cpu-2019-yearbook-152-153.jpg",
      "/img/mmu-cpu-2019-yearbook-154-155.jpg",
    ],
  },
  "mmu-cpu-2018": {
    title: "Complexity, Planning & Urbanism — 2018",
    type: "Education • MArch Atelier • Computational Urbanism",
    location: "Manchester, United Kingdom",
    year: "2018",
    status: "Completed",
    description:
      "Teaching within the Complexity, Planning & Urbanism (CPU) MArch atelier at Manchester School of Architecture. The studio used complexity science—including systems, self-organisation, emergence, intelligence, structural change and adaptation—to develop computational approaches for the design, management and understanding of future cities as temporal and dynamic processes.",
    bullets: [
      "Year 1 investigated future living in 2050, using modular units and frame structures to test density, responsiveness, adaptability and changing programmes.",
      "A second Year 1 brief reimagined Manchester’s Mayfield Station as a Robotics and Artificial Intelligence Maker Space and Incubator in 2030.",
      "Year 2 developed speculative futures for the Manchester Corridor through data capture, investigation, analysis and visualisation.",
      "Student-defined technological, societal and environmental timelines became settings for performance-driven sustainable architecture and bespoke computational tools.",
    ],
    meta: [
      "Education",
      "MArch",
      "Computational Design",
      "Urbanism",
      "Future Scenarios",
      "Manchester School of Architecture",
    ],
    deliverables: [
      "MArch studio teaching",
      "Design tutorials and reviews",
      "Computational design methods",
      "Student project development",
    ],
    images: [
      "/img/mmu-cpu-2018-cover.png",
      "/img/mmu-cpu-2018-future-interior.png",
      "/img/mmu-cpu-2018-performance-tower.png",
      "/img/mmu-cpu-2018-housing-data-map.png",
      "/img/mmu-cpu-2018-traffic-emissions-map.png",
      "/img/mmu-cpu-2018-future-landscape.png",
      "/img/mmu-cpu-2018-robotics-makerspace.png",
    ],
  },
  "intelligent-control-seoul": {
    title: "Intelligent Control: Disruptive Technologies",
    type: "Education • Lecture • Computational Design",
    location: "University of Seoul, Seoul, South Korea",
    year: "2022",
    status: "Completed",
    description:
      "A lecture on disruptive technologies delivered by Filippos Filippidis for the University of Seoul Department of Architecture's computational and generative design lecture series. Presented alongside Marios Tsiliakos's Design Computation in Practice lecture, the session examined how emerging computational tools and technology are reshaping architectural design and practice.",
    bullets: [
      "Presented Disruptive Technologies within the Intelligent Control lecture programme.",
      "Explored the relationship between architectural design, computation and emerging technology.",
      "Delivered to architecture students and faculty at the University of Seoul on 12 December 2022.",
    ],
    meta: [
      "Education",
      "Lecture",
      "Computational Design",
      "Generative Design",
      "University of Seoul",
    ],
    deliverables: [
      "Guest lecture",
      "Presentation",
      "Student and faculty discussion",
    ],
    images: [
      "/img/intelligent-control-seoul-poster.png",
      "/img/intelligent-control-seoul-lecture-01.png",
      "/img/intelligent-control-seoul-lecture-02.png",
      "/img/intelligent-control-seoul-speakers.png",
    ],
  },
  "intelligent-control-book": {
    title:
      "Design Studio Vol. 2: Intelligent Control — Disruptive Technologies",
    type: "Publication • Co-editor • RIBA Publishing",
    location: "London, United Kingdom",
    year: "2021",
    status: "Published",
    description:
      "Co-edited by Rob Hyde and Filippos Filippidis, this RIBA Publishing volume examines how disruptive technologies are changing architectural education and practice. Contributions from academia and industry consider the opportunities, risks and wider cultural, social, environmental and political implications of technology for architecture, urbanism and design.",
    bullets: [
      "Explores automation, generative design and artificial intelligence.",
      "Examines augmented reality, videogame urbanism and construction robotics.",
      "Brings together evolving research and lived experience from academia and practice.",
    ],
    meta: [
      "Education",
      "Publication",
      "Research",
      "RIBA Publishing",
      "ISBN 9781859469705",
    ],
    deliverables: [
      "Co-editing and editorial direction",
      "156-page illustrated publication",
      "Research and industry contributions",
    ],
    images: [
      "/img/intelligent-control-01.jpg",
      "/img/intelligent-control-02.jpg",
      "/img/intelligent-control-06.jpg",
      "/img/intelligent-control-07.jpg",
    ],
  },
  "lusail-towers": {
    title: "Lusail Towers",
    type: "Commercial • High-Rise • Integrated Design",
    location: "Lusail, Qatar",
    year: "2022",
    status: "Substantially Completed",
    description:
      "A landmark mixed-use development conceived as the catalyst for a new central business district in Lusail, undertaken while working as an architect at Foster + Partners. Four towers—two at 70 storeys and two at 50—are arranged around a central plaza and framed by a network of lower podium buildings that create shaded, pedestrian-scaled streets. Their elliptical floorplates rotate through 90 degrees as they rise, while projecting marine-grade aluminium profiles respond to the sun by shading the glazing without compromising daylight or views. The project brought architectural and environmental design together with structural and MEP engineering through an integrated digital workflow. This work was completed during previous employment; the project and all image rights are held by Foster + Partners.",
    client: {
      label: "Project source",
      name: "Lusail Towers — Foster + Partners",
      url: "https://www.fosterandpartners.com/news/integrated-approach-drives-the-design-vision-for-lusail-towers",
    },
    bullets: [
      "Contributed as an architect within Foster + Partners' integrated project team.",
      "Four morphing tower forms establish a distinctive skyline while responding to structure, views and solar exposure.",
      "Low-rise podium buildings, courtyards and shaded terraces create a human-scaled public realm around the central plaza.",
    ],
    meta: [
      "Architecture",
      "Commercial",
      "High-Rise",
      "Integrated Design",
      "Computational Design",
      "Foster + Partners",
    ],
    deliverables: [
      "Architectural design development",
      "Integrated multidisciplinary coordination",
      "Climate-responsive tower design",
      "Public-realm design",
    ],
    images: [
      "/img/lusail-towers-01.jpg",
      "/img/lusail-towers-02.jpg",
      "/img/lusail-towers-03.jpg",
      "/img/lusail-towers-04.jpg",
    ],
  },
  "jeddah-metro": {
    title: "Jeddah Metro",
    type: "Transport • Urban Planning • Façade & Geometry",
    location: "Jeddah, Saudi Arabia",
    year: "2016",
    status: "Design Completed",
    description:
      "A city-wide, climate-responsive vision for Jeddah's integrated transport network, undertaken while working as an architect at Foster + Partners. The proposal brings metro, bus, tram, ferry, cycling and pedestrian routes together with public space and transit-oriented development. Filippos contributed to planning during the project's early stages, then worked on the façade and the realisation of its modular geometry. Distinctive white concrete arches establish a coherent identity across the network while supporting adaptable station forms and locally expressive shading screens. This work was completed during previous employment; the project and all image rights are held by Foster + Partners.",
    client: {
      label: "Project source",
      name: "Jeddah Metro on Architizer",
      url: "https://architizer.com/projects/jeddah-transport-network/",
    },
    bullets: [
      "Contributed to planning and urban-design development during the early stages of the project.",
      "Developed façade geometry as part of the network's coherent architectural identity.",
      "Supported the geometric realisation of a flexible, modular station language designed for expansion and climatic shading.",
    ],
    meta: [
      "Architecture",
      "Transport",
      "Urban Planning",
      "Façade Design",
      "Geometry Realisation",
      "Foster + Partners",
    ],
    deliverables: [
      "Early-stage planning",
      "Façade design development",
      "Modular geometry development",
      "Geometry realisation",
    ],
    images: [
      "/img/jeddah-metro-01.jpg",
      "/img/jeddah-metro-02.jpg",
      "/img/jeddah-metro-03.jpg",
      "/img/jeddah-metro-04.jpg",
      "/img/jeddah-metro-05.jpg",
      "/img/jeddah-metro-06.jpg",
      "/img/jeddah-metro-07.jpg",
    ],
  },
  "sydney-metro-station-interiors": {
    title: "Sydney Metro Station Interiors",
    type: "Transport • Interior Architecture • Modular Design",
    location: "Sydney, Australia",
    status: "Completed",
    description:
      "Interior design development for the architectural shell of a Sydney Metro station, undertaken while working at Foster + Partners. The station interior was conceived as a modular system in which a continuous ribbed geometry shapes the walls and their transitions into the ceiling, while coordinating ventilation and other technical requirements within a coherent architectural language. This work was completed during previous employment; project and image rights are held by Foster + Partners.",
    bullets: [
      "Developed the interior shell as a repeatable modular wall system.",
      "Used ribbed geometry to create continuity across walls, openings and curved transitions.",
      "Integrated the ventilation system and technical interfaces into the architectural language of the station.",
    ],
    meta: [
      "Architecture",
      "Transport",
      "Interior Design",
      "Modular Systems",
      "Foster + Partners",
    ],
    deliverables: [
      "Interior shell design development",
      "Modular wall-system design",
      "Ribbed geometry development",
      "Ventilation integration",
    ],
    images: [
      "/img/sydney-metro-station-interior-01.jpg",
      "/img/sydney-metro-station-interior-02.jpg",
      "/img/sydney-metro-station-interior-03.jpg",
      "/img/sydney-metro-station-interior-detail-01.jpg",
      "/img/sydney-metro-station-interior-04.jpg",
      "/img/sydney-metro-station-interior-05.jpg",
      "/img/sydney-metro-station-interior-detail-02.jpg",
      "/img/sydney-metro-station-interior-06.jpg",
    ],
  },
  "tinos-landscape-villas": {
    title: "Tinos Landscape Villas",
    type: "Residential • Three Villas • Under Construction",
    location: "Tinos, Cyclades, Greece",
    year: "2026",
    status: "Under Construction",
    description:
      "Three villas designed for a steep natural site on the island of Tinos. The project has received planning permission and is currently under construction. Each residence is embedded into the terrain to reduce its visual impact, preserve the character of the hillside and create a close relationship between architecture and the Cycladic landscape.",
    bullets: [
      "Three independent villas arranged along the site's natural contours.",
      "Low-profile volumes and planted roofs integrate the buildings into the hillside.",
      "Local stone, sheltered courtyards and terraces establish a material and spatial connection to Tinos.",
      "Private pools and outdoor living spaces are oriented toward the landscape and sea views.",
    ],
    meta: [
      "Architecture",
      "Residential",
      "Tinos",
      "Landscape Integration",
      "Planning Permission",
      "Under Construction",
    ],
    deliverables: [
      "Architectural design",
      "Planning application",
      "Planning permission",
      "Construction documentation",
      "Architectural visualisations",
    ],
    images: [
      "/img/tinos-landscape-villas-aerial.png",
      "/img/tinos-landscape-villas-hillside.png",
      "/img/tinos-landscape-villas-pool-terrace-01.png",
      "/img/tinos-landscape-villas-pool-terrace-02.png",
      "/img/tinos-landscape-villas-covered-terrace.png",
    ],
  },
  "atsipopoulo-vacation-homes": {
    title: "Atsipopoulo Family Vacation Homes",
    type: "Residential • Concept Design • Planning Permission",
    location: "Atsipopoulo, Crete, Greece",
    year: "2025",
    status: "Planning Approved",
    description:
      "A proposal for two family vacation homes in Atsipopoulo, Crete, developed from concept design through planning permission. The scheme brings together contemporary residential spaces, sheltered outdoor living and a material palette informed by the architectural character and landscape of Crete.",
    bullets: [
      "Two independent family homes arranged as a coherent residential ensemble.",
      "Pool terraces, shaded pergolas and landscaped external spaces extend everyday living outdoors.",
      "Stone, render, timber and pitched tiled roofs establish a warm, context-sensitive architectural language.",
    ],
    meta: [
      "Architecture",
      "Residential",
      "Vacation Homes",
      "Concept Design",
      "Planning Permission",
    ],
    deliverables: [
      "Concept design",
      "Planning application",
      "Planning permission",
      "Architectural visualisations",
    ],
    images: [
      "/img/atsipopoulo-vacation-homes-aerial.png",
      "/img/atsipopoulo-vacation-homes-pool-deck.png",
      "/img/atsipopoulo-vacation-homes-pool-terrace.png",
      "/img/atsipopoulo-vacation-homes-arrival.png",
    ],
  },
  "oros-summer-villas": {
    title: "Oros Summer Villas",
    type: "Residential • Two Rental Villas • Planning Permission",
    location: "Oros, Rethymnon, Crete, Greece",
    year: "2022",
    status: "Planning Approved",
    description:
      "A private-client project for two 60 m² summer rental villas in the village of Oros, Rethymnon. Developed from concept design through planning permission approval, the scheme pairs compact accommodation with generous shared outdoor spaces and a material language rooted in the rural architecture of Crete.",
    bullets: [
      "Two independent 60 m² villas designed for seasonal rental.",
      "The villas frame a shared pool terrace and shaded outdoor living area.",
      "Stone walls, white render, timber pergolas and pitched tiled roofs respond to the local Cretan setting.",
    ],
    meta: [
      "Architecture",
      "Residential",
      "Summer Rental",
      "Crete",
      "Concept Design",
      "Planning Permission",
    ],
    deliverables: [
      "Concept design",
      "Planning application",
      "Planning permission approval",
      "Architectural visualisations",
    ],
    images: [
      "/img/oros-summer-villas-exterior.png",
      "/img/oros-summer-villas-pool-courtyard.png",
      "/img/oros-summer-villas-aerial.png",
    ],
  },
  "plant-house": {
    title: "Plant House",
    type: "Residential",
    location: "Petralona, Athens",
    year: "2024",
    status: "Completed",
    description:
      "Plant House blends hospitality with artistry in every detail. From bespoke furniture and hand-sculpted ceramics to everyday tableware and fittings, every item is hand-picked or made locally. Staying at Plant House becomes an immersive experience: you enter a space that feels like home, but also like a carefully designed gallery.",
    client: { name: "Rhea Kalo", url: "https://rheakalo.com/" },
    bullets: [],
    meta: ["Architecture", "Residential"],
    deliverables: ["Design & Build Project"],
    images: [
      "/img/plant-house-cover.jpg",
      "/img/plant-house-kitchen-wide.jpg",
      "/img/plant-house-bedroom.jpg",
      "/img/plant-house-kitchen.jpg",
      "/img/plant-house-bathroom.jpg",
      "/img/plant-house-bedroom-detail.jpg",
      "/img/plant-house-living-room.jpg",
      "/img/plant-house-courtyard.jpg",
      "/img/plant-house-courtyard-detail.jpg",
      "/img/plant-house-furniture-detail.jpg",
      "/img/plant-house-door-detail.jpg",
    ],
  },
  "silver-ring": {
    title: "Silver Ring",
    type: "Jewellery Design • 3D Printing • Silver Casting",
    location: "New York, USA",
    year: "2015",
    status: "Completed",
    description:
      "A sculptural ring designed digitally and developed through additive manufacturing. The design was 3D printed and then cast in silver, translating its layered geometry into a tactile, wearable object.",
    bullets: [
      "Developed the ring's form as a digital 3D model.",
      "3D printed the design to prepare it for production.",
      "Cast the finished piece in silver.",
    ],
    meta: [
      "Fabrication",
      "Jewellery Design",
      "3D Modelling",
      "3D Printing",
      "Silver",
    ],
    deliverables: [
      "Jewellery design",
      "Digital 3D models",
      "3D-printed model",
      "Finished silver ring",
    ],
    images: [
      "/img/silver-jewellery-ring-01.png",
      "/img/silver-jewellery-ring-photo-water.png",
      "/img/silver-jewellery-ring-photo-red.png",
      "/img/silver-jewellery-ring-photo-stone.png",
    ],
  },
  "silver-bracelet": {
    title: "Silver Bracelet",
    type: "Jewellery Design • 3D Printing • Silver Casting",
    location: "New York, USA",
    year: "2015",
    status: "Completed",
    description:
      "A flowing bracelet designed digitally and developed through additive manufacturing. The design was 3D printed and then cast in silver, translating its layered geometry into a wearable object.",
    bullets: [
      "Developed the bracelet's flowing form as a digital 3D model.",
      "3D printed the design to prepare it for production.",
      "Cast the finished piece in silver.",
    ],
    meta: [
      "Fabrication",
      "Jewellery Design",
      "3D Modelling",
      "3D Printing",
      "Silver",
    ],
    deliverables: [
      "Jewellery design",
      "Digital 3D model",
      "3D-printed model",
      "Finished silver bracelet",
    ],
    images: [
      "/img/silver-jewellery-bracelet.png",
    ],
  },
  "plant-house-custom-knobs": {
    title: "Plant House Custom Cabinet Knobs",
    type: "Component Design",
    location: "Petralona, Athens",
    year: "2024",
    status: "Completed",
    description:
      "A custom 3D-printed cabinet knob designed specifically for a bespoke residential project. Inspired by the project’s playful botanical theme, the knob was modelled and 3D printed to create a unique tactile detail that integrates seamlessly with the custom cabinetry, adding personality while maintaining functionality and a cohesive design language.",
    bullets: [],
    meta: ["Fabrication", "Component Design"],
    deliverables: ["Drawings", "3D model", "3D printing", "Metal moulding"],
    images: [
      "/img/plant-house-custom-knob.jpg",
      "/img/plant-house-kitchen-wide.jpg",
      "/img/custom-knobs-cabinet-installation.jpg",
      "/img/custom-knob-front-view.png",
      "/img/custom-knob-side-view.png",
      "/img/custom-knob-3d-printing.png",
    ],
  },
  "magikos-kipos-paperweight": {
    title: "Magikos Kipos Paperweight",
    type: "Product Design • Prototyping • Fabrication",
    location: "Kastro, Boeotia, Greece",
    status: "Completed",
    description:
      "A bespoke paperweight conceived as a client gift for Magikos Kipos, a hydroponic producer of leafy vegetables and herbs. The company’s sprouting-leaf logo became a three-dimensional object emerging from a compact, weighted base. The design was developed digitally, refined through successive 3D-printed mockups and translated into a cast-metal product with a painted green finish and hand-finished branding.",
    client: { name: "Magikos Kipos", url: "https://www.magikoskipos.gr/" },
    bullets: [
      "Translated the client’s two-leaf logo into a recognisable sculptural form.",
      "Compared proportions and adjusted the height and geometry through digital design iterations.",
      "Produced 3D-printed prototypes for client review and approval.",
      "Oversaw mould-making, metal casting, assembly and final painted finishing.",
    ],
    meta: [
      "Fabrication",
      "Product Design",
      "3D Modelling",
      "3D Printing",
      "Metal Casting",
    ],
    deliverables: [
      "Concept design",
      "3D model and design development",
      "3D-printed prototypes",
      "Fabrication coordination",
      "Finished metal paperweights",
    ],
    images: [
      "/img/magikos-kipos-paperweight-hero.png",
      "/img/magikos-kipos-paperweights-finished.png",
      "/img/magikos-kipos-paperweight-design-comparison.png",
      "/img/magikos-kipos-paperweight-design-iterations.png",
      "/img/magikos-kipos-paperweight-3d-printed-prototypes.png",
      "/img/magikos-kipos-paperweight-fabrication-process.png",
      "/img/magikos-kipos-paperweight-metal-bases.png",
      "/img/magikos-kipos-paperweights-production.png",
    ],
  },
  "food-athens": {
    title: "Food Testing Facility, Athens",
    type: "Testing Plant - Labs • As-built survey",
    location: "Athens, Greece",
    year: "2026",
    status: "Completed",
    description:
      "Full 3D capture of a multi-level food processing and testing lab to support renovation, documentation and coordination with structural and MEP teams.",
    bullets: [
      "Interior captured using tripod LiDAR and photogrammetry.",
      "Generated a unified, cleaned point cloud and high-resolution visual material.",
      "Delivered model-ready documentation for the design and coordination team.",
    ],
    meta: [
      "Reality Capture",
      "Architecture",
      "Construction",
      "≈2500 m²",
      "2 days on-site",
    ],
    deliverables: [
      "Registered point cloud",
      "BIM-ready geometry",
      "As-built documentation",
    ],
    images: [
      "/img/1.jpeg",
      "/img/food-testing-facility-scan.png",
      "/img/food-testing-facility-floor-plan-01.png",
      "/img/food-testing-facility-floor-plan-02.png",
      "/img/food-testing-facility-floor-plan-03.png",
      "/img/food-testing-facility-floor-plan-04.png",
    ],
  },
  "heritage-facade": {
    title: "Heritage Facade Capture",
    type: "Conservation • Documentation",
    location: "Greece",
    year: "2026",
    status: "Completed",
    description:
      "High-detail facade documentation of a historic street frontage prior to conservation and restoration work.",
    bullets: [
      "Ground-based photogrammetry with minimal disruption to the street.",
      "Detailed capture of ornamentation, material condition and facade geometry.",
      "Visual documentation suitable for restoration planning and drawing production.",
    ],
    meta: [
      "Reality Capture",
      "Architecture",
      "Conservation",
      "Sub-centimetre detail",
    ],
    deliverables: [
      "Textured mesh",
      "Orthophoto elevations",
      "Measurement-ready 2D drawings",
    ],
    images: [
      "/img/IMG_9015.jpg",
      "/img/IMG_9016.jpg",
      "/img/IMG_9017.jpg",
      "/img/IMG_9018.jpg",
    ],
  },
  "cycladic-resi": {
    title: "Syros Island Scan",
    type: "Private • Residential",
    location: "Syros, Greece",
    year: "2026",
    status: "Completed",
    description:
      "Reality capture of a small island residence to enable remote review, accurate reference material and design coordination.",
    bullets: [
      "3D scan walkthrough for easy remote viewing.",
      "Scan imagery used to support design discussions without repeated site visits.",
      "Orthographic material extracted for CAD processing and spatial reference.",
    ],
    meta: ["Reality Capture", "Architecture", "LiDAR", "Digital walkthrough"],
    deliverables: ["Point cloud", "Digital walkthrough", "Reference imagery"],
    images: [
      "/img/syros.mp4",
      "/img/syros-1.jpg",
      "/img/syros-2.jpg",
      "/img/syros-3.jpg",
    ],
  },
  "facility-management": {
    title: "Facility Scan",
    type: "Commercial • Food Production Facility",
    location: "Greece",
    year: "2026",
    status: "Completed",
    description:
      "As-built BIM and scan documentation for facility management, coordination and future operational planning.",
    bullets: [
      "As-built survey of the facility.",
      "Scan-to-BIM workflow for structured building information.",
      "Model and documentation prepared for facility management use cases.",
    ],
    meta: [
      "Reality Capture",
      "Construction",
      "Facility Management",
      "BIM LOD 300",
    ],
    deliverables: [
      "Point cloud",
      "BIM LOD 300 model",
      "Facility management reference model",
    ],
    images: [
      "/img/mg_2.png",
      "/img/mg_1.png",
      "/img/mg_3.jpg",
      "/img/mg_4.jpg",
    ],
  },
  "pelion-heritage": {
    title: "Pelion Retreat",
    type: "Private • Residential",
    location: "Pelion, Greece",
    year: "2026",
    status: "Completed",
    description:
      "As-built BIM model and drawings for a residential retreat, supporting future design and documentation work.",
    bullets: [
      "LiDAR capture of existing building conditions.",
      "As-built drawings extracted from the captured survey data.",
      "BIM model prepared as a reliable base for design development.",
    ],
    meta: [
      "Reality Capture",
      "Architecture",
      "As-built drawings",
      "BIM modelling",
    ],
    deliverables: ["Point cloud", "BIM LOD 300 model", "As-built drawings"],
    images: ["/img/pelion.mp4", "/img/p-1.jpg", "/img/p-3.jpg", "/img/p-4.jpg"],
  },
  "resi-building": {
    title: "Lykavitos Duplex",
    type: "Residential • Apartment Duplex",
    location: "Athens, Greece",
    year: "2026",
    status: "Completed",
    description:
      "As-built drawings and 3D model for design work in an urban residential context.",
    bullets: [
      "Existing conditions captured for design reference.",
      "3D model generated to support design and coordination.",
      "2D CAD drawings produced from the measured digital base.",
    ],
    meta: [
      "Reality Capture",
      "Architecture",
      "Urban context",
      "Precision modelling",
    ],
    deliverables: ["Point cloud", "3D model", "2D CAD drawings"],
    images: ["/img/d-1.jpg", "/img/d-2.jpg", "/img/d-3.jpg", "/img/d-4.jpg"],
  },
};

const modalEl = document.getElementById("project-modal");

function isVideo(src) {
  return /\.(mp4|webm|ogg)$/i.test(src || "");
}

function createMediaElement(src, alt, controls = false) {
  if (isVideo(src)) {
    const video = document.createElement("video");
    video.src = src;
    video.muted = !controls;
    video.loop = !controls;
    video.playsInline = true;
    video.controls = controls;
    if (!controls) video.autoplay = true;
    video.setAttribute("aria-label", alt);
    return video;
  }
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";
  return img;
}

if (modalEl) {
  const modalTitleEl = document.getElementById("project-modal-title");
  const modalTypeEl = modalEl.querySelector(".project-modal-type");
  const modalFactsEl = modalEl.querySelector(".project-modal-facts");
  const modalDescEl = modalEl.querySelector(".project-modal-description");
  const modalClientEl = modalEl.querySelector(".project-modal-client");
  const modalBulletsEl = modalEl.querySelector(".project-modal-bullets");
  const modalMetaEl = modalEl.querySelector(".project-modal-meta");
  const modalDelivsWrapperEl = modalEl.querySelector(
    ".project-modal-deliverables",
  );
  const modalDelivsEl = modalEl.querySelector(
    ".project-modal-deliverables-list",
  );
  const closeBtn = modalEl.querySelector(".project-modal-close");
  const backdrop = modalEl.querySelector(".project-modal-backdrop");
  const modalGalleryEl = document.getElementById("project-modal-gallery");
  const lightboxEl = modalEl.querySelector(".project-lightbox");
  const lightboxMediaEl = modalEl.querySelector(".project-lightbox-media");
  const lightboxPrevBtn = modalEl.querySelector("[data-lightbox-prev]");
  const lightboxNextBtn = modalEl.querySelector("[data-lightbox-next]");
  let lightboxMedia = [];
  let lightboxIndex = 0;

  function openProjectModal(projectId) {
    const data = PROJECT_DATA[projectId];
    if (!data) return;

    modalTitleEl.textContent = data.title;
    modalTypeEl.textContent = data.type;
    modalFactsEl.innerHTML = "";
    [
      ["Location", data.location],
      ["Year", data.year],
      ["Status", data.status],
    ].forEach(([label, value]) => {
      if (!value) return;
      const item = document.createElement("span");
      const labelEl = document.createElement("strong");
      labelEl.textContent = label;
      item.append(labelEl, value);
      modalFactsEl.appendChild(item);
    });
    modalDescEl.textContent = data.description;

    modalClientEl.innerHTML = "";
    modalClientEl.hidden = !data.client;
    if (data.client) {
      const labelEl = document.createElement("strong");
      labelEl.textContent = `${data.client.label || "Client"}: `;
      const linkEl = document.createElement("a");
      linkEl.href = data.client.url;
      linkEl.textContent = data.client.name;
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      modalClientEl.append(labelEl, linkEl);
    }

    modalBulletsEl.innerHTML = "";
    (data.bullets || []).forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      modalBulletsEl.appendChild(li);
    });

    modalMetaEl.innerHTML = "";
    (data.meta || []).forEach((label) => {
      const span = document.createElement("span");
      span.textContent = label;
      modalMetaEl.appendChild(span);
    });

    modalDelivsEl.innerHTML = "";
    (data.deliverables || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalDelivsEl.appendChild(li);
    });
    modalDelivsWrapperEl.hidden = !(data.deliverables || []).length;

    modalGalleryEl.innerHTML = "";
    lightboxMedia = data.images || [];
    lightboxIndex = 0;
    (data.images || []).forEach((src, i) => {
      const tile = document.createElement("figure");
      tile.className = "project-gallery-item";
      if (i === 0) tile.classList.add("is-hero");
      tile.setAttribute("data-full-src", src);
      tile.appendChild(createMediaElement(src, `${data.title} media ${i + 1}`));
      modalGalleryEl.appendChild(tile);
    });

    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove("is-open");
    lightboxEl.setAttribute("aria-hidden", "true");
    if (lightboxMediaEl) lightboxMediaEl.innerHTML = "";
  }

  function updateLightboxMedia() {
    if (!lightboxMediaEl || !lightboxMedia.length) return;
    const src = lightboxMedia[lightboxIndex];
    const media = createMediaElement(
      src,
      `Enlarged project media ${lightboxIndex + 1} of ${lightboxMedia.length}`,
      isVideo(src),
    );

    if (isVideo(src)) {
      media.autoplay = true;
      media.loop = false;
    }

    lightboxMediaEl.innerHTML = "";
    lightboxMediaEl.appendChild(media);

    const shouldHideNav = lightboxMedia.length < 2;
    lightboxPrevBtn?.classList.toggle("is-hidden", shouldHideNav);
    lightboxNextBtn?.classList.toggle("is-hidden", shouldHideNav);
  }

  function moveLightboxMedia(direction) {
    if (lightboxMedia.length < 2) return;
    lightboxIndex =
      (lightboxIndex + direction + lightboxMedia.length) % lightboxMedia.length;
    updateLightboxMedia();
  }

  function openLightbox(src) {
    if (!src || !lightboxEl) return;
    const nextIndex = lightboxMedia.indexOf(src);
    lightboxIndex = nextIndex >= 0 ? nextIndex : 0;
    updateLightboxMedia();
    lightboxEl.classList.add("is-open");
    lightboxEl.setAttribute("aria-hidden", "false");
  }

  function closeProjectModal() {
    if (lightboxEl && lightboxEl.classList.contains("is-open")) closeLightbox();
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document
    .querySelectorAll(".project-card[data-project-id]")
    .forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-project-id");
        if (id) openProjectModal(id);
      });

      const btn = card.querySelector(".project-more-btn");
      if (btn) {
        btn.addEventListener("click", (event) => {
          event.stopPropagation();
          const id = card.getAttribute("data-project-id");
          if (id) openProjectModal(id);
        });
      }
    });

  closeBtn?.addEventListener("click", closeProjectModal);
  backdrop?.addEventListener("click", closeProjectModal);
  document.addEventListener("keydown", (event) => {
    if (!modalEl.classList.contains("is-open")) return;
    const isLightboxOpen = lightboxEl?.classList.contains("is-open");

    if (event.key === "Escape") closeProjectModal();
    if (!isLightboxOpen) return;
    if (event.key === "ArrowLeft") moveLightboxMedia(-1);
    if (event.key === "ArrowRight") moveLightboxMedia(1);
  });

  modalGalleryEl?.addEventListener("click", (e) => {
    const tile = e.target.closest(".project-gallery-item");
    if (!tile) return;
    const src = tile.getAttribute("data-full-src");
    openLightbox(src);
  });

  lightboxEl?.addEventListener("click", (e) => {
    if (e.target.matches("[data-lightbox-close]")) closeLightbox();
    if (e.target.matches("[data-lightbox-prev]")) moveLightboxMedia(-1);
    if (e.target.matches("[data-lightbox-next]")) moveLightboxMedia(1);
  });
}

// Projects page filters
const filterButtons = document.querySelectorAll(".project-filter");
const filterCards = document.querySelectorAll(
  ".projects-library-grid .project-card",
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    filterCards.forEach((card) => {
      const capabilities = (card.getAttribute("data-capabilities") || "").split(
        /\s+/,
      );
      const shouldShow = filter === "all" || capabilities.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
