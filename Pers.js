module.exports = class Pers {


    constructor(idP,nom,prenom) {
        this._idP =0;
        this._nom = nom;
        this._prenom = prenom;
    }

    get id(){
        return this._idP;
    }

    set id(value){
        this._idP= value;
    }

    get nom(){
        return this._nom;
    }

    set nom(value){
        this._nom= value;
    }

    get prenom(){
        return this._prenom;
    }

    set prenom(value){
        this._prenom= value;
    }

}