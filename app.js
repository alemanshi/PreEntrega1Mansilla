// Función flecha para calcular la nota final del alumno
const calcularNotaFinal = () => {
    let continuar = true;

    // Solicito nombre y apellido del alumno al usuario
    while (continuar) {
      let nombre = prompt("Ingrese el nombre del alumno:");
      let apellido = prompt("Ingrese el apellido del alumno:");
        // Solicito las notas de los parciales al usuario
      let nota1 = Number(prompt("Ingrese la nota del primer parcial:"));
      let nota2 = Number(prompt("Ingrese la nota del segundo parcial:"));
      let nota3 = Number(prompt("Ingrese la nota del tercer parcial:"));
        // Calculo el promedio del alumno
      let notaFinal = (nota1 + nota2 + nota3) / 3;
        // Muestro el promedio del alumno
      alert("El promedio del alumno " + nombre + " " + apellido + " es: " + notaFinal);
        // Verifico si el alumno aprobó o no considerando el promedio
      if (notaFinal >= 7) {
        alert("Alumno aprobado.");
      } else {
        alert("Alumno desaprobado.");
      }
      // Pregunto si se desea calcular el promedio de otro alumno
      let respuesta = prompt("¿Desea calcular el promedio de otro alumno? (s/n)").toLowerCase();
      continuar = respuesta === "s";
    }
  }
  
  calcularNotaFinal();
