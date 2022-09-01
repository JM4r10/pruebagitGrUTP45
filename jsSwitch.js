let numero;
numero = parseInt(prompt('Ingrese un número entre 1 y 5')) 
// prompt arroja texto
switch(numero){
    case 1:
        document.write('uno');
        break;
    case 2:
        document.write('dos');
        break;
    case 3:
        document.write('tres')
        break;
    case 4:
        document.write('cuatro')
        break;
    case 5:
        document.write('cinco')
        break;
    default:
        document.write('Valor debe estar entre 1 y 5')
}

let ciudad;
ciudad= prompt('Ingrese ciudad:')
switch(ciudad){
    case 'Medellín':
        document.write('Medellín');
        break;
    case 'Bogotá':
        document.write('Bogotá');
        break;
}

