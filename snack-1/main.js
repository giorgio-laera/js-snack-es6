
const bikes = [
    {brand:"Bianchi", weight:77},
    {brand:"Look", weight:54},
    {brand:"Willier", weight:40},
    {brand:"Pinarello", weight:35}
];
 let minWeight=bikes[0].weight; 
 let brandBike=bikes[0].brand;
for (let i = 0; i < bikes.length; i++) {
  
    
    if (minWeight <= bikes[i].weight) {
       
    }else{
     minWeight = bikes[i].weight;
   brandBike=bikes[i].brand;
    }
 console.log(minWeight);
 console.log(brandBike);
}
document.getElementById("result").innerText=`Il brand con la bici più leggera è ${ brandBike} con un peso di ${minWeight} Kg`