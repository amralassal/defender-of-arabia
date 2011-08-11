var CanvasLayer = Class.create({
	

		
	render : function(){
		try{
			if(this.clear){
				this.ctx.clearRect(0, 0, 600, 500)
			}
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
