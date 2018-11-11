import axios from 'axios';
import store from '../store/store';
const postActions=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        store.dispatch({
            'type':'posts',
            'payload':res.data
        })
    })
    .catch((err)=>{

    })
}

export default postActions;