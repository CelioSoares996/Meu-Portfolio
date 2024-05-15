/*Menu*/
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () =>{
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';

    }else{
        nav.style.display = 'none';
    }
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function enviarEmail(){
    const bodyMessage = `Nome: ${fullName.value}<br> Email: 
    ${email.value}<br> Telefone: ${phone.value}<br> Mensagem: ${message.value}` ;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "franciscocelio936@gmail.com",
        Password : "D1A5373A7B8CE02A7251FB7167396654A527",
        To : 'franciscocelio936@gmail.com',
        From : "franciscocelio936@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Enviado!",
                text: "Sua Mensagem foi enviada sucesso!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    enviarEmail();
});

