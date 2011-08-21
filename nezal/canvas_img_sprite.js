/**
 * @author Mazen
 */
var CanvasImgSprite = Class.create(Sprite, {

	animated : false,
	clickable : false,
	minAreaZIndex : 10000000,
	animations : null,

	initialize : function($super, owner, imgAssets, properties) {
		this.ctx = $("gamecanvas").getContext('2d');
		this.animations = {}
		this.createAnimation({
			name : 'normal',
			img : $(imgAssets.img),
			noOfFrames : imgAssets.noOfFrames || 1,
			direction : imgAssets.direction || 0 ,
			startY : imgAssets.startY || 0
		})
		this.currentAnimation = this.animations['normal']
		owner.imgWidth = this.currentAnimation.imgWidth
		owner.imgHeight = this.currentAnimation.imgHeight
		$super(imgAssets,owner,properties);
		
		this.img = this.currentAnimation.img
		this.currentAnimationFrame = 0
		this.currentDirectionFrame = 0
		this.noOfAnimationFrames = this.currentAnimation.noOfFrames
		this.noOfDirections = 8
		//this.render()
	},
	switchAnimation : function(name) {
		var prevAnimation = this.currentAnimation
		this.currentAnimation = this.animations[name]
		this.currentAnimationFrame = 0
		this.currentDirectionFrame = 0
		this.replaceImg(this.currentAnimation.img)
		this.sWidth = this.currentAnimation.imgWidth + "px"
		this.sHeight = this.currentAnimation.imgHeight + "px"
		this.sy = this.position().y + prevAnimation.imgHeight -  this.currentAnimation.imgHeight +"px"
		this.img = this.currentAnimation.img
		this.noOfAnimationFrames = this.currentAnimation.noOfFrames
	},
	//options contain {name,noOfFrames, img, imageWidth, imgHeight, direction, startY}

	createAnimation : function(options) {
		var img = options.img
		var noOfFrames = options.noOfFrames
		var direction = options.direction || 0
		var startY = options.startY || 0
		var imgWidth = 0
		var imgHeight = 0
		if(direction == 1) {
			imgWidth = img.width / noOfFrames
			imgHeight = img.height
		} else {
			imgWidth = img.width
			imgHeight = img.height / noOfFrames
		}
		var animation = {
			img:img.clone(),
			noOfFrames : noOfFrames,
			imgWidth : imgWidth,
			imgHeight : imgHeight,
			startY:startY,
			direction:direction
		}
		this.animations[options.name] = animation
		return animation
	},
	advanceAnimation:function(){
		this.currentAnimationFrame=(this.currentAnimationFrame+1)%this.currentAnimation.noOfFrames;
	},
	setImgWidth : function(width) {
		this.imgWidth = width
	},
	setImgHeight : function(height) {
		this.imgHeight = height
	},
	replaceImg : function(img) {
		this.img = img
	},
	render : function() {
		//test
		 // this.ctx =this.layer.ctx;
		
		this.advanceAnimation();
			if(this.currentAnimation.direction == 0) {
				//render
				// marginLeft: ((-this.currentAnimation.imgWidth/this.currentAnimation.noOfFrames) * this.currentAnimationFrame + "px"),
					// marginTop: ((-this.currentAnimation.startY) * this.currentAnimation.imgHeight + "px")
				// this.ctx.drawImage(this.img,(this.currentAnimation.imgWidth/this.currentAnimation.noOfFrames),this.currentAnimation.startY * this.currentAnimation.imgHeight, this.currentAnimation.imgWidth, this.currentAnimation.imgHeight , this.owner.x, this.owner.y, this.owner.width, this.owner.height)
				this.ctx.drawImage(this.img,10,10);
			} else {
				//render
			}
		var renderSelf = this
	//	setTimeout( function() { renderSelf.render()},100);
	},
	destroy : function($super) {
		$super()
		if(this.clickDiv && this.clickDiv.parentNode) {
			this.clickDiv = $(this.clickDiv.parentNode.removeChild(this.clickDiv))
		}
	}
})