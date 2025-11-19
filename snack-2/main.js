
const squadre = [
    {nome:"Italia",  puntiFatti:0, falliSubiti:0},
    {nome:"Germania",  puntiFatti:0, falliSubiti:0},
    {nome:"Inghilterra",  puntiFatti:0, falliSubiti:0},
    {nome:"Monaco",  puntiFatti:0, falliSubiti:0},
];
 function getRandomNumbers(min,max) {
     return Math.floor(Math.random() * (max - min) ) + min;
     }

const squadreFalli=[]
for (let i = 0; i < squadre.length; i++) {
    const element = squadre[i];
    element.puntiFatti=getRandomNumbers(15,150);
    element.falliSubiti =getRandomNumbers(10,100);
const falli= element.falliSubiti;
   console.log(element)
  squadreFalli.push(element.nome, element.falliSubiti)  ;
}
 console.log(squadreFalli)






