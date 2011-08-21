/**
 * @author Mazen
 */
var Move = Class.create({
	initialize : function(){
		this.layer = [[0,0,0,0,0,0,0,0],
					  [1,1,1,1,1,1,1,0],
					  [0,0,1,0,1,0,1,0],
					  [0,0,1,0,1,1,1,0],
					  [0,0,1,1,1,0,1,1]];
		// this.layer = [[0,0,0,0,0,0,0,0],
					  // [1,1,1,0,0,0,0,0],
					  // [0,0,1,0,0,0,0,0],
					  // [0,0,1,0,1,1,1,0],
					  // [0,0,1,1,1,0,1,1]];
		this.start = { x : 0 , y : 1};
		this.end = { x : 7 , y : 4};
		this.rutes = []
		var visited = [];
		for(var i=0;i<this.layer[0].length ; i++){
			visited.push([]);
		}
		this.bfs(this.start.y , this.start.x , [] , this.end,visited);
		for(var i=0; i<this.rutes.length ; i++){
			console.log(this.rutes[i]);
		}
	},
	getRute : function(){
		randomRute = Math.floor((this.rutes.length-1) * Math.random());
		return this.rutes[randomRute];
	},
	
	bfs : function(i,j,rute,end,visited){
		rute.push([i , j])
		visited[i][j] = true;
		if(i == end.y && j == end.x){
			this.rutes.push(rute.clone());
		}
		else{
			if(i+1 < this.layer.length && this.layer[i+1][j] && !visited[i+1][j]){
					this.bfs(i+1,j,rute,end,visited)
			}
			if(j+1 < this.layer[i].length &&this.layer[i][j+1] && !visited[i][j+1]){
					this.bfs(i,j+1,rute,end,visited)
			}
			if(i > 1 && this.layer[i-1][j] && !visited[i-1][j]){
					this.bfs(i-1,j,rute,end,visited)
			}
			if(j > 1 && this.layer[i][j-1] && !visited[i][j-1]){
					this.bfs(i,j-1,rute,end,visited)
			}
			
		}
		rute.pop();
		visited[i][j] = false;
	}
	
})
