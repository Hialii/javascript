function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('img')
   var data = new Date()
   var hora = data.getHours()

   msg.innerHTML = `Agora são ${hora} horas`
   
   if(hora >= 0  && hora < 12) {
      img.src = " assets/manha.jpg"
   }else if(hora >= 12 && hora < 18) {
      img.src = " assets/tarde.jpg"
   } else {
      img.src = "noite.jpg"
   }
}