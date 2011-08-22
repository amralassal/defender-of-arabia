var Level = Class.create({
	initialize : function(textJSON){
		var data = eval(textJSON);
		
		this.map = data.map;
		this.backGround = data.backGround;
		this.layers = data.arrayLayer;
		for(var j=0;j<this.layers.length;j++)
		{
			var visited = [];
			for(var i=0;i<this.layers[j].array.length;i++){
				visited.push([]);
			}
			this.bfs(this.layers[j].start[0].y , this.layers[j].start[0].x , [] ,this.layers[j].end[0],visited,this.layers[j]);
	
		}
	},
	getRute : function(layer){
		randomRute = Math.floor((layer.rutes.length-1) * Math.random());
		return layer.rutes[randomRute];
	},
	
	bfs : function(i,j,rute,end,visited,layer){
		rute.push([i , j]);
		visited[i][j] = true;
		if(i == end.y && j == end.x){
			layer.rutes.push(rute.clone());
		}
		else{
			if(i+1 < layer.array.length && layer.array[i+1][j] && !visited[i+1][j]){
					this.bfs(i+1,j,rute,end,visited,layer)
			}
			if(j+1 < layer.array.length && layer.array[i][j+1] && !visited[i][j+1]){
					this.bfs(i,j+1,rute,end,visited,layer)
			}
			if(i > 1 && layer.array[i-1][j] && !visited[i-1][j]){
					this.bfs(i-1,j,rute,end,visited,layer)
			}
			if(j > 1 && layer.array[i][j-1] && !visited[i][j-1]){
					this.bfs(i,j-1,rute,end,visited,layer)
			}
			
		}
		rute.pop();
		visited[i][j] = false;
	}
	
})
