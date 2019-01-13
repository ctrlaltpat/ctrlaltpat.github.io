const skills = () => {
  window.requestAnimFrame = ( () => {
    return  window.requestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame    || 
      window.oRequestAnimationFrame      || 
      window.msRequestAnimationFrame     ||  
      function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  
  let canvas = document.getElementsByTagName("canvas")[0];
  let ctx = canvas.getContext("2d");
  let w = document.width || document.body.clientWidth ||  document.documentElement.clientWidth || window.innerWidth 
  let h = document.height || document.body.clientHeight ||  document.documentElement.clientHeight || window.innerHeight
  canvas.width = w;
  canvas.height = h;
  
  let mols = [];
  
  const initSkills = () => {
    for(let i=0;i<8;i++){
      let mol = new generate_mol("C8H10N4O2");
      mols.push(mol);
      let mol = new generate_mol("C6H6O");
      mols.push(mol);
      let mol = new generate_mol("C6H6");
      mols.push(mol);
      let mol = new generate_mol("test");
      mols.push(mol);
    }
  }
  
  const draw = () => {
    canvas.width = canvas.width;
    for(let i=0;i<mols.length;i++){
      let m = mols[i];
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
  
  const generate_mol = (mol) => {
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.vx = Math.random()*-2;
    this.vy = Math.random()*2;
    this.vr = 0.1;
    this.r = Math.random()*Math.PI;
    this.draw = () => {
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
  
  initSkills();
  
  const animloop = () => {
    draw();
    requestAnimFrame(animloop);
  }
  
  animloop();
}