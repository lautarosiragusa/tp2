const pizzas=[
{id:1, nombre:"pizza muzarella", ingredientes:["queso","tomate","cebolla"], precio:890},
{id:2, nombre:"pizza napolitana", ingredientes:["salsa","tomate","queso","oregano"], precio:560},
{id:3, nombre:"pizza carbonara", ingredientes:["bacon","huevo","queso"], precio:1100},
{id:4, nombre:"pizza margarita", ingredientes:["ajo","tomate","albahaca","queso"], precio:1300},
{id:5, nombre:"pizza fugazzeta", ingredientes:["cebolla","oregano","aceituna","mozarella"], precio:890},
{id:6, nombre:"pizza hawaiana", ingredientes:["piña","jamon","salsa"], precio:1200},

]

 //Las pizzas que tenagan un id impar
const impares=[];

pizzas.filter(pizza=>{
    if(pizza.id%2 !=0){
 impares.push(pizza.nombre)
 impares.toString}
})

console.log(`Las pizzas con id impar son ${impares}`)


//Hay alguna pizza que valga menos de $600?
pizzas.find(pizza=>{
    if(pizza.precio<600){
    console.log(`La ${pizza.nombre} vale menos de $600`)
    }
})

//Los nombres de todas las pizzas
pizzas.forEach(pizza=> console.log(`Nombre: ${pizza.nombre}`));

//Los precios de las pizzas 
pizzas.forEach(pizza=> console.log(`Precio =$${pizza.precio}`));

//Nombres de las pizzas con sus precios
pizzas.forEach(pizza=> console.log(`${pizza.nombre},su precio es de $${pizza.precio}`));




