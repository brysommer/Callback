//Незнаю, не було сказано звідки отриматі дані, і куди виведені. 
//Тому зробив якнайпростіше


let name = "Roman";
let surname = "Skopovych";

const sayHello = (name, surname) => {
    let message = 'Привіт, ' + name + ' ' + surname;
    console.log(message);
};

sayHello(name, surname);