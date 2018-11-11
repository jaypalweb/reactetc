import axios from 'axios';
import store from '../store/store';
const userActions=(d)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        // store.dispatch({
        //     'type':'users',
        //     'payload':res.data
        // })
        d({
          'type':'users',
          'payload':res.data  
        })
    })
    .catch((err)=>{

    })
}

export default userActions;