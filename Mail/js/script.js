//Es.1 Mail


const validEmails = ['fanco.franco@gmail.com','giurgicatalin@gmail.com','marco.marco@gmail.com'];
const userEmail = prompt('inserisci la tua mail');

let userPerm = false;

for (let i = 0; i < validEmails.length; i++) {
    if (userEmail === validEmails[i]) {
        userPerm = true;
    }
}

if (userPerm) {
    alert('Permesso accordato.');
}
else {
    alert('Permesso negato')
}