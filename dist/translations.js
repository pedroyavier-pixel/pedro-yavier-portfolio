// English editorial copy. Brand names and performance figures stay unchanged.
const accountWorkEn = [
  'Client meetings, goal setting and strategy.',
  'Content planning, editorial calendars and deliverable tracking.',
  'Creative coordination and execution of digital communications.'
];
const restaurantReachEn = ' Advertising helped broaden the customer base and attract visitors from across Puerto Rico.';
window.portfolioTranslations = {
  categories: {
    'Todos': 'All', 'Comercio digital': 'E-commerce', 'Salud': 'Healthcare',
    'Entretenimiento': 'Entertainment', 'Gastronomía': 'Food & hospitality',
    'Seguros': 'Insurance', 'Espacios & negocios': 'Spaces & businesses',
    'Comunidad': 'Community', 'Marcas & negocios': 'Brands & businesses'
  },
  ui: {
    viewProject: 'View project:', viewCase: 'View case', closeProject: 'Close project',
    role: 'My role in the project', impact: 'The impact', gallery: 'A look at the work',
    enlarge: 'Enlarge:', brand: 'Explore the brand:', projectContact: 'Let’s talk about your project',
    fallbackRole: 'Strategy and communications', languageLabel: 'Choose language',
    toolsLabel: 'Design, editing, advertising and productivity tools. Drag or use the arrow keys to explore.'
  },
  static: {
    'header nav a[href="#trabajo"]': 'Work',
    'header nav a[href="#enfoque"]': 'What I do',
    'header .nav-contact': 'Let’s talk',
    '.hero > .eyebrow': 'STRATEGY + CREATIVITY + PERFORMANCE <span>PUERTO RICO</span>',
    '.hero h1': 'Leads, sales<br>and <em>growing brands.</em>',
    '.hero-bottom p': 'Advertising professional and strategist in Puerto Rico. I bring together content, design and digital advertising to generate leads, drive purchases and promote events, with clear goals and performance tracking.',
    '.hero-bottom a': 'Explore work and results',
    '.value-section > .eyebrow': 'STRATEGY + EXECUTION',
    '#value-title': 'Your goals lead the way.',
    '.value-grid article:nth-child(1) h3': 'Goals before posts',
    '.value-grid article:nth-child(1) p': 'Together, we define what your business needs: leads, purchases, bookings or brand growth. Strategy and content start with that goal.',
    '.value-grid article:nth-child(2) h3': 'From concept to campaign',
    '.value-grid article:nth-child(2) p': 'I connect ideas, scripts, design, photography and video with advertising execution. I coordinate with clients, teams and vendors to bring each project to life.',
    '.value-grid article:nth-child(3) h3': 'Experience with lean budgets',
    '.value-grid article:nth-child(3) p': 'Much of my freelance work has been developed with limited budgets. I prioritize the goal, the content and media optimization to make the most of the available resources.',
    '#trabajo .eyebrow': '01 / SELECTED WORK',
    '#trabajo h2': 'Real brands.<br>Measurable results.',
    '#trabajo .section-title > p': 'Purchases, appointments, community and events.<br>Discover my role behind each project.',
    '#enfoque > .eyebrow': '02 / WHAT I DO',
    '#enfoque > h2': 'What I do.<br><span>I connect all the pieces.</span>',
    '.approach-bottom p:nth-child(1)': 'I’m Pedro Yavier, an advertising professional and marketing strategist in Puerto Rico. I work at the intersection of business and creativity, from the first idea to the campaign launch. I hold a master’s degree from the Complutense University of Madrid.',
    '.approach-bottom p:nth-child(2)': 'I meet with clients, define goals, develop strategies and plan content. I coordinate teams, production and media to take each project from idea to execution.',
    '.tools-heading h3': 'Tools I work with',
    '.tools-hint': 'Drag to explore',
    '#contacto > .eyebrow': '03 / YOUR NEXT PROJECT',
    '#contacto h2': 'Let’s get<br>your brand <em>moving.</em>',
    '.contact-bottom p': 'Tell me what you want to achieve:<br>more leads, purchases, bookings or visibility.',
    '.contact-bottom a': 'Let’s talk about your goals',
    'footer p': 'Strategy. Creativity. Results.'
  },
  attributes: [
    ['header .wordmark', 'aria-label', 'Pedro Yavier, home'],
    ['header nav', 'aria-label', 'Main navigation'],
    ['#resultados', 'aria-label', 'Selected results'],
    ['.filters', 'aria-label', 'Filter projects'],
    ['.close', 'aria-label', 'Close project'],
    ['.tools-window', 'aria-label', 'Design, editing, advertising and productivity tools. Drag or use the arrow keys to explore.']
  ],
  title: 'Pedro Yavier — Strategy, creativity and results',
  description: 'Pedro Yavier’s portfolio. Brand strategy, digital advertising, design and production in Puerto Rico.',
  results: [
    ['6.98×', 'ROAS on digital purchases', 'Selected campaign · September 2026'],
    ['+300%', 'Appointment growth', 'July–September 2026 vs. all of 2025 · team result'],
    ['100%', 'Venue occupancy', 'Event campaigns · optimized budget'],
    ['+178%', 'Social media community growth', 'Cumulative growth during my management']
  ],
  services: [
    ['Marketing strategy', 'Brand assessment, positioning, goals, campaign planning and content plans.'],
    ['Account setup & optimization', 'Digital presence setup, business profiles, asset organization and account optimization.'],
    ['Social media & community', 'Social media management, editorial calendars, scheduling, community management and audience growth.'],
    ['Meta Ads & Google Ads', 'Campaigns to generate leads, purchases and visits; targeting, retargeting, lookalike audiences and budget optimization in Meta Ads and Google Ads.'],
    ['Creative direction & design', 'Campaign concepts, visual identity, social graphics, ads, menus, signage and printed materials.'],
    ['Copywriting & scripts', 'Brand copy, ads, video scripts, campaign messaging and content tailored to each audience.'],
    ['Photography, video & editing', 'Content production, product photography, filming, video editing and social media adaptations.'],
    ['Email marketing', 'Email design, copywriting, contact segmentation, reactivation campaigns and customer communications.'],
    ['Measurement & results', 'Reports, dashboards, KPI analysis, ROAS and cost per acquisition to guide the next decisions.'],
    ['Event production & livestreaming', 'Coordination of premieres, festivals, activations, artists and vendors. Event production and live broadcasts.'],
    ['Account & client management', 'Client meetings, goal setting, strategy, planning, team coordination and deliverable tracking.'],
    ['AI for marketing & production', 'Using artificial intelligence to research, develop concepts and scripts, create and edit visual content, analyze information and streamline campaign planning and production.']
  ],
  projects: {
    prive: {
      subtitle: 'Creativity that turns into purchases.',
      badge: '6.98× ROAS · selected campaign',
      headline: 'A compelling idea. A strategy that converts.',
      summary: 'Digital strategy and media buying for a digital art promotion. Creative assets, audiences and measurement aligned around one goal: generating purchases efficiently.',
      stats: [['6.98×', 'ROAS on digital purchases']],
      work: ['Meta Ads campaign strategy and optimization.', 'Retargeting and lookalike audience campaigns to connect the promotion with relevant audiences.', 'Analysis of creative assets, audiences and cost per acquisition.', 'Coordination of purchase-tracking validation.', 'Scripts, content and email marketing for customer reactivation.'],
      impact: 'A digital purchase campaign achieved a 6.98× ROAS between September 8 and 12, 2026. The strategy combined creative evaluation, media optimization and conversion tracking.',
      role: 'Digital strategy · Content · Meta Ads',
      brandSub: 'CREATIVITY + PERFORMANCE',
      imageCredit: 'Official Privé PR brand identity.'
    },
    precision: {
      subtitle: '+300% in appointments: July–September 2026 compared with all of 2025.',
      badge: '+300% in appointments · July–September 2026',
      headline: 'From visibility to leads and appointments.',
      summary: 'I work with Precision Health Centers as part of the JI Communications agency team. My role connects account management, strategy, content and digital campaigns to generate leads and support appointment acquisition.',
      stats: [['+300%', 'Appointment growth · July–September 2026 vs. all of 2025'], ['+116%', 'New website users'], ['439', 'Google Ads conversions · calls + website leads'], ['$4.26', 'Cost per conversion']],
      work: [...accountWorkEn, 'Management and optimization of Meta Ads and Google Ads campaigns.', 'Educational content, service communications and performance analysis.', 'Participation in lead generation campaigns and analysis of contact opportunities, in coordination with the agency team.'],
      impact: 'Between July and September 2026, the agency team achieved four times the appointments recorded during all of 2025: a 300% increase. My contribution covers strategy, content and digital media. In May, Google Ads recorded 439 conversions across calls and website leads; new website users grew by 116% compared with January.',
      role: 'JI Communications team · Strategy · Content · Media',
      captions: ['Content selection included in the campaign presentation.']
    },
    cine: {
      period: 'Since 2021 · reported experience',
      subtitle: 'Campaigns that support full-house events.',
      badge: '100% occupancy · selected event',
      headline: 'Digital promotion to fill the venue.',
      summary: 'Building and managing the digital presence of Cine Teatro Manuel Nieves Quintero. I bring together content, design, traffic campaigns and event coordination to promote the theater’s programming and experiences.',
      stats: [['100%', 'Venue occupancy · selected event'], ['$30', 'Advertising spend · that event']],
      work: [...accountWorkEn, 'Content creation, photography, video and editing.', 'Design of movie schedules, promotions, menus and screen content.', 'Coordination of events and performances with artists and comedians.', 'Coordination of activities with Keropi Sánchez, Gianluca Perotti and Kiko Blade.', 'Family activations, character appearances and themed events.', 'Traffic campaigns to promote events and optimize limited advertising budgets.'],
      impact: 'Digital advertising has supported sold-out events. One selected event reached 100% occupancy with a $30 advertising budget. Digital promotion works alongside content, the artistic offering and event coordination.',
      role: 'Strategy · Content · Digital advertising · Events',
      captions: ['Cine Teatro Manuel Nieves Quintero · Corozal.', 'Social media design · Family programming.', 'Event design and promotion · Father’s Day.']
    },
    jiqui: {
      period: '2024 — present',
      subtitle: 'A community that also comes together at the table.',
      badge: '+178% community growth',
      headline: 'From restaurant to gathering place.',
      summary: 'A brand presence that combines personality, content, food and experiences. Brand work that connects what happens on social media with the experience in Corozal and Cataño.',
      stats: [['+178%', 'Follower growth'], ['2.78x', 'Community size'], ['1–5', 'Birthday celebrations per weekend']],
      work: [...accountWorkEn, 'Content creation, photography, filming and video editing.', 'Scripts, copywriting and social media management.', 'Design of menus, promotions, printed materials and brand assets.', 'Communications and content for festivals, karaoke and events, including Festival de la Greca.', 'Digital campaigns focused on visits and birthday bookings.'],
      impact: 'The community grew by 177.8%. Birthday activity went from approximately one celebration per month to between one and five per weekend, according to the business tracking shared by Pedro.' + restaurantReachEn,
      role: 'Strategy · Content creator · Designer · Editor',
      captions: ['Design and food content · Jiqui Ñaqui.', 'Promotional design · Daily specials.', 'Graphic design · Karaoke Sundays.', 'Design and promotion · 3rd Festival de la Greca.', 'Editorial design · Menu cover.', 'Editorial design · Sharing menu.', 'Editorial design · Arañitas menu (crispy plantain fritters).', 'Print design · Birthday bookings.']
    },
    chicago: {
      subtitle: 'The energy of the stage, brought into the campaign.',
      headline: 'The energy of the stage, brought into the campaign.',
      summary: 'Participation in the creative team for Chicago, El Musical in Puerto Rico, creating content and graphic design to support the show’s promotion.',
      work: ['Creative team member.', 'Content creation to promote the musical.', 'Graphic design for ads, performances and ticket sales communications.', 'Digital adaptations for different stages of the campaign.'],
      impact: 'A visual campaign with theatrical personality, from announcing new performances to communicating the release of additional seats.',
      role: 'Creative team · Content · Graphic design',
      brandSub: 'ENTERTAINMENT · PUERTO RICO',
      captions: ['New performance announcement · March 27.', 'Ticket sales communication · Additional seats released.', 'Brand content · World Theatre Day.']
    },
    perla: {
      subtitle: 'A story from Puerto Rico, with an international perspective.',
      headline: 'From the film set to the red carpet.',
      summary: 'A journey that began behind the scenes during filming and continued through premiere coordination, event execution and digital communications for Perla.',
      work: ['Responsible for behind-the-scenes (BTS) content during filming.', 'Premiere event coordination.', 'Execution and coordination of the Puerto Rico premiere at DISTRITO T-Mobile.', 'Social media management and digital content creation.', 'Advertising planning and market-specific communications.'],
      impact: 'Continuity across production, events and promotion: documenting the process, coordinating the premiere experience and keeping the digital conversation about the film active.',
      role: 'On-set BTS · Premieres · Events · Digital content',
      galleryLabel: 'Film posters', badge: 'Film release campaign',
      captions: ['Perla · Main poster.', 'Perla · Theatrical release poster.']
    },
    multiples: {
      period: 'Working with the account since 2022',
      subtitle: 'Brand content and lead generation campaigns.',
      headline: 'A trusted brand that also generates new leads.',
      summary: 'I work with Cooperativa de Seguros Múltiples as part of the agency team: client relationships, goals, strategy, content planning and participation in lead generation campaigns.',
      work: [...accountWorkEn, 'Copy and content development for corporate communications, education and products.', 'Coordination with production, design and vendors.', 'Campaign monitoring and results presentations.', 'Participation in digital lead generation campaigns for insurance products and services.'],
      impact: 'Corporate, educational and product communications connected with campaigns to attract interested prospects and generate contact opportunities for the brand.',
      role: 'Agency team · Strategy · Content · Lead generation',
      imageCredit: 'Corporate image published on the official Seguros Múltiples website. Brand reference.',
      badge: 'Content · Lead generation'
    },
    musa: {
      subtitle: 'Introduce a space. Inspire bookings.', headline: 'Introduce a space. Inspire bookings.',
      summary: 'Building a digital presence for Musa Business Hub, from creating its social media accounts to audiovisual content and campaigns focused on bookings.',
      work: ['Social media account creation and setup.', 'Profile management, content planning and publishing.', 'Audiovisual production, scripts, filming and editing.', 'Advertising campaigns focused on inquiries and bookings.'],
      impact: 'A digital presence that showcases the space, communicates its possibilities and guides the audience toward an inquiry and a booking.',
      role: 'Audiovisual production · Social media · Ads', brandSub: 'SPACES & BUSINESSES · PUERTO RICO',
      imageCredit: 'Photo of the space published on the official Musa Business Hub website.',
      galleryLabel: 'The brand’s space', captions: ['Photo of the space · Source: Musa Business Hub.']
    },
    canela: {
      subtitle: 'An experience that begins before the first coffee.', headline: 'Making a brand irresistible.',
      summary: 'Communications and content for Canela Coffee & Brunch in Corozal. Bringing the coffee and dining experience into creative assets that invite people to discover the space.',
      work: ['Content strategy and planning.', 'Copywriting and social media communications.', 'Product photography and food content.', 'Design of menus, banners and promotional materials.'],
      impact: 'A visual and verbal language connecting the products, atmosphere and dining experience throughout the collaboration.' + restaurantReachEn,
      note: 'Completed collaboration: 2022–2024.', role: 'Strategy · Content · Design · Photography',
      brandSub: 'COFFEE & BRUNCH · COROZAL', galleryLabel: 'A look at the work',
      captions: ['Food content · Favorite cream soups.', 'Brand content · Your new favorite spot.', 'Product content · Latte.']
    },
    whitehouse: {
      subtitle: 'Photography, video and campaigns for a restaurant brand.', headline: 'Bringing flavor into the frame.',
      summary: 'Between 2020 and 2021, I worked with White House Cuisine in Corozal, creating food photography, videos and campaigns to communicate its offering and build its brand presence.',
      work: ['Food and product photography for the brand.', 'Video production for digital communications.', 'Campaign development and promotional content.'],
      impact: 'A visual presence built around its dishes and products, with photography, video and campaigns that communicated White House Cuisine’s food offering.' + restaurantReachEn,
      note: 'Completed collaboration: 2020–2021.', role: 'Food photography · Video · Campaigns',
      brandSub: 'COROZAL · 2020—2021', galleryLabel: 'Photography for White House Cuisine',
      captions: ['Food photography · Avocado presentation.', 'Food photography · Salmon sushi.', 'Food photography · Crispy sushi.', 'Food photography · Meat presentation.', 'Food photography · A variety of dishes.', 'Product photography · Takeout presentation.', 'Food photography · Sushi on a serving board.']
    },
    pizza: {
      period: '2024 — 2025 · 6 months', subtitle: 'A brand that begins with a presence of its own.', headline: 'A brand that begins with a presence of its own.',
      summary: 'Over six months between 2024 and 2025, I participated in Pizza Magna’s launch, creating and managing its social media accounts and developing digital content to introduce its food offering.',
      work: ['Participation in the brand launch.', 'Social media account creation and setup.', 'Profile management and post planning.', 'Digital content creation to introduce the food offering.'],
      impact: 'A digital presence created to support the brand’s arrival in the market.' + restaurantReachEn,
      note: 'Completed collaboration: 6 months between 2024 and 2025.', role: 'Launch · Social media setup & management · Content',
      brandSub: 'FOOD & HOSPITALITY · 2024—2025',
      imageCredit: 'Product photo from Pizza Magna’s public listing. Brand reference image.',
      galleryLabel: 'The brand', captions: ['Pizza Magna brand identity · Source: the brand’s DoorDash listing.']
    },
    elfavor: {
      period: 'Theater campaign', subtitle: 'Content and advertising for a theater production.', headline: 'Content and advertising for a theater production.',
      summary: 'Content development and Meta Ads campaign management to promote El Favor.',
      work: ['Digital content creation for the play.', 'Promotional asset design and adaptations.', 'Meta Ads campaign management.'],
      impact: 'Communications that connect the play’s concept with its digital promotion.', role: 'Content creation · Meta Ads',
      brandSub: 'ENTERTAINMENT · PUERTO RICO', captions: ['Promotional asset · El Favor.']
    },
    island: {
      period: 'Brand experience', subtitle: 'Stories and content with a Puerto Rican identity.', headline: 'Connecting entertainment with its audience.',
      summary: 'Content creation and experience production for Island Hub. Work connecting digital communications with event production and live broadcasts.',
      work: ['Content creation and digital communications planning.', 'Event production and coordination.', 'Live broadcast coordination and execution.', 'Tracking brand content and deliverables.'],
      impact: 'A consistent creative approach across content, events and livestreaming, extending the brand experience both on and beyond social media.',
      role: 'Content · Event production · Livestreaming'
    },
    dental: {
      period: 'Brand experience', subtitle: 'Clarity and trust in healthcare communications.', headline: 'Making dental care more approachable.',
      summary: 'Account management for Dental Solutions Group, connecting client goals with content planning, communications strategies and digital execution.',
      work: [...accountWorkEn, 'Content development to communicate dental services.', 'Creative asset coordination and brand communications tracking.'],
      impact: 'Experience adapting brand communications to a sector where clarity and trust are essential.',
      role: 'Account executive · Planning · Content', galleryLabel: 'The brand’s space',
      captions: ['Clinic photo · Source: official Dental Solutions Group website.']
    },
    pastelito: {
      subtitle: 'Local culture deserves a great stage, too.', headline: 'Local culture deserves a great stage, too.',
      summary: 'Communications support for Festival Turístico del Pastelito de Arroz, Corozal’s rice pastry festival, with promotional assets and audiovisual support for the event.',
      work: ['Content creation and promotional copywriting.', 'Adaptation of graphic assets and festival visuals.', 'Editing and organizing sponsor videos for display.', 'Deliverable coordination with the production team.'],
      impact: 'Work connecting festival promotion with the materials used during the event.', role: 'Content · Design · Audiovisual editing',
      brandSub: 'ENTERTAINMENT · PUERTO RICO', imageCredit: 'Public poster for the 2026 event. Project reference; authorship of this asset is not claimed.'
    },
    parroquia: {
      subtitle: 'Communications in service of the community.', headline: 'Communications in service of the community.',
      summary: 'Community service with Parroquia Nuestra Señora de los Siete Dolores (Our Lady of the Seven Sorrows Parish) in Corozal, supporting its communications and the community’s access to its activities.',
      work: ['Content creation for parish communications.', 'Graphic design for informational and promotional assets.', 'Live broadcasts of celebrations and activities.'],
      impact: 'Content, design and technology to keep the community connected, including those participating remotely.',
      role: 'Community service · Content · Design · Livestreaming', brandSub: 'COMMUNITY · PUERTO RICO',
      imageCredit: 'Parish identity published on its official page.'
    },
    obligatorio: {
      period: 'Seguros Múltiples', subtitle: 'A clear message for everyday decisions.', headline: 'Communicating protection with clarity.',
      summary: 'Participation in communications for Seguro Obligatorio, Seguros Múltiples’ compulsory auto insurance offering, as part of my work with the account and its products.',
      work: [...accountWorkEn, 'Message and content development for Seguro Obligatorio.'],
      impact: 'Work focused on communicating an insurance offering with clarity and brand consistency.',
      role: 'Account executive · Content · Strategy', brandSub: 'COOPERATIVA DE SEGUROS MÚLTIPLES'
    },
    carrocoop: {
      period: 'Account experience', subtitle: 'Strategy and communications aligned with the client.', headline: 'Strategy and communications aligned with the client.',
      summary: 'Work with Carro Coop within a professional practice that combines client relationships, planning, content and execution.',
      work: accountWorkEn, impact: 'Aligning goals, messaging and deliverables to maintain consistent brand communications.',
      role: 'Account management · Content · Coordination', brandSub: 'INSURANCE · PUERTO RICO'
    },
    confia: {
      period: 'Account experience', subtitle: 'Strategy and communications aligned with the client.', headline: 'Strategy and communications aligned with the client.',
      summary: 'Work with CONFIA within a professional practice that combines client relationships, planning, content and execution.',
      work: accountWorkEn, impact: 'Aligning goals, messaging and deliverables to maintain consistent brand communications.',
      role: 'Account management · Content · Coordination', brandSub: 'INSURANCE · PUERTO RICO'
    },
    smilefix: {
      period: 'Agency collaboration · completed', subtitle: 'Campaigns to attract people interested in dental services.', headline: 'Lead generation to connect prospective patients with the brand.',
      summary: 'During my collaboration with Smile Fix, I worked with the agency team, combining strategy, content and digital lead generation campaigns for dental services.',
      work: [...accountWorkEn, 'Participation in lead generation campaigns and digital communications performance tracking.'],
      impact: 'Campaigns focused on generating contact opportunities for dental services, connecting the brand message with prospective patient interest.',
      note: 'Completed collaboration.', role: 'Agency collaboration · Content · Lead generation',
      brandSub: 'HEALTHCARE · PUERTO RICO', badge: 'Digital advertising · Lead generation'
    }
  }
};
