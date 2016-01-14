var instance = null;
function Helper(){
  if(!instance)
  {
    instance = this;
  }

  this.defaultDependencies = ['header', 'footer'];
  console.log("BEFORE Dependencies");
  this.getDependencies();
  console.log("AFTER Dependencies");
  return instance;
}; 

Helper.prototype.getDependencies = function(){
  console.log("GET Dependencies called");
  var self = this;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(e)
  {
    if(this.readyState === 4)
    {
      if(this.status === 200){
        var deps = JSON.parse(this.responseText);
        console.log('Dependencies: ');
        console.log(deps);
        self.deps = deps;
      }
    }
  };
  xhr.open('GET', chrome.extension.getURL('/translations/block_dependencies.json'), false);
  xhr.send();
}

Helper.prototype.resolveDependencies = function(block){
  var self = this;

  Array.prototype.forEach.call(this.deps, function(d){
    if(d.block === block){
      for(var i=0;i<d.dependencies;i++)
      {
        self.requestTranslation(d.dependencies[i]);
      }
    }
  });    
}

Helper.prototype.requestTranslation = function (file){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = this.applyTranslation;
  xhr.open('GET', chrome.extension.getURL('/translations/' + file + '.json'), true);
  xhr.send();
}

Helper.prototype.applyTranslation = function (e){
  if(this.readyState === 4)
  {
    if(this.status === 200){
      var translations = JSON.parse(this.responseText);
      //console.log(translations);
      Array.prototype.forEach.call(translations, function(t){
        replaceText(t.sel, t.eng, t.spa);
      });
    }
  }
};

function replaceText(translation)
{
  var element = document.querySelector(translation.selector);

  if(element == null) 
    return;

  if(english === '#REWRITE#'){
    element.innerHTML= translation.spanish;
  }
  else{
    element.innerHTML= element.innerHTML.replace(translation.english, 
      translation.spanish);
  }
}

console.log("DEFAULT JS");