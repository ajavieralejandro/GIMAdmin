import FullCalendar from '@fullcalendar/react'
import timeGridPluggin from '@fullcalendar/timegrid';
import {Select} from 'antd'
import {useState,useEffect} from 'react'
export default function Calendar() {
  const [clases,setClases] = useState([]);
  const [sucursales,setSucursales] = useState([]);
  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales')
    .then(res=>res.json())
    .then(data=>{
      let aux = data.data;
      
      aux = aux.map(element=>{
        return {...element,value:element.nombre,key:element.id,label:element.nombre}
      })
      setSucursales(aux);
    })
  },[])
  return (
    <div>
    <h1 className="text-3xl text-left">Horarios de las Actividades Programadas</h1>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-2 pt-6 pb-6'>
    <Select options={sucursales}  placeholder="Sucursal" />

    </div>
    <FullCalendar
      plugins={[ timeGridPluggin]}
      initialView={"timeGridWeek"}
      events={[
        {
      id: 'a',
      title: 'my event',
      start: '2024-04-24T16:00',
      end: '2024-04-24T18:00',

      
    }
      ]}
    />
    </div>
  )
}