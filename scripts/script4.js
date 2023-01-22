function transformDegree (degree) {
   const celciusExist = degree.toUpperCase().iclude("C")
   const fahrenheitExist = degree.toUpperCase().iclude("F")

   if (!celciusExist && !fahrenheitExist){
      throw new Error("Temperatura inválida")
   }

}

try {
   transformDegree("25Z")
} catch (error) {
   console.log(error)
   
}