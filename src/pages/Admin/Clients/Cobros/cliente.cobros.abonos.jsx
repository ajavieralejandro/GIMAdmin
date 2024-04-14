import SearchInput from '../../../../components/SearchInput/search.input'
import { useState,useEffect } from 'react';
import { Select } from 'antd';
import { DatePicker } from 'antd';
const ClientesCobrosAbono = () =>{

    const [abonos,setAbonos]=useState([]);
    const [arrayAux,setArrayAux]=useState([]);
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/abonos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return {...element,key:element.id,value:element.name,
                    label:element.name
                }
            })
            setAbonos(aux);
            setArrayAux(aux);
        });
    },[])

    return(
        <div>
        <article
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
            >
            <h1 className='text-left m-2'>Seleccionar Abono</h1>
            <div className='grid grid-cols-1 gap-4'>
            <Select
            mode="multiple"
            style={{width:'100%'}}
            placeholder={"Abono"}
            options={abonos}
            showSearch
                    
              />
            <DatePicker style={{width:'100%'}} placeholder="Inicio" />
            </div>
            <div className='pt-4'>
            <Select style={{width:'100%'}} placeholder="Medio de pago"/>

            </div>
        </article>
        </div>
    )
}

export default ClientesCobrosAbono;