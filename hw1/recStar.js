let star = "";
for (let i = 0 ; i<5; i++ ){
    for (let j= 0; j<5; j++){
      if(i < 4 && i > 0){
        if (j == 0 || j == 4){
          star = star + "*"
        }else{
          star = star + " " 
        }
      }else{
        star = star + "*"
      }
    }
    console.log(star);
    star = "";
}