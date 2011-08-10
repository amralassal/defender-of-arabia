/**
 * @author Mazen
 */ 
var LMenu =  Class.create({
	
	initialize:function(parameters){
		initSprites();
	},
	
	initSprites: function(){
		// L shape
		this.lMenuDiv = $(document.createElement('div')).setStyle({
			position:'absolute',
			left:this.owner.x+'px',
			top:this.owner.y+'px',
			width: this.owner.width+'px',
			height:this.owner.length+'px'
		}
		);
		
		this.lMenuDiv.addClassName(owner.toString());
		$("gamediv").appendChild(this.lMenuDiv);
		this.img = new Element('img', {
			src : Loader.images.game['l_shape.png'] // needs changing
		});
		this.spriteDiv.appendChild(this.img);
		
		// 

	},
	
	
})
