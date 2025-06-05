// Complete Translation System for Wanderlust Albania
// Comprehensive translations for EN, SQ, DE, IT, FR

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_places: "Places to Visit", 
    nav_hotels: "Hotels",
    nav_travels: "Travels",
    nav_guides: "Licensed Guides",
    
    // Header
    header_phone: "+355 684 170 700",
    header_lang_select: "Choose Language",
    
    // Hero Section
    hero_title: "Journey to explore world",
    hero_subtitle: "Discover Albania's hidden gems with personalized, sustainable travel experiences that connect you to authentic local culture and breathtaking landscapes.",
    
    // Buttons
    btn_learn_more: "Learn more",
    btn_book_now: "Book now",
    btn_contact_us: "Contact Us",
    btn_get_directions: "Get Directions",
    btn_view_gallery: "View Gallery",
    btn_read_more: "Read More",
    btn_back_home: "Back to Homepage",
    btn_send_message: "Send Message",
    cta_explore: "Explore now",
    cta_book: "Book now",
    
    // Popular Destinations Section
    popular_subtitle: "Uncover place",
    popular_title: "Popular destination",
    popular_desc: "Albania offers breathtaking experiences from pristine beaches to majestic mountains, medieval castles to vibrant cultural scenes.",
    popular_explore: "Explore More Destinations",
    
    // Destination Cards
    popular_berat: "Berat",
    popular_berat_desc: "Discover the \"City of a Thousand Windows\" with its unique Ottoman architecture and UNESCO World Heritage status.",
    popular_shkodra: "Shkodra",
    popular_shkodra_desc: "Explore Albania's cultural capital with its stunning Rozafa Castle, rich history and beautiful lakeside setting.",
    popular_tirana: "Tirana",
    popular_tirana_desc: "Discover Albania's vibrant capital with its colorful buildings, lively atmosphere and fascinating blend of history and modernity.",
    
    // Package Section
    package_subtitle: "Popular Packages",
    package_title: "Checkout Our Packages",
    package_desc: "Carefully crafted travel experiences that showcase the best of Albania while respecting local communities and environment.",
    package_custom_title: "Custom Itineraries",
    package_custom_desc: "Trips shaped around your style and pace, crafted to match you, not the masses.",
    package_guide_title: "Lasting Moments",
    package_guide_desc: "Every location, handpicked to help you live stories worth telling, not just take pictures.",
    package_support_title: "Smart Navigation",
    package_support_desc: "Find your way with precision, from major sights to secret local spots, always at your fingertips.",
    package_best_title: "Helpful Tips & Insights",
    package_best_desc: "Stay one step ahead with real-time suggestions based on your interests and surroundings.",
    package_alerts_title: "Timely Alerts",
    package_alerts_desc: "Whether it's a reservation or a hike, stay informed and on time, no stress, no surprises.",
    package_tools_title: "All-in-One Trip Tools",
    package_tools_desc: "From bookings to checklists, manage every part of your journey in one streamlined space.",
    
    // Testimonials Section
    testimonials_subtitle: "What Our Travelers Say",
    testimonials_title: "Adventures that create authentic memories",
    
    // Gallery Section
    gallery_subtitle: "Photo Gallery",
    gallery_title: "Photo's From Travellers",
    gallery_description: "Discover Albania through the eyes of our travelers. These authentic moments capture the beauty, culture, and unforgettable experiences that await you.",
    
    // Contact Form Section
    contact_subtitle: "Get In Touch",
    contact_title: "Ready For Unforgettable Travel. Remember Us!",
    contact_description: "Let us help you plan your perfect Albanian adventure. Fill out the form below and our travel experts will contact you within 24 hours.",
    
    // Contact Form Fields
    contact_name_label: "Full Name",
    contact_name_placeholder: "Enter your full name",
    contact_email_label: "Email Address", 
    contact_email_placeholder: "Enter your email",
    contact_phone_label: "Phone Number",
    contact_phone_placeholder: "Enter your phone number",
    contact_date_label: "Travel Date",
    contact_date_placeholder: "MM/DD/YYYY",
    contact_subject_label: "Subject",
    contact_subject_placeholder: "Enter message subject",
    contact_message_label: "Your Message",
    contact_message_placeholder: "Enter your message here",
    
    // Footer
    footer_text: "Because your journey deserves meaning, and Albania delivers it.",
    footer_contact_title: "Contact Us",
    footer_contact_description: "Feel free to contact and reach us !!",
    footer_address: "Bulevardi Zogu I, Shkodër 4001",
    footer_email: "info@wanderlustalbania.eu",
    footer_phone: "+355 684 170 700",
    footer_copyright_text: "All rights reserved. Design by",
    footer_copyright_company: "Wanderlust Albania",
    footer_copyright_designer: "codewithenea.it",
    
    // About page specific translations
    about_hero_title: "About Wanderlust Albania",
    about_hero_subtitle: "Your personal gateway to discovering Albania in the most authentic and eco-conscious way possible",
    about_story_title: "Our Story",
    about_story_desc: "Wanderlust Albania is more than a travel company, it's your personal gateway to discovering Albania in the most authentic and eco-conscious way possible.",
    about_values_title: "Our Values",
    
    // Contact Information Labels
    contact_info_label: "For inquiries:",
    
    // Common Location Names
    location_albania: "Albania",
    location_northern_albania: "Northern Albania", 
    location_central_albania: "Central Albania",
    location_theth: "Theth, Albania",
    location_dhermi: "Dhermi, Albania",
    location_ksamil: "Ksamil, Albania",
    location_vlore: "Vlorë, Albania",
    location_durres: "Durrës, Albania",
    location_gjirokaster: "Gjirokastër, Albania",
    location_alps: "Albanian Alps, Albania",
    
    // Page titles
    page_title_home: "Wanderlust Albania - Travel agency",
    page_title_about: "About Wanderlust Albania",
    page_title_hotels: "Hotels - Wanderlust Albania",
    page_title_places: "Places to Visit - Wanderlust Albania", 
    page_title_travels: "Travels - Wanderlust Albania",
    page_title_guides: "Licensed Guides - Wanderlust Albania",
    
    // Travels Page
    travels_hero_title: "Esplora i Tesori Nascosti dell'Albania",
    travels_hero_subtitle: "Ogni viaggio è una storia che aspetta di essere scritta. Lascia che ti guidiamo attraverso le destinazioni più mozzafiato dell'Albania.",
    travels_section_subtitle: "🌍 Esperienze Giornaliere Curate in Tutta l'Albania",
    travels_section_title: "Viaggi giornalieri selezionati a mano progettati per immergere, ispirare e rivelare l'anima di ogni destinazione.",
    
    // Travel Cards
    travel_durres_title: "Esperienza Durrës & Cognac Skënderbeg",
    travel_durres_desc: "La storia incontra la raffinatezza — esplora la costiera Durrës e visita la rinomata Distilleria Cognac Skënderbeg in un giorno ricco di sapore e patrimonio.",
    travel_tirana_title: "Circuito Culturale Tirana & Kruja",
    travel_tirana_desc: "Cammina per le strade vibranti della capitale e entra nel passato dell'Albania con una visita alla storica città collinare di Kruja — luogo di nascita di un eroe nazionale.",
    travel_shkodra_title: "Shkodra: Porta del Nord",
    travel_shkodra_desc: "Un viaggio di un'intera giornata attraverso la capitale culturale dell'Albania — dal Castello di Rozafa alla serenità del lago, questo viaggio unisce natura, storia e fascino locale.",
    travel_vlora_title: "Fuga Marina Vlora & Karaburun–Sazan",
    travel_vlora_desc: "Naviga nella bellezza selvaggia dello Ionio — questa avventura del parco marino ti porta grotte marine, spiagge incontaminate e vedute costiere cinematografiche.",
    travel_berat_title: "Tour del Patrimonio Berat & Cantina Çobo",
    travel_berat_desc: "Entra in una città museo vivente, poi assaggia l'eccellenza locale in una delle migliori cantine familiari dell'Albania. Un viaggio attraverso cultura e artigianato.",
    travel_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    travel_pogradec_desc: "Un viaggio di un'intera giornata lungo le antiche rive del Lago di Ohrid — attraversa i confini per sperimentare i tesori culturali dell'Albania e della Macedonia del Nord.",
    
    // City Detail Pages
    city_hero_berat_title: "Tour del Patrimonio Berat & Cantina Çobo",
    city_hero_berat_subtitle: "Entra in una città museo vivente, poi assaggia l'eccellenza locale in una delle migliori cantine familiari dell'Albania. Un viaggio attraverso cultura e artigianato.",
    city_detail_title_berat: "PATRIMONIO MONDIALE UNESCO BERAT E CANTINA ÇOBO (TOUR DI UN'INTERA GIORNATA)",
    city_highlights_title: "Punti Salienti",
    city_itinerary_title: "Itinerario Dettagliato",
    booking_info_duration: "Durata:",
    booking_info_departure: "Orario di Partenza:",
    booking_info_includes: "Include:",
    booking_info_not_included: "Non Include:",
    btn_book_tour: "Prenota Questo Tour",
    btn_back_travels: "Torna a Tutti i Viaggi",
    
    // Learn More Links
    btn_learn_more_link: "→ Scopri di Più",
    
    // Footer elements that might be missing
    footer_copyright_start: "© 2025",
    footer_rights_reserved: "Tutti i diritti riservati. Design di",
    
    // PLACES PAGE
    places_hero_title: "Discover Albania's Most Beautiful Places",
    places_hero_subtitle: "From pristine beaches to majestic mountains, ancient cities to hidden gems - explore the diverse beauty that makes Albania unforgettable.",
    places_section_subtitle: "🏛️ Must-Visit Destinations",
    places_section_title: "Explore Albania's Iconic Landmarks",
    places_section_desc: "Discover the most spectacular destinations that showcase Albania's rich history, stunning nature, and cultural heritage.",
    
    // Place Cards
    place_theth_title: "Theth National Park",
    place_theth_desc: "Pristine alpine wilderness with dramatic peaks, traditional stone houses, and the famous Blue Eye waterfall.",
    place_dhermi_title: "Dhermi Beach",
    place_dhermi_desc: "Crystal-clear turquoise waters meet white pebble beaches in this stunning Albanian Riviera destination.",
    place_ksamil_title: "Ksamil Islands",
    place_ksamil_desc: "Paradise islands with pristine beaches and crystal waters, known as the 'Maldives of Albania'.",
    place_blue_eye_title: "Blue Eye Spring",
    place_blue_eye_desc: "A natural phenomenon with incredibly blue spring water emerging from a depth of more than 50 meters.",
    place_apollonia_title: "Apollonia Archaeological Park",
    place_apollonia_desc: "Ancient Greek ruins dating back to 588 BC, featuring impressive temples, theaters, and monuments.",
    place_butrint_title: "Butrint National Park",
    place_butrint_desc: "UNESCO World Heritage site with ancient ruins spanning Greek, Roman, Byzantine, and Venetian periods.",
    
    // GUIDES PAGE
    guides_hero_title: "Expert Licensed Tour Guides",
    guides_hero_subtitle: "Meet our passionate team of certified professionals who bring Albania's stories to life with authentic local knowledge and expertise.",
    guides_section_subtitle: "👥 Our Professional Team",
    guides_section_title: "Licensed & Experienced Guides",
    guides_section_desc: "Our guides are certified professionals with deep local knowledge, language skills, and passion for sharing Albania's hidden treasures.",
    
    // Guide Cards
    guide_expert_title: "Expert Knowledge",
    guide_expert_desc: "Deep understanding of Albanian history, culture, and hidden local secrets.",
    guide_languages_title: "Multilingual Service",
    guide_languages_desc: "Fluent in English, German, Italian, French, and Albanian.",
    guide_certified_title: "Certified Professionals",
    guide_certified_desc: "Licensed tour guides with official certifications and ongoing training.",
    guide_personalized_title: "Personalized Experience",
    guide_personalized_desc: "Tailored tours that match your interests and travel preferences.",
    
    // CITY DETAIL PAGES
    
    // Tirana
    city_hero_tirana_title: "Tirana & Kruja Cultural Circuit",
    city_hero_tirana_subtitle: "Walk the capital's vibrant streets and step into Albania's past with a visit to the historic hilltop town of Kruja — birthplace of a national hero.",
    city_detail_title_tirana: "TIRANA CITY TOUR & KRUJA CULTURAL EXPERIENCE (FULL DAY)",
    
    // Shkodra
    city_hero_shkodra_title: "Shkodra: Gateway to the North",
    city_hero_shkodra_subtitle: "A full-day journey through Albania's cultural capital — from Rozafa Castle to lakeside serenity, this trip blends nature, history, and local charm.",
    city_detail_title_shkodra: "SHKODRA CULTURAL HERITAGE & ROZAFA CASTLE (FULL DAY)",
    
    // Vlora
    city_hero_vlora_title: "Vlora & Karaburun–Sazan Marine Escape",
    city_hero_vlora_subtitle: "Sail into the wild beauty of the Ionian — this marine park adventure brings you sea caves, unspoiled beaches, and cinematic coastal views.",
    city_detail_title_vlora: "VLORA COASTAL ADVENTURE & KARABURUN-SAZAN MARINE PARK (FULL DAY)",
    
    // Durres
    city_hero_durres_title: "Durrës & Skënderbeg Cognac Experience",
    city_hero_durres_subtitle: "History meets refinement — explore coastal Durrës and tour the renowned Skënderbeg Cognac Distillery in a day rich with flavor and heritage.",
    city_detail_title_durres: "DURRËS ANCIENT HERITAGE & SKËNDERBEG COGNAC TASTING (FULL DAY)",
    
    // Pogradec
    city_hero_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    city_hero_pogradec_subtitle: "A full-day journey through Lake Ohrid's ancient shores — cross borders to experience Albania and North Macedonia's cultural treasures.",
    city_detail_title_pogradec: "POGRADEC & LAKE OHRID CROSS-BORDER CULTURAL EXPERIENCE (FULL DAY)",
    
    // Common city page elements
    city_overview_title: "Tour Overview",
    city_what_included_title: "What's Included",
    city_what_not_included_title: "What's Not Included",
    city_important_notes_title: "Important Notes",
    city_meeting_point_title: "Meeting Point",
    city_cancellation_title: "Cancellation Policy",
    
    // Booking elements
    booking_price_from: "From",
    booking_per_person: "per person",
    booking_group_discount: "Group discounts available",
    booking_instant_confirmation: "Instant confirmation",
    booking_free_cancellation: "Free cancellation up to 24 hours",
    
    // Common buttons and links
    btn_view_details: "View Details",
    btn_check_availability: "Check Availability",
    btn_book_online: "Book Online",
    btn_request_quote: "Request Quote",
    btn_share_tour: "Share This Tour",
    btn_download_itinerary: "Download Itinerary",
    
    // Filter and search elements
    filter_all: "All",
    filter_nature: "Nature",
    filter_culture: "Culture", 
    filter_adventure: "Adventure",
    filter_heritage: "Heritage",
    filter_coastal: "Coastal",
    search_placeholder: "Search destinations...",
    
    // Time and duration
    time_full_day: "Full Day",
    time_half_day: "Half Day",
    time_multi_day: "Multi-Day",
    duration_8_hours: "8-9 hours",
    duration_6_hours: "6-7 hours",
    departure_morning: "Morning departure (9:00 AM)",
    return_evening: "Evening return (6:00 PM)"
  },
  
  sq: {
    // Navigation
    nav_home: "Ballina",
    nav_about: "Rreth Nesh",
    nav_places: "Vende për të Vizituar", 
    nav_hotels: "Hotele",
    nav_travels: "Udhëtime",
    nav_guides: "Udhëzues të Licencuar",
    
    // Header
    header_phone: "+355 684 170 700",
    header_lang_select: "Zgjidhni Gjuhën",
    
    // Hero Section
    hero_title: "Udhëtim për të eksploruar botën",
    hero_subtitle: "Zbuloni thesaret e fshehta të Shqipërisë me përvojë udhëtimi të personalizuara dhe të qëndrueshme që ju lidhin me kulturën autentike lokale dhe peizazhet mahnitëse.",
    
    // Buttons
    btn_learn_more: "Mësoni më shumë",
    btn_book_now: "Rezervoni tani",
    btn_contact_us: "Na Kontaktoni",
    btn_get_directions: "Merrni Drejtimet",
    btn_view_gallery: "Shikoni Galerinë",
    btn_read_more: "Lexoni Më Shumë",
    btn_back_home: "Kthehu në Ballina",
    btn_send_message: "Dërgoni Mesazhin",
    cta_explore: "Eksploroni tani",
    cta_book: "Rezervoni tani",
    
    // Popular Destinations Section
    popular_subtitle: "Zbuloni vendin",
    popular_title: "Destinacion popullor",
    popular_desc: "Shqipëria ofron përvojë mahnitëse nga plazhet e paprekura te malet madhështore, nga kalaja mesjetare te skenat e gjalla kulturore.",
    popular_explore: "Eksploroni Më Shumë Destinacione",
    
    // Destination Cards
    popular_berat: "Berat",
    popular_berat_desc: "Zbuloni \"Qytetin e Një Mijë Dritareve\" me arkitekturën e tij unike otomane dhe statusin e Trashëgimisë Botërore të UNESCO-s.",
    popular_shkodra: "Shkodër",
    popular_shkodra_desc: "Eksploroni kryeqytetin kulturor të Shqipërisë me Kalën e mahnitshme të Rozafës, historinë e pasur dhe vendosjen e bukur pranë liqenit.",
    popular_tirana: "Tiranë",
    popular_tirana_desc: "Zbuloni kryeqytetin e gjallë të Shqipërisë me ndërtesat e tij me ngjyra, atmosferën e gjallë dhe përzierjen magjepsëse të historisë dhe modernitetit.",
    
    // Package Section
    package_subtitle: "Paketa Popullore",
    package_title: "Shikoni Paketat Tona",
    package_desc: "Përvojë udhëtimi të krijuara me kujdes që tregojnë më të mirën e Shqipërisë duke respektuar komunitetet lokale dhe mjedisin.",
    package_custom_title: "Itinerare të Personalizuara",
    package_custom_desc: "Udhëtime të formuara rreth stilit dhe ritmit tuaj, të krijuara për t'ju përshtatur juve, jo masave.",
    package_guide_title: "Momente të Qëndrueshme",
    package_guide_desc: "Çdo vendndodhje, e zgjedhur me kujdes për t'ju ndihmuar të jetoni histori që vlen të tregoni, jo thjesht të bëni foto.",
    package_support_title: "Navigim i Mençur",
    package_support_desc: "Gjeni rrugën tuaj me saktësi, nga pamje kryesore te vende sekrete lokale, gjithmonë në majë të gishtave.",
    package_best_title: "Këshilla dhe Njohuri të Dobishme",
    package_best_desc: "Qëndroni një hap përpara me sugjerime në kohë reale basuar në interesat dhe rrethinat tuaja.",
    package_alerts_title: "Alarme në Kohë",
    package_alerts_desc: "Qoftë një rezervim apo një shëtitje në mal, qëndroni të informuar dhe në kohë, pa stres, pa surpriza.",
    package_tools_title: "Mjete Udhëtimi Gjithëpërfshirëse",
    package_tools_desc: "Nga rezervimet te listat e kontrollimit, menaxhoni çdo pjesë të udhëtimit tuaj në një hapësirë të thjeshtëzuar.",
    
    // Testimonials Section
    testimonials_subtitle: "Çfarë Thonë Udhëtarët Tanë",
    testimonials_title: "Aventura që krijojnë kujtime autentike",
    
    // Gallery Section
    gallery_subtitle: "Galeria e Fotografive",
    gallery_title: "Foto nga Udhëtarët",
    gallery_description: "Zbuloni Shqipërinë përmes syve të udhëtarëve tanë. Këto momente autentike kapin bukurinë, kulturën dhe përvojat e paharrueshme që ju presin.",
    
    // Contact Form Section
    contact_subtitle: "Jini në Kontakt",
    contact_title: "Gati për Udhëtim të Paharruar. Na Mbani Mend!",
    contact_description: "Lejojeni të ndihmojmë në planifikimin e aventurës tuaj të përsosur shqiptare. Plotësoni formularin më poshtë dhe ekspertët tanë të udhëtimit do t'ju kontaktojnë brenda 24 orëve.",
    
    // Contact Form Fields
    contact_name_label: "Emri i Plotë",
    contact_name_placeholder: "Shkruani emrin tuaj të plotë",
    contact_email_label: "Adresa e Email-it", 
    contact_email_placeholder: "Shkruani email-in tuaj",
    contact_phone_label: "Numri i Telefonit",
    contact_phone_placeholder: "Shkruani numrin tuaj të telefonit",
    contact_date_label: "Data e Udhëtimit",
    contact_date_placeholder: "MM/DD/YYYY",
    contact_subject_label: "Tema",
    contact_subject_placeholder: "Shkruani temën e mesazhit",
    contact_message_label: "Mesazhi Juaj",
    contact_message_placeholder: "Shkruani mesazhin tuaj këtu",
    
    // Footer
    footer_text: "Sepse udhëtimi juaj meriton kuptim, dhe Shqipëria ia jep atë.",
    footer_contact_title: "Na Kontaktoni",
    footer_contact_description: "Jini të lirë të na kontaktoni dhe të na arrini !!",
    footer_address: "Bulevardi Zogu I, Shkodër 4001",
    footer_email: "info@wanderlustalbania.eu",
    footer_phone: "+355 684 170 700",
    footer_copyright_text: "Të gjitha të drejtat e rezervuara. Dizajnuar nga",
    footer_copyright_company: "Wanderlust Albania",
    footer_copyright_designer: "codewithenea.it",
    
    // About page specific translations
    about_hero_title: "Rreth Wanderlust Albania",
    about_hero_subtitle: "Porta juaj personale për të zbuluar Shqipërinë në mënyrën më autentike dhe të vetëdijshme ndaj mjedisit të mundshme",
    about_story_title: "Historia Jonë",
    about_story_desc: "Wanderlust Albania është më shumë se një kompani udhëtimi, është porta juaj personale për të zbuluar Shqipërinë në mënyrën më autentike dhe të vetëdijshme ndaj mjedisit të mundshme.",
    about_values_title: "Vlerat Tona",
    
    // Contact Information Labels
    contact_info_label: "Për pyetje:",
    
    // Common Location Names
    location_albania: "Shqipëri",
    location_northern_albania: "Shqipëria e Veriut", 
    location_central_albania: "Shqipëria Qendrore",
    location_theth: "Theth, Shqipëri",
    location_dhermi: "Dhërmi, Shqipëri",
    location_ksamil: "Ksamil, Shqipëri",
    location_vlore: "Vlorë, Shqipëri",
    location_durres: "Durrës, Shqipëri",
    location_gjirokaster: "Gjirokastër, Shqipëri",
    location_alps: "Alpet Shqiptare, Shqipëri",
    
    // Page titles
    page_title_home: "Wanderlust Albania - Agjenci udhëtimi",
    page_title_about: "Rreth Wanderlust Albania",
    page_title_hotels: "Hotele - Wanderlust Albania",
    page_title_places: "Vende për të Vizituar - Wanderlust Albania", 
    page_title_travels: "Udhëtime - Wanderlust Albania",
    page_title_guides: "Udhëzues të Licencuar - Wanderlust Albania",
    
    // Travels Page
    travels_hero_title: "Eksploroni Thesaret e Fshehta të Shqipërisë",
    travels_hero_subtitle: "Çdo udhëtim është një histori që pret të shkruhet. Lejojeni të ju udhëheqim nëpër destinacionet më mahnitëse të Shqipërisë.",
    travels_section_subtitle: "🌍 Përvojë të Kuratoruara Ditore në të Gjithë Shqipërinë",
    travels_section_title: "Udhëtime të zgjedhura me kujdes ditore të dizajnuara për të zhytur, frymëzuar dhe zbuluar shpirtin e çdo destinacioni.",
    
    // Travel Cards
    travel_durres_title: "Durrës & Përvojë Konjaku Skënderbeg",
    travel_durres_desc: "Historia takohet me rafinimin — eksploroni Durrësin bregdetar dhe vizitoni Distilerinë e famshme të Konjakut Skënderbeg në një ditë të pasur me shije dhe trashëgimi.",
    travel_tirana_title: "Qarku Kulturor Tiranë & Krujë",
    travel_tirana_desc: "Ecni në rrugët e gjalla të kryeqytetit dhe hyni në të kaluarën e Shqipërisë me një vizitë në qytetin historik kodrinor të Krujës — vendlindjen e një heroi kombëtar.",
    travel_shkodra_title: "Shkodra: Porta e Veriut",
    travel_shkodra_desc: "Një udhëtim i plotë ditor nëpër kryeqytetin kulturor të Shqipërisë — nga Kalaja e Rozafës te qetësia pranë liqenit, ky udhëtim përzieje natyrën, historinë dhe bukurinë lokale.",
    travel_vlora_title: "Ikja Detare Vlorë & Karaburun–Sazan",
    travel_vlora_desc: "Lundrojeni në bukurinë e egër të Jonit — kjo aventurë e parkut detar ju sjell shpella detare, plazhe të paprekura dhe pamje bregdetare kinematografike.",
    travel_berat_title: "Tur Trashëgimie Berat & Vera Çobo",
    travel_berat_desc: "Hyni në një qytet muzeu të gjallë, pastaj shijojeni përsosmërinë lokale në një nga vera më të mira familjare të Shqipërisë. Një udhëtim nëpër kulturë dhe zanaat.",
    travel_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    travel_pogradec_desc: "Një udhëtim i plotë ditor nëpër brigjet e lashta të Liqenit të Ohrit — kaloni kufijtë për të përjetuar thesaret kulturore të Shqipërisë dhe Maqedonisë së Veriut.",
    
    // City Detail Pages
    city_hero_berat_title: "Tur Trashëgimie Berat & Vera Çobo",
    city_hero_berat_subtitle: "Hyni në një qytet muzeu të gjallë, pastaj shijojeni përsosmërinë lokale në një nga vera më të mira familjare të Shqipërisë. Një udhëtim nëpër kulturë dhe zanaat.",
    city_detail_title_berat: "TRASHËGIMI BOTËRORE UNESCO BERAT DHE VERA ÇOBO (TUR I PLOTË DITOR)",
    city_highlights_title: "Thekse",
    city_itinerary_title: "Itinerar i Detajuar",
    booking_info_duration: "Kohëzgjatja:",
    booking_info_departure: "Koha e Nisjes:",
    booking_info_includes: "Përfshin:",
    booking_info_not_included: "Nuk Përfshihet:",
    btn_book_tour: "Rezervoni Këtë Tur",
    btn_back_travels: "Kthehuni te Të Gjitha Udhëtimet",
    
    // Learn More Links
    btn_learn_more_link: "→ Mësoni Më Shumë",
    
    // Footer elements that might be missing
    footer_copyright_start: "© 2025",
    footer_rights_reserved: "Të gjitha të drejtat e rezervuara. Dizajnuar nga"
  },
  
  de: {
    // Navigation
    nav_home: "Startseite",
    nav_about: "Über Uns",
    nav_places: "Sehenswürdigkeiten", 
    nav_hotels: "Hotels",
    nav_travels: "Reisen",
    nav_guides: "Lizenzierte Reiseführer",
    
    // Header
    header_phone: "+355 684 170 700",
    header_lang_select: "Sprache Wählen",
    
    // Hero Section
    hero_title: "Reise zur Welterkundung",
    hero_subtitle: "Entdecken Sie Albaniens verborgene Schätze mit personalisierten, nachhaltigen Reiseerlebnissen, die Sie mit authentischer lokaler Kultur und atemberaubenden Landschaften verbinden.",
    
    // Buttons
    btn_learn_more: "Mehr Erfahren",
    btn_book_now: "Jetzt Buchen",
    btn_contact_us: "Kontaktieren Sie Uns",
    btn_get_directions: "Wegbeschreibung Erhalten",
    btn_view_gallery: "Galerie Anzeigen",
    btn_read_more: "Mehr Lesen",
    btn_back_home: "Zurück zur Startseite",
    btn_send_message: "Nachricht Senden",
    cta_explore: "Jetzt Erkunden",
    cta_book: "Jetzt Buchen",
    
    // Popular Destinations Section
    popular_subtitle: "Orte Entdecken",
    popular_title: "Beliebte Reiseziele",
    popular_desc: "Albanien bietet atemberaubende Erlebnisse von unberührten Stränden bis zu majestätischen Bergen, von mittelalterlichen Burgen bis zu lebendigen Kulturszenen.",
    popular_explore: "Mehr Reiseziele Erkunden",
    
    // Destination Cards
    popular_berat: "Berat",
    popular_berat_desc: "Entdecken Sie die \"Stadt der Tausend Fenster\" mit ihrer einzigartigen osmanischen Architektur und dem UNESCO-Welterbestatus.",
    popular_shkodra: "Shkodra",
    popular_shkodra_desc: "Erkunden Sie Albaniens Kulturhauptstadt mit ihrer atemberaubenden Rozafa-Burg, reichen Geschichte und schönen Lage am See.",
    popular_tirana: "Tirana",
    popular_tirana_desc: "Entdecken Sie Albaniens lebendige Hauptstadt mit ihren bunten Gebäuden, lebhaften Atmosphäre und faszinierenden Mischung aus Geschichte und Moderne.",
    
    // Package Section
    package_subtitle: "Beliebte Pakete",
    package_title: "Schauen Sie sich unsere Pakete an",
    package_desc: "Sorgfältig gestaltete Reiseerlebnisse, die das Beste von Albanien zeigen und dabei lokale Gemeinschaften und Umwelt respektieren.",
    package_custom_title: "Maßgeschneiderte Reiserouten",
    package_custom_desc: "Reisen, die um Ihren Stil und Ihr Tempo geformt sind, angepasst an Sie, nicht an die Massen.",
    package_guide_title: "Bleibende Momente",
    package_guide_desc: "Jeder Ort, handverlesen, um Ihnen zu helfen, Geschichten zu erleben, die es wert sind, erzählt zu werden, nicht nur Fotos zu machen.",
    package_support_title: "Intelligente Navigation",
    package_support_desc: "Finden Sie Ihren Weg mit Präzision, von großen Sehenswürdigkeiten bis zu geheimen lokalen Orten, immer griffbereit.",
    package_best_title: "Hilfreiche Tipps & Einblicke",
    package_best_desc: "Bleiben Sie einen Schritt voraus mit Echtzeit-Vorschlägen basierend auf Ihren Interessen und der Umgebung.",
    package_alerts_title: "Rechtzeitige Benachrichtigungen",
    package_alerts_desc: "Ob es eine Reservierung oder eine Wanderung ist, bleiben Sie informiert und pünktlich, kein Stress, keine Überraschungen.",
    package_tools_title: "All-in-One Reise-Tools",
    package_tools_desc: "Von Buchungen bis zu Checklisten, verwalten Sie jeden Teil Ihrer Reise in einem optimierten Bereich.",
    
    // Testimonials Section
    testimonials_subtitle: "Was unsere Reisenden sagen",
    testimonials_title: "Abenteuer, die authentische Erinnerungen schaffen",
    
    // Gallery Section
    gallery_subtitle: "Fotogalerie",
    gallery_title: "Fotos von Reisenden",
    gallery_description: "Entdecken Sie Albanien durch die Augen unserer Reisenden. Diese authentischen Momente erfassen die Schönheit, Kultur und unvergesslichen Erlebnisse, die auf Sie warten.",
    
    // Contact Form Section
    contact_subtitle: "In Kontakt Treten",
    contact_title: "Bereit für unvergessliche Reisen. Denken Sie an uns!",
    contact_description: "Lassen Sie uns Ihnen helfen, Ihr perfektes albanisches Abenteuer zu planen. Füllen Sie das folgende Formular aus und unsere Reiseexperten werden Sie innerhalb von 24 Stunden kontaktieren.",
    
    // Contact Form Fields
    contact_name_label: "Vollständiger Name",
    contact_name_placeholder: "Geben Sie Ihren vollständigen Namen ein",
    contact_email_label: "E-Mail-Adresse", 
    contact_email_placeholder: "Geben Sie Ihre E-Mail ein",
    contact_phone_label: "Telefonnummer",
    contact_phone_placeholder: "Geben Sie Ihre Telefonnummer ein",
    contact_date_label: "Reisedatum",
    contact_date_placeholder: "TT/MM/JJJJ",
    contact_subject_label: "Betreff",
    contact_subject_placeholder: "Geben Sie den Nachrichtenbetreff ein",
    contact_message_label: "Ihre Nachricht",
    contact_message_placeholder: "Geben Sie Ihre Nachricht hier ein",
    
    // Footer
    footer_text: "Weil Ihre Reise Bedeutung verdient, und Albanien liefert sie.",
    footer_contact_title: "Kontaktieren Sie Uns",
    footer_contact_description: "Zögern Sie nicht, uns zu kontaktieren und zu erreichen!",
    footer_address: "Bulevardi Zogu I, Shkodër 4001",
    footer_email: "info@wanderlustalbania.eu",
    footer_phone: "+355 684 170 700",
    footer_copyright_text: "Alle Rechte vorbehalten. Design von",
    footer_copyright_company: "Wanderlust Albania",
    footer_copyright_designer: "codewithenea.it",
    
    // About page specific translations
    about_hero_title: "Über Wanderlust Albania",
    about_hero_subtitle: "Ihr persönliches Tor zur Entdeckung Albaniens auf die authentischste und umweltbewussteste Art und Weise",
    about_story_title: "Unsere Geschichte",
    about_story_desc: "Wanderlust Albania ist mehr als ein Reiseunternehmen, es ist Ihr persönliches Tor zur Entdeckung Albaniens auf die authentischste und umweltbewussteste Art und Weise.",
    about_values_title: "Unsere Werte",
    
    // Contact Information Labels
    contact_info_label: "Für Anfragen:",
    
    // Common Location Names
    location_albania: "Albanien",
    location_northern_albania: "Nordalbanien", 
    location_central_albania: "Zentralalbanien",
    location_theth: "Theth, Albanien",
    location_dhermi: "Dhermi, Albanien",
    location_ksamil: "Ksamil, Albanien",
    location_vlore: "Vlora, Albanien",
    location_durres: "Durres, Albanien",
    location_gjirokaster: "Gjirokastra, Albanien",
    location_alps: "Albanische Alpen, Albanien",
    
    // Page titles
    page_title_home: "Wanderlust Albania - Reiseagentur",
    page_title_about: "Über Wanderlust Albania",
    page_title_hotels: "Hotels - Wanderlust Albania",
    page_title_places: "Sehenswürdigkeiten - Wanderlust Albania", 
    page_title_travels: "Reisen - Wanderlust Albania",
    page_title_guides: "Lizenzierte Reiseführer - Wanderlust Albania",
    
    // Travels Page
    travels_hero_title: "Erkunden Sie Albaniens Verborgene Schätze",
    travels_hero_subtitle: "Jede Reise ist eine Geschichte, die darauf wartet, geschrieben zu werden. Laissez-nous vous guider à travers les destinations les plus époustouflantes de l'Albanie.",
    travels_section_subtitle: "🌍 Expériences Journalières Curatées à Travers l'Albanie",
    travels_section_title: "Voyages d'une journée sélectionnés à la main conçus pour immerger, inspirer et révéler l'âme de chaque destination.",
    
    // Travel Cards
    travel_durres_title: "Expérience Durrës & Cognac Skënderbeg",
    travel_durres_desc: "L'histoire rencontre le raffinement — explorez la côte de Durrës et visitez la renommée Distillerie de Cognac Skënderbeg dans une journée riche en saveur et patrimoine.",
    travel_tirana_title: "Circuito Culturale Tirana & Kruja",
    travel_tirana_desc: "Walk the capital's vibrant streets and step into Albania's past with a visit to the historic hilltop town of Kruja — birthplace of a national hero.",
    travel_shkodra_title: "Shkodra: Porte du Nord",
    travel_shkodra_desc: "A full-day journey through Albania's cultural capital — from Rozafa Castle to lakeside serenity, this trip blends nature, history, and local charm.",
    travel_vlora_title: "Évasion Marine Vlora & Karaburun–Sazan",
    travel_vlora_desc: "Sail into the wild beauty of the Ionian — this marine park adventure brings you sea caves, unspoiled beaches, and cinematic coastal views.",
    travel_berat_title: "Tour du Patrimoine Berat & Vignoble Çobo",
    travel_berat_desc: "Step into a living museum city, then taste local excellence at one of Albania's finest family-owned wineries. A journey through culture and craft.",
    travel_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    travel_pogradec_desc: "A full-day journey through Lake Ohrid's ancient shores — cross borders to experience Albania and North Macedonia's cultural treasures.",
    
    // City Detail Pages
    city_hero_berat_title: "Tour du Patrimoine Berat & Vignoble Çobo",
    city_hero_berat_subtitle: "Entrez dans une ville musée vivante, puis goûtez l'excellence locale dans l'un des meilleurs vignobles familiaux d'Albanie. Eine Reise durch Kultur und Handwerk.",
    city_detail_title_berat: "PATRIMOINE MONDIAL UNESCO BERAT ET VIGNOBLE ÇOBO (TOUR D'UNE JOURNÉE ENTIÈRE)",
    city_highlights_title: "Höhepunkte",
    city_itinerary_title: "Itinéraire Détaillé",
    booking_info_duration: "Durée:",
    booking_info_departure: "Heure de Départ:",
    booking_info_includes: "Comprend:",
    booking_info_not_included: "Nicht Enthalten:",
    btn_book_tour: "Réserver Ce Tour",
    btn_back_travels: "Retour à Tous les Voyages",
    
    // Learn More Links
    btn_learn_more_link: "→ En Savoir Plus",
    
    // Footer elements that might be missing
    footer_copyright_start: "© 2025",
    footer_rights_reserved: "Tous droits réservés. Design par"
  },
  
  it: {
    // Navigation
    nav_home: "Home",
    nav_about: "Chi Siamo",
    nav_places: "Luoghi da Visitare", 
    nav_hotels: "Hotel",
    nav_travels: "Viaggi",
    nav_guides: "Guide Autorizzate",
    
    // Header
    header_phone: "+355 684 170 700",
    header_lang_select: "Scegli Lingua",
    
    // Hero Section
    hero_title: "Viaggio per esplorare il mondo",
    hero_subtitle: "Scopri le gemme nascoste dell'Albania con esperienze di viaggio personalizzate e sostenibili che ti collegano alla cultura locale autentica e ai paesaggi mozzafiato.",
    
    // Buttons
    btn_learn_more: "Scopri di Più",
    btn_book_now: "Prenota Ora",
    btn_contact_us: "Contattaci",
    btn_get_directions: "Ottieni Indicazioni",
    btn_view_gallery: "Vedi Galleria",
    btn_read_more: "Leggi di Più",
    btn_back_home: "Torna alla Home",
    btn_send_message: "Invia Messaggio",
    cta_explore: "Esplora Ora",
    cta_book: "Prenota Ora",
    
    // Popular Destinations Section
    popular_subtitle: "Scopri il luogo",
    popular_title: "Destinazioni popolari",
    popular_desc: "L'Albania offre esperienze mozzafiato dalle spiagge incontaminate alle montagne maestose, dai castelli medievali alle scene culturali vibranti.",
    popular_explore: "Esplora Più Destinazioni",
    
    // Destination Cards
    popular_berat: "Berat",
    popular_berat_desc: "Scopri la \"Città delle Mille Finestre\" con la sua architettura ottomana unica e lo status di Patrimonio Mondiale UNESCO.",
    popular_shkodra: "Shkodra",
    popular_shkodra_desc: "Esplora la capitale culturale dell'Albania con il suo splendido Castello di Rozafa, la ricca storia e la bella posizione sul lago.",
    popular_tirana: "Tirana",
    popular_tirana_desc: "Scopri la vibrante capitale dell'Albania con i suoi edifici colorati, l'atmosfera vivace e l'affascinante mix di storia e modernità.",
    
    // Package Section
    package_subtitle: "Pacchetti Popolari",
    package_title: "Scopri i Nostri Pacchetti",
    package_desc: "Esperienze di viaggio accuratamente realizzate che mostrano il meglio dell'Albania rispettando le comunità locali e l'ambiente.",
    package_custom_title: "Itinerari Personalizzati",
    package_custom_desc: "Viaggi modellati intorno al tuo stile e ritmo, creati per adattarsi a te, non alle masse.",
    package_guide_title: "Momenti Duraturi",
    package_guide_desc: "Ogni luogo, selezionato a mano per aiutarti a vivere storie che vale la pena raccontare, non solo scattare foto.",
    package_support_title: "Navigazione Intelligente",
    package_support_desc: "Trova la tua strada con precisione, dai siti principali ai luoghi segreti locali, sempre a portata di mano.",
    package_best_title: "Consigli e Intuizioni Utili",
    package_best_desc: "Mantieniti un passo avanti con suggerimenti in tempo reale basati sui tuoi interessi e dintorni.",
    package_alerts_title: "Avvisi Tempestivi",
    package_alerts_desc: "Che si tratti di una prenotazione o di un'escursione, rimani informato e puntuale, senza stress, senza sorprese.",
    package_tools_title: "Strumenti di Viaggio All-in-One",
    package_tools_desc: "Dalle prenotazioni alle checklist, gestisci ogni parte del tuo viaggio in uno spazio rationalisé.",
    
    // Testimonials Section
    testimonials_subtitle: "Cosa dicono i nostri viaggiatori",
    testimonials_title: "Avventure che creano ricordi autentici",
    
    // Gallery Section
    gallery_subtitle: "Galleria Fotografica",
    gallery_title: "Foto dai Viaggiatori",
    gallery_description: "Scopri l'Albania attraverso gli occhi dei nostri viaggiatori. Questi momenti autentici catturano la bellezza, la cultura e le esperienze indimenticabili che ti aspettano.",
    
    // Contact Form Section
    contact_subtitle: "Entra in Contatto",
    contact_title: "Pronto per viaggi indimenticabili. Ricordati di noi!",
    contact_description: "Lasciaci aiutarti a pianificare la tua avventura albanese perfetta. Compila il modulo qui sotto e i nostri esperti di viaggio ti contatteranno entro 24 ore.",
    
    // Contact Form Fields
    contact_name_label: "Nome Complet",
    contact_name_placeholder: "Inserisci il tuo nome completo",
    contact_email_label: "Indirizzo Email", 
    contact_email_placeholder: "Inserisci la tua email",
    contact_phone_label: "Numero di Telefono",
    contact_phone_placeholder: "Inserisci il tuo numero di telefono",
    contact_date_label: "Data di Viaggio",
    contact_date_placeholder: "GG/MM/AAAA",
    contact_subject_label: "Oggetto",
    contact_subject_placeholder: "Inserisci l'oggetto del messaggio",
    contact_message_label: "Il Tuo Messaggio",
    contact_message_placeholder: "Inserisci il tuo messaggio qui",
    
    // Footer
    footer_text: "Perché il tuo viaggio merita significato, e l'Albania lo offre.",
    footer_contact_title: "Contattaci",
    footer_contact_description: "Sentiti libero di contattarci e raggiungerci!",
    footer_address: "Bulevardi Zogu I, Shkodër 4001",
    footer_email: "info@wanderlustalbania.eu",
    footer_phone: "+355 684 170 700",
    footer_copyright_text: "Tutti i diritti riservati. Design di",
    footer_copyright_company: "Wanderlust Albania",
    footer_copyright_designer: "codewithenea.it",
    
    // About page specific translations
    about_hero_title: "Chi è Wanderlust Albania",
    about_hero_subtitle: "Il tuo gateway personale per scoprire l'Albania nel modo più autentico ed eco-sostenibile possibile",
    about_story_title: "La Nostra Storia",
    about_story_desc: "Wanderlust Albania è più di una compagnia di viaggi, c'è il tuo gateway personale per scoprire l'Albania nel modo più autentico ed eco-sostenibile possibile.",
    about_values_title: "I Nostri Valori",
    
    // Contact Information Labels
    contact_info_label: "Per richieste:",
    
    // Common Location Names
    location_albania: "Albania",
    location_northern_albania: "Albania del Nord", 
    location_central_albania: "Albania Centrale",
    location_theth: "Theth, Albania",
    location_dhermi: "Dhermi, Albania",
    location_ksamil: "Ksamil, Albania",
    location_vlore: "Valona, Albania",
    location_durres: "Durazzo, Albania",
    location_gjirokaster: "Argirocastro, Albania",
    location_alps: "Alpet Shqiptare, Albania",
    
    // Page titles
    page_title_home: "Wanderlust Albania - Agenzia di viaggi",
    page_title_about: "Chi Siamo - Wanderlust Albania",
    page_title_hotels: "Hotel - Wanderlust Albania",
    page_title_places: "Luoghi da Visitare - Wanderlust Albania", 
    page_title_travels: "Viaggi - Wanderlust Albania",
    page_title_guides: "Guide Autorizzate - Wanderlust Albania",
    
    // Travels Page
    travels_hero_title: "Esplora i Tesori Nascosti dell'Albania",
    travels_hero_subtitle: "Ogni viaggio è una storia che aspetta di essere scritta. Lascia che ti guidiamo attraverso le destinazioni più mozzafiato dell'Albania.",
    travels_section_subtitle: "🌍 Esperienze Giornaliere Curate in Tutta l'Albania",
    travels_section_title: "Viaggi giornalieri selezionati a mano progettati per immergere, ispirare e rivelare l'anima di ogni destinazione.",
    
    // Travel Cards
    travel_durres_title: "Esperienza Durrës & Cognac Skënderbeg",
    travel_durres_desc: "La storia incontra la raffinatezza — esplora la costiera Durrës e visita la rinomata Distilleria Cognac Skënderbeg in un giorno ricco di sapore e patrimonio.",
    travel_tirana_title: "Circuito Culturale Tirana & Kruja",
    travel_tirana_desc: "Cammina per le strade vibranti della capitale e entra nel passato dell'Albania con una visita alla storica città collinare di Kruja — luogo di nascita di un eroe nazionale.",
    travel_shkodra_title: "Shkodra: Porta del Nord",
    travel_shkodra_desc: "Un viaggio di un'intera giornata attraverso la capitale culturale dell'Albania — dal Castello di Rozafa alla serenità del lago, questo viaggio unisce natura, storia e fascino locale.",
    travel_vlora_title: "Fuga Marina Vlora & Karaburun–Sazan",
    travel_vlora_desc: "Naviga nella bellezza selvaggia dello Ionio — questa avventura del parco marino ti porta grotte marine, spiagge incontaminate e vedute costiere cinematografiche.",
    travel_berat_title: "Tour del Patrimonio Berat & Cantina Çobo",
    travel_berat_desc: "Entra in una città museo vivente, poi assaggia l'eccellenza locale in una delle migliori cantine familiari dell'Albania. Un viaggio attraverso cultura e artigianato.",
    travel_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    travel_pogradec_desc: "A full-day journey through Lake Ohrid's ancient shores — cross borders to experience Albania and North Macedonia's cultural treasures.",
    
    // City Detail Pages
    city_hero_berat_title: "Tour del Patrimonio Berat & Cantina Çobo",
    city_hero_berat_subtitle: "Entra in una città museo vivente, poi assaggia l'eccellenza locale in una delle migliori cantine familiari dell'Albania. Un viaggio attraverso cultura e artigianato.",
    city_detail_title_berat: "PATRIMOINE MONDIAL UNESCO BERAT E CANTINA ÇOBO (TOUR DI UN'INTERA GIORNATA)",
    city_highlights_title: "Punti Salienti",
    city_itinerary_title: "Itinerario Dettagliato",
    booking_info_duration: "Durata:",
    booking_info_departure: "Orario di Partenza:",
    booking_info_includes: "Include:",
    booking_info_not_included: "Non Include:",
    btn_book_tour: "Prenota Questo Tour",
    btn_back_travels: "Torna a Tutti i Viaggi",
    
    // Learn More Links
    btn_learn_more_link: "→ Scopri di Più",
    
    // Footer elements that might be missing
    footer_copyright_start: "© 2025",
    footer_rights_reserved: "Tutti i diritti riservati. Design di",
    
    // PLACES PAGE
    places_hero_title: "Discover Albania's Most Beautiful Places",
    places_hero_subtitle: "From pristine beaches to majestic mountains, ancient cities to hidden gems - explore the diverse beauty that makes Albania unforgettable.",
    places_section_subtitle: "🏛️ Must-Visit Destinations",
    places_section_title: "Explore Albania's Iconic Landmarks",
    places_section_desc: "Discover the most spectacular destinations that showcase Albania's rich history, stunning nature, and cultural heritage.",
    
    // Place Cards
    place_theth_title: "Theth National Park",
    place_theth_desc: "Pristine alpine wilderness with dramatic peaks, traditional stone houses, and the famous Blue Eye waterfall.",
    place_dhermi_title: "Dhermi Beach",
    place_dhermi_desc: "Crystal-clear turquoise waters meet white pebble beaches in this stunning Albanian Riviera destination.",
    place_ksamil_title: "Ksamil Islands",
    place_ksamil_desc: "Paradise islands with pristine beaches and crystal waters, known as the 'Maldives of Albania'.",
    place_blue_eye_title: "Blue Eye Spring",
    place_blue_eye_desc: "A natural phenomenon with incredibly blue spring water emerging from a depth of more than 50 meters.",
    place_apollonia_title: "Apollonia Archaeological Park",
    place_apollonia_desc: "Ancient Greek ruins dating back to 588 BC, featuring impressive temples, theaters, and monuments.",
    place_butrint_title: "Butrint National Park",
    place_butrint_desc: "UNESCO World Heritage site with ancient ruins spanning Greek, Roman, Byzantine, and Venetian periods.",
    
    // GUIDES PAGE
    guides_hero_title: "Expert Licensed Tour Guides",
    guides_hero_subtitle: "Meet our passionate team of certified professionals who bring Albania's stories to life with authentic local knowledge and expertise.",
    guides_section_subtitle: "👥 Our Professional Team",
    guides_section_title: "Licensed & Experienced Guides",
    guides_section_desc: "Our guides are certified professionals with deep local knowledge, language skills, and passion for sharing Albania's hidden treasures.",
    
    // Guide Cards
    guide_expert_title: "Expert Knowledge",
    guide_expert_desc: "Deep understanding of Albanian history, culture, and hidden local secrets.",
    guide_languages_title: "Multilingual Service",
    guide_languages_desc: "Fluent in English, German, Italian, French, and Albanian.",
    guide_certified_title: "Certified Professionals",
    guide_certified_desc: "Licensed tour guides with official certifications and ongoing training.",
    guide_personalized_title: "Personalized Experience",
    guide_personalized_desc: "Tailored tours that match your interests and travel preferences.",
    
    // CITY DETAIL PAGES
    
    // Tirana
    city_hero_tirana_title: "Tirana & Kruja Cultural Circuit",
    city_hero_tirana_subtitle: "Walk the capital's vibrant streets and step into Albania's past with a visit to the historic hilltop town of Kruja — birthplace of a national hero.",
    city_detail_title_tirana: "TIRANA CITY TOUR & KRUJA CULTURAL EXPERIENCE (FULL DAY)",
    
    // Shkodra
    city_hero_shkodra_title: "Shkodra: Gateway to the North",
    city_hero_shkodra_subtitle: "A full-day journey through Albania's cultural capital — from Rozafa Castle to lakeside serenity, this trip blends nature, history, and local charm.",
    city_detail_title_shkodra: "SHKODRA CULTURAL HERITAGE & ROZAFA CASTLE (FULL DAY)",
    
    // Vlora
    city_hero_vlora_title: "Vlora & Karaburun–Sazan Marine Escape",
    city_hero_vlora_subtitle: "Sail into the wild beauty of the Ionian — this marine park adventure brings you sea caves, unspoiled beaches, and cinematic coastal views.",
    city_detail_title_vlora: "VLORA COASTAL ADVENTURE & KARABURUN-SAZAN MARINE PARK (FULL DAY)",
    
    // Durres
    city_hero_durres_title: "Durrës & Skënderbeg Cognac Experience",
    city_hero_durres_subtitle: "History meets refinement — explore coastal Durrës and tour the renowned Skënderbeg Cognac Distillery in a day rich with flavor and heritage.",
    city_detail_title_durres: "DURRËS ANCIENT HERITAGE & SKËNDERBEG COGNAC TASTING (FULL DAY)",
    
    // Pogradec
    city_hero_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    city_hero_pogradec_subtitle: "A full-day journey through Lake Ohrid's ancient shores — cross borders to experience Albania and North Macedonia's cultural treasures.",
    city_detail_title_pogradec: "POGRADEC & LAKE OHRID CROSS-BORDER CULTURAL EXPERIENCE (FULL DAY)",
    
    // Common city page elements
    city_overview_title: "Tour Overview",
    city_what_included_title: "What's Included",
    city_what_not_included_title: "What's Not Included",
    city_important_notes_title: "Important Notes",
    city_meeting_point_title: "Meeting Point",
    city_cancellation_title: "Cancellation Policy",
    
    // Booking elements
    booking_price_from: "From",
    booking_per_person: "per person",
    booking_group_discount: "Group discounts available",
    booking_instant_confirmation: "Instant confirmation",
    booking_free_cancellation: "Free cancellation up to 24 hours",
    
    // Common buttons and links
    btn_view_details: "View Details",
    btn_check_availability: "Check Availability",
    btn_book_online: "Book Online",
    btn_request_quote: "Request Quote",
    btn_share_tour: "Share This Tour",
    btn_download_itinerary: "Download Itinerary",
    
    // Filter and search elements
    filter_all: "All",
    filter_nature: "Nature",
    filter_culture: "Culture", 
    filter_adventure: "Adventure",
    filter_heritage: "Heritage",
    filter_coastal: "Coastal",
    search_placeholder: "Search destinations...",
    
    // Time and duration
    time_full_day: "Full Day",
    time_half_day: "Half Day",
    time_multi_day: "Multi-Day",
    duration_8_hours: "8-9 hours",
    duration_6_hours: "6-7 hours",
    departure_morning: "Morning departure (9:00 AM)",
    return_evening: "Evening return (6:00 PM)"
  },
  
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_places: "Lieux à Visiter", 
    nav_hotels: "Hôtels",
    nav_travels: "Voyages",
    nav_guides: "Guides Licenciés",
    
    // Header
    header_phone: "+355 684 170 700",
    header_lang_select: "Choisir la Langue",
    
    // Hero Section
    hero_title: "Voyage pour explorer le monde",
    hero_subtitle: "Découvrez les joyaux cachés de l'Albanie avec des expériences de voyage personnalisées et durables qui vous connectent à la culture locale authentique et aux paysages à couper le souffle.",
    
    // Buttons
    btn_learn_more: "En savoir plus",
    btn_book_now: "Réserver maintenant",
    btn_contact_us: "Nous Contacter",
    btn_get_directions: "Obtenir les Directions",
    btn_view_gallery: "Voir la Galerie",
    btn_read_more: "Lire Plus",
    btn_back_home: "Retour à l'Accueil",
    btn_send_message: "Envoyer le Message",
    cta_explore: "Explorer maintenant",
    cta_book: "Réserver maintenant",
    
    // Popular Destinations Section
    popular_subtitle: "Découvrir le lieu",
    popular_title: "Destination populaire",
    popular_desc: "L'Albanie offre des expériences à couper le souffle, des plages immaculées aux montagnes majestueuses, des châteaux médiévaux aux scènes culturelles vibrantes.",
    popular_explore: "Explorer Plus de Destinations",
    
    // Destination Cards
    popular_berat: "Berat",
    popular_berat_desc: "Découvrez la \"Ville aux Mille Fenêtres\" avec son architecture ottomane unique et son statut de patrimoine mondial de l'UNESCO.",
    popular_shkodra: "Shkodra",
    popular_shkodra_desc: "Explorez la capitale culturale de l'Albanie avec son magnifique château de Rozafa, sa riche histoire et son cadre magnifique au bord du lac.",
    popular_tirana: "Tirana",
    popular_tirana_desc: "Découvrez la capitale vibrante de l'Albanie avec ses bâtiments colorés, son atmosphère animée et son mélange fascinant d'histoire et de modernité.",
    
    // Package Section
    package_subtitle: "Forfaits Populaires",
    package_title: "Découvrez Nos Forfaits",
    package_desc: "Expériences de voyage soigneusement conçues qui mettent en valeur le meilleur de l'Albanie tout en respectant les communautés locales et l'environnement.",
    package_custom_title: "Itinéraires Personnalisés",
    package_custom_desc: "Voyages façonnés autour de votre style et de votre rythme, conçus pour vous correspondre, pas aux masses.",
    package_guide_title: "Moments Durables",
    package_guide_desc: "Chaque lieu, sélectionné à la main pour vous aider à vivre des histoires qui valent la peine d'être racontées, pas seulement prendre des photos.",
    package_support_title: "Navigation Intelligente",
    package_support_desc: "Trouvez votre chemin avec précision, des sites majeurs aux spots locaux secrets, toujours à portée de main.",
    package_best_title: "Conseils et Insights Utiles",
    package_best_desc: "Gardez une longueur d'avance avec des suggestions en temps réel basées sur vos intérêts et votre environnement.",
    package_alerts_title: "Alertes Opportunes",
    package_alerts_desc: "Qu'il s'agisse d'une réservation ou d'une randonnée, restez informé et à l'heure, sans stress, sans surprises.",
    package_tools_title: "Outils de Voyage Tout-en-Un",
    package_tools_desc: "Des réservations aux listes de contrôle, gérez chaque partie de votre voyage dans un espace rationalisé.",
    
    // Testimonials Section
    testimonials_subtitle: "Ce Que Disent Nos Voyageurs",
    testimonials_title: "Aventures qui créent des souvenirs authentiques",
    
    // Gallery Section
    gallery_subtitle: "Galerie Photo",
    gallery_title: "Photos de Voyageurs",
    gallery_description: "Découvrez l'Albanie à travers les yeux de nos voyageurs. Ces moments authentiques capturent la beauté, la culture et les expériences inoubliables qui vous attendent.",
    
    // Contact Form Section
    contact_subtitle: "Entrer en Contact",
    contact_title: "Prêt Pour un Voyage Inoubliable. Souvenez-vous de Nous!",
    contact_description: "Laissez-nous vous aider à planifier votre aventure albanaise parfaite. Remplissez le formulaire ci-dessous et nos experts en voyage vous contacteront dans les 24 heures.",
    
    // Contact Form Fields
    contact_name_label: "Nom Complet",
    contact_name_placeholder: "Entrez votre nom complet",
    contact_email_label: "Adresse Email", 
    contact_email_placeholder: "Entrez votre email",
    contact_phone_label: "Numéro de Téléphone",
    contact_phone_placeholder: "Entrez votre numéro de téléphone",
    contact_date_label: "Date de Voyage",
    contact_date_placeholder: "JJ/MM/AAAA",
    contact_subject_label: "Sujet",
    contact_subject_placeholder: "Entrez le sujet du message",
    contact_message_label: "Votre Message",
    contact_message_placeholder: "Entrez votre message ici",
    
    // Footer
    footer_text: "Parce que votre voyage mérite du sens, et l'Albanie le livre.",
    footer_contact_title: "Nous Contacter",
    footer_contact_description: "N'hésitez pas à nous contacter et à nous joindre !!",
    footer_address: "Bulevardi Zogu I, Shkodër 4001",
    footer_email: "info@wanderlustalbania.eu",
    footer_phone: "+355 684 170 700",
    footer_copyright_text: "Tous droits réservés. Design par",
    footer_copyright_company: "Wanderlust Albania",
    footer_copyright_designer: "codewithenea.it",
    
    // About page specific translations
    about_hero_title: "À Propos de Wanderlust Albania",
    about_hero_subtitle: "Votre passerelle personnelle pour découvrir l'Albanie de la manière la plus authentique et éco-consciente possible",
    about_story_title: "Notre Histoire",
    about_story_desc: "Wanderlust Albania est plus qu'une compagnie de voyage, c'est votre passerelle personale pour découvrir l'Albanie de la manière la plus authentique et éco-consciente possible.",
    about_values_title: "Nos Valeurs",
    
    // Contact Information Labels
    contact_info_label: "Pour les demandes:",
    
    // Common Location Names
    location_albania: "Albanie",
    location_northern_albania: "Albanie du Nord", 
    location_central_albania: "Albanie Centrale",
    location_theth: "Theth, Albanie",
    location_dhermi: "Dhermi, Albanie",
    location_ksamil: "Ksamil, Albanie",
    location_vlore: "Vlorë, Albanie",
    location_durres: "Durres, Albanie",
    location_gjirokaster: "Gjirokastër, Albanie",
    location_alps: "Alpes Albanaises, Albanie",
    
    // Page titles
    page_title_home: "Wanderlust Albania - Agence de voyage",
    page_title_about: "À Propos de Wanderlust Albania",
    page_title_hotels: "Hôtels - Wanderlust Albania",
    page_title_places: "Lieux à Visiter - Wanderlust Albania", 
    page_title_travels: "Voyages - Wanderlust Albania",
    page_title_guides: "Guides Licenciés - Wanderlust Albania",
    
    // Travels Page
    travels_hero_title: "Explorez les Trésors Cachés de l'Albanie",
    travels_hero_subtitle: "Chaque voyage est une histoire qui attend d'être écrite. Laissez-nous vous guider à travers les destinations les plus époustouflantes de l'Albanie.",
    travels_section_subtitle: "🌍 Expériences Journalières Curatées à Travers l'Albanie",
    travels_section_title: "Voyages d'une journée sélectionnés à la main conçus pour immerger, inspirer et révéler l'âme de chaque destination.",
    
    // Travel Cards
    travel_durres_title: "Expérience Durrës & Cognac Skënderbeg",
    travel_durres_desc: "L'histoire rencontre le raffinement — explorez la côte de Durrës et visitez la renommée Distillerie de Cognac Skënderbeg dans une journée riche en saveur et patrimoine.",
    travel_tirana_title: "Circuito Culturale Tirana & Kruja",
    travel_tirana_desc: "Walk the capital's vibrant streets and step into Albania's past with a visit to the historic hilltop town of Kruja — birthplace of a national hero.",
    travel_shkodra_title: "Shkodra: Porte du Nord",
    travel_shkodra_desc: "A full-day journey through Albania's cultural capital — from Rozafa Castle to lakeside serenity, this trip blends nature, history, and local charm.",
    travel_vlora_title: "Évasion Marine Vlora & Karaburun–Sazan",
    travel_vlora_desc: "Sail into the wild beauty of the Ionian — this marine park adventure brings you sea caves, unspoiled beaches, and cinematic coastal views.",
    travel_berat_title: "Tour du Patrimoine Berat & Vignoble Çobo",
    travel_berat_desc: "Step into a living museum city, then taste local excellence at one of Albania's finest family-owned wineries. A journey through culture and craft.",
    travel_pogradec_title: "Pogradec, Sveti Naum & Ohrid",
    travel_pogradec_desc: "A full-day journey through Lake Ohrid's ancient shores — cross borders to experience Albania and North Macedonia's cultural treasures.",
    
    // City Detail Pages
    city_hero_berat_title: "Tour du Patrimoine Berat & Vignoble Çobo",
    city_hero_berat_subtitle: "Entrez dans une ville musée vivante, puis goûtez l'excellence locale dans l'un des meilleurs vignobles familiaux d'Albanie. Eine Reise durch Kultur und Handwerk.",
    city_detail_title_berat: "PATRIMOINE MONDIAL UNESCO BERAT ET VIGNOBLE ÇOBO (TOUR D'UNE JOURNÉE ENTIÈRE)",
    city_highlights_title: "Höhepunkte",
    city_itinerary_title: "Itinéraire Détaillé",
    booking_info_duration: "Durée:",
    booking_info_departure: "Heure de Départ:",
    booking_info_includes: "Comprend:",
    booking_info_not_included: "Nicht Enthalten:",
    btn_book_tour: "Réserver Ce Tour",
    btn_back_travels: "Retour à Tous les Voyages",
    
    // Learn More Links
    btn_learn_more_link: "→ En Savoir Plus",
    
    // Footer elements that might be missing
    footer_copyright_start: "© 2025",
    footer_rights_reserved: "Tous droits réservés. Design par"
  }
};

// Enhanced Translation Manager Class
class TranslationManager {
  constructor() {
    this.currentLanguage = 'en';
    this.supportedLanguages = ['en', 'sq', 'de', 'it', 'fr'];
    this.initialize();
  }

  // Get stored language from localStorage
  getStoredLanguage() {
    const stored = localStorage.getItem('wanderlust-language');
    return this.supportedLanguages.includes(stored) ? stored : 'en';
  }

  // Store language preference
  setStoredLanguage(lang) {
    if (this.supportedLanguages.includes(lang)) {
      localStorage.setItem('wanderlust-language', lang);
    }
  }

  // Initialize translation system
  initialize() {
    this.currentLanguage = this.getStoredLanguage();
    this.setupLanguageSelectors();
    this.translatePage();
    this.updatePageTitle();
    this.updateHtmlLang();
    console.log('✅ Translation Manager initialized with language:', this.currentLanguage);
  }

  // Setup event listeners for language selectors
  setupLanguageSelectors() {
    // Desktop language options
    const desktopLangOptions = document.querySelectorAll('.language-dropdown a[data-lang]');
    desktopLangOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Mobile language options
    const mobileLangOptions = document.querySelectorAll('.mobile-language-list a[data-lang]');
    mobileLangOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Update current language display
    this.updateLanguageDisplay();
  }

  // Get language display name
  getLanguageName(langCode) {
    const languageNames = {
      'en': 'EN',
      'sq': 'SQ', 
      'de': 'DE',
      'it': 'IT',
      'fr': 'FR'
    };
    return languageNames[langCode] || 'EN';
  }

  // Get full language name
  getFullLanguageName(langCode) {
    const fullNames = {
      'en': 'English',
      'sq': 'Shqip',
      'de': 'Deutsch', 
      'it': 'Italiano',
      'fr': 'Français'
    };
    return fullNames[langCode] || 'English';
  }

  // Change language
  changeLanguage(langCode) {
    if (this.supportedLanguages.includes(langCode)) {
      this.currentLanguage = langCode;
      this.setStoredLanguage(langCode);
      this.translatePage();
      this.updateLanguageDisplay();
      this.updatePageTitle();
      this.updateHtmlLang();
      
      // Add smooth transition effect
      document.body.style.opacity = '0.8';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 200);
      
      console.log('🌍 Language changed to:', this.getFullLanguageName(langCode));
    } else {
      console.error('❌ Language not supported:', langCode);
    }
  }

  // Update HTML lang attribute
  updateHtmlLang() {
    document.documentElement.lang = this.currentLanguage;
  }

  // Update language display in selectors
  updateLanguageDisplay() {
    // Update desktop language button
    const langBtn = document.querySelector('.language-btn span');
    if (langBtn) {
      langBtn.textContent = this.getLanguageName(this.currentLanguage);
    }

    // Update active states
    const allLangOptions = document.querySelectorAll('[data-lang]');
    allLangOptions.forEach(option => {
      const isActive = option.getAttribute('data-lang') === this.currentLanguage;
      option.classList.toggle('active', isActive);
    });
  }

  // Translate all elements on the page
  translatePage() {
    const currentTranslations = this.getCurrentTranslations();
    
    if (!currentTranslations) {
      console.error('❌ No translations found for language:', this.currentLanguage);
      return;
    }
    
    let translatedCount = 0;
    let missingTranslations = [];
    
    // Translate elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (currentTranslations[key]) {
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = currentTranslations[key];
        } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
          element.textContent = currentTranslations[key];
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          // Don't override user input, only handle if empty
          if (!element.value) {
            // Keep placeholder handling separate
          }
        } else {
          element.textContent = currentTranslations[key];
        }
        translatedCount++;
      } else {
        missingTranslations.push(key);
      }
    });

    // Translate placeholders with data-translate-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (currentTranslations[key]) {
        element.placeholder = currentTranslations[key];
        translatedCount++;
      } else {
        missingTranslations.push(key + ' (placeholder)');
      }
    });

    console.log(`✅ Translation completed for ${this.getFullLanguageName(this.currentLanguage)}:`);
    console.log(`   📊 Translated ${translatedCount} elements`);
    console.log(`   🔍 Found ${translatableElements.length + placeholderElements.length} translatable elements`);
    
    if (missingTranslations.length > 0) {
      console.warn(`   ⚠️ Missing ${missingTranslations.length} translations:`, missingTranslations);
    }
  }

  // Update page title if translation exists
  updatePageTitle() {
    const currentTranslations = this.getCurrentTranslations();
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Map pages to title keys
    const pageTitleKeys = {
      'index.html': 'page_title_home',
      'about.html': 'page_title_about',
      'hotels.html': 'page_title_hotels',
      'places.html': 'page_title_places',
      'travels.html': 'page_title_travels',
      'guides.html': 'page_title_guides'
    };

    const titleKey = pageTitleKeys[currentPath];
    if (titleKey && currentTranslations[titleKey]) {
      document.title = currentTranslations[titleKey];
    }
  }

  // Get current language translations
  getCurrentTranslations() {
    return translations[this.currentLanguage] || translations.en;
  }

  // Get all supported languages
  getSupportedLanguages() {
    return this.supportedLanguages.map(lang => ({
      code: lang,
      name: this.getLanguageName(lang),
      fullName: this.getFullLanguageName(lang)
    }));
  }

  // Check if translation exists for key
  hasTranslation(key) {
    const currentTranslations = this.getCurrentTranslations();
    return currentTranslations && currentTranslations[key];
  }

  // Get translation for specific key
  getTranslation(key, fallback = '') {
    const currentTranslations = this.getCurrentTranslations();
    return (currentTranslations && currentTranslations[key]) || fallback;
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Create global translation manager instance
  window.translationManager = new TranslationManager();
  
  // Re-translate when page becomes visible (for cached pages)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && window.translationManager) {
      window.translationManager.translatePage();
    }
  });
  
  // Handle browser back/forward navigation
  window.addEventListener('pageshow', function(event) {
    if (event.persisted && window.translationManager) {
      window.translationManager.translatePage();
    }
  });
  
  console.log('🚀 Translation system fully loaded and initialized');
});

// Export for global use
window.TranslationManager = TranslationManager;
window.translations = translations; 