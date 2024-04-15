import SearchInput from '../../../../components/SearchInput/search.input'
import { useState,useEffect } from 'react';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import {Button} from 'antd';
import DialogModalCobro from '../../../../components/Dialog/dialog.modal.cobro';
const ClientesCobrosAbono = ({setPage}) =>{
    const [cobroAbono,setCobroAbono]=useState({
        abonos : [],
        fecha_inicio:"",
        referido:"",
        medio_pago:"",
        forma_pago:"",
        cant_cuotas : ""

    })
    const [registrar,setRegistrar] = useState(false);
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
            onChange={e=>setCobroAbono({...cobroAbono,abonos:[...abonos,e]})}
            options={abonos}
            showSearch
                    
              />
              <div>
              <h1 className='text-left m-2'>Inicio del abono</h1>

              <DatePicker style={{width:'100%'}} placeholder="Inicio" />
              
              </div>
           </div>
            <div className='pt-4'>
            <h1 className='text-left m-2'>Seleccionar Medio de Pago</h1>

            <Select style={{width:'100%'}} placeholder="Medio de pago"/>

            </div>
            <div className='pt-4'>
            <h1 className='text-left m-2'>Forma de Pago</h1>

            <Select style={{width:'100%'}} placeholder="Forma de Pago"/>

            </div>
            <div className='pt-4'>
            <h1 className='text-left m-2'>Referido</h1>

            <Select style={{width:'100%'}} placeholder="Referido"/>

            </div>
            <div className="grid grid-cols-3 gap-2 pt-6">
                <div className='text-left'>
                    <Button onClick={()=>setPage(0)}>Atras</Button>
                </div>
                <div></div>
                <div>                <DialogModalCobro abono={cobroAbono}/>
                </div>

            </div>
        </article>
        </div>
    )
}

export default ClientesCobrosAbono;