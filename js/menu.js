
var Menu =  Class.create({
	
	initialize:function(game,parameters,actionHandler){
		this.actionHandler = actionHandler;
		this.towerDiv = new Hash();
		this.game = game;
		this.counter = 0;
		this.initSprites();
	},
	
	initSprites: function(){
		this.initMenuSprite();
		this.initTowerSprites();
		
	},
	initMenuSprite : function(){
		this.menuDiv = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:'0px',
			top: '0px',
			}
		);
		$("gamediv").appendChild(this.menuDiv);
		this.img = new Element('img', {
			src :  Loader.images.game_elements['l_shape.png'].src // needs changing
		});
		this.menuDiv.appendChild(this.img);
	},

	initTowerSprites :function(parameters){
		for(var i=0 ; i<10 ; i++){
			var tDiv =	this.towerDiv.set("name"+i ,$(document.createElement('div')).setStyle({
			position:'absolute',
			left:(650+ ((i%2==0)?0:50))+'px',
			top: (170+((i%2==0)?25*(i-1):25*(i-2)))+'px',
			}
		));
		this.menuDiv.appendChild(tDiv);
		var tImg = new Element('img', {
			src :  Loader.images.game_elements['mystry_button.png'].src // needs changing
		});
		tDiv.appendChild(tImg);
		}
	},
	
	addWeapon : function (name){
		var div = this.towerDiv.get("name"+this.counter);
		div.removeChild(this.towerDiv.get("name"+this.counter).lastChild);
		var img = new Element('img', {
			src : Loader.images.game_elements[name+'.png'].src
		});
		div.appendChild(img);
		actionSelf = this.game.action
		this.game.action.addAction(div,"actionSelf.selectTower(div)","click");
		this.counter+=1//increase counter to get next div
		
		
		//add action 
	}
	
	
	
})
