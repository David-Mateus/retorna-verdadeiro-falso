function main(){
    var resp = document.getElementById("resp"); //Resp é a devolução dos dados
    var valor = parseFloat(document.getElementById("valor").value); // recebe um valor 
    
    if(valor > 0){
      resp.innerHTML = "P"
    }else{
      resp.innerHTML = "N"
    }
    
  }