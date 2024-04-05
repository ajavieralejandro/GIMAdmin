import { useState } from "react";
import { Switch,Input,Button } from "antd";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
const ClienteDatosMedicos = ({setPage}) =>{
    let client = useSelector(state=>state.client.currentClient);
    const [fumador,setFumador] = useState(false);
    const [medicamentos,setMedicamentos] = useState(false);
    const [alergico,setAlergico] = useState(false)
    const [lesion,setLesion] = useState(false);
    const [enfermedadCardiaca,setEnfermedadCardiaca] = useState(false);
    const [enfermedadCronica,setEnfermedadCronica] = useState(false);
    const [obraSocial,setObraSocial] = useState(false);
    const [datos,setDatos] = useState({
        fumador: "",
        medicamentos : "",
        lesiones:"",
        obra_social:"",
        enfermedad_cronica:"",
        enfermedad_cardiaca: "",
        control_medico:"",
        alergico:"",
        client_id : client.id


    })

    const cargarCliente = () =>{
        alert('Registro Datos Medicos');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
              "fumador": datos.fumador,
              "obra_social": datos.obra_social,
              "medicamentos": datos.medicamentos,
              "client_id": client.id,
  
            })
        };
        console.log("Request Options es : ",requestOptions);
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/medicals', requestOptions)
            .then(response => response.json())
            .then(data=>{ 
                alert(data);
                setPage(0);
            })
    }
    return(
        <div>
        <div className=" rounded  shadow-md">
        <h1 className="text-lg m-auto p-2">Datos Medicos</h1>
        <div className="grid m-2 grid-cols-2 gap-2 pb-6 ">
         <div className="col-span-2">
         <DatePicker style={{width:'100%'}} placeholder="Fecha Control Medico" />

         </div>
        <div>
        <Switch onChange={e=>setObraSocial(e)} className="bg-blue-300" size="medium" /><h1>Obra Social : </h1>
    </div>
  
    <Input onChange={e=>setDatos({...datos,obra_social:e.target.value})} disabled={!obraSocial} placeholder="Cual?"></Input>

            <div>
                <Switch onChange={e=>setFumador(e)} className="bg-blue-300" size="medium" /><h1>Fumador</h1>
            </div>
          
            <Input onChange={e=>setDatos({...datos,fumador:e.target.value})} disabled={!fumador} placeholder="Cuantos por día?"></Input>
            <div>
                <Switch onChange={e=>setMedicamentos(e)} className="bg-blue-300" size="medium" /><h1>Medicamentos</h1>
            </div>
          
            <Input onChange={e=>setDatos({...datos,medicamentos:e.target.value})} disabled={!medicamentos} placeholder="Que medicamentos?"></Input>

            <div>
            <Switch onChange={e=>setAlergico(e)} className="bg-blue-300" size="medium" /><h1>Alergico</h1>
        </div>
      
        <Input disabled={!alergico} placeholder="A que?"></Input>
        <div>
            <Switch onChange={e=>setLesion(e)} className="bg-blue-300" size="medium" /><h1>Lesion</h1>
        </div>
      
        <Input disabled={!lesion} placeholder="Cuál/es?"></Input>

        <div>
        <Switch onChange={e=>setEnfermedadCardiaca(e)} className="bg-blue-300" size="medium" /><h1>Enfermedad Cardiaca</h1>
    </div>
  
    <Input disabled={!enfermedadCardiaca} placeholder="Cuál/es?"></Input>
    
    <div>
    <Switch onChange={e=>setEnfermedadCronica(e)} className="bg-blue-300" size="medium" /><h1>Enfermedad Cronica</h1>

    
</div>

<Input disabled={!enfermedadCronica} placeholder="Cuál/es?"></Input>

        
            
        </div>
        <div className="text-right pb-2 m-2">
        <button onClick={()=>cargarCliente()} className="text-blue-500" type="submit">Cargar Datos</button>
    </div>
        </div>
       
        </div>
    )
}

export default ClienteDatosMedicos;