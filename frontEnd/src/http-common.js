import axios from "axios";
export default axios.create({
    baseURL: "localhost:5555",
    headers: {
        "Content-Type": "application/json"
    }
});