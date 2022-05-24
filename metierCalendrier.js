const creneaux = require('./creneau');
//liste de RDV
let liste = [];
let listeP =[];
let idRdv=0;
let idCreneau=0;
let idPers=0;

function Rdv(id,titre,description){
    this.id =id;
    this.titre =titre;
    this.description = description;
    this.listeCreneaux=[];
}

//constructeur avec structure
function Rdv(Rdv) {
    this.id = Rdv.id;
    this.titre = Rdv.titre;
    this.description = Rdv.description;
    this.listeCreneaux=[];
}
//constructeur TOUS les membres
function Personne(id,nom,prenom){
    this.id =id;
    this.nom =nom;
    this.prenom = prenom;
}

//constructeur avec structure
function Personne(personne){
    this.id =personne.id;
    this.nom =personne.nom;
    this.prenom = personne.prenom;

}
//Methode Metier
//Ajout
var ajouter = function (rdv) {
    //On ajoute à notre liste le nouveau theme
    liste[idRdv] = new Rdv(rdv);
    liste[idRdv].id = idRdv;
    idRdv++;
    return liste[idRdv - 1]

}

//Ajout personne
var ajouterP = function(personne) {
    //On ajoute à notre liste une personne
    listeP[idPers] = new Personne(personne);
    listeP[idPers].id = idPers;
    idPers++;
    return listeP[idPers-1]
}

// Pour ajouter un creneau
var ajouterCreneau = function (id, creneau){
    let tmpcreneau = creneau;
    //On force l'id en fonction du back
    tmpcreneau.id = idCreneau;
    //Ajoute le creneau au rdv grace a id passe dans paramètres
    liste[id].listeCreneaux.push(tmpcreneau);
    idCreneau++;
    //On retourne notre liste de creneau
    return liste[id].listeCreneaux[idCreneau-1];
}

var getListeCreneaux = function(id)
{
    //Si liste est undefined, on retourne {}
    if (typeof liste[id].listeCreneaux === 'undefined') return {};
    //On retourne notre rdv
    else return liste[id].listeCreneaux;
}
// Pour retourner un Rdv avec son id
var getRdv = function (id) {

    //Si le Rdv à cet indice est undefined, on retourne {} pour signe d'erreur, car il n'existe pas
    if (typeof liste[id] === 'undefined') return {};
    //On retourne notre rdv
    else return liste[id];
}

// Lister les Rdv
var lister = function () {
    return Object.values(liste);
}

//lister personne
var listerP = function () {
    return Object.values(listeP);
}

var ajouterOK = function (idRdv, idCreneau) {
    console.log("OK");
}

var ajouterKO = function (idRdv, idCreneau) {
    console.log("KO");
}

exports.ajouter = ajouter;
exports.ajouterP = ajouterP;
exports.getRdv = getRdv;
exports.lister = lister;
exports.listerP = listerP;
exports.ajouterCreneau = ajouterCreneau;
exports.getListeCreneaux = getListeCreneaux;
exports.ajouterOK = ajouterOK;
exports.ajouterKO = ajouterKO;
