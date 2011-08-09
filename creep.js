//vsr x
var Creep = Class.create(Unit, {
// destest
initialize : function($super,x,y,scene, extension){
$super(x,y,scene,extension)
Map.grid[x][y].push(this)
alert("HERE");
// find the nearest empty tile
if(x == 0){
this.rotation = 0
this.top = this.y - Map.entry[0][1] * Map.pitch
this.bottom = (Map.entry[1][1] + 1) * Map.pitch- this.y
}else if(y == 0){
this.rotation = 90
this.top = (Map.entry[1][0] + 1) * Map.pitch - this.x
this.bottom = this.x - Map.entry[0][0] * Map.pitch
}else if(x == (Map.width - 1)){
this.rotation = 180
this.bottom = this.y - Map.entry[0][1] * Map.pitch
this.top = (Map.entry[1][1] + 1) * Map.pitch- this.y
}else if(y == Map.height - 1){
this.rotation = 270
this.top = this.x - Map.entry[0][0] * Map.pitch
this.bottom = (Map.entry[1][0] + 1) * Map.pitch - this.x
}
},

topBottomValues : function(){
if(this.rotation == 0){
return [Map.value(this.x, this.y - this.top - 1), Map.value(this.x, this.y + this.bottom + 1)]
}else if(this.rotation == 90){
return [Map.value(this.x + this.top + 1, this.y), Map.value(this.x - this.bottom - 1, this.y)]
}else if(this.rotation == 180){
return [Map.value(this.x - 1, this.y + this.top + 1), Map.value(this.x-1, this.y - this.bottom - 1)]
}else if(this.rotation == 270){
return [Map.value(this.x - this.top - 1, this.y-1), Map.value(this.x + this.bottom + 1, this.y-1)]
}
},
shouldNotTurn : function(ref){
if(this.rotation == 0){
return this.x < (this.turningPoint[0] + ref - 16)
}else if(this.rotation == 90){
return this.y < (this.turningPoint[1] + ref - 16)
}else if(this.rotation == 180){
return this.x > (this.turningPoint[0] - ref + 16)
}else if(this.rotation == 270){
return this.y > (this.turningPoint[1] - ref + 16)
}
},
tick : function(){
if(this.dead) return
var move = false
if(!this.rotating){
var values = this.topBottomValues()
var top = values[0]
var bottom = values[1]
if(top != 1 && bottom != 1){
move = true
this.turningPoint = [0, 0]

}
}
var newGridX = Math.floor(this.x / Map.pitch)
var newGridY = Math.floor(this.y / Map.pitch)
if(newGridX >= Map.width || newGridY >= Map.height || newGridX < 0 || newGridY < 0 ){
this.scene.escaped += 1
this.destroy()
}else if(this.gridX != newGridX || this.gridY != newGridY){
var oldArr = Map.grid[this.gridX][this.gridY]
oldArr.splice(oldArr.indexOf(this), 1);
this.gridX = newGridX
this.gridY = newGridY
if(newGridX < Map.width){
Map.grid[newGridX][newGridY].push(this);
}else{
// we are going out, do nothing for now;
}
}
this.target(); //for specifying the target to hit
},
getTargetfromCell: function(cell, targets){
if(cell.tower){
targets.push(cell.tower)
}
},

pickTarget: function(targets){
if(this.dead) return
targets.sort(function(a,b){return a.hp - b.hp})
var target = targets[0]
var dx = this.x - target.x
var dy = this.y - target.y
var theta = Math.atan(dy/dx) * 180 / Math.PI

if(dx < 0){
this.cannonTheta = theta - this.rotation
}else{
this.cannonTheta = theta - this.rotation + 180
}
if(this.reloaded){
target.takeHit(this.power)
if(target.dead&&this.scene.scenario)this.scene.scenario.notify({name:"creepDestroyedTower", method: false, unit:this})
this.reloaded = false;
this.fired = true;
}
},
die : function(){
this.destroy()
this.killed = true
this.scene.money += Math.round(this.price);
this.scene.stats.creepsDestroyed++
this.scene.score += Math.round(this.maxHp/20)*this.scene.config.level
},
destroy : function(){
var cell = Map.grid[this.gridX][this.gridY];
cell.splice(cell.indexOf(this), 1);
this.dead = true
}
})