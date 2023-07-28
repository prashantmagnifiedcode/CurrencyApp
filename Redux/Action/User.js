
export const InternetConnectivity=(data)=>{

    return {
        type:"Internet",payload:data
    }

}
export const currentCr=(data)=>{
    console.log("inser",data)
    return {
        type:"Currency",
        payload:data,
    }

}
export const HistoryCur=(data)=>{
    console.log("inser",data)
    return {
        type:"History",
        payload:data,
    }

}