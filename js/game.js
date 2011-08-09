/**
 * @author Mazen
 */
var Game = Class.create({
	intialize: function(){
		var gameElementsImages = [
		"doubleturret_button.png", 
		"heal_button.png", 
		"heal_button_off.png",
		"l_shape.png", 
		"mystry_button.png"
		 ];
		 alert(2)
		 new Loader().load([{images : gameElementsImages, path: 'test/', store: 'game_elements'}], {onFinish:function(){
			// self.scene.start();
			// var control =  new GameController(self);
			console.log("load complete");
			new LMenu()
		}});
	
	}
})
