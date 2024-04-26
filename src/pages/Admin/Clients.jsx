import ClientCard from "../../components/ClientCard/ClientCard";
import { useEffect, useState } from "react";
import SearchInput from '../../components/SearchInput/search.input';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentClient } from "../../store/client/client.actions";
import Spiner from '../../components/Spiner/spiner';
import { Pagination } from 'antd';

const Clients = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const handleSearch = (text)=>{
      setLoading(true);
      console.log("Text es : ",text.target.value);
      console.log(isNaN(text));
      let aux = clientes.filter(client => client.name.toLowerCase().includes(text.target.value.toLowerCase()) || client.last_name.toLowerCase().includes(text.target.value.toLowerCase() 
      ));
      let dniArray =  clientes.filter(client=>client.dni.toString().includes(text.target.value));
      if(isNaN(text.target.value) && text.target.value!=="")
        setData([...aux])
      if(!isNaN(text.target.value))
        setData([...dniArray]);
      /*if(!isNaN(text.target.value))
        setData(clientes.filter(client => client.dni.toString().includes(text.target.value)  
      )
      );*/
      if(text.target.value==='') setData([...clientes]);
      setLoading(false);
    }
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); 
    const[ clientes,setClients] = useState([]);
    const [total,setTotal] = useState([]);
    const onChange = (page) =>{
      setClients(data.slice())
    }

    const crearCliente = () =>{
      dispatch(setCurrentClient(null));
      navigate('/clientes/crear_cliente');
    }

 


    useEffect(() => {
         fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/clients?page=${currentPage}&limit=${itemsPerPage}`)
        .then((response) => response.json())
        .then((data) => { 
            setTotal(data.total);
            setLoading(false)
            setClients(data.data);
            setData(data.data);
         })
           

      },[currentPage, itemsPerPage]); 
  const totalPages = Math.ceil(total / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
    return(
        
    <>
    <section className="bg-white ">
    <div className="grid grid-cols-2">
    <div className="text-left "
    >
              <SearchInput onChange={handleSearch} />

    </div>
    <div className="text-right">
      <Button onClick={()=>crearCliente()}  type="text">Crear Cliente</Button>
    </div>
    </div>
      
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {loading?<Spiner />:
            data.map((client,index) => <ClientCard key={index} client={client} 
            />)
          }
         

    </div>
    <div className="h-full flex items-center justify-center">
    <Pagination onChange={e=>setCurrentPage(e)} defaultCurrent={1} total={total} />
    </div>
</section>
    </>)
}

export default Clients;