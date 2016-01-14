var instance = null;

var Helper = function(){
  if(!instance)
  {
    instance = this;
  }

  this.defaultDependencies = ['header', 'footer'];
  return instance;
}; 

Helper.prototype.requestTranslation = function (file, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = this.applyTranslation;
  xhr.open('GET', chrome.extension.getURL('/translations/' + file + '.json'), true);
  xhr.send();
}

Helper.prototype.applyTranslation = function applyTranslation(e){
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




