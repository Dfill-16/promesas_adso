function descargar() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("📁 archivo descargado correctamente")
    },2000)
  })
}

async function ejecutar() {
  try {
    console.log("📁 Descarga en proceso...")
    const respuesta = await descargar()
    console.log(respuesta)
  } catch (error) {
    console.error("❌ Error al descargar archivo: ",error)
  }
}

ejecutar()