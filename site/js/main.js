const translations={
    "it": {
      "title": "Benvenuti nella Casetta Melodie",
      "desc1": "Ideale per trascorrere le tue vacanze nel verde e in tranquillità 🌳 🏠 Totalmente indipendente, completamente ristrutturata e arredata con cura, piccola casetta . Vendita di miele, frutta e verdura tutto biologico. Inoltre per chi lo desidera, sedute di massaggi (drenanti, rilassanti, coppette, campane tibetane) Reïki.. 🌿 A disposizione degli ospiti uno spazio esterno con terrazza, barbecue, passeggiata nel bosco, a mezz'ora da Cuneo e a 20 minuti da Saluzzo per chi vuole visitare queste splendide cittadine e passeggiare al mercato. 🏡 A 30 minuti dal Lago di Pontechianale, per chi ama fare escursioni, piccoli sentieri per fare 4 o 7 chiese . Il casolare \"Mélodie\" si trova a Venasca provincia di Cuneo, in Valle Varaita, in un caratteristico paesino di montagna immerso nei boschi. 🌲Il luogo ideale per ricaricare le batterie a contatto con la natura e per fare escursioni in montagna dove sentirai solo il rumore dei ruscelli e il canto degli uccellini 🏔️ A 10 minuti di macchina dal paese comodo a tutti i servizi. ✨ La scelta migliore per una vacanza all\'insegna del relax e della natura 🥰 Se sei interessato, contattami via mail o Whatsapp.",
      "subtitle1": "Scopri la Casetta Melodia: Il Tuo Rifugio nella Natura",
      "content2": ""

    },
    "fr": {
      "title": "Bienvenue à la Casetta Mélodie",
      "desc1": "Idéal pour passer vos vacances au vert et au calme🌳 🏠 Totalement indépendante, entièrement rénovée et meublée avec soin, petite maisonnette . Vente de miel , fruits et légumes le tout bio . En supplément pour qui le souhaite, séances de massages ( drainants, relaxants, ventouses, cloches Tibétaines) Reïki .. 🌿 A disposition des hôtes un espace extérieur avec terrasse , barbecue, promenade dans les bois, à une demi-heure de Cuneo et à 20 minutes de Saluzzo pour ceux qui veulent visiter ces splendides villes et aller flâner au marché. 🏡 à 30 mn du lac de Pontechianale, pour qui aime faire des randonnées,petits sentiers à faire des 4 ou 7 chapelles. La maisonnette \"Mélodie\" est située à Venasca province de Cuneo,dans la Vallée Varaita, dans un village de montagne caractéristique immergé dans les bois. 🌲L'endroit idéal pour se ressourcer au contact de la nature et pour partir en randonnée en montagne où vous entendrez juste le bruit des ruisseaux et chant d’oiseaux 🏔️ À 10 minutes en voiture du village pratique pour tous les services. ✨ Le meilleur choix pour des vacances détente et nature 🥰 Si vous êtes intéressé, me contacter par mail ou sur Whatsapp.",
      "subtitle1": "Découvrez la Maisonnette Mélodie : Votre Refuge Nature",
      "content2": ""

    },
    "en": {
      "title": "Welcome to Casetta Melodie",
      "desc1": "Ideal for spending your holidays surrounded by greenery and tranquility 🌳 🏠 Completely independent, fully renovated and carefully furnished, a small cottage. Sale of organic honey, fruits, and vegetables. Additionally, for those who wish, there are massage sessions (draining, relaxing, cupping, Tibetan bells), Reiki.. 🌿 Guests have access to an outdoor space with a terrace, barbecue, and a walk in the woods, half an hour from Cuneo and 20 minutes from Saluzzo for those who want to visit these splendid towns and stroll through the market. 🏡 30 minutes from Lake Pontechianale, for those who enjoy hiking, small trails leading to 4 or 7 chapels. The farmhouse \"Mélodie\" is located in Venasca, province of Cuneo, in the Varaita Valley, in a characteristic mountain village nestled in the woods. 🌲The ideal place to recharge in nature and go hiking in the mountains, where you'll hear only the sound of streams and the song of birds 🏔️ A 10-minute drive from the village, convenient for all services. ✨ The best choice for a relaxing and nature-filled vacation 🥰 If you\'re interested, please contact me via email or Whatsapp.",
      "subtitle1":  "Discover the Cottage Melody: Your Nature Retreat",
      "content2": ""
  }
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language');
    const languageFlag = document.getElementById('languageflag');
    const flagImages = document.querySelectorAll('.flag');

    // Set default language to French
    languageFlag.setAttribute('src', 'img/flag-fr.png');
    languageFlag.setAttribute('alt', 'French Flag');

    flagImages.forEach(flag => {
        flag.addEventListener('click', function () {
            const flagSrc = flag.getAttribute('src');
            const flagAlt = flag.getAttribute('alt');
            
            languageFlag.setAttribute('src', flagSrc);
            languageFlag.setAttribute('alt', flagAlt);
            languageSelector.click(); // Close the dropdown after selecting a language
        });
    });
});

let selectedLanguage = 'en'; // Default language

function setSelectedLanguage(language) {
    selectedLanguage = language;
}


function switchLanguage(newLanguage) {
    setSelectedLanguage(newLanguage); // Implement a function to set the selected language
    renderTranslatedContent(); // Implement a function to update the content on the page
}

function pageselect(clickedelement){
    document.getElementById("page1").style.display="none"
    document.getElementById("page2").style.display="none"
    document.getElementById("page3").style.display="none"
    console.log(clickedelement)

    document.getElementById(clickedelement).style.display="block"
}


function translate(key) {
    console.log(key)
    const language = getSelectedLanguage(); // Implement a function to get the selected language
    const translation = translations[language][key];
    return translation || key; // Return the translation or the key itself if not found
}
  
  // Update your existing renderTranslatedContent function
  function renderTranslatedContent() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      element.textContent = translate(translationKey);
    });
  }
  
  // Call renderTranslatedContent on page load
  document.addEventListener('DOMContentLoaded', renderTranslatedContent);


  


  function getSelectedLanguage() {
    const languageFlag = document.getElementById('languageflag');
    const flagSrc = languageFlag.getAttribute('src');
  
    if (flagSrc.includes('flag-en')) {
        console.log("Selected language: English");
        return 'en';
    } else if (flagSrc.includes('flag-fr')) {
        console.log("Selected language: French");
        return 'fr';
    } else if (flagSrc.includes('flag-it')) {
        console.log("Selected language: Italian");
        return 'it';
    }
    // Add more language checks as needed
    
    // Default to a fallback language if no match is found
    return 'en'; // You can change this to your desired default language
}

  

const thisYearElement = document.getElementById("thisyear");
const currentYear = new Date().getFullYear();
thisYearElement.textContent = currentYear;

// 