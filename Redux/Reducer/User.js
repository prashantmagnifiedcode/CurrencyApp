const initial={
    FullName:"",
    Email:"",
    Phone:"",
}

const UserData=(state=initial,action)=>{
    switch (action.type) {
        case "userData":
            const data= action.payload;
            console.log("payload",data)
            return {
                ...state,
                "FullName":data.FullName,
                "Email":data.email
            }
    
        default:
            return state;
    
    }

}
export default UserData