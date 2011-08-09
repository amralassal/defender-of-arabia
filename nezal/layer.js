var Layer = Class.create({
	
	initialize : function(z_index){
		// this.clear = false
		this.sprites = []
		this.visible = true
		this.z_index = z_index
	},
		
	attach : function(sprite){
		sprite.layer = this
		sprite.setZIndex(this.z_index);
		this.sprites.push(sprite)
		if(!this.visible){
			sprite.hide();
		}
		return this
	},
		
	show : function(){
		this.visible = true
		this.sprites.each(function(element){element.show()});
		return this
	},
	
	hide : function(){
		this.visible = false
		this.sprites.each(function(element){element.hide()});
		return this
	},

	render : function(){
		try{
			// if(this.clear){
				// this.ctx.clearRect(0, 0, 600, 500)
			// }
			if(!this.visible) return
			var remainingSprites = []
			var self = this
			this.sprites.each(function(sprite){
				if(sprite.layer == self){
					if(sprite.visible)sprite.render(self.ctx)
					remainingSprites.push(sprite)
				}
			})
			this.sprites = remainingSprites
		}catch(e){console.log(e)}
		return this
	}
}
)
