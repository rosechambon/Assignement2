let counter =0
const element = document.querySelector('span')

function ajouter(){
    const selectPrenom = document.getElementById("prenom").value
    console.log(selectPrenom)
    const T = document.getElementsByTagName("table")[0];

    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    const selectName = document.getElementById("name").value
    const selectEmail= document.getElementById("email").value
    const selectRole = document.getElementById("role-select").value

    if(selectPrenom !=""  && selectName!=""  && selectEmail!=""){
        td1.textContent = selectPrenom
        td2.textContent = selectName
        td3.textContent = selectEmail
        td4.textContent = selectRole
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        T.appendChild(tr);

        counter++;
        element.innerText = counter
        alert("Personne ajoutée")
    }
}

function ToutSupprimer(){
    console.log(counter)
    const T = document.getElementsByTagName("table")[0];
    console.log(counter)
    while(counter>0){
        T.removeChild(T.lastChild)
        counter--;
    }
}



/*function click(){
    const btnA = document.querySelector('#Abutton')
    btnA.onclick= ajouter
}


setInterval(click,5000)*/


const btnA = document.querySelector('#Abutton')
btnA.onclick= ajouter
const btnS = document.querySelector('#Sbutton')
btnS.onclick = ToutSupprimer


