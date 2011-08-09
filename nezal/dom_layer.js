var DomLayer = Class.create({
	
	attach : function(sprite){
		zIndex = this.property
		sprite.layer = this
		sprite.setZIndex(zIndex);
		this.sprites.push(sprite)
		if(!this.visible){
			sprite.hide();
		}
		return this
	},
		
	show : function(){
		this.visible = true
		this.sprites.each(function(element){element.show()});
		return this
	},
	
	hide : function(){
		this.visible = false
		this.sprites.each(function(element){element.hide()});
		return this
	},

	render : function(){
	}
}
)
