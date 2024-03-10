import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
function saveToken(token) {
     // if (data.statusCode === 200) {
        toast.success("LOG IN success");
        // getTodos();
    //   }
    //   if (data.statusCode !== 200) {
    //     toast.error("boo");
    //   }
    localStorage.setItem("access_token", token);
}

 function getToken() {
    try {
        return jwtDecode(localStorage.getItem("access_token"))
    } catch (error) {}
}

function destroyToken() {   
    localStorage.removeItem("access_token")
    // if (data.statusCode === 200) {
        toast.success("LOG OUT success");
        // getTodos();
    //   }
    //   if (data.statusCode !== 200) {
    //     toast.error("boo");
    //   }
    
}

export {saveToken, destroyToken, getToken}