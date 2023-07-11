const initialData={
    studentName:'Sagar'
}

const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'change name':
            return{
                ...state,
                studentName:action.payload
            }
        default:
            return state
    }
}

export default studentReducer

// ... -> rest  operater