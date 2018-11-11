import initVal from '../utils/initVal';

const postReducer=(state=initVal,actions)=>{
    state={
        ...state,
        'posts':actions.payload
    }

    return state;
}

export default postReducer;