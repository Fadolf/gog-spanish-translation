function replaceDivText(selector, english, spanish)
{
  var element = document.querySelector(selector);

  console.log(selector);

  if(element == null) 
    return;


  if(english === '#REWRITE#'){
    element.innerHTML= spanish;
  }
  else
    element.innerHTML= element.innerHTML.replace(english, spanish);

}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function spotTranslation()
{
  var spots = document.querySelectorAll('div.big-spot__text--left');
  console.log('SPOTS LENGTH ' + spots.length);
  if(spots.length == 0){
    console.log("==========================NECESITO MÁS TIEMPO");
    setTimeout(spotTranslation, 100);
  }

  Array.prototype.forEach.call(spots, function(s){
    console.log(s);
    s.innerHTML = s.innerHTML.replace('Now Available', 'YA DISPONIBLE');
  });
}


function translate(){

  spotTranslation();

  for(i=0;i<translations.length;i++)
  {
    replaceDivText(translations[i].sel, translations[i].eng, translations[i].spa);
  }

  
}

var translations = [
  //TOP MENU
  {
    'sel': 'div[gog-dropdown-toggle]',
    'eng': 'Search',
    'spa': 'Buscar'
  },
  {
    'sel': 'a._dropdown__toggle[href="/games"]',
    'eng': 'Games',
    'spa': 'Juegos'
  },
  {
    'sel': 'a.top-nav__item[href="/movies"]',
    'eng': 'Movies',
    'spa': 'Películas'
  },
  {
    'sel': 'a.top-nav__item[href="/forum"]',
    'eng': 'Community',
    'spa': 'Comunidad'
  },
  {
    'sel': 'a.top-nav__item[href="/support"]',
    'eng': 'Support',
    'spa': 'Soporte'
  },
  {
    'sel': 'a._dropdown__toggle[href="https://www.gog.com/account"]',
    'eng': 'Account',
    'spa': 'Perfil'
  },
  //HTTPS ONCE LOGGED-IN
  {
    'sel': 'a._dropdown__toggle[href="/account"]',
    'eng': 'Account',
    'spa': 'Perfil'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/action"]',
    'eng': 'Action',
    'spa': 'Acción'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/adventure"]',
    'eng': 'Adventure',
    'spa': 'Aventura'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/sports"]',
    'eng': 'Sports',
    'spa': 'Deportes'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/role-playing"]',
    'eng': 'Role-playing',
    'spa': 'Juegos de Rol'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/shooter"]',
    'eng': 'Shooter',
    'spa': 'Juegos de disparos'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/simulation"]',
    'eng': 'Simulation',
    'spa': 'Simulación'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/strategy"]',
    'eng': 'Strategy',
    'spa': 'Estrategia'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/mac"]',
    'eng': 'MAC GAMES',
    'spa': 'Juegos para MAC'
  },
  {
    'sel': 'a.top-nav__dd-item[href="/games/linux"]',
    'eng': 'LINUX GAMES',
    'spa': 'Juegos para LINUX'
  },
  {
    'sel': 'a[class="top-nav__dd-item _dropdown__item"][href="/account"]',
    'eng': 'Library',
    'spa': 'Biblioteca'
  },
  //BANNER
  {
    'sel': 'div.galaxy-banner__section--text',
    'eng': '#REWRITE#',
    'spa': 'Prueba <strong>GOG GALAXY</strong>, nuestro cliente totalmente opcional, en el que puedes instalar, jugar y actualizar tus juegos.'+
           ' También ofrece capacidades multijugador, logros, chat, registro del tiempo de juego y más...'
  },
  //SPOT TITLES
  {
    'sel': 'div[class="big-spots__header"]',
    'eng': "What's new",
    'spa': 'Novedades'
  },
  {
    'sel': 'div.big-spots__header--promo',
    'eng': 'LATEST DEALS',
    'spa': 'ÚLTIMAS OFERTAS'
  },
  //GOG PRINCIPLES
  {
    'sel': 'div[gog-accordion-section="about-gog-drm-free"]',
    'eng': '#REWRITE#',
    'spa': '<i class="about-gog__icon about-gog__icon--lock ic icon-drm-free"></i>' +
            '<strong class="about-gog__rule">Contenido libre de DRM</strong>' +
            '<div class="about-gog__line">Lo compras - es tuyo</div>'
  }
];



ready(translate);