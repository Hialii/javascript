function sayname(name = "") {
   if (name === "") {
      throw new Error("Nome é obrigatório")
   }
}

 try {
    sayname()
 } catch (e){
   console.log(e.message)
}