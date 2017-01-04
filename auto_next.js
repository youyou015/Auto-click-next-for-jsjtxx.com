// IE don't have built in getElementsByClassName function
document.getElementsByClassName = function(className, element){
  var children = (element || document).getElementsByTagName('*');
  var elements = new Array();
  for (var i=0; i<children.length; i++){
    var child = children[i];
    var classNames = child.className.split(' ');
    for (var j=0; j<classNames.length; j++){
      if (classNames[j] == className){
        elements.push(child);
        break;
      }
    }
  }
  return elements;
};


// execute every 8000ms
var ret_id = setInterval(
  function() {
    var els = document.getElementsByClassName('dfss_down');
    if (els.length == 1){
      javascript:showNext();
    };
  },
  8000
);
