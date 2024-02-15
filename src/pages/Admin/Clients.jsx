import ClientCard from "../../components/ClientCard/ClientCard";
import { useEffect, useState } from "react";
import { fetchClients } from "../../utils/fetchs";
const Clients = () =>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
         fetch("http://127.0.0.1:8000/api/v1/clients")
        .then((response) => response.json())
        .then((data) => { setLoading(false)
            setData(data)

         console.log(data);})
           

      }, []);
    return(
        
    <>
    <section className="bg-white ">
   

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {loading?null:
            data.map(element => <ClientCard name={element.name} last_name={element.last_name} 
                                phone={element.phone_number} email={element.email} dni={element.dni}
            />)
          }
           

    </div>
</section>
    </>)
}

export default Clients;