const elegirMenu = () => {
  
  // Validar y transformar hora
  let horaIngresada;
  let horaValida = false;

  while (!horaValida) {
    horaIngresada = prompt("¡Bienvenido a Bottega Restaurant! Por favor, introduce la hora en formato HH:MM, por ejemplo 14:30.");
    horaValida = /^([01]\d|2[0-3]):([0-5]\d)$/.test(horaIngresada);

    if (!horaValida) {
      alert("Formato de hora incorrecto. Por favor, vuelva a intentarlo.");
    }
  }
  const [horas, minutos] = horaIngresada.split(":");
  const horaNumerica = parseInt(horas);
  
  // Función para mostrar el menú y la factura
  function mostrarMenu(opciones, articulos, comentarios) {
    let seleccion = parseInt(prompt(`Por favor, seleccione una opción introduciendo un número del 1 al 3:\n${opciones}`));

    while (!articulos[seleccion]) {
      alert("Opción no válida. Por favor, seleccione un número válido: 1, 2 ó 3.");
      seleccion = parseInt(prompt(`Seleccione una opción:\n${opciones}`));
    }

    const articuloSeleccionado = articulos[seleccion].nombre;
    const precioSeleccionado = articulos[seleccion].precio;
    const comentarioAleatorio = comentarios[Math.floor(Math.random() * comentarios.length)];

    alert(`${comentarioAleatorio} Su precio es ${precioSeleccionado} €.`);
    return { n: articuloSeleccionado, p: precioSeleccionado};
  }

  //Opciones para desayuno, comida y cena (fuera de hora el restaurante está cerrado)
  if (horaNumerica >= 6 && horaNumerica < 12) {
  //Desayuno    
    alert("¡Buenos días! El desayuno incluye una bebida, un plato dulce y un plato salado.");
    
    // Opciones de bebidas
    const bebidas = {
      1: {nombre: "Café", precio: 1.6},
      2: {nombre: "Té", precio: 1.3},
      3: {nombre: "Zumo", precio: 2}
    };

    // Comentarios aleatorios para bebidas
    const comentariosBebidas = [
      "¡Excelente elección!",
      "¡Disfruta de tu bebida!",
      "¡Buena elección!"
    ];

    // Opciones de comida dulce
    const dulces = {
      1: {nombre: "Pastel", precio: 3},
      2: {nombre: "Napolitana", precio: 1.8},
      3: {nombre: "Croissant", precio: 2}
    };

    // Comentarios aleatorios para comida dulce
    const comentariosDulces = [
      "¡Delicioso!",
      "¡Disfrútalo!",
      "¡Es nuestra especialidad!"
    ];

    // Opciones de comida salada
    const salados = {
      1: {nombre: "Tortilla", precio: 2.2},
      2: {nombre: "Tosta jamón", precio: 2.5},
      3: {nombre: "Tosta salmón", precio: 3}
    };

    // Comentarios aleatorios para comida salada
    const comentariosSalados = [
      "¡Buena elección!",
      "¡Buen provecho!",
      "¡Exquisito!"
    ];

    // Mostrar menús y elegir opción
    const bebidaMenu = mostrarMenu(`1. ${bebidas[1].nombre} ${bebidas[1].precio} €\n2. ${bebidas[2].nombre} ${bebidas[2].precio} €\n3. ${bebidas[3].nombre} ${bebidas[3].precio} €`, bebidas, comentariosBebidas);
    const dulceMenu = mostrarMenu(`1. ${dulces[1].nombre} ${dulces[1].precio} €\n2. ${dulces[2].nombre} ${dulces[2].precio} €\n3. ${dulces[3].nombre} ${dulces[3].precio} €`, dulces, comentariosDulces);
    const saladoMenu = mostrarMenu(`1. ${salados[1].nombre} ${salados[1].precio} €\n2. ${salados[2].nombre} ${salados[2].precio} €\n3. ${salados[3].nombre} ${salados[3].precio} €`, salados, comentariosSalados);

    // Calcular precio total y mostrar factura
    const precioTotalDesayuno = bebidaMenu.p + dulceMenu.p + saladoMenu.p;
    alert(`Aquí le presento su factura:\n\n${bebidaMenu.n} --> ${bebidaMenu.p} €\n${dulceMenu.n} --> ${dulceMenu.p} €\n${saladoMenu.n} --> ${saladoMenu.p} €\n\nTotal: ${precioTotalDesayuno} €`);
  
  } else if (horaNumerica >= 12 && horaNumerica < 16) {
  //Comida    
    alert("¡Buenas días! El menú incluye un primer plato, segundo plato y postre.");
    
    // Opciones de primer plato
    const primeroComida = {
      1: {nombre: "Sopa", precio: 4.6},
      2: {nombre: "Ensalada", precio: 5.3},
      3: {nombre: "Pasta", precio: 7}
    };

    // Comentarios aleatorios para primer plato
    const comentariosPrimeroComida = [
      "¡Excelente elección!",
      "¡Disfruta de tu plato!",
      "¡Buena elección!"
    ];

    // Opciones de segundo plato
    const segundoComida = {
      1: {nombre: "Hamburguesa", precio: 8},
      2: {nombre: "Merluza", precio: 15.8},
      3: {nombre: "Huevos fritos", precio: 7}
    };

    // Comentarios aleatorios para segundo plato
    const comentariosSegundoComida = [
      "¡Delicioso!",
      "¡Disfrútalo!",
      "¡Es nuestra especialidad!"
    ];

    // Opciones de postre
    const postreComida = {
      1: {nombre: "Tarta", precio: 4.2},
      2: {nombre: "Cuajada", precio: 1.5},
      3: {nombre: "Fruta", precio: 2}
    };

    // Comentarios aleatorios para postre
    const comentariosPostreComida = [
      "¡Buena elección!",
      "¡Buen provecho!",
      "¡Exquisito!"
    ];

    // Mostrar menús y elegir opción
    const primeroComidaMenu = mostrarMenu(`1. ${primeroComida[1].nombre} ${primeroComida[1].precio} €\n2. ${primeroComida[2].nombre} ${primeroComida[2].precio} €\n3. ${primeroComida[3].nombre} ${primeroComida[3].precio} €`, primeroComida, comentariosPrimeroComida);
    const segundoComidaMenu = mostrarMenu(`1. ${segundoComida[1].nombre} ${segundoComida[1].precio} €\n2. ${segundoComida[2].nombre} ${segundoComida[2].precio} €\n3. ${segundoComida[3].nombre} ${segundoComida[3].precio} €`, segundoComida, comentariosSegundoComida);
    const postreComidaMenu = mostrarMenu(`1. ${postreComida[1].nombre} ${postreComida[1].precio} €\n2. ${postreComida[2].nombre} ${postreComida[2].precio} €\n3. ${postreComida[3].nombre} ${postreComida[3].precio} €`, postreComida, comentariosPostreComida);

    // Calcular precio total y mostrar factura
    const precioTotalComida = primeroComidaMenu.p + segundoComidaMenu.p + postreComidaMenu.p;
    alert(`Aquí le presento su factura:\n\n${primeroComidaMenu.n} --> ${primeroComidaMenu.p} €\n${segundoComidaMenu.n} --> ${segundoComidaMenu.p} €\n${postreComidaMenu.n} --> ${postreComidaMenu.p} €\n\nTotal: ${precioTotalComida} €`);
  
  } else if (horaNumerica >= 18 && horaNumerica < 22) {
  //Cena    
    alert("¡Buenas noches! El menú incluye un primer plato, segundo plato y postre.");  
    
    // Opciones de primer plato
    const primeroCena = {
      1: {nombre: "Puré de calabaza", precio: 4.6},
      2: {nombre: "Entremeses", precio: 5.3},
      3: {nombre: "Pasta", precio: 7}
    };

    // Comentarios aleatorios para primer plato
    const comentariosPrimeroCena = [
      "¡Excelente elección!",
      "¡Disfruta de tu plato!",
      "¡Buena elección!"
    ];

    // Opciones de segundo plato
    const segundoCena = {
      1: {nombre: "Escalope", precio: 8},
      2: {nombre: "Lubina", precio: 15.8},
      3: {nombre: "Salchichas", precio: 7}
    };

    // Comentarios aleatorios para segundo plato
    const comentariosSegundoCena = [
      "¡Delicioso!",
      "¡Disfrútalo!",
      "¡Es nuestra especialidad!"
    ];

    // Opciones de postre
    const postreCena = {
      1: {nombre: "Pastel", precio: 4.2},
      2: {nombre: "Flan", precio: 1.5},
      3: {nombre: "Macedonia", precio: 2}
    };

    // Comentarios aleatorios para postre
    const comentariosPostreCena = [
      "¡Buena elección!",
      "¡Buen provecho!",
      "¡Exquisito!"
    ];

    // Mostrar menús y elegir opción
    const primeroCenaMenu = mostrarMenu(`1. ${primeroCena[1].nombre} ${primeroCena[1].precio} €\n2. ${primeroCena[2].nombre} ${primeroCena[2].precio} €\n3. ${primeroCena[3].nombre} ${primeroCena[3].precio} €`, primeroCena, comentariosPrimeroCena);
    const segundoCenaMenu = mostrarMenu(`1. ${segundoCena[1].nombre} ${segundoCena[1].precio} €\n2. ${segundoCena[2].nombre} ${segundoCena[2].precio} €\n3. ${segundoCena[3].nombre} ${segundoCena[3].precio} €`, segundoCena, comentariosSegundoCena);
    const postreCenaMenu = mostrarMenu(`1. ${postreCena[1].nombre} ${postreCena[1].precio} €\n2. ${postreCena[2].nombre} ${postreCena[2].precio} €\n3. ${postreCena[3].nombre} ${postreCena[3].precio} €`, postreCena, comentariosPostreCena);

    // Calcular precio total y mostrar factura
    const precioTotalCena = primeroCenaMenu.p + segundoCenaMenu.p + postreCenaMenu.p;
    alert(`Aquí le presento su factura:\n\n${primeroCenaMenu.n} --> ${primeroCenaMenu.p} €\n${segundoCenaMenu.n} --> ${segundoCenaMenu.p} €\n${postreCenaMenu.n} --> ${postreCenaMenu.p} €\n\nTotal: ${precioTotalCena} €`);
 
  } else {
  //Restaurante cerrado    
    alert("Lo sentimos, estamos cerrados a esa hora.");
  }
};

elegirMenu();
