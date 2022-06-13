import axios from 'axios';

const FetchPostsAction=()=>async(dispatch)=>{
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        dispatch({
            type:"FETCH_ARTICLES",
            payload:res.data
        })
    }
    )
    .catch((err)=>
    console.log(err)
    )
}


export default FetchPostsAction