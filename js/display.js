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
		this.sprite = new MySprite(this.images,this, {rotation:0})
		this.sprite.div.className = "Tower";
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game_elements['tower_base.png'],
			cannon : Loader.images.game_elements['reaper_3.png'],
			fire : Loader.images.game_elements['reaper_3_inaction_left.png']
		}
	},
	rotate : function($super) {
		$super()
		this.sprite.rotate(this.deg)
	}
})

var TankIDisplay = Class.create(Display,TankI,{
	 initialize : function($super,x,y){
		$super(x,y);
		this.sprite = new MySprite(this.images,this, {rotation:0})
		this.sprite.div.className = "TankI"
	  },
	  
 	  initImages : function(){
		this.images = {
			base : Loader.images.game_elements['humvee_body.png'],
			cannon : Loader.images.game_elements['humvee_tower.png'],
			fire : Loader.images.game_elements['humvee_tower_in_action.png']
		}
	},
	rotate : function($super,deg) {
		$super()
		 this.sprite.rotate(deg)
	},
	
	moveTo : function($super,x,y){
		$super(x,y)
		this.sprite.moveTo(x,y)
	}
})

var imagedisplay = Class.create(Display,TankI,{
	initialize : function($super,x,y){
		$super(x,y);
		var dSprite = new DomSprite();
		var cSprite = new CanvasSprite();
		this.sprite = new Sprite(this.images,this,{rotation:0});
		this.sprite.extend(cSprite);
		this.sprite.moveTo(x,y);
		
	},
	initImages : function (){
		this.images={ 0: Loader.images.game_elements['humvee_body.png']}
		
	}
})



