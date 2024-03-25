 import { setCategoriaConcepto } from "../store/caja/caja.actions";
 import { useDispatch } from "react-redux";
 export const  fetchClients = () =>{
    console.log("Hola estoy haciendo un fetch");
    fetch("http://127.0.0.1:8000/api/v1/clients")
      .then((response) => response.json())
      .then((dog) => console.log(dog));
}

export const  fetchMovimientos = async () =>{
  fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/movimientos")
  .then(response=>response.json())
  .then(data=>console.log("data es : ",data));
}

export const  fetchCategoriasConceptos = async () =>{
  let dispatch = useDispatch();
  fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/conceptos")
  .then(response=>response.json())
  .then(data=>{dispatch(setCategoriaConcepto(data.data))});
}