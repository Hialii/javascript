

function calculatetemp(temp) {
   const  celciusExists = temp.toUpperCase().includes("C")
   const fahrenheitExists = temp.toUpperCase().includes("F")

   if(!celciusExists && !fahrenheitExists) {
      throw new Error("Grau não identificado")
   }
}

try {

} catch (error) {
   calculatetemp("50F")
   calculatetemp("50Z")
   console.log(error.message)
}