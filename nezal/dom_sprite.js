var DomSprite = Class.create({
	init:function(){
		this.div = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:this.owner.x+'px',
			top:this.owner.y+'px',
			width: this.owner.width+'px',
			height:this.owner.length+'px'
		}
		);
		
		// this.div.addClassName(owner.toString());
		$("gamediv").appendChild(this.div);
		this.div.appendChild(this.images[0]);

	},
	setCurrentFrame : function(index){
		this.currentFrame = index;
		this.div.removeChild(this.dev.firstChild);
		this.div.appendChild(this.images[i]);
	},
	moveTo : function(x, y) {
		this.x = x
		this.y = y
		this.div.setStyle({
			left:this.x+'px',
			top:this.y+'px'
		});
		return this
	},
	rotate : function(deg) {
		this.rotation = deg
		var isRotating = this.rotation != 0&&this.rotation<360;
		if(isRotating) {
			this.spriteDiv.setStyle({
					MozTransform : "rotate("+this.rotation +"deg)",
					WebKitTransform : "rotate("+this.rotation+"deg)",
					msTransform : "rotate("+this.rotation+"deg)"
			});
		}
		return this
	},
	rotateAround : function(x,y,deg){
		this.rotation =deg
		var isRotating = this.rotation != 0&&this.rotation<360;
		if(isRotating) {
			this.spriteDiv.setStyle({
				MozTransformOrigin : x+"px "+y+ "px",
				MozTransform : "rotate("+this.rotation +"deg)",
				WebKitTransformOrigin :  x+"px "+y+ "px",
				WebKitTransform : "rotate("+this.rotation+"deg)",
				msTransformOrigin : x+"px "+y+ "px",
				msTransform : "rotate("+this.rotation+"deg)"
			});
		}
		return this
	},
	show : function() {
		this.spriteDiv.setStyle({display : 'block'});
		return this
	},
	hide : function() {
		this.spriteDiv.setStyle({display : 'none'});
		return this
	},
	setZIndex:function (index){
		this.spriteDiv.setStyle({'z-index' : index});
		return this;
	}
	,
	destroy : function() {
		this.layer = null
		this.spriteDive.remove();
	}
})