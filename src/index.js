// function promesa() {
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve('Ejecutada con exito después de 8 segundos')
//     }, 8000);
//   })
// }

// async function ejecutar(){
//   try {
//     console.log("Ejecutando...")
//     const resultado = await promesa()
//     console.log(resultado)
//   } catch (error) {
//     console.log("Fallo en la promesa")
//   }
// }

// ejecutar()

// const bol = true

// function promesa(bol) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!bol) {
//         resolve('Ejecutada con exito después de 3 segundos')
//       }
//       else {
//         reject('Fallo en la promesa')
//       }
//     }, 3000);
//   })
// }

// async function ejecutar(bol) {
//   try {
//     console.log("Ejecutando..")
//     const resultado = await promesa(bol)
//     console.log(resultado)
//   } catch (error) {
//     const resultado = await promesa(bol)
//     console.log(resultado)
//   }
// }

// ejecutar(bol)

const num = Math.random()
console.log(num)

function Aleatorio(number){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(number >= 0.5){
        resolve('El numero es mayor a 0.5, se ejecutó')
      } else{
        reject('La promesa falló')
      }  
    }, 3000);
  })
}

async function ejecutar(number){
  try {
    console.log("Ejecutando")
    const resultado = await Aleatorio(number)
    console.log(resultado)
  } catch (error) {
    const resultado = await Aleatorio(number)
    console.log(resultado)
  }
}

ejecutar(num)