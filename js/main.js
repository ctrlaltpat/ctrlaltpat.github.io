const has_class = (elem, class_name) => new RegExp(' ' + class_name + ' ').test(' ' + elem.className + ' ')

const add_class = (elem, class_name) => !has_class(elem, class_name) && (elem.className += ' ' + class_name)

const remove_class = (elem, class_name) => {
  let new_class = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' '
  if (has_class(elem, class_name)) {
    while (new_class.indexOf(' ' + class_name + ' ') >= 0 ) {
      new_class = new_class.replace(' ' + class_name + ' ', ' ')
    }
    elem.className = new_class.replace(/^\s+|\s+$/g, '')
  }
}
const toggle_class = (elem, class_name) => {
  let new_class = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' '
  if (has_class(elem, class_name)) {
    while (new_class.indexOf(" " + class_name + " ") >= 0 ) {
      new_class = new_class.replace( " " + class_name + " " , " " )
    }
    elem.className = new_class.replace(/^\s+|\s+$/g, '')
  } else {
    elem.className += ' ' + class_name
  }
}



const init = () => {
  let main = document.getElementById("main")
  let about = document.getElementById("about")
  let skills = document.getElementById("skills")
  let projects = document.getElementById("projects")
  let contact = document.getElementById("contact")

  
}