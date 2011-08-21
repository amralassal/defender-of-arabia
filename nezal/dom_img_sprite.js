/**
 * @author Mazen
 */
var DomImgSprite = Class.create(Sprite, {

	animated : false,
	clickable : false,
	minAreaZIndex : 10000000,
	animations : null,

	initialize : function($super, owner, imgAssets, properties) {
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
		//console.log( imgAssets )
		if(properties && properties.flipped) {
			this.div.addClassName('flippedSprite')
		}
		//console.log(imgAssets.noOfFrames)
		this.img = this.currentAnimation.img
		this.div.appendChild(this.img)
		this.currentAnimationFrame = 0
		this.currentDirectionFrame = 0
		this.noOfAnimationFrames = this.currentAnimation.noOfFrames
		this.noOfDirections = 8
		this.img.setStyle({
			height:"auto"
		});
		this.render()
	},
	switchAnimation : function(name) {
		var prevAnimation = this.currentAnimation
		this.currentAnimation = this.animations[name]
		this.currentAnimationFrame = 0
		this.currentDirectionFrame = 0
		this.replaceImg(this.currentAnimation.img)
		this.div.style.width = this.currentAnimation.imgWidth + "px"
		this.div.style.height = this.currentAnimation.imgHeight + "px"
		this.div.style.top = this.position().y + prevAnimation.imgHeight -  this.currentAnimation.imgHeight +"px"
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
	setCursor : function( style ) {
		this.img.setStyle({
			cursor : style
		});
	},
	setImgWidth : function(width) {
		this.imgWidth = width
		this.img.setStyle({
			width:(width + "px")
		});
	},
	setImgHeight : function(height) {
		this.imgHeight = height
		this.img.setStyle({
			height:(height + "px")
		});
	},
	replaceImg : function(img) {
		this.div.removeChild(this.img)
		this.img = img
		this.div.appendChild(this.img)
	},
	render : function($super) {
		$super();
		//test
		this.advanceAnimation();
		
		if (this.clickable) {
			this.div.setStyle({
				zIndex: (this.owner.coords.y + this.minAreaZIndex)
			})
		} else {
			if(this.currentAnimation.direction == 0) {
				this.img.setStyle({
					marginLeft: ((-this.currentAnimation.imgWidth/this.currentAnimation.noOfFrames) * this.currentAnimationFrame + "px"),
					marginTop: ((-this.currentAnimation.startY) * this.currentAnimation.imgHeight + "px")
				});
			} else {
				this.img.setStyle({
					marginTop: ((-this.currentAnimation.imgHeight/this.currentAnimation.noOfFrames) * this.currentAnimationFrame + "px"),
					marginLeft: ((-this.currentAnimation.startY) * this.currentAnimation.imgWidth + "px")
				});
			}
			if(this.owner.shake) {
				Effect.Shake(this.div)
				this.owner.shake = false
			}
		}
		var renderSelf = this
		setTimeout( function() { renderSelf.render()},100);
	},
	destroy : function($super) {
		$super()
		if(this.clickDiv && this.clickDiv.parentNode) {
			this.clickDiv = $(this.clickDiv.parentNode.removeChild(this.clickDiv))
		}
	}
})