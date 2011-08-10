var SpriteDom = Class.create({

	init  : function() {
		   this.spriteDiv = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:this.owner.x+'px',
			top:this.owner.y+'px',
			width: this.owner.width+'px',
			height:this.owner.length+'px'
		}
		);
		
		this.spriteDiv.addClassName(owner.toString());
		$("gamediv").appendChild(this.spriteDiv);
		this.img = new Element('img', {
			src : this.images[0]?this.images[0].src:this.images['base'].src
		});
		this.spriteDiv.appendChild(this.img);
		this.currentFrame = 0
		this.draw = true
	},
	
	moveTo : function(x,y) {
		this.x = x
		this.y = y
		this.spriteDiv.setStyle({
			left:this.x+'px',
			top:this.y+'px'
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
	
	show : function() {
		this.spriteDiv.setStyle({display : 'block'});
		return this
	},
	hide : function() {
		this.spriteDiv.setStyle({display : 'none'});
	},
	setZIndex:function (index){
		this.spriteDiv.setStyle({ 'z-index' : index});
	}
	,
	destroy : function() {
		this.layer = null
		this.spriteDive.remove();
	}
})