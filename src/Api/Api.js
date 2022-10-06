import axios from "axios";

const  getApiProducts = ()=> {
const url = `${process.env.REACT_APP_API_URL}products`
 const data= axios
    .get(url)
    .then((res) => {return res.data})
    .catch((error) => console.log(error));
return data
}
export default getApiProducts;
