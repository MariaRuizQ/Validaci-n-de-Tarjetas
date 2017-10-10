/*Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.*/
/*Creo una función que tenga como argumento cardNumber (que viene a ser el número de la tarjeta a ingresar)*/
function isValidCard (cardNumber){

  /*Por medio de la condicional if-else, verifico si cumple las condiciones*/
  /*Reazalizo la primera condición para ver si tiene un campo vacío, y si se cumple debe de votar una alerta 'DEBE DE INGRESAR UN NÚMERO'*/
  if (cardNumber === ''){
    alert ('DEBE DE INGRESAR UN NÚMERO');

    /*realizalo los pasoso si es que cumple con la condición*/
  } else {
    /*defino mis variables*/
    /*una variable suma, que sera para ir añadiendo el resto a la suma, por ello empieza desde 0*/
    var sum = 0;
    /*una variable alternativa que le damos el valor de falsa */
    var alternative = false;
    /*una varibal que recorra el tamaño -1 del número de tarjeta ingresado*/
    var i = cardNumber.length - 1;
    /*realizamos una condional while, que cumple la sentencia mencionada*/
    while (i>= 0){
       /*obtenemos la posición de cada número ingresado*/
        /*creo la variable para para que nos de la posición y le hago un parseInt*/
       var digits = parseInt(cardNumber.charAt(i),10);
    //si no es un número valido abortar
       /*hago una condional por si no en un número válido, que salfo false*/
       if (isNaN(digits)){
        return false;
    }
    /*realizo las condiciones para que la tarjeta sea válida*/
    if (alternative){
      digits *= 2;
      if (digits >  9){
        digits = (digits % 10) + 1;
      }
    }

    /*añado el resto a la suma*/
    sum = sum + cardNumber;

    i--;
  }
  /*determino si la tarjeta es válida*/
  return (sum % 10 === 0);
  }
}

var dgitsNum = isValidCard(prompt("¿Cuál es el número de su tarjeta a ingresar?"));
alert (isValidCard);
