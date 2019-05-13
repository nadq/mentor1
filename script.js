
document.getElementById("btn").onclick = function (){
	var userNum=(parseInt(document.getElementById("number").value));
	var i=userNum+1;
	var BlanckArr=[];
    var j = 0;
    var save;
//Making an arrey from N+1 times arreys
	for(x=0;x<i;x++){
		var arr= new Array(userNum*10);
		arr.fill("-");
		BlanckArr.push(arr);
	}
//First M
	for(x=userNum;x>=0;x--){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;       
	}
    j -= 1;

	for(x=0;x<=userNum;x++){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;		
	}
	j -= 1;

	for(x=userNum;x>=0;x--){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;     
	}
	j -= 1;

	for(x=0;x<=userNum;x++){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;		
	}
	j = j + 2;

//Second M
	for(x=userNum;x>=0;x--){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;    
	}
    j -= 1;

     for(x=0;x<=userNum;x++){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;	
	}
	j -= 1;
	for(x=userNum;x>=0;x--){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;
	}
	j -= 1;
	for(x=0;x<=userNum;x++){
		for(y = 0;y<userNum;y++){
			BlanckArr[x][j]="*";
        	j++;
		}
		j = (j - userNum)+1;		
	}
	document.getElementById("myResult").rows=i*2;
	document.getElementById("myResult").cols = arr.length*3;
	document.getElementById("myResult").value=BlanckArr.join("\n").toString();
	
};
