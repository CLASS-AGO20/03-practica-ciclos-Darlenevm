export default class App {

    factorial(numero){
        let i, total=1;
        for(i = 1; i<=numero; i++){
            total = total * i
        }
        return total;
    }
}

let app = new App();
console.log(app.factorial(5));
console.log(app.factorial(8));