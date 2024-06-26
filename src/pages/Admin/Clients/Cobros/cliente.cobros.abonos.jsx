import SearchInput from '../../../../components/SearchInput/search.input'
import { useState,useEffect } from 'react';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { useSelector } from 'react-redux';
import {Button} from 'antd';
import DialogModalCobro from '../../../../components/Dialog/dialog.modal.cobro';
const ClientesCobrosAbono = ({setPage}) =>{
    let client_id = useSelector(state=>state.client.currentClient.id);
    let user_id = useSelector(state=>state.user.currentUser.id);
    let caja_id = useSelector(state=>state.user.currentUser.caja);
    const [cobroAbono,setCobroAbono]=useState({
        abonos : [],
        fecha_inicio:"",
        referido:"",
        medio_pago:"",
        forma_pago:"",
        cant_cuotas : "",
        descuento : "",
        client_id:client_id,
        caja_id : caja_id,
        user_id : user_id

    })
    const [registrar,setRegistrar] = useState(false);
    const [abonos,setAbonos]=useState([]);
    const [arrayAux,setArrayAux]=useState([]);
    const [referidos,setReferidos] = useState([]);
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/abonos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return {...element,key:element.id,value:element.id,
                    label:element.name
                }
            })
            setAbonos(aux);
            setArrayAux(aux);
        });

        //Fetching the users now...
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/referidos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return({...element,key:element.id,value:element.id,
                            label:element.name
                })

            })

            setReferidos(aux);
        })

    },[])

    const insertarAbonos = (e)=>{
        let array = [];
        e.forEach(element => {
            let aux =  abonos.find(item=>{return item.id==element});
            array.push(aux);

        });
        setCobroAbono({...cobroAbono,abonos:array});
    }
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
            onChange={e=>insertarAbonos(e)}
            options={abonos}
            showSearch={false}                    
              />
              <div>
              <h1 className='text-left m-2'>Inicio del abono</h1>

              <DatePicker onChange={e=>setCobroAbono({...cobroAbono,fecha_inicio:e.$d})} style={{width:'100%'}} placeholder="Inicio" />
              
              </div>
           </div>
            <div className='pt-4'>
            <h1 className='text-left m-2'>Seleccionar Medio de Pago</h1>

            <Select style={{width:'100%'}} placeholder="Medio de pago"
                options={[
                    {key:1,value:"Efectivo"},
                    {key:2,value:"Mercado Pago"},
                    {key:3,value:"Debito"},
                    {key:4,value:"Credito"},


                ]}
                onChange={e=>setCobroAbono({...cobroAbono,medio_pago:e})}
            />

            

            </div>
         
            <div className='pt-4'>
            <h1 className='text-left m-2'>Referido</h1>

            <Select onChange={(e)=>setCobroAbono({...cobroAbono,referido:e})} options={referidos} style={{width:'100%'}} placeholder="Referido"/>

            </div>
            <div className="grid grid-cols-3 gap-2 pt-6">
                <div className='text-left'>
                    <Button onClick={()=>setPage(0)}>Atras</Button>
                </div>
                <div></div>
                <div>                
                    <DialogModalCobro
                        setPage={setPage}
                        setAbono={setCobroAbono} 
                        abono={cobroAbono}/>
                </div>

            </div>
        </article>
        </div>
    )
}

export default ClientesCobrosAbono;