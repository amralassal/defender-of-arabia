var CanvasSprite = Class.create({
	init:function(){
		this.centerX = 0
		this. centerY =0
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
	rotateAround : function(x,y,deg){
		this.centerX = x;
		this.centerY = y;
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
		ctx.translate(this.owner.x+this.shiftX+this.centerX, this.owner.y+this.shiftY+this.centerY)
		if(isRotating){
			ctx.rotate(this.rotation)
		}
		if(this.draw&&this.images[this.currentFrame]){
			ctx.drawImage(this.images[this.currentFrame],this.transitionX+this.owner.x+this.shiftX-this.centerX,this.owner.y+this.shiftY+this.transitionY-this.centerY)
		}
		ctx.restore();

	},
})