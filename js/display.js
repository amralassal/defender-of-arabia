var Display = Class.create(Unit,{

	initialize : function($super,x,y){
		$super(x,y)
		this.initImages();
	},
	update : function(){},
	finish : function(){},
})



var TowerDisplay = Class.create(Display,Tower,{
	 initialize : function($super,x,y){
		$super(x,y);
		this.sprite = new Sprite([this.images],this, {rotation:0})
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game['tower_base.png'],
			cannon : Loader.images.game['reaper_3.png'],
			fire : Loader.images.game['reaper_3_inaction_left.png']
		}
	},
	rotate : function($super) {
		$super()
		this.sprite.rotate(this.deg)
	}
})

var TowerDisplay = Class.create(Display,TankI,{
	 initialize : function($super,x,y){
		$super(x,y);
		this.sprite = new Sprite([this.images],this, {rotation:0})
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game['tower_base.png'],
			cannon : Loader.images.game['reaper_3.png'],
			fire : Loader.images.game['reaper_3_inaction_left.png']
		}
	},
	rotate : function($super) {
		$super()
		this.sprite.rotate(this.deg)
	}
})



