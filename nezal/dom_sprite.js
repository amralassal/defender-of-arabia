var DomSprite = Class.create({
	zIndex : 0,
	init:function(){
		this.div = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:this.owner.x+'px',
			top:this.owner.y+'px',
			width: this.owner.width+'px',
			height:this.owner.length+'px'
			
		}
	
		);
		$("gamediv").appendChild(this.div);
		console.log(this.images)
		this.div.appendChild(this.images[this.currentFrame].clone());

	},
	
	setCurrentFrame : function(i){
		this.currentFrame = i;
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
	moveBy : function(x, y) {
		this.x += x
		this.y += y
		this.div.setStyle({
			left:this.x+'px',
			top:this.y+'px'
		});
		return this
	},
	
	rotate : function(deg){
		this.rotation = deg
		var isRotating = this.rotation != 0&&this.rotation<360;
		if(isRotating) {
			this.div.setStyle({
				MozTransformOrigin : this.centerX+"px "+this.centerY+ "px",
				MozTransform : "rotate("+this.rotation +"deg)",
				WebKitTransformOrigin :  this.centerX+"px "+this.centerY+ "px",
				WebKitTransform : "rotate("+this.rotation+"deg)",
				msTransformOrigin : this.centerX+"px "+this.centerY+ "px",
				msTransform : "rotate("+this.rotation+"deg)"
			});
		}
		return this
	},
	setCenter: function(x,y){
		this.centerX = x
		this.centerY = y
		return this
	},
	rotateBy : function(deg){
		this.rotation += deg
		this.rotate(this.rotation)
		return this
	},
	show : function() {
		this.div.setStyle({display : 'block'});
		return this
	},
	hide : function() {
		this.div.setStyle({display : 'none'});
		return this
	},
	setZIndex:function (index){
		this.div.setStyle({'z-index' : index});
		return this;
	},
	
	destroy : function() {
		this.layer = null
		this.div.remove();
	}
})