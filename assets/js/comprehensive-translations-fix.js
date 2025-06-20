/**
 * Comprehensive Translation Fix
 * This script adds all missing translations to German, French, and Italian
 * Run this to patch the translation system with complete language support
 */

// Missing translations for all languages
const missingTranslations = {
  de: {
    // Additional Features 
    feature_alerts_title: "Rechtzeitige Benachrichtigungen",
    feature_alerts_desc: "Ob Reservierung oder Wanderung, bleiben Sie informiert und pünktlich, kein Stress, keine Überraschungen.",
    feature_tools_title: "All-in-One Reisetools",
    feature_tools_desc: "Von Buchungen bis Checklisten, verwalten Sie jeden Teil Ihrer Reise in einem vereinfachten Bereich.",
    
    // Testimonials Section
    testimonials_title: "Was Unsere Reisenden Sagen",
    testimonials_subtitle: "Abenteuer, die authentische Erinnerungen schaffen",
    testimonial_rating: "5/5",
    
    // Testimonials Content 
    testimonial_1_text: "Die Balkan-Tour war unglaublich schön. Sadi, unser Reiseführer, machte die Reise unvergesslich mit seiner entspannten und offenen Art. Immer lächelnd, immer bereit mit einer großartigen Geschichte über seine Heimat.",
    testimonial_1_author: "Viktoria Esau", 
    testimonial_1_date: "vor 7 Monaten",
    
    testimonial_2_text: "Die Balkan-Rundreise war wirklich einzigartig. Wir waren eine kleine internationale Gruppe und hatten Sadjan, den weltbesten Reiseführer. 24/7, immer präsent mit Charme, Hingabe und großartiger Einstellung.",
    testimonial_2_author: "Mareike Altemayer",
    testimonial_2_date: "vor 6 Monaten",
    
    testimonial_3_text: "Super Reiseführer! Kompetent, unterhaltsam, sehr angenehm im Umgang mit den Reisegästen.",
    testimonial_3_author: "Wilfried Stenzel",
    testimonial_3_date: "vor 6 Monaten",
    
    testimonial_4_text: "Die Albanien-Rundreise war wunderbar. Unser Reiseführer begleitete uns nicht nur — er machte diese Reise zu etwas Besonderem, einem wunderbaren Abenteuer.",
    testimonial_4_author: "Siegmund Pazulla",
    testimonial_4_date: "vor 7 Monaten",
    
    testimonial_5_text: "Sadjan war ein großartiger Reiseführer und Begleiter während unserer Balkan-Rundreise. Die Reise führte uns durch 6 Länder: Bulgarien, Griechenland, Albanien, Nordmazedonien, Montenegro und Kosovo.",
    testimonial_5_author: "Jochen Helbig",
    testimonial_5_date: "vor 6 Monaten",
    
    testimonial_6_text: "Sadi war unser Reiseführer für die Balkan-Rundreise. Zuverlässig, kundig in Geographie und Geschichte, immer freundlich und zugänglich.",
    testimonial_6_author: "Jürgen Berg (Snoopy)",
    testimonial_6_date: "vor 7 Monaten",
    
    testimonial_7_text: "Fantastische Reiseführung von Sadi! Wir hatten das Glück, Sadi als unseren Reiseführer zu haben und können ihn sehr empfehlen!",
    testimonial_7_author: "Julzzz",
    testimonial_7_date: "vor 7 Monaten",
    
    // Location Labels
    location_albania: "Albanien",
    location_northern_albania: "Nordalbanien",
    location_central_albania: "Zentralalbanien", 
    location_southern_albania: "Südalbanien",
    
    // Gallery Section
    gallery_subtitle: "Fotogalerie",
    gallery_title: "Fotos von Reisenden",
    gallery_description: "Entdecken Sie Albanien durch die Augen unserer Reisenden. Diese authentischen Momente erfassen die Schönheit, Kultur und unvergesslichen Erlebnisse, die auf Sie warten.",
    
    // Contact Section
    contact_subtitle: "Kontakt aufnehmen",
    contact_title: "Bereit für unvergessliche Reisen. Denken Sie an uns!",
    contact_description: "Lassen Sie uns Ihnen helfen, Ihr perfektes albanisches Abenteuer zu planen. Füllen Sie das Formular unten aus und unsere Reiseexperten werden Sie innerhalb von 24 Stunden kontaktieren.",
    
    // Form Labels
    form_label_name: "Vollständiger Name",
    form_label_email: "E-Mail-Adresse",
    form_placeholder_name: "Geben Sie Ihren vollständigen Namen ein",
    form_placeholder_email: "Geben Sie Ihre E-Mail ein"
  },
  
  fr: {
    // Additional Features 
    feature_alerts_title: "Alertes Opportunes",
    feature_alerts_desc: "Qu'il s'agisse d'une réservation ou d'une randonnée, restez informé et à l'heure, sans stress, sans surprises.",
    feature_tools_title: "Outils de Voyage Tout-en-Un",
    feature_tools_desc: "Des réservations aux listes de contrôle, gérez chaque partie de votre voyage dans un espace rationalisé.",
    
    // Testimonials Section
    testimonials_title: "Ce Que Disent Nos Voyageurs",
    testimonials_subtitle: "Aventures qui créent des souvenirs authentiques",
    testimonial_rating: "5/5",
    
    // Testimonials Content 
    testimonial_1_text: "Le tour des Balkans était incroyablement beau. Sadi, notre guide touristique, a rendu le voyage inoubliable avec son attitude détendue et ouverte. Toujours souriant, toujours prêt avec une belle histoire sur sa patrie.",
    testimonial_1_author: "Viktoria Esau", 
    testimonial_1_date: "il y a 7 mois",
    
    testimonial_2_text: "Le voyage dans les Balkans était vraiment unique. Nous étions un petit groupe international et avions Sadjan, le meilleur guide touristique du monde. 24/7, toujours présent avec charme, dévouement et une excellente attitude.",
    testimonial_2_author: "Mareike Altemayer",
    testimonial_2_date: "il y a 6 mois",
    
    testimonial_3_text: "Super guide touristique ! Compétent, divertissant, très agréable dans ses relations avec les voyageurs.",
    testimonial_3_author: "Wilfried Stenzel",
    testimonial_3_date: "il y a 6 mois",
    
    testimonial_4_text: "Le voyage en Albanie était merveilleux. Notre guide ne nous a pas seulement accompagnés — il a fait de ce voyage quelque chose de spécial, une aventure merveilleuse.",
    testimonial_4_author: "Siegmund Pazulla",
    testimonial_4_date: "il y a 7 mois",
    
    testimonial_5_text: "Sadjan était un excellent guide et compagnon lors de notre voyage dans les Balkans. Le voyage nous a menés à travers 6 pays : Bulgarie, Grèce, Albanie, Macédoine du Nord, Monténégro et Kosovo.",
    testimonial_5_author: "Jochen Helbig",
    testimonial_5_date: "il y a 6 mois",
    
    testimonial_6_text: "Sadi était notre guide pour le voyage dans les Balkans. Fiable, compétent en géographie et en histoire, toujours amical et accessible.",
    testimonial_6_author: "Jürgen Berg (Snoopy)",
    testimonial_6_date: "il y a 7 mois",
    
    testimonial_7_text: "Guidage fantastique par Sadi ! Nous avons eu la chance d'avoir Sadi comme guide et pouvons le recommander vivement !",
    testimonial_7_author: "Julzzz",
    testimonial_7_date: "il y a 7 mois",
    
    // Location Labels
    location_albania: "Albanie",
    location_northern_albania: "Albanie du Nord",
    location_central_albania: "Albanie Centrale", 
    location_southern_albania: "Albanie du Sud",
    
    // Gallery Section
    gallery_subtitle: "Galerie Photo",
    gallery_title: "Photos des Voyageurs",
    gallery_description: "Découvrez l'Albanie à travers les yeux de nos voyageurs. Ces moments authentiques capturent la beauté, la culture et les expériences inoubliables qui vous attendent.",
    
    // Contact Section
    contact_subtitle: "Prendre Contact",
    contact_title: "Prêt pour un voyage inoubliable. Souvenez-vous de nous !",
    contact_description: "Laissez-nous vous aider à planifier votre aventure albanaise parfaite. Remplissez le formulaire ci-dessous et nos experts en voyage vous contacteront dans les 24 heures.",
    
    // Form Labels
    form_label_name: "Nom Complet",
    form_label_email: "Adresse E-mail",
    form_placeholder_name: "Entrez votre nom complet",
    form_placeholder_email: "Entrez votre e-mail"
  },
  
  it: {
    // Additional Features 
    feature_alerts_title: "Avvisi Tempestivi",
    feature_alerts_desc: "Che si tratti di una prenotazione o di un'escursione, rimani informato e puntuale, niente stress, niente sorprese.",
    feature_tools_title: "Strumenti di Viaggio Tutto-in-Uno",
    feature_tools_desc: "Dalle prenotazioni alle liste di controllo, gestisci ogni parte del tuo viaggio in uno spazio semplificato.",
    
    // Testimonials Section
    testimonials_title: "Cosa Dicono i Nostri Viaggiatori",
    testimonials_subtitle: "Avventure che creano ricordi autentici",
    testimonial_rating: "5/5",
    
    // Testimonials Content 
    testimonial_1_text: "Il tour dei Balcani è stato incredibilmente bello. Sadi, la nostra guida turistica, ha reso il viaggio indimenticabile con il suo atteggiamento rilassato e aperto. Sempre sorridente, sempre pronto con una bella storia sulla sua patria.",
    testimonial_1_author: "Viktoria Esau", 
    testimonial_1_date: "7 mesi fa",
    
    testimonial_2_text: "Il viaggio nei Balcani è stato davvero unico. Eravamo un piccolo gruppo internazionale e avevamo Sadjan, la migliore guida turistica del mondo. 24/7, sempre presente con fascino, dedizione e ottima attitudine.",
    testimonial_2_author: "Mareike Altemayer",
    testimonial_2_date: "6 mesi fa",
    
    testimonial_3_text: "Super guida turistica! Competente, divertente, molto piacevole nel trattare con gli ospiti del viaggio.",
    testimonial_3_author: "Wilfried Stenzel",
    testimonial_3_date: "6 mesi fa",
    
    testimonial_4_text: "Il viaggio in Albania è stato meraviglioso. La nostra guida non ci ha solo accompagnato — ha reso questo viaggio qualcosa di speciale, un'avventura meravigliosa.",
    testimonial_4_author: "Siegmund Pazulla",
    testimonial_4_date: "7 mesi fa",
    
    testimonial_5_text: "Sadjan è stato un'eccellente guida e compagno durante il nostro viaggio nei Balcani. Il viaggio ci ha portato attraverso 6 paesi: Bulgaria, Grecia, Albania, Macedonia del Nord, Montenegro e Kosovo.",
    testimonial_5_author: "Jochen Helbig",
    testimonial_5_date: "6 mesi fa",
    
    testimonial_6_text: "Sadi è stata la nostra guida per il viaggio nei Balcani. Affidabile, esperto in geografia e storia, sempre amichevole e accessibile.",
    testimonial_6_author: "Jürgen Berg (Snoopy)",
    testimonial_6_date: "7 mesi fa",
    
    testimonial_7_text: "Guida fantastica da parte di Sadi! Siamo stati fortunati ad avere Sadi come nostra guida e possiamo raccomandarlo caldamente!",
    testimonial_7_author: "Julzzz",
    testimonial_7_date: "7 mesi fa",
    
    // Location Labels
    location_albania: "Albania",
    location_northern_albania: "Albania del Nord",
    location_central_albania: "Albania Centrale", 
    location_southern_albania: "Albania del Sud",
    
    // Gallery Section
    gallery_subtitle: "Galleria Fotografica",
    gallery_title: "Foto dai Viaggiatori",
    gallery_description: "Scopri l'Albania attraverso gli occhi dei nostri viaggiatori. Questi momenti autentici catturano la bellezza, la cultura e le esperienze indimenticabili che ti aspettano.",
    
    // Contact Section
    contact_subtitle: "Mettiti in Contatto",
    contact_title: "Pronto per viaggi indimenticabili. Ricordati di noi!",
    contact_description: "Lascia che ti aiutiamo a pianificare la tua perfetta avventura albanese. Compila il modulo qui sotto e i nostri esperti di viaggio ti contatteranno entro 24 ore.",
    
    // Form Labels
    form_label_name: "Nome Completo",
    form_label_email: "Indirizzo Email",
    form_placeholder_name: "Inserisci il tuo nome completo",
    form_placeholder_email: "Inserisci la tua email"
  }
};

// Function to apply missing translations
function applyMissingTranslations() {
  if (window.translations) {
    Object.keys(missingTranslations).forEach(lang => {
      if (window.translations[lang]) {
        Object.assign(window.translations[lang], missingTranslations[lang]);
        console.log(`✅ Applied ${Object.keys(missingTranslations[lang]).length} missing translations for ${lang.toUpperCase()}`);
      }
    });
    
    // Re-translate current page
    if (window.translationManager) {
      window.translationManager.translatePage();
      console.log('🌐 Page re-translated with complete translations');
    }
  }
}

// Auto-apply on load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(applyMissingTranslations, 100);
});

// Manual trigger
window.applyMissingTranslations = applyMissingTranslations; 