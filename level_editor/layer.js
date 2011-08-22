var Layer = Class.create({
	
	initialize : function(options){ // z-index or ctx
		this.sprites = [];
		this.visible = true;
		this.options = options || {};
		this.start = [];
		this.end = [];
		this.array = null;
		this.arrayPictures = null;
		
	},
	
	attach : function(sprite){
		sprite.layer = this
		this.sprites.push(sprite)
		return this
	},
	
	show : function(){
		for(var i=0;i<this.sprites.length;i++){
			this.sprites[i].style.visibility='visible';
		}
	},
	
	hide : function(){
		for(var i=0;i<this.sprites.length;i++){
			this.sprites[i].style.visibility='hidden';
		}
	},
	

}
)
