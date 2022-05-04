let promesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random();
    if (numero >= 0.5) resolve(numero);
    reject(numero);
  }, 2000);
});

promesa
  .then((data) => { console.log("Exito", data) })
  .catch((data) => { console.log("Error", data) })


let promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "uno");
});

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "dos");
});

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "tres");
});

promesa1
.then((data1) => {
  promesa2
    .then((data2) => {
      promesa3
      .then((data3) => {
        console.log(data1,data2,data3)
      })
    })
})

Promise.all([promesa1,promesa2,promesa3])
  .then((valores) => {
    console.log(valores)
  })
  .catch((errores) => {
    console.log(errores)
  })

// [null, error, null]









