 export const  fetchClients = () =>{
    console.log("Hola estoy haciendo un fetch");
    fetch("http://127.0.0.1:8000/api/v1/clients")
      .then((response) => response.json())
      .then((dog) => console.log(dog));
}