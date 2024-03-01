

import { Select,Checkbox,TimePicker ,Input,Button} from "antd";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addClase } from "../../../store/Clases/clases.actions";
import { useNavigate } from "react-router-dom";

const CrearClase = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
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

    let selector = useSelector(state=>state.ventas.actividades);
    let actividades = selector.map((element,index)=>{
        return {...element,key:index,value:element.nombre}
    })

    
    const [clase,setClase] = useState({
        actividades : [],
        profesores : [],
        sucursal : "",
        reservas : true,
        horarios :[],
        dias : [],
        formato:"",
        reservas_condicionales:true,
        cupo : 0,

    })

    const handleSelect = e => {setClase({...clase,actividades:[...actividades,e]});
 
    
}
const handleOk = () =>{

    dispatch(addClase(clase));
    navigate('/ventas/clases_programadas')


}

    return (
        <>

        <div className="pt-2">
            <div className="grid grid-cols-4 gap-4">
            <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Actividades"
      options={actividades}
      onChange={e=>setClase({...clase,actividades:[clase.actividades,e]})}
    />
           <Select
      mode="multiple"
      style={{ width: '100%' }}
      onChange={e=>setClase({...clase,profesores:[...clase.profesores,e]})}
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
            <div className="grid grid-cols-4 gap-4 pt-8"
            >
                <GenericSelect onChange={e=>setClase({...clase,formato:e})} placeholder={"Formato"} options={formato_option} />
                    <TimePicker onChange={e=>setClase({...clase,horarios:[clase.horarios,e]})} placeholder={"Desde"} needConfirm={false} />
                <TimePicker onChange={e=>setClase({...clase,horarios:[clase.horarios,e]})} placeholder={"Hasta"} needConfirm={false} />
                <GenericSelect onChange={e=>setClase({...clase,dias:[...clase.dias,e]})}  placeholder={"Día"} options={dias_options} />


            </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-8">
            <Input onChange={e=>setClase({...clase,cupo:e.target.value})} placeholder="Cupo Máximo" />
            <Input  onChange={e=>setClase({...clase,invitaciones:e.target.value})} placeholder="Invitaciones" />
            <Checkbox onChange={e=>setClase({...clase,reservas_condicionales:e.target.checked})}>Reservas Condicionales</Checkbox>

        </div>
        <div className="text-right">
            <Button onClick={()=>handleOk()} type="text">Guardar</Button>
        </div>

        </>
    )
}

export default CrearClase;