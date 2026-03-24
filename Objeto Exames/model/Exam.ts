import Weight from "./Weight.js";
import Answer from './Answer.js';

export default class Exam{
    constructor(
        private answer: Answer,
        private weight: Weight,
        private exams: Array<Answer>
    ){

    }

    public add(exam: Answer){
        this.exams.push(exam)
    }

    public avg(): number{
        let somatorio: number = 0;
        let qtdQuestoes: number = this.exams.length;

        this.exams.forEach(
            exameAluno => somatorio += this.corrigeProva(exameAluno)
        )

        return somatorio/qtdQuestoes
    }

    public min(count: number): Array<number>{
        let resultado: Array<number> = [];
        let notaAlunos:Array<number> = this.retornaNotaTodosAlunos();

        notaAlunos.sort((a,b) => a-b);

        resultado = notaAlunos.slice(0,count).sort((a,b) => a-b);

        return resultado
    }

    public max(count: number): Array<number>{
        let resultado: Array<number> = [];
        let notaAlunos:Array<number> = this.retornaNotaTodosAlunos();

        notaAlunos.sort((a,b) => b-a);

        resultado = notaAlunos.slice(0,count).sort((a,b) => a-b);

        return resultado
    }

    public lt(limit: number): Array<number>{
        let resultado: Array<number> = [];
        let notaAlunos:Array<number> = this.retornaNotaTodosAlunos();

        notaAlunos.sort((a,b) => a-b);

        resultado = notaAlunos.filter(nota => nota < limit).sort((a,b) => a-b);

        return resultado
    }

    public gt(limit: number): Array<number>{
        let resultado: Array<number> = [];
        let notaAlunos:Array<number> = this.retornaNotaTodosAlunos();

        notaAlunos.sort((a,b) => a-b);

        resultado = notaAlunos.filter(nota => nota > limit).sort((a,b) => a-b);

        return resultado
    }
    
    private corrigeProva(exam: Answer): number{
        let nota:number = 0;
        let respostasAluno: Array<string> = exam.respostas;
        let gabarito: Array<string> = this.answer.respostas;
        let pesos : Array<number> = this.weight.pesos;

        for(let i = 0; i < respostasAluno.length; i++){
            if(respostasAluno[i] === gabarito[i]){
                let pesoAtual = pesos[i];
                if(pesoAtual != undefined){
                    nota += pesoAtual;
                }
            }
        }

        return nota;
    }

    private retornaNotaTodosAlunos():Array<number>{
        return this.exams.map(exameAluno =>
            this.corrigeProva(exameAluno)
        )
    }


}