var Game = Class.create({
	initialize: function(){
		var gameElementsImages = [
		"doubleturret_button.png", 
		"heal_button.png", 
		"heal_button_off.png",
		 "l_shape.png", 
		 "mystry_button.png",
		 "path.png",
		 "tower_base.png",
		 "reaper_3.png",
		 "reaper_3_inaction_left.png",
		 "humvee_body.png",
		 "humvee_tower.png",
		 "humvee_tower_in_action.png"
		 ];
		 this.scene = new GameScene();
		 var self = this
		 new Loader().load([{images : gameElementsImages, path: 'images/', store: 'game_elements'}], {onFinish:function(){
	     console.log("load complete");
	     console.log(Loader.images.game_elements)
	     self.scene.start();
	     self.scene.initScene();
			// var control =  new GameController(self);
			//new LMenu()
		}});
		
	
	}
})