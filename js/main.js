function has_class(elem, class_name) {
  return new RegExp(' ' + class_name + ' ').test(' ' + elem.className + ' ');
}
function add_class(elem, class_name) {
  if (!has_class(elem, class_name)) {
      elem.className += ' ' + class_name;
  }
}
function remove_class(elem, class_name) {
  var new_class = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (has_class(elem, class_name)) {
      while (new_class.indexOf(' ' + class_name + ' ') >= 0 ) {
          new_class = new_class.replace(' ' + class_name + ' ', ' ');
      }
      elem.className = new_class.replace(/^\s+|\s+$/g, '');
  }
}
function toggle_class(elem, class_name) {
var new_class = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
  if (has_class(elem, class_name)) {
      while (new_class.indexOf(" " + class_name + " ") >= 0 ) {
          new_class = new_class.replace( " " + class_name + " " , " " );
      }
      elem.className = new_class.replace(/^\s+|\s+$/g, '');
  } else {
      elem.className += ' ' + class_name;
  }
}



const init = () => {
  let main = document.getElementById("main")
  let about = document.getElementById("about")
  let skills = document.getElementById("skills")
  let projects = document.getElementById("projects")
  let contact = document.getElementById("contact")

  
}