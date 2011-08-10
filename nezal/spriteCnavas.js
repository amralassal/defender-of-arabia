var SpriteCanvas = Class.create({

	init : function(){
	},
	
	moveTo : function(x, y){
		this.x = x
		this.y = y
		return this
	},
	
	rotate : function(deg){
		this.rotation = Nezal.degToRad(deg)
		return this
	},
	
	show : function(){
		this.visible = true
		return this
	},
	
	hide : function(){
		this.visible = false
		return this
	},

	render : function(){
		if(this.owner.dead){
			return this.destroy()
		}
		if(!this.visible) return
		ctx.save()
		ctx.translate(this.owner.x+this.shiftX, this.owner.y+this.shiftY)
		if(this.rotation != 0&&this.rotation<360){
			ctx.rotate(this.rotation)
		}
		if(this.draw&&this.images[this.currentFrame]){
			ctx.drawImage(this.images[this.currentFrame],-48+this.owner.x+this.shiftX,-16+this.owner.y+this.shiftY)
		}
		ctx.restore()

	},
	
})

