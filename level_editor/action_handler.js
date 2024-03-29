var ActionHandler =  Class.create({
	selectedButton : 0,
	selectedObject : null ,
	selectedLayer : null ,

	crtTilePosX : 0,
	crtTilePosY : 0,
	prevTilePosX : -1,
	prevTilePosY : -1,
	
	initialize : function(div,levelEditor){
		this.div = div;
		this.levelEditor = levelEditor;
		this.startMouseObserver(div,document.getElementById("drawingarea"));
		var self = this;
		this.hashButton = {'1':function(){self.layerClick()} , '2':function(e){self.addObstacle (e)},'3':function(){self.addStart()},'4':function(){self.addEnd()},'5':function(){self.remove()}};
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
				actionHandlerSelf.tileEnter();
				actionHandlerSelf.tileExit();				
				actionHandlerSelf.prevTilePosX = actionHandlerSelf.crtTilePosX;
				actionHandlerSelf.prevTilePosY = actionHandlerSelf.crtTilePosY;
				
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
	addObstacle : function (e){
		var posX = e.pointerX()- parseInt(this.div.getStyle('left'));
		var posY = e.pointerY()- parseInt(this.div.getStyle('top'));
		var y = this.crtTilePosY;
		var x = this.crtTilePosX;
		var tile = document.createElement('div').setStyle({
					position : 'absolute',
					top : (posY-(posY%50)),
					left :(posX-(posX%50)),
					width : 50,
					height : 50,
					backgroundColor : 'red'
				});
				this.selectedLayer.attach(tile);
				$('drawingarea').appendChild(tile);
				tile.id =  y*12 + x;
				this.levelEditor.map[y][x]=true;
	},
	addStart : function(){
		var y = this.crtTilePosY;
		var x = this.crtTilePosX;
		this.selectedLayer.start.push({'x' : x, 'y':y});
		this.levelEditor.map[y][x] = true;
	},
	addEnd : function(){
		var y = this.crtTilePosY;
		var x = this.crtTilePosX;
		this.selectedLayer.end.push({'x' : x,'y':y});
		this.levelEditor.map[y][x] = true;
	},
	remove : function (){
		var index = this.crtTilePosY*12 + this.crtTilePosX;
		$(index+"").remove();
		this.levelEditor.map[this.crtTilePosY][this.crtTilePosX] = false;
	},
	clickTile : function(e){
				var posX = e.pointerX()- parseInt(this.div.getStyle('left'));
				var posY = e.pointerY()- parseInt(this.div.getStyle('top'));
				var y = this.crtTilePosY;
				var x = this.crtTilePosX;
				if(this.selectedObject!=null){
					var tile = document.getElementById(this.selectedObject.parentNode.id).cloneNode(true).setStyle({
						position : 'absolute',
						top : (posY-(posY%50)),
						left :(posX-(posX%50)),
						width :50,
						height :50
					});
					tile.id =  y*12 + x;
					$('drawingarea').appendChild(tile);
					this.selectedLayer.attach(tile);
					this.levelEditor.arrayLayer[this.levelEditor.arrayLayer.indexOf(this.selectedLayer)].array[y][x] = true;
					this.levelEditor.arrayLayer[this.levelEditor.arrayLayer.indexOf(this.selectedLayer)].arrayPictures[y][x] = tile.childNodes[0].src;
					this.levelEditor.map[y][x] = true;
					}
				else
				{
					if(this.selectedButton == 2)
						this.hashButton[this.selectedButton+""](e);
					else{
						this.hashButton[this.selectedButton+""]();
						}
				}
	},
	tileEnter : function(){
		console.log("tile ",this.crtTilePosY,",",this.crtTilePosX);
	},
	tileExit :function(){ 
	},
	layerClick : function(e){
		this.togglestyle(e.element());
		this.selectedLayer = this.levelEditor.arrayLayer[e.element().id];
		this.selectedObject = null;
	},
	
	hideClick : function(e){
	var idLayer = e.element().id.substring(1);
	if(e.element().className == "on"){
		e.element().className = "off";
		this.levelEditor.arrayLayer[idLayer].hide();
		}
	else{
		e.element().className = "on";
		this.levelEditor.arrayLayer[idLayer].show();
		}
	},
	
	togglestyle : function (el){
		var count = this.levelEditor.index - 1;
		while(count >= 0)
		{
			document.getElementById(count).className = "on";
			count-=1;
			
		}
			el.className="off";
		
	}


	
	
		
	
})
