var Layer = Class.create({
	
	init : function(options){ // z-index or ctx
		this.sprites = []
		this.visible = true
		this.options = options || {};
	},
	extend : function(obj){
		Object.extend(this,obj);
		this.init();	
	},
	
	attach : function(sprite){
		sprite.layer = this
		this.sprites.push(sprite)
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
		alert("not REnder");
		return this
	}
}
)
