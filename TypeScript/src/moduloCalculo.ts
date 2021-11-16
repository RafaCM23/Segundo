export class Calculo{

    n1:number;
    n2:number;

    constructor(n1:number,n2:number){
        this.n1=n1;
        this.n2=n2;
    }

    suma(){
        return this.n1+this.n2;
    }
    resta(){
        if(this.n1>this.n2){ 
            return this.n1-this.n2;
        }
        else{ return this.n2-this.n1 }

    }
    multiplica(){
        return this.n1*this.n2;
    }
    divide(){
        if(this.n1>this.n2){
            return this.n1/this.n2;
        }
        else { return this.n2/this.n1 }
    }
}