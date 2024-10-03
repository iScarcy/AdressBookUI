export interface IContact {
    id : string,
    nome:string,
    cognome:string,
    dataNascita?:Date,
    luogoNascita?:string,
    email?:string,
    sesso?:string,
    tel?:string,
    cell?:string
}