import initVal from '../utils/initVal';

const nameReducer=(state=initVal,a)=>{
    state={
        ...state,
        'name':a.d
    }

    return state;
}

export default nameReducer;