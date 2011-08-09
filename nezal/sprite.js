var Sprite = Class.create({
	x : 0,
	y : 0,
	w : 0,
	h : 0,
	transitionX: 0,
	transitionY: 0,
	shiftX: 0,
	shiftY: 0,
	rotation : 0,
	layer : null,

	initialize : function(images, owner, properties) {
		this.images = images
		this.owner = owner
		Object.extend(this, properties)
		if(images[0]) {
			if(!this.w)
				this.w = images[0].width
			if(!this.h)
				this.h = images[0].height
		}

		this.spriteDiv = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:this.owner.x+'px',
			top:this.owner.y+'px',
			width: this.owner.width+'px',
			height:this.owner.length+'px'
		}
		);
		
		this.spriteDiv.addClassName(owner.toString());
		$("gamediv").appendChild(this.my_div);
		this.img = new Element('img', {
			src : this.images[0]?this.images[0].src:this.images['base'].src
		});
		this.spriteDiv.appendChild(this.img);

		this.currentFrame = 0
		this.draw = true
	},
	moveTo : function(x, y) {
		this.x = x
		this.y = y
		this.spriteDiv.setStyle({
			left:this.x+'px',
			top:this.y+'px'
		});
		return this
	},
	
	updatePos: function(){
		this.spriteDiv.setStyle({
				left:this.owner.x+'px',
				top:this.owner.y+'px'
			});
			return this	
	},
	
	rotate : function(deg) {
		this.rotation = Nezal.degToRad(deg)
		var isRotating = this.rotation != 0&&this.rotation<360;
		if(isRotating) {
			this.spriteDiv.setStyle({
				transform:'rotate('+this.rotation +'deg)'
			});
		}
		return this
	},
	updateRotation : function(){
		var isRotating = this.owner.rotation != 0&&this.owner.rotation<360;
		if(isRotating) {
			this.spriteDiv.setStyle({
				transform:'rotate('+this.owner.rotation +'deg)'
			});
		}
	}
	,
	show : function() {
		this.spriteDiv.setStyle({display : 'block'});
		return this
	},
	hide : function() {
		this.spriteDiv.setStyle({display : 'none'});
		return this
	},
	setZIndex:function (index){
			this.spriteDiv.setStyle({ 'z-index' : index});
	}
	,
	render : function(ctx) {
		// if(this.owner.dead) {
			// return this.destroy()
		// }
		// if(!this.visible)
			// return
	},
	destroy : function() {
		this.layer = null
		this.spriteDive.remove();
	}
})