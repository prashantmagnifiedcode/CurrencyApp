const initial={
currently:{
    From :"INR",
    To :"USD"
},
History:[
    
]

}



const CurrencyData=(state=initial,action)=>{
    console.log("state",state);
    switch (action.type) {
        case "Currency":
            const data= action.payload;

            return {
                 ...state,
                currently:{
                ...state.currently,
                From:data.From,
                To:data.To

                },
                History:[
                    ...state.History,
                   { 
                    id:data.id,
                    From:data.From,
                    To:data.To,
                    value:data.value}
                ]
                
            }
       
    
        default:
            return state;
    
    }

}
export default CurrencyData