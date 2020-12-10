export default class App {

    factorial(numero){
        let i, total = 1;
        for(i = 1; i<= numero; i++){
            total = total * i
        }
        return total;
    }
    convertirAString(numero){
        let i = 1;
        let string = "";
        while (i <= numero){
            string += '*';
            i++;
        }
        return string;
    }
    obtenerDivisibles(numero){
        let i = 1;
        let contador = 0;
        do{
            if(numero % i == 0){
                contador +=1;
            }
            i++;
        } while (i <= numero);
        return contador;
    }
    elevar(numero, potencia){
        let i, total = numero;
        for(i = 1; i < potencia; i++){
            total = total*numero;
        }
        return total;
    }

}

let app = new App();
console.log(app.factorial(5));
console.log("");
console.log(app.convertirAString(3));
console.log("");
console.log(app.obtenerDivisibles(6));
console.log("");
console.log(app.elevar(3,4));


