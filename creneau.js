module.exports = class creneaux {
    constructor(id,heureD,heureF,date, numOK, numKO) {
        this._id =id;
        this._heureD=heureD;
        this._heureF=heureF;
        this._date=date;
        this._numOK = numOK;
        this._numKO = numKO;
    }
    get id(){
        return this._id;
    }

    set id(value){
        this._id= value;
    }
    get numOK(){
        return this._numOK;
    }

    set ajouterNumOK(value){
        this._numOK= this._numOK++;
    }

    set ajouterNumKO(value){
        this._numKO = this._numKO++;
    }

    get numOK(){
        return this._numOK;
    }
    get nuKO(){
        return this._nuKO;
    }
}