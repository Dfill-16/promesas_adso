
function descargar() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("📁 archivo descargado correctamente")
    },2000)
  })
}

console.log(descargar().then(console.log))