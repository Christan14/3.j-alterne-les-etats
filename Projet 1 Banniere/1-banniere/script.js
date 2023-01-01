console.log('connecté');
//je sélectionnepar class et je stoke
//bouton .btn-success;


const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);


//DIV cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);

//click
btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué !');
    cookies.style.opacity = "0";

    //Je crée le localStorage avec la valuer "oui"
    localStorage.setItem('banniere', 'oui');
    console.log(valeurCle, "valeur de la clé");
    //Je stocke la valeur du localStorage
    let valeurCle = localStorage.getItem('banniere');
    console.log(valeurCle, "valeur de la clé");

    function check(){
        //ici bloc à exécuter
        if(valeurCle){
            console.log("stockage existe");
            cookies.remove();
        }else{
            console.log("stokage n'existe pas");
        };
    };
});