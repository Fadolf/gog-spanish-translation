(function(){
  var helper = new Helper();

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

  function startBlockTranslations()
  {
    var pathname = window.location.pathname,
    blocks = pathname.split('/');

    for(var i=0;i < blocks.length;i++)
    {
      var deps = helper.findOutDependencies(blocks[i]);
      for(var j=0; j < deps.length; j++)
      {
        helper.requestTranslation(dep[j]);
      }
    }
  }

  

  ready(documentIsReady);

})();