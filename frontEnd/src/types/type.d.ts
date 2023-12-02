export interface IuserProfile  {
    firstname : string,
    lastname: string,
    email : string,
    country : string
}
export interface Iprofile  {
    user : IuserProfile | null,
    isloading : boolean,
    error : string | null,
}