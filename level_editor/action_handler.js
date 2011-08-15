/**
 * @author Mazen
 */ 
var ActionHandler =  Class.create({
	selectedObject : null ,
	selectedTower : null,

	initialize : function(div){
		this.crtTilePosX = 0;
		this.crtTilePosY = 0;
		this.prevTilePosX = -1;
		this.prevTilePosY = -1;
		this.startMouseObserver(document.getElementById("drawingarea"));
	},
	
	addAction : function(div , action , onEvent){
		div.observe(onEvent,action);
	},
	startMouseObserver : function(div){
		var actionSelf = this;
		this.addAction(div,function(e){actionSelf.clickTile(e)},'click');
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
	clickRoad : function (e){
		this.selectedObject = e.element();
	},
	clickTile : function(e){ 
		console.log("click map")
		if(this.selectedObject)//i select path tile
			{
		
				var tile = document.getElementById(this.selectedObject.parentNode.id).cloneNode(true).setStyle({
					position : 'absolute',
					top : (e.pointerY()-(e.pointerY()%50))-50,
					left :(e.pointerX()-(e.pointerX()%50))
				});
				$('drawingarea').appendChild(tile);
				
			}
		
	},
	tileEnter : function(e){ // new one
		console.log("inTile: "+this.crtTilePosX+","+this.crtTilePosY);
	},
	tileExit :function(){ // old one
		// console.log("exit")
		
	},
	layerClick : function(e){
		console.log(e.element().id)
		
	}
		
	
})
