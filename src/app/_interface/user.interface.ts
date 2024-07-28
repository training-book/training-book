export interface IUser {
    idUser: number,
    email:string,
    userName:string,
    sex:string,
    birhtday:Date,
    fisrtName:string,
    lastName:string,
    trainnigs?: {idTraining:number, trainingName:string}[]

}