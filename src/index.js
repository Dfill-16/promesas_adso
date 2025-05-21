function promesa() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('Ejecutada con exito después de 8 segundos')
    }, 8000);
  })
}

async function ejecutar(){
  try {
    console.log("Ejecutando...")
    const resultado = await promesa()
    console.log(resultado)
  } catch (error) {
    console.log("Fallo en la promesa")
  }
}

ejecutar()