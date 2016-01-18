(function(){
  var helper = new Helper();
  console.log("Helper "+ helper);
  console.log(helper);

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function documentIsReady()
  {
    console.log('Starting translation');
    startBlockTranslations();
  }

  function isResource(route)
  {
    var blocks = route.split('/'),
      first = blocks[1];

    switch(first){
      case 'game':
      case 'movie':
      case 'support':
      case 'news':
        return true;
      default:
        return false;
    }
  }

  function startBlockTranslations()
  {
    var pathname = window.location.pathname,
    blocks = pathname.split('/');
    //Find out general dependencies 
    if(blocks[1] === '')
      helper.resolveDependencies('/');
    else
      helper.resolveDependencies(blocks[1]);
    
    var resource = isResource(pathname);
    if(resource)
    {
      console.log("REQUESTING RESOURCE " + pathname);
      helper.requestTranslation(pathname.replace('/',''));
    }    
  } 

  ready(documentIsReady);

})();