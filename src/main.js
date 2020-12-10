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
        while (i<=numero){
            string +='*';
            i++;
        }
        return string;
    }

}

let app = new App();
console.log(app.factorial(5));
console.log(app.factorial(8));
console.log("");
console.log(app.convertirAString(3));

