function startUp(){
    var table='';
    for(var r = 1; r<= 15; r++){
        table +='<tr>';
        for(var c = 1; c<=15; c++){
            table +='<td>' + r+','+c + '</td>';
        }
        table +='</tr>';
    }
    
    document.getElementById("table").innerHTML ='<table>' + table + '</table>';
}
function drawTable() {   
    var table='';
    var cols = document.getElementById("cols").value;;
    var rows = document.getElementById("rows").value;
     
    if((cols<=24 && rows <=99) && cols >0 && rows > 0){
        console.log(cols);
        console.log(rows);
        for(var r = 1; r<= rows; r++){
            table +='<tr>';
            for(var c = 1; c<=cols; c++){
                table +='<td>' + r+','+c + '</td>';
            }
            table +='</tr>';
        }
        
        document.getElementById("table").innerHTML ='<table>' + table + '</table>';
    }
    else{
        document.getElementById("table").innerHTML= 'nothing'; 
        document.getElementById("table").innerHTML='Column value between 1-24 <br>Row value between 1-99';       
    }   
}
function Reset(){
    document.getElementById("table").innerHTML= '';
}