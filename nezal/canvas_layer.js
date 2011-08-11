var CanvasLayer = Class.create({


	init : function(options){
		this.ctx = this.options.ctx
	},
	render : function(){
		try{
			if(!this.visible) return
			if(this.clear){
				this.ctx.clearRect(0, 0, 600, 500)
			}
			var remainingSprites = []
			
			for(var i=0; i < this.sprites.length; i++){
				var sprite = this.sprites[i]
				if(sprite.layer == this){
					if(sprite.visible)sprite.render(this.ctx)
					remainingSprites.push(sprite)
				}
			}
			
			this.sprites = remainingSprites
		}catch(e){console.log(e)}
		return this
	}
}
)
