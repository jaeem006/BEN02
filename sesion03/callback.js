// function primero() {
//   //Simula petición a un servidor con muchos datos
//   setTimeout(function () {
//     console.log("Soy el 1");
//   }, 1000);
// }

// function segundo() {
//   console.log("Soy el 2");
// }

// function tercero() {
//   console.log("Soy el 3");
// }

// primero();
// segundo();
// tercero();


setTimeout(function () {
  console.log("Soy el 1");
  setTimeout(function () {
    console.log("Soy el 2");
    setTimeout(function () {
      console.log("Soy el 3");
      setTimeout(function () {
        console.log("Soy el 4");
        // Podría a ver más llamadas asíncronas
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
