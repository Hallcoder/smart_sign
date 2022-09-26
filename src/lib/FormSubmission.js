import axios from "axios";
import { POST } from "./constants";
let dataReturned={};
export default async function handleFormSubmission(data,route,method){
if(method == POST){
   await axios.post(route,data).then(data => {
  dataReturned = data;
    })
}else if(method == GET){
   await axios.get(route).then(data => {
        console.log(data);
        dataReturned = data;

        })
}else if(method == DELETE){
   await axios.delete(route,data).then(data => {
        console.log(data);
        dataReturned = data;
        })
}else if(method == PUT){
   await axios.put(route,data).then(data => {
        console.log(data);
        dataReturned = data;
        });
}
return dataReturned;
}
