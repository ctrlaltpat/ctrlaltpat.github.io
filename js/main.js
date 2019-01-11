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

const skills = () => {
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame    || 
      window.oRequestAnimationFrame      || 
      window.msRequestAnimationFrame     ||  
      function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  
  var canvas = document.getElementsByTagName("canvas")[0];
  var ctx = canvas.getContext("2d");
  var w = document.width || document.body.clientWidth ||  document.documentElement.clientWidth || window.innerWidth 
  var h = document.height || document.body.clientHeight ||  document.documentElement.clientHeight || window.innerHeight
  canvas.width = w;
  canvas.height = h;
  
  let mols = [];
  
  function init(){
    for(let i=0;i<8;i++){
      var mol = new generate_mol("C8H10N4O2");
      mols.push(mol);
      var mol = new generate_mol("C6H6O");
      mols.push(mol);
      var mol = new generate_mol("C6H6");
      mols.push(mol);
      var mol = new generate_mol("test");
      mols.push(mol);
    }
  }
  
  function draw(){
    canvas.width = canvas.width;
    for(var i=0;i<mols.length;i++){
      var m = mols[i];
      m.x += m.vx;
      if(m.x >= w-100 || m.x <= 0){
        m.vx = -m.vx;
      }
      m.y += m.vy;
      if(m.y >= h-100 || m.y <= 0){
        m.vy = -m.vy;
      }
      
      m.r += 0.05;
      m.draw();
    }
  }
  
  function generate_mol(mol){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.vx = Math.random()*-2;
    this.vy = Math.random()*2;
    this.vr = 0.1;
    this.r = Math.random()*Math.PI;
    this.draw = function(){
      if(mol == "C6H6O"){
        ctx.save()
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("AAAAAAAAAAAA", this.x + 20, this.y + 20);
        ctx.restore();
      }
      else if(mol == "C8H10N4O2"){
        //Caffeine
        ctx.save()
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("BBBBBBBBBBBB", this.x + 20, this.y + 20);
        ctx.restore();
      }
      else if(mol == "C6H6"){
        ctx.save()
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("CCCCCCCCCCC", this.x + 20, this.y + 20);
        ctx.restore();
      } else if (mol == "test") {
        ctx.save()
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("DDDDDDDDDDD", this.x + 20, this.y + 20);
        ctx.restore();
      }
    }
  }
  
  init();
  
  function animloop() {
    draw();
    requestAnimFrame(animloop);
  }
  
  animloop();
}

const initMain = () => {
  let main = document.getElementById("main")
  let about = document.getElementById("about")
  let skills = document.getElementById("skills")
  let projects = document.getElementById("projects")
  let contact = document.getElementById("contact")
}