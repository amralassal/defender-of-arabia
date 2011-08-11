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
		this.visible = true;
		Object.extend(this, properties)
		if(images[0]) {
			if(!this.w)
				this.w = images[0].width
			if(!this.h)
				this.h = images[0].height
		}
		this.currentFrame = 0
		this.draw = true;
	},
	extend :function (obj){
		Object.extend(this,obj);
		this.init();	
	} ,
	
	moveTo : function(x, y) {
		this.x = x
		this.y = y
		return this
	},
	rotate : function(deg) {
		return this
	},
	rotateAround : function(x,y,deg){
		return this
	},
	show : function() {
		return this
	},
	hide : function() {
		return this
	},
	render : function(ctx) {
		alert("render Here");
	},
	destroy : function() {
		this.layer = null
	}
})