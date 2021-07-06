let star = "";
for (let i = 0 ; i<5; i++ ){
    for (let j= 0; j<5; j++){
      if(i == 0){
        if (j < 4){
          star = star + " "
        }else{
          star = star + "*" 
        }
      }else if(i == 1){
        if (j < 3){
          star = star + " "
        }else{
          star = star + "*" 
        }
      }else if(i == 2){
        if (j < 2){
          star = star + " "
        }else{
          star = star + "*" 
        }
      }else if(i == 3){
        if (j < 1){
          star = star + " "
        }else{
          star = star + "*" 
        }
      }else{
        star = star + "*"
      }
    }
    console.log(star);
    star = "";
}