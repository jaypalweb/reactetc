
import initVal from '../utils/initVal';
const userReducer=(state=initVal,actions)=>{

    switch(actions.type){
        case 'users':
        state={
            ...state,
            'users':actions.payload
        }
        break;
        case 'posts':
        state={
            ...state,
            'posts':actions.payload
        }
        break;
    }
     

     return state;
}

export default userReducer;