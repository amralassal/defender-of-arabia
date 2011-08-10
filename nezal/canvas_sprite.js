var CanvasSprite = Class.create({
	init:function(){
		return this
	},
	
	moveTo : function(x, y) {
		this.x = x
		this.y = y
		return this
	},
	rotate : function(deg) {
		this.rotation = Nezal.degToRad(deg)
		return this
	},
	render : function(ctx){
			
		if(this.owner.dead){
			return this.destroy()
		}
			
		if(!this.visible) return

		ctx.save()
		var isRotating = this.owner.rotation != 0&&this.owner.rotation<360;
		ctx.translate(this.owner.x+this.shiftX, this.owner.y+this.shiftY)
		if(isRotating){
			ctx.rotate(this.rotation)
		}
		if(this.draw&&this.images[this.currentFrame]){
			ctx.drawImage(this.images[this.currentFrame],this.transitionX+this.owner.x+this.shiftX,this.owner.y+this.shiftY-16+this.transitionY)
		}
		if(isRotating){
			ctx.rotate(-this.rotation)
		}
		ctx.translate(-(this.owner.x+this.shiftX), -(this.owner.y+this.shiftY))
		ctx.restore();

	},
})