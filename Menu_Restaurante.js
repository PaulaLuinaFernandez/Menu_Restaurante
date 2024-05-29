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
    
    // Función para mostrar el menú y calcular el precio total
    function mostrarMenu(opciones, precios, comentarios) {
        let seleccion = parseInt(prompt(`Por favor, seleccione una opción introduciendo un número del 1 al 3:\n${opciones}`));

        while (!precios[seleccion]) {
           alert("Opción no válida. Por favor, seleccione un número válido: 1, 2 ó 3.");
           seleccion = parseInt(prompt(`Seleccione una opción:\n${opciones}`));
        }

        const precioSeleccionado = precios[seleccion];
        const comentarioAleatorio = comentarios[Math.floor(Math.random() * comentarios.length)];

        alert(`${comentarioAleatorio}`);
        return precioSeleccionado;
    }

    //Opciones para desayuno, comida y cena (fuera de hora el restaurante está cerrado)
    if (horaNumerica >= 6 && horaNumerica < 12) {
    //Desayuno    
      alert("¡Buenos días! El desayuno incluye una bebida, un plato dulce y un plato salado.");
      
      // Precios de bebidas
      const preciosBebidas = {
          1: 1.60,
          2: 1.30,
          3: 2.00
      };
  
      // Comentarios aleatorios para bebidas
      const comentariosBebidas = [
          "¡Excelente elección!",
          "¡Disfruta de tu bebida!",
          "¡Buena elección!"
      ];
  
      // Precios de comida dulce
      const preciosDulces = {
          1: 3.00,
          2: 1.80,
          3: 2.00
      };
  
      // Comentarios aleatorios para comida dulce
      const comentariosDulces = [
          "¡Delicioso!",
          "¡Disfrútalo!",
          "¡Es nuestra especialidad!"
      ];
  
      // Precios de comida salada
      const preciosSaladas = {
         1: 2.20,
         2: 2.50,
         3: 3.00
      };
  
      // Comentarios aleatorios para comida salada
      const comentariosSaladas = [
         "¡Buena elección!",
         "¡Buen provecho!",
         "¡Exquisito!"
      ];
  
      // Mostrar menús y calcular precios
      const bebidaTotal = mostrarMenu("1. Café 1.60 euros\n2. Té 1.30 euros\n3. Zumo 2.00 euros", preciosBebidas, comentariosBebidas);
      const dulceTotal = mostrarMenu("1. Pastel 3.00 euros\n2. Napolitana 1.80 euros\n3. Croissant 2.00 euros", preciosDulces, comentariosDulces);
      const saladaTotal = mostrarMenu("1. Tortilla 2.20\n2. Tosta jamón 2.50\n3. Tosta salmón 3.00", preciosSaladas, comentariosSaladas);
  
      // Calcular precio total
      const precioTotalDesayuno = bebidaTotal + dulceTotal + saladaTotal;
      alert(`Precio total: ${precioTotalDesayuno} euros`);
  
    } else if (horaNumerica >= 12 && horaNumerica < 16) {
    //Comida    
      alert("¡Hora de comer! El menú incluye un primer plato, segundo plato y postre.");
      
      // Precios de primer plato
      const preciosPrimeroComida = {
          1: 4.60,
          2: 5.30,
          3: 7.00
      };
  
      // Comentarios aleatorios para primer plato
      const comentariosPrimeroComida = [
          "¡Excelente elección!",
          "¡Disfruta de tu plato!",
          "¡Buena elección!"
      ];
  
      // Precios de segundo plato
      const preciosSegundoComida = {
          1: 8.00,
          2: 15.80,
          3: 7.00
      };
  
      // Comentarios aleatorios para segundo plato
      const comentariosSegundoComida = [
          "¡Delicioso!",
          "¡Disfrútalo!",
          "¡Es nuestra especialidad!"
      ];
  
      // Precios de postre
      const preciosPostreComida = {
         1: 4.20,
         2: 1.50,
         3: 2.00
      };
  
      // Comentarios aleatorios para postre
      const comentariosPostreComida = [
         "¡Buena elección!",
         "¡Buen provecho!",
         "¡Exquisito!"
      ];
  
      // Mostrar menús y calcular precios
      const primeroTotalComida = mostrarMenu("1. Sopa 4.60 euros\n2. Ensalada 5.30 euros\n3. Pasta 7.00 euros", preciosPrimeroComida, comentariosPrimeroComida);
      const segundoTotalComida = mostrarMenu("1. Hamburguesa 8.00 euros\n2. Merluza 15.80 euros\n3. Huevos fritos 7.00 euros", preciosSegundoComida, comentariosSegundoComida);
      const postreTotalComida = mostrarMenu("1. Tarta 4.20\n2. Cuajada 1.50\n3. Fruta 2.00", preciosPostreComida, comentariosPostreComida);
  
      // Calcular precio total
      const precioTotalComida = primeroTotalComida + segundoTotalComida + postreTotalComida;
      alert(`Precio total: ${precioTotalComida} euros`);
      
    } else if (horaNumerica >= 18 && horaNumerica < 22) {
    //Cena    
      alert("¡Buenas noches! El menú incluye un primer plato, segundo plato y postre.");
      
      // Precios de primer plato
      const preciosPrimeroCena = {
          1: 4.60,
          2: 5.30,
          3: 7.00
      };
  
      // Comentarios aleatorios para primer plato
      const comentariosPrimeroCena = [
          "¡Excelente elección!",
          "¡Disfruta de tu plato!",
          "¡Buena elección!"
      ];
  
      // Precios de segundo plato
      const preciosSegundoCena = {
          1: 8.00,
          2: 15.80,
          3: 7.00
      };
  
      // Comentarios aleatorios para segundo plato
      const comentariosSegundoCena = [
          "¡Delicioso!",
          "¡Disfrútalo!",
          "¡Es nuestra especialidad!"
      ];
  
      // Precios de postre
      const preciosPostreCena = {
         1: 4.20,
         2: 1.50,
         3: 2.00
      };
  
      // Comentarios aleatorios para postre
      const comentariosPostreCena = [
         "¡Buena elección!",
         "¡Buen provecho!",
         "¡Exquisito!"
      ];
  
      // Mostrar menús y calcular precios
      const primeroTotalCena = mostrarMenu("1. Puré de calabaza 4.60 euros\n2. Entremeses 5.30 euros\n3. Pasta 7.00 euros", preciosPrimeroCena, comentariosPrimeroCena);
      const segundoTotalCena = mostrarMenu("1. Escalope 8.00 euros\n2. Lubina 15.80 euros\n3. salchichas 7.00 euros", preciosSegundoCena, comentariosSegundoCena);
      const postreTotalCena = mostrarMenu("1. Pastel 4.20\n2. Flan 1.50\n3. Macedonia 2.00", preciosPostreCena, comentariosPostreCena);
  
      // Calcular precio total
      const precioTotalCena = primeroTotalCena + segundoTotalCena + postreTotalCena;
      alert(`Precio total: ${precioTotalCena} euros`);
      
    } else {
    //Restaurante cerrado    
      alert("Lo sentimos, estamos cerrados a esa hora.");
    }
};
  
elegirMenu();