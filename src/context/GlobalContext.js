import React,{createContext }from "react";


export const GlobalContext=createContext()


const GlobalContextProvider=(props)=>{
    const student={
        name:'Sagar',
        age:17,
        address:'kathmandu'
    }
    return(
        <GlobalContext.Provider value={student}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider