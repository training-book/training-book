export interface IUser {
    idUser: number,
    mail:string,
    userName:string,
    sex:string,
    birhtday:Date,
    fisrtName:string,
    lastName:string,
    trainnigs?: {idTraining:number, trainingName:string}[]

}