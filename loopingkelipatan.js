for(var i = 0 ; i <= 100; i+= 5){
  if((i%2) === 0){
    console.log(i+" adalah angka genap");
  }else{
    console.log(i+" adalah angka ganjil");
  }
}

for(var i = 1; i<=100; i+=2){
  if((i%3)!==0){
      console.log("");
  }else{
    console.log(i+" merupakan kelipatan dari 3");
  }
}
for(var i =1; i<=100; i+=5){
   if((i%6)!==0){
      console.log("");
  }else{
    console.log(i+" merupakan kelipatan dari 6");
  }
}
for(var i =1; i<=100; i+=9){
   if((i%10)!==0){
      console.log("");
  }else{
    console.log(i+" merupakan kelipatan dari 10");
  }
}
