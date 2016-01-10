function replaceText(selector, english, spanish)
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

function languageControl()
{
  var languages = [
    {
      'eng': 'English',
      'spa': 'Inglés'
    },
    {
      'eng': 'Deutsch',
      'spa': 'Alemán'
    },
    {
      'eng': 'Français',
      'spa': 'Francés'
    },
    {
      'eng': 'Pусский',
      'spa': 'Ruso'
    }
  ];

  var divs = document.querySelectorAll('div[ng-bind="language.name"]');

  Array.prototype.forEach.call(divs, function(d) {
    var text = d.innerHTML,
      trans = findInArray(text, languages);

    if(!trans || trans === undefined)
      return;
    else
      trans = trans.spa;

    d.innerHTML = trans; 
  });
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
      'spa': 'Juegos de disparos'
    },
    {
      'eng': 'Simulation',
      'spa': 'Simulación'
    }
  ];

  var spans = document.querySelectorAll('span[ng-if="::product.category"]');
  Array.prototype.forEach.call(spans,function(s){

    console.log(s.innerHTML);
    var text = s.innerHTML,
      trans = findInArray(text, categories);

    if(!trans || trans === undefined)
      return;
    else
      trans = trans.spa;

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

function requestTranslations(file, callback)
{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = callback;
  xhr.open('GET', chrome.extension.getURL('/translations/' + file), true);
  xhr.send();
}

function applyTranslation(e)
{
  if(this.readyState === 4)
  {
    if(this.status === 200){
      var translations = JSON.parse(this.responseText);
      console.log(translations);
      Array.prototype.forEach.call(translations, function(t){
        replaceText(t.sel, t.eng, t.spa);
      });


    }
  }


}

function callback(){

  spotTranslation();
  genreTranslation();
  languageControl();

 
  requestTranslations('footer.json', applyTranslation);

  //CSS Fixes
  
  document.querySelector('a[ng-click="openRegistration()"]').style.fontSize = '0.8em';
  document.querySelector('a[ng-click="openLogin()"]').style.fontSize = '0.8em';

  //Observe changes in header
  //TO-DO
  //https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
}


ready(callback);

console.log(window.location);
