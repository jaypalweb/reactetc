 import store from '../stores/store';
const storeName=(n)=>{
   debugger;
   store.dispatch({
       'type':'sn',
       'd':n
   })
}

export default storeName;