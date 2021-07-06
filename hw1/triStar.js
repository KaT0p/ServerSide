let star = "";
for (let i = 0 ; i<5; i++ ){
    for (let j= 0; j<5; j++){
        if (j>i){
            break;
        }
        star = star + "*";
    }
    console.log(star);
    star = "";
}