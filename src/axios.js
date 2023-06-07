import axios from "axios";


// const instance = axios.create({
//     baseURL :  'http://localhost:4444' ,
// });



// export default instance;

const instance = axios.create({
    baseURL : process.env.REACT_APP_API_URL ,
});



export default instance;


