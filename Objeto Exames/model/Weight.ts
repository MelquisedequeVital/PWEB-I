export default class Weight{
    constructor(
        private _pesos:Array<number>
    ){

    }

    get pesos(): Array<number>{
        return this._pesos;
    }

    set pesos(pesos: Array<number>){
        this._pesos = pesos
    }
}