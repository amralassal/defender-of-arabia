var DomLayer = Class.create({
	//init
	initialize : function($super,options){
		$super()
		this.zIndex = this.options.zIndex
	},
	
	attach : function(sprite){
		sprite.layer = this
		sprite.setZIndex(this.zIndex);
		this.sprites.push(sprite)
		if(!this.visible){
			sprite.hide()
		}
		return this
	},
		
	show : function(){
		this.visible = true
		for(var i=0;i<this.sprites.length;i++){
			var element  = this.sprites[i]
			element.show()
		}
		return this
	},
	
	hide : function(){
		this.visible = false
		for(var i=0;i<this.sprites.length;i++){
			var element  = this.sprites[i]
			element.hide()
		}
		return this
	},

	render : function(){
	}
}
)
