import Input from "antd/es/input/Input";
import { InputNumber, Space,Select } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentAbono } from "../../../store/Abonos/abonos.actions";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import { useNavigate } from "react-router-dom";
import ActividadesTabla from "../../../components/Ventas/ActividadesTable/actividades.table";
import { stringify } from "postcss";
const CrearAbonoVenta = () =>{
  let dispatch = useDispatch();
  let navigate = useNavigate();
    const [actividades,setActividades] = useState([]);
    const [abono,setAbono]= useState({
      nombre:"",
      precio:1000,
      IVA:"",
      venta:"",
      formato:"",
      tipo:"",
      duracion:0,
      tiempo:"",
      horarios:"",
      disponibilidad:""

    })
    const sucursales = [{key:1,value:'Lomas'},{key:2,value:"Palermo"}];
    const condiciones = [{key:1,value:'Venta Restringida'},{key:2,value:'Matricula'},{key:3,value:"Mantener Precio Original"}
                            , {key:4,value:"renovación automática"},{key:5,value:"Seleccionar Periodos"}
]
    const iva_option = [
        {
            key:1,
            value  : "21%"
        },
        {
            key:2,
            value  : "10%"
        },
        {
            key:2,
            value  : "0%"
        }
    ];

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

    const tipo_options = [
        {
            key:1,
            value :"Abono"
        },
        {
            key:2,
            value:"Adicional"
        }
    ]

    const duracion_options = [
        {key : 1,
        value  : "Día"
        
        
    },
        {key : 2, value :"Mes"},{key:3,value:"Año"}
    ]

    const disponibilidad_options = [{key:1,value:"Libre"},{key:2,value:"Por Mes"}]

    const handleClick = () =>{
      //alert(JSON.stringify(abono));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body :JSON.stringify({
          "name": abono.nombre,
          "price": abono.precio,
          "IVA" : abono.IVA,
          "venta":abono.venta,
          "format":abono.formato,
          "duracion": abono.duracion+" "+abono.tiempo,
          "tipo":abono.tipo,
          "disponibilidad":abono.disponibilidad,
          "horarios" : abono.horarios,
          "comentarios":abono.comentarios

  
        })
    };
      fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/abonos',requestOptions)
      .then(res=>res.json())
      .then((data)=>{
          dispatch(setCurrentAbono(data.data));
          navigate('/ventas/actividades_abono');
      })
      //
    }
    return (
        <>
          <div
  className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Datos Abono
  </div>
  <div className="p-6 text-black">
    <div className="grid grid-cols-4 gap-4">
        <Input onChange={e=>setAbono({...abono,nombre:e.target.value})} placeholder="Nombre" />
        <div className="block">
            <h1>Precio :  <InputNumber
          onChange={e=>setAbono({...abono,precio:e})}
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    /> </h1>
          
        </div>
        <Select onSelect={e=>setAbono({...abono,IVA:e})} options={iva_option}  placeholder={"IVA"} />
        <Checkbox onChange={e=>setAbono({...abono,venta:e.target.checked})}><p className="text-sm m-1">Disp. Venta</p></Checkbox>
     
    </div>
    <div className="grid grid-cols-4 gap-4 pt-4">
        <Select onSelect={e=>setAbono({...abono,formato:e})} options={formato_option} placeholder={"Formato"} />

        <Select onSelect={e=>setAbono({...abono,tipo:e})} options={tipo_options} placeholder={"Tipo"} />
        <Input onChange={e=>setAbono({...abono,duracion:e.target.value})} placeholder="Duracion" />
        <Select onSelect={e=>setAbono({...abono,tiempo:e})}  options={duracion_options} placeholder={"DIA"} />
    </div>

    <div className="grid grid-cols-4 gap-4 pt-4">
        <Select
        onSelect={e=>setAbono({...abono,disponibilidad:e})}
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Horarios"
  
    />        <Select   style={{
        width: '100%',
        height:'100%'
      }}
        onChange={e=>setAbono({...abono,disponibilidad:e})}
        options={disponibilidad_options}
       placeholder={"Disponibilidad"} />

    </div>
      <h1 className="text-xl text-left pt-6">Comentarios</h1>
    <div className="pt-6">
    <TextArea  onChange={e=>setAbono({...abono,comentarios:e.target.value})} placeholder="comentarios" />
  
    </div>
    <div className="text-right pt-6">
      <Button onClick={()=>handleClick()} type="text" >Siguiente</Button>
    </div>
    
  </div>

  

  </div>
  

        </>
    )
}

export default CrearAbonoVenta;