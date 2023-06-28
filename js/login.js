

window.alert('Si todavía no creaste tu usuario, podés ingresar en modo "chusmear". \n\t usuario: invitade \n\t contraseña: invitade \nPara registrarte y empezar a comprar, por favor ingresá en Sign Up.')

let user = prompt('Ingresá tu Usuario: ');
let pass = prompt('Ingresá tu Contraseña: ');

console.log(user);
console.log(pass);

if (user == 'invitade' && pass == 'invitade') {
    alert('Estás ingresando en modo "CHUSMEAR"');
    window.location.href = '../pages/chusmear.html';
} else {
    alert('Usuario o password incorrecto');
    location.href = '../pages/error.html';
}
