// CONST
Main.SCROLL_SPEED = 5;

let Main = function(){
  this.stage = new PIXI.Container();
  this.renderer = PIXI.autoDetectRenderer(
    512,
    384,
    {view:document.getElementById("game-canvas")}
  );
  
  this.scroller = new Scroller(this.stage); 

  requestAnimationFrame(this.update.bind(this));
}

Main.prototype.update = function(){
  this.scroller.moveViewportXBy(Main.SCROLL_SPEED);

  this.renderer.render(this.stage);

  requestAnimationFrame(this.update.bind(this));
}







