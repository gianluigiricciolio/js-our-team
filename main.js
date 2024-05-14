'use strict';

const teamList = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder CEO",
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


for (let i=0; i < teamList.length; i++){
    // GENERO L IMG SOURCE USANDO NOME E RUOLO
    teamList[i].imgSrc = imgSrcGenerator(teamList[i]);
    console.log (teamList[i]);
}




function imgSrcGenerator (object) {
    let source = "";
    source+=object.nome.replace(" ", "-").toLowerCase()+"-"+object.ruolo.replace(" ", "-").toLowerCase()+".jpg";
    return source;
}