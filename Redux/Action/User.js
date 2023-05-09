
export const InsertUserData=(data)=>{
    console.log("inser",data)
    return {
        type:"userData",
        payload:data,
    }

}