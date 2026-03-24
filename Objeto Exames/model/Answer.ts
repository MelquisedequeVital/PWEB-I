export default class Answer{
    constructor(
        private _nome:string,
        private _respostas:Array<string>
    ){

    }

    get nome(): string{
        return this._nome
    }

    set nome(nome: string){
        this._nome = nome
    }

    get respostas(): Array<string>{
        return this._respostas
    }

    set respostas(respostas: Array<string>){
        this._respostas= respostas
    }
}