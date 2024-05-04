

import { Select,Checkbox,TimePicker ,Input,Button} from "antd";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addClase } from "../../../store/Clases/clases.actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PickerDate from '../../../components/PickerDate/picker.date';

const CrearClase = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [actividades,setActividades] = useState([]);
    const [sucursales,setSucursales] = useState([]);
    const [clase,setClase] = useState({
        name : "",
        actividad_id:0,
        profesores:"",
        sucursal_id:0,
        reservas:false,
        formato:"",
        dias:[],
        start:"",
        end:"",
        cupo:0,
        invitaciones:0,
        reservas_condicionales:false


    })
    const setDate= (date1,date2)=>{
        setClase({...clase,date1:date1,date2:date2})
    }
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/actividades')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return({...element,key:element.id,label:element.name,value:element.id})
            })
            setActividades(aux);
        })

        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.data.map(element=>{
                return({...element,key:element.id,label:element.nombre,value:element.id})
            })
            setSucursales(aux);
        })

    },[])

    const handleHorarios = e=>{
        
        // Get the hours and minutes from the date
        var date = e.$d;
        var hours = date.getHours();
        var minutes = date.getMinutes();

        // Format hours with leading zero if necessary
        var formattedHours = hours < 10 ? "0" + hours : hours;

        // Format minutes with leading zero if necessary
        var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        // Concatenate hours and minutes with colon separator
        var formattedTime = formattedHours + ":" + formattedMinutes;
        return formattedTime;
    }

    const handleCrearClase = () =>{
        console.log("Clase : ",clase);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
              "name": clase.name,
              "date1": clase.date1,
              "date2" : clase.date2,
              "sucursal_id":clase.sucursal_id,
              "actividad_id":clase.actividad_id,
              "profesor_id":clase.profesor_id,
              "dias" :clase.dias,
              "formato": clase.formato,
              "start":clase.start,
              "end":clase.end,
              "cupo":clase.cupo,
              "reservas":clase.reservas,
              "reservas_condicionales":clase.reservas_condicionales,
              "max_invitaciones":clase.invitaciones
      
            })
        };
        console.log("Mostrando las Opciones :",requestOptions);
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/clases',requestOptions)
        .then(res=>res.text())
        .then((data)=>{
            alert(data);
            console.log("response:",data);
            //navigate('/ventas/horarios');
    });
    }

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
            value  : "Monday",
            label:"Lunes"
        },
        {
            key:2,
            value  : "Tuesday",
            label:"Martes"
        },
        {
            key:3,
            value  : "Wednesday",
            label:"Miercoles"

        },
        {
            key:4,
            value : "Thursday",
            label:"Jueves"
        },
        {key : 5,
            value :"Friday",
            label:"Viernes"
        },
        {
            key:6,
            value:"Saturday",
            label:"Sabado "

        },
        {
            key:7,
            value:"Sunday",
            label:"Domingo "

        }
    ];

   

    const profesores_options = [
        {key:1,
        value : "Juan Carlos"
    }
    ]

   

    
 

    const handleSelect = e => {setClase({...clase,actividad_id:e});
 
    
}
const handleOk = () =>{
 
    console.log(clase);

    


}

    return (
        <>
        <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
        <h1 className="text-left text-xl">Nueva Clase</h1>
        <div className="pt-2">
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input onChange={e=>setClase({...clase,name:e.target.value})} placeholder="Nombre Clase" />
            <Select
      style={{ width: '100%' }}
      showSearch={false}
      placeholder="Actividades"
      options={actividades}
      onChange={e=>setClase({...clase,actividad_id:e})}
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
      onChange={e=>setClase({...clase,sucursal_id:e})}
      placeholder="Sucursal"
      options={sucursales}
    />
            </div>
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">

                <GenericSelect onChange={e=>setClase({...clase,formato:e})} placeholder={"Formato"} options={formato_option} />
                    <TimePicker onChange={e=>setClase({...clase,start:handleHorarios(e)})} placeholder={"Desde"} needConfirm={false} />
                <TimePicker onChange={e=>setClase({...clase,end:handleHorarios(e)})} placeholder={"Hasta"} needConfirm={false} />
                <Select showSearch={false} mode="multiple" onChange={e=>setClase({...clase,dias:e})}  placeholder={"Día"} options={dias_options} />


            </div>
        </div>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input onChange={e=>setClase({...clase,cupo:parseInt(e.target.value)})} placeholder="Cupo Máximo" />
            <Input  onChange={e=>setClase({...clase,invitaciones:parseInt(e.target.value)})} placeholder="Invitaciones" />
            <PickerDate setDates={setDate}  />
            <Checkbox onChange={e=>setClase({...clase,reservas_condicionales:e.target.checked})}>Reservas Condicionales</Checkbox>
            <Checkbox onChange={e=>setClase({...clase,reservas:e.target.checked})}>Disp. reservar</Checkbox>

        </div>
        <div className="text-right">
            <Button onClick={()=>handleCrearClase()} type="text">Guardar</Button>
        </div>
        </article>
        </>
    )
}

export default CrearClase;