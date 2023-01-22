function verificar() {
   var data = new Date 
   var ano = data.getFullYear()
   var fAno = document.getElementById('txtano')
   var res = document.getElementById('res')

   if(fAno.value.length == 0 || Number(fAno.value) > ano) {
   //   alert('[ERRO] Verifique os dados novamente')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fAno.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked) {
         genero = "Homem"
         if(idade >= 0 && idade < 10){
            img.setAttribute('src', './assets/menino.webp')
         }else if(idade < 21) {
            img.setAttribute('src', './assets/moço.webp')//setAttribute add um novo atributo ou modeifica o valor de um já existente
         }else if(idade < 50) {
            img.setAttribute('src', './assets/homem.webp')
         } else {
            img.setAttribute('src', './assets/velho.webp')
         }
         
      } else if (fsex[1].checked) {
         genero = "Mulher"
         if(idade >= 0 && idade < 10){
            img.setAttribute('src', './assets/menina.jpeg')
         }else if(idade < 21) {
            img.setAttribute('src', './assets/moça.jpeg')

         }else if(idade < 50) {
            img.setAttribute('src', './assets/mulher.jpeg')

         } else {
            img.setAttribute('src', './assets/velha.jpeg')
            
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}