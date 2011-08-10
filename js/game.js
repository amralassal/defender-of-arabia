/**
 * @author Mazen
 */
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
		 "reaper_3_inaction_left.png"
		 ];
		// alert("here");
		 new Loader().load([{images : gameElementsImages, path: 'images/', store: 'game_elements'}], {onFinish:function(){
			// self.scene.start();
			// var control =  new GameController(self);
			// console.log("load complete");
			new Menu()
		}});
	
	}
})
