// const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9";

// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });       
// };

// export function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  
// };
//Основной вариант через axios
// import axios from "axios";
// const api_key = "live_ihQdDvmkUkqcIE93Mww2Cg9FkxgKGTRPJzAfM8PtA5rfnh11cA1nYBff7Ns8AY3v";
// //axios.defaults.headers.common["x-api-key"] = "live_ihQdDvmkUkqcIE93Mww2Cg9FkxgKGTRPJzAfM8PtA5rfnh11cA1nYBff7Ns8AY3v";
// const url = 'https://api.thecatapi.com/v1';


// export function fetchBreeds() {
//     return axios(`${url}/breeds?api_key=${api_key}&limit=100`)
//         .then(response => {
//            return(response.data); 
//         })
//         .catch((error) => {
//             return error
//         })   
// };

// export function fetchCatByBreed(breedId) {
//     return axios(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}&limit=100`)
//         .then(response => {
//             return response.data;
//         })
//         .catch((error) => {
//             return error
//         })     
// };

import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_ihQdDvmkUkqcIE93Mww2Cg9FkxgKGTRPJzAfM8PtA5rfnh11cA1nYBff7Ns8AY3v";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
export function fetchBreeds() {
    return axios('breeds?limit=100')
        .then(response => {
           return(response.data); 
        })
        .catch((error) => {
            return error
        })   
};
export function fetchCatByBreed(breedId) {
    return axios(`images/search?breed_ids=${breedId}&limit=100`)
        .then(response => {
            return response.data;
        })
        .catch((error) => {
            return error
        })     
};