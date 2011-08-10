var Game = Class.create({
	initialize: function(){
		var gameElementsImages = [
		 "doubleturret_button.png", 
		 "heal_button.png", 
		 "heal_button_off.png",
		 "l_shape.png", 
		 "hyper_button.png",
		 "weak_button.png",
		 "mystry_button.png",
		 "path.png",
		 "tower_base.png",
		 "reaper_3.png",
		 "reaper_3_inaction_left.png",
		 "humvee_body.png",
		 "humvee_tower.png",
		 "humvee_tower_in_action.png"
		 ];
		
		 var self = this
		 new Loader().load([{images : gameElementsImages, path: 'images/', store: 'game_elements'}], {onFinish:function(){
	     this.menu = new Menu();
		 this.scene = new GameScene(this);
	     this.scene.start();
	     this.scene.initScene();
		 
		}});
		
	
	}
})
