/**
 * @author Mazen
 */ 
var ActionHandler =  Class.create({
	selectedObject : null ,
	selectedTower : null,
	crtTilePosX : 0,
	crtTilePosY : 0,
	prevTilePosX : -1,
	prevTilePosY : -1,
	initialize : function(div){
		this.div = div;
		this.startMouseObserver(div,document.getElementById("drawingarea"));
	},
	
	addAction : function(div , action , onEvent){
		div.observe(onEvent,action);
	},
	startMouseObserver : function(div){
		var actionSelf = this;
		this.addAction(div,function(e){actionSelf.clickTile(e)},'click');
		var actionHandlerSelf=this
		var observerFn = function(e){
			var posX = e.pointerX()- parseInt(div.getStyle('left'));
			var posY = e.pointerY()- parseInt(div.getStyle('top'));
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
		// alert("inTile: "+this.crtTilePosX+","+this.crtTilePosY);
		console.log("click map")
		if(this.selectedObject)//i select path tile
			{
				console.log(this.selectedObject.parentNode)
				// console.log((e.pointerY()-(e.pointerY()%50)),((e.pointerX()-(e.pointerX()%50))))
				var posX = e.pointerX()- parseInt(this.div.getStyle('left'));
				var posY = e.pointerY()- parseInt(this.div.getStyle('top'));

		
				var tile = document.getElementById(this.selectedObject.parentNode.id).cloneNode(true).setStyle({
					position : 'absolute',
					top : (posY-(posY%50)),
					left :(posX-(posX%50))
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
