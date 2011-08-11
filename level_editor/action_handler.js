/**
 * @author Mazen
 */ 
var ActionHandler =  Class.create({
	selectedObject : null ,
	selectedTower : null,

	initialize : function(){
		this.crtTilePosX = 0;
		this.crtTilePosY = 0;
		this.prevTilePosX = -1;
		this.prevTilePosY = -1;
	},
	
	addAction : function(div , action , onEvent){
		div.observe(onEvent,function(){action.apply(div)});
	},
	startMouseObserver : function(div){
		var actionHandlerSelf=this
		var observerFn = function(e){
			var posX = e.pointerX();
			var posY = e.pointerY();
			actionHandlerSelf.crtTilePosX = Math.floor(posX/50);
			actionHandlerSelf.crtTilePosY = Math.floor(posY/50);
			if(actionHandlerSelf.crtTilePosX != actionHandlerSelf.prevTilePosX  || actionHandlerSelf.crtTilePosY !=actionHandlerSelf.prevTilePosY){
				actionHandlerSelf.tileEnter()
				actionHandlerSelf.tileExit()
				
				actionHandlerSelf.prevTilePosX = actionHandlerSelf.crtTilePosX
				actionHandlerSelf.prevTilePosY = actionHandlerSelf.crtTilePosY
				
			}
		}
		div.observe('mousemove',observerFn);
	},
	stopMouseObserver : function(div){
		// div.stopObserving('mousemove',observerFn);
	},
	clickTile : function(){ // on tile click
		alert("inTile: "+wactionHandler.crtTilePosX+","+wactionHandler.crtTilePosY);
	},
	tileEnter : function(){ // new one
		console.log("inTile: "+this.crtTilePosX+","+this.crtTilePosY);
	},
	tileExit :function(){ // old one
		
	},
		
	
})
