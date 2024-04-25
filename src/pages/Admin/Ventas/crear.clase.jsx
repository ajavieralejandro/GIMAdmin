

import { Select,Checkbox,TimePicker ,Input,Button} from "antd";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addClase } from "../../../store/Clases/clases.actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CrearClase = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [actividades,setActividades] = useState([]);
    const [clase,setClase] = useState({
        nombre : "",
        actividad:"",
        profesores:"",
        sucursal:"",
        reserva:false,
        format:"",
        dias:[],
        horarios:[],
        cupo:0,
        invitaciones:0,
        reservas_condicionales:false


    })
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/actividades')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return({...element,key:element.id,label:element.name,value:element.name})
            })
            setActividades(aux);
        })

    },[])
    const formato_option = [
        {
            key:1,
            value  : "Presencial"
        },
        {
            key:2,
            value  : "Online"
        },
        {
            key:3,
            value  : "Todos"
        }
    ];
    const dias_options = [
        {
            key:1,
            value  : "Lunes"
        },
        {
            key:2,
            value  : "Martes"
        },
        {
            key:3,
            value  : "Miercoles"
        },
        {
            key:4,
            value : "Jueves"
        },
        {key : 5,
            value :"Viernes"},
        {
            key:6,
            value:"Sabado"
        }
    ];

    const sucursales_options = [
        {key:1,
        value:'Lomas'}
    ];

    const profesores_options = [
        {key:1,
        value : "Juan Carlos"
    }
    ]

   

    
 

    const handleSelect = e => {setClase({...clase,actividades:[...actividades,e]});
 
    
}
const handleOk = () =>{
 

    


}

    return (
        <>
        <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
        <h1 className="text-left">Crear Clase</h1>
        <div className="pt-2">
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Actividades"
      options={actividades}
      onChange={e=>setClase({...clase,actividad:e})}
    />
           <Select
      mode="multiple"
      style={{ width: '100%' }}
      onChange={e=>setClase({...clase,profesor:e})}
      placeholder="Profesores"
      options={profesores_options}
    />
         <Select
      style={{ width: '100%' }}
      onChange={e=>setClase({...clase,sucursal:e})}
      placeholder="Sucursal"
      options={sucursales_options}
    />
    <Checkbox>Disp. reservar</Checkbox>
            </div>
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">

                <GenericSelect onChange={e=>setClase({...clase,formato:e})} placeholder={"Formato"} options={formato_option} />
                    <TimePicker onChange={e=>setClase({...clase,horarios:[clase.horarios,e]})} placeholder={"Desde"} needConfirm={false} />
                <TimePicker onChange={e=>setClase({...clase,horarios:[clase.horarios,e]})} placeholder={"Hasta"} needConfirm={false} />
                <Select mode="multiple" onChange={e=>setClase({...clase,dias:[e]})}  placeholder={"Día"} options={dias_options} />


            </div>
        </div>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input onChange={e=>setClase({...clase,cupo:e.target.value})} placeholder="Cupo Máximo" />
            <Input  onChange={e=>setClase({...clase,invitaciones:e.target.value})} placeholder="Invitaciones" />
            <Checkbox onChange={e=>setClase({...clase,reservas_condicionales:e.target.checked})}>Reservas Condicionales</Checkbox>

        </div>
        <div className="text-right">
            <Button onClick={()=>handleOk()} type="text">Guardar</Button>
        </div>
        </article>
        </>
    )
}

export default CrearClase;