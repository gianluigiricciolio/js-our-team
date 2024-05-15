'use strict';
// Creare l’array di oggetti con le informazioni fornite.
const teamList = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        imgSrc: ""
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        imgSrc: ""
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        imgSrc: ""
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        imgSrc: ""
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        imgSrc: ""
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        imgSrc: ""
    }
]

const ulList = document.querySelector('.list');


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i=0; i < teamList.length; i++){
    // GENERO L IMG SOURCE USANDO NOME E RUOLO
    teamList[i].imgSrc = imgSrcGenerator(teamList[i]);
    for (let key in teamList[i]){
        console.log (teamList[i][key]);
    }
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe
printOnDom();




// FUNCTIONS

function imgSrcGenerator (object) {
    let source = "";
    source+=object.nome.replaceAll(" ", "-").toLowerCase()+"-"+object.ruolo.replaceAll(" ", "-").replace("&-", "").toLowerCase()+".jpg";
    return source;
}

function printOnDom(){
    for (let i = 0; i < teamList.length; i++){
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        // Trasformare la stringa foto in una immagine effettiva
        const img = document.createElement('img');
        let buffer ="img/"+teamList[i].imgSrc;
        h2.append(teamList[i].nome);
        p.append(teamList[i].ruolo);
        img.src=buffer;
        li.append(h2);
        li.append(p);
        li.append(img);
        ulList.append(li);
    }
}