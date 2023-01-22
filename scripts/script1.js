let family = {
   incomes: [2500, 3200, 250, 360],
   expences: [60,150,600,128,2000,456,1500, 3000  ]
}


function sum(array) {
   let total = 0;

   for(let value of array) {
      total += value
   }

   return total;

}
function calculateBalance(){
   const calculateIncomes = sum(family.incomes);
   const calculateExpensive = sum(family.expences);

   const total = calculateIncomes - calculateExpensive

   const positive = total > 0

   let mesage = "negativo";

   if(positive) {
    mesage = "positivo"

    console.log("Seu saldo é " + mesage + ": " + total)
   } else {
    mesage

    console.log("Seu saldo é " + mesage + ": " + total)
   }

 
}

calculateBalance()
