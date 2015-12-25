function replaceDivText(selector, english, spanish)
{
  var element = document.querySelector(selector);

  //console.log(selector);

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

function findInArray(something, tarray)
{
  for (var i = 0; i < tarray.length; i++) {
    if(tarray[i].eng === something)
      return tarray[i];
  };
}



function genreTranslation()
{
  var categories = [
    {
      'eng': 'Role-playing',
      'spa': 'Juegos de rol'
    },
    {
      'eng': 'Adventure',
      'spa': 'Aventura'
    },
    {
      'eng': 'Strategy',
      'spa': 'Estrategia'
    },
    {
      'eng': 'Action',
      'spa': 'Acción'
    },
    {
      'eng': 'Shooter',
      'spa': 'Juego de disparos'
    },
  ];

  var spans = document.querySelectorAll('span[ng-if="::product.category"]');
  Array.prototype.forEach.call(spans,function(s){
    var text = s.innerHTML,
      trans = findInArray(text, categories).spa;

    s.innerHTML = trans; 

  });
}


function spotTranslation()
{
  var spots = document.querySelectorAll('div.big-spot__text--left');
  /*if(spots.length == 0 ){
    console.log("==========================NECESITO MÁS TIEMPO");
    setTimeout(spotTranslation, 100);
  }*/
  Array.prototype.forEach.call(spots, function(s){
    console.log(s);
    s.innerHTML = s.innerHTML.replace('Now Available', 'YA DISPONIBLE');
  });
}

function handleChanges()
{
  console.log("****************************Hay cambios");
}


function callback(){

  spotTranslation();
  genreTranslation();

  for(i=0;i<translations.length;i++)
  {
    replaceDivText(translations[i].sel, translations[i].eng, translations[i].spa);
  }

  //CSS Fixes
  
  document.querySelector('a[ng-click="openRegistration()"]').style.fontSize = '0.8em';
  document.querySelector('a[ng-click="openLogin()"]').style.fontSize = '0.8em';

  //Observe changes in header
  //TO-DO
  //https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
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
    'sel': 'a._dropdown__toggle[href$="/account"]',
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
    'sel': 'a.top-nav__dd-item[href$="/account"]',
    'eng': 'Library',
    'spa': 'Biblioteca'
  },
  {
    'sel': 'a.top-nav__dd-item[href$="/account/wishlist"]',
    'eng': 'Wishlist',
    'spa': 'Lista de deseos'
  },
  {
    'sel': 'a.top-nav__dd-item[href$="/account/friends"]',
    'eng': 'Friends',
    'spa': 'Amigos'
  },
  {
    'sel': 'a.top-nav__dd-item[href$="/myrecentposts"]',
    'eng': 'Forum Replies',
    'spa': 'Respuestas en el foro'
  },
  {
    'sel': 'a[href$="/account/settings/orders"]',
    'eng': '#REWRITE#', //Orders & Settings',
    'spa': 'Pedidos y Opciones'
  },
  {
    'sel': 'a.top-nav__dd-item[ng-click="logout()"]',
    'eng': 'Logout',
    'spa': 'Desconectar'
  },
  {
    'sel': 'a[ng-click="openRegistration()"]',
    'eng': 'Sign up',
    'spa': 'Registro'
  },
  {
    'sel': 'a[ng-click="openLogin()"]',
    'eng': 'Log in',
    'spa': 'Entrar'
  },
  //TO-DO LOGIN FORM => IFRAME 
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
  //MODULE HEADERS
  {
    'sel': 'div.column--left > div.module-header',
    'eng': "#REWRITE#",
    'spa': 'GOG.COM: TODO LO BUENO EN VIDEOJUEGOS'
  },
  {
    'sel': 'span[ng-click="selectTab(\'new\')"]',
    'eng': 'New',
    'spa': 'Nuevo'
  },
  { 
    'sel': 'span[ng-click="selectTab(\'coming\')"]',
    'eng': 'Upcoming',
    'spa': 'Próximamente'
  },
  { 
    'sel': 'span[ng-click="selectTab(\'on_sale\')"]',
    'eng': 'ON SALE',
    'spa': 'EN REBAJAS'
  },
  { 
    'sel': 'div.about-gog ~ div.module-header',
    'eng': 'HEADLINES',
    'spa': 'TITULARES'
  },
  //GOG PRINCIPLES
  {
    'sel': 'i.icon-drm-free + strong',
    'eng': 'DRM-Free Content',
    'spa': 'Contenido libre de DRM'
  },
  {
    'sel': 'i.icon-drm-free ~ div.about-gog__line',
    'eng': 'You buy it - it’s yours',
    'spa': 'Lo compras - es tuyo'
  },
  {
    'sel': 'i.icon-fair-price + strong',
    'eng': 'Fair Price Package',
    'spa': 'Precios justos'
  },
  {
    'sel': 'i.icon-fair-price ~ div.about-gog__line',
    'eng': 'Because $1 is not €1',
    'spa': 'Porque 1$ no es 1€'
  },
  {
    'sel': 'i.icon-shield + strong',
    'eng': 'Money-back guarantee',
    'spa': 'Devolución de dinero garantizada'
  },
  {
    'sel': 'i.icon-shield ~ div.about-gog__line',
    'eng': 'It works, we guarantee it',
    'spa': 'Funciona, te lo garantizamos'
  },
  {
    'sel': '.about-gog__desc.about-gog__desc--content',
    'eng': '#REWRITE#',
    'spa': '<p>Libre de contenido significa ausencia de protecciones de copia, comprobaciones online ' +
            'u otras molestias. Todo se centra en ti y tus juegos y películas. Deberías sentir que ' +
            'los productos que compras son tuyos, como si se tratase de un libro o un DVD. </p>' +
            '<p><strong>En GOG.com, no importa si estás conectado o desconectado, siempre podrás ' +
            'utilizar tus compras.</strong></p>'
  },
  {
    'sel': '.about-gog__desc.about-gog__desc--fpp',
    'eng': '#REWRITE#',
    'spa': '<p>Todo el mundo debería ser tratado justamente y no pagar más por las compras simplemente ' +
           'por residir en otra parte distinta del mundo.</p><p><strong>Si un producto en GOG.com cuesta ' +
           'más en tu país que el precio indicado en EEUU, costearemos la diferencia desde nuestros propios ' +
           'bolsillos y te la ofreceremos como crédito que podrás usar en la tienda en futuras compras.</strong></p>'
  },
  {
    'sel': '.about-gog__desc.about-gog__desc--guarantee',
    'eng': '#REWRITE#',
    'spa': '<p>Cuando compras algo y no funciona, deberías tener la seguridad de que lo puedes devolver.</p>'+
            '<p><strong>No entendemos por qué los juegos o las películas deberían ser diferentes, así que si ' +
            'una de tus compras no funciona y no te podemos ayudar a solucionarlo, te devolvemos el dinero.</strong></p>' +
            '<p>Nuestra garantía de devolución te protege durante 30 días</p>'
  },
  //FOOTER
  {
    'sel': 'a.main-ul__link[href="/redeem"]',
    'eng': 'Redeem code',
    'spa': 'Canjear un código'
  },
  {
    'sel': 'a.main-ul__link[href="/reclaim"]',
    'eng': 'Reclaim your game',
    'spa': 'Reclama tu juego'
  },
  {
    'sel': 'a.main-ul__link[href="/support/contact"]',
    'eng': 'Contact us',
    'spa': 'Contáctanos'
  },
  {
    'sel': 'a.main-ul__link[href="/work"]',
    'eng': 'career opportunities',
    'spa': 'Ofertas de trabajo'
  },
  {
    'sel': 'a.main-ul__link[href="/indie"]',
    'eng': 'Submit your game',
    'spa': 'Envía tu juego'
  },
];


ready(callback);
