const inputName = document.querySelector("[name='userNameSurname']");
let inputkmDistance = document.querySelector ("[name='userKmDistance']");
const selectOption = document.getElementById("fascia-eta");
const submitButton = document.getElementById("generat-button") ;


const prezzoAlKm = "0.21";

const scontoGiovani = "0.2";
    
const scontoAnziani = "0.4";

//prezzoBiglietto - ( prezzoBiglietto * scontoAnziani )


submitButton. addEventListener ("click", function () {
    // Questo codice verrà eseguito SOLO quando l'utente clicca sul pulsante submitButton
    console. log(inputName. value, inputkmDistance. value, selectOption. value);

    inputName. value = " " ;

    inputkmDistance. value = " " ;

    selectOption. value = " " ;

    let prezzoBiglietto = inputkmDistance * prezzoAlKm


    if(selectOption === "minorenne"){
        prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * scontoGiovani )
    }
    if(selectOption === "over-65"){
        prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * scontoAnziani )
    }

    const spanPrezzoBiglietto = document.getElementById("span-prezzo-biglietto")

    spanPrezzoBiglietto.innerHTML = `<strong class="text-danger">
                                        ${prezzoBiglietto}
                                    </strongs>`;


    const spanNomeCognomeUtente = document.getElementById("nome-cognome-utente");

    spanNomeCognomeUtente.innerHTML = `<strong class="text-danger">
                                            <small class="text-dark">${inputName}</small>
                                        </strongs>`;

})
