var Display = Class.create(Unit,{

	initialize : function($super){
		this.initImages();
	},
	update : function(){},
	finish : function(){},
})



var TowerDisplay = Class.create(Display,{
	 initialize : function($super){
		$super();
		this.sprite = new Sprite([this.images],this, {rotation:0})
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game['humvee_body.png'],
			cannon : Loader.images.game['humvee_tower.png'],
			fire : Loader.images.game['humvee_tower_in_action.png']
		}
	},
	moveTo : function(x,y){
		this.sprite.moveTo(x,y)
	},
	rotate : function(deg) {
		this.sprite.rotate(deg)
	}
})



