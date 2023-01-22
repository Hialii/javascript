
function getnota(nota){
   let A = nota >= 90 && nota <= 100
   let B = nota >= 80 && nota < 90
   let C = nota >= 70 &&  nota < 80
   let D = nota >= 60 && nota < 70
   let F = nota < 60

   let notafinal;

   if(A){
      notafinal = "A" 
   } else if(B) {
      notafinal = "B"
   } else if(C) {
      notafinal = "C"
   } else if(D) {
      notafinal = "D"
   }else if(F) {
   notafinal = "F"
   } else {
      notafinal = "Nota Inválida"
   }

   return notafinal;
}

console.log(getnota(65))
console.log(getnota(90))
console.log(getnota(101))
console.log(getnota(74))
