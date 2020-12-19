import axios from "axios";

const instance=axios.create({
    baseUrl:"https://tinder-s.herokuapp.com/",
});

export default instance;
