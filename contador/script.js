function contar(){
   let inicio = document.getElementById('inicio')
   let fim = document.getElementById('fim')
   let passo = document.getElementById('passo')

   let resultado = document.getElementById('res')

   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      alert("[ERROR]")
   } else {
     resultado.innerHTML = "Contando: "
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(passo.value)

     if (i < f) {
      for(let c = i; c <= f; c += p) {
         resultado.innerHTML += `${c} `
      }} else {
         for(let c = i; c >= f; c -= p ) {
            resultado.innerHTML += `${c} `
         }
      }
     
     
   
   }
}