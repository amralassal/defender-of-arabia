//sprite for  plus  options 
var MySprite = Class.create( {
	rotation : 0,
	visible : true,
	layer : null,
	cannonRotation : 0,
	counter : 0,
	initialize : function(images, owner, properties){
		this.images = images
		this.owner = owner
		Object.extend(this, properties)
		this.currentFrame = 0
		this.div = document.createElement('div');
		this.div.style.position = 'absolute';
		this.div.style.width=this.w+"px";
		this.div.style.height=this.h+"px";
		this.div.style.left=this.owner.x+"px";
		this.div.style.top=this.owner.y+"px";
		$('gamediv').appendChild(this.div);
		this.draw = true
		this.body=document.createElement("div");
		this.body.position="absolute";
		this.body.appendChild(this.images.base);
		this.div.appendChild(this.body);
		this.cannon=document.createElement("div");
		this.cannon.style.position="absolute";
		//this.cannon.style.width="50px";
		//this.cannon.style.height="50px";//
		//this.cannon.style.overflow="hidden";//
		this.images.cannon.style.position="absolute";
		this.cannon.style.left=-5;
		this.cannon.style.top=0;
		this.cannon.appendChild(this.images.cannon);
		this.body.appendChild(this.cannon);
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
		// this.rotation = Nezal.degToRad(deg)
		this.rotation = deg;
		var isRotating = this.rotation != 0 && this.rotation<360;
		if(isRotating) {
			this.cannon.setStyle({
				MozTransformOrigin : "48px 16px",
				MozTransform : "rotate("+this.rotation +"deg)",
				WebKitTransformOrigin : '50% 50%',
				WebKitTransform : "rotate("+this.rotation+"deg)",
				msTransformOrigin : '50% 50%',
				msTransform : "rotate("+this.rotation+"deg)",});
		}
		return this
	},
	
	destroy : function(){
		  this.layer = null
		  var child  = document.getElementById(this.div.id);
          var parent = document.getElementById("container");
          parent.removeChild(child);
	},
	rotates : function(){
		this.counter++
		if(this.counter % 20 !=0) return 
		var pic = new Array();
		pic[0]='images/humvee_tower3.png';
		pic[1]='images/humvee_tower4.png';
		pic[2]='images/humvee_tower5.png';
		pic[3]='images/humvee_tower6.png';
		pic[4]='images/humvee_tower7.png';
		pic[5]='images/humvee_tower8.png';
		pic[6]='images/humvee_tower1.png';
		pic[7]='images/humvee_tower2.png';
		var imgs=new Array()
		for (i = 0; i < pic.length; i++){
			imgs[i] = new Image();
			imgs[i].src = pic[i];
        }
		if((this.owner.rotation  ) < Math.PI/4){
			this.images.cannon.src=imgs[0].src;
			}
		if((this.owner.rotation ) < Math.PI/2 && (this.owner.rotation  ) > Math.PI/4){
			this.images.cannon.src=imgs[1].src;
			}
		if((this.owner.rotation  ) < 3*Math.PI/4 && (this.owner.rotation  ) > Math.PI/2){
			this.images.cannon.src=imgs[2].src;
			}
		if((this.owner.rotation ) < Math.PI && (this.owner.rotation  ) > 3*Math.PI/4){
			this.images.cannon.src=imgs[3].src;
			}
		if((this.owner.rotation  ) < 5*Math.PI/4 && (this.owner.rotation ) > Math.PI){
			this.images.cannon.src=imgs[4].src;
			}
		if((this.owner.rotation  ) < 3*Math.PI/2 && (this.owner.rotation) > 5*Math.PI/4){
			this.images.cannon.src=imgs[5].src;
			}
		if((this.owner.rotation  ) < 2*Math.PI && (this.owner.rotation ) > 3*Math.PI/2){
			this.images.cannon.src=imgs[6].src;
			}
		if((this.owner.rotation ) > 2*Math.PI){
			this.images.cannon.src=imgs[7].src;
			}
			this.cannon.style.left=-30;
		    this.cannon.style.top=30;
	},
	newRotate : function (){
		if((this.owner.rotation  ) < Math.PI/4){
			this.images.cannon.style.top="0px";
			}
		if((this.owner.rotation ) < Math.PI/2 && (this.owner.rotation  ) > Math.PI/4){
			this.images.cannon.style.top=-50+"px";
			}
		if((this.owner.rotation  ) < 0 && (this.owner.rotation  ) > Math.PI/4){
			this.images.cannon.style.top="-100px";
			}
		if((this.owner.rotation ) < Math.PI && (this.owner.rotation  ) > 3*Math.PI/4){
			this.images.cannon.style.top="-150px";
			}
		if((this.owner.rotation  ) < 5*Math.PI/4 && (this.owner.rotation ) > Math.PI){
			this.images.cannon.style.top=-2*50+"px";
			}
		if((this.owner.rotation  ) < 3*Math.PI/2 && (this.owner.rotation) > 5*Math.PI/4){
			this.images.cannon.style.top=-3*50+"px";
			}
		if((this.owner.rotation  ) < 2*Math.PI && (this.owner.rotation ) > 3*Math.PI/2){
			this.images.cannon.style.top=-4*50+"px";
			}
		if((this.owner.rotation ) > 2*Math.PI){
			this.images.cannon.style.top=-5*50+"px";
			}

	}
})
