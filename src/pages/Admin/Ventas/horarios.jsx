import FullCalendar from '@fullcalendar/react'
import timeGridPluggin from '@fullcalendar/timegrid';
import {Select} from 'antd'
import {useState,useEffect} from 'react'
export default function Calendar() {
  const [events,setEvents] = useState([]);
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
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/clases')
    .then(res=>res.json())
    .then(data=>{
      console.log("eventos :",data.data);
      let aux = data.data.map(element=>{
        // Parse the date string into a Date object
var date = new Date(element.dia);

// Extract the year, month, and day components
var year = date.getFullYear();
var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based index
var day = ('0' + date.getDate()).slice(-2);

// Form the Y-M-D format
var formattedDate = year + '-' + month + '-' + day+'T';
        return({...element,formattedDate:formattedDate})
        
      })
      aux = aux.map(element=>{
        return({...element,title:element.name,
                start:element.formattedDate+element.start,
                end:element.formattedDate+element.end

        })
      })
      console.log("aux es :",aux);
      setEvents(aux);
    })
    console.log("Los eventos son :",events);

  },[])

  return (
    <div>
    <h1 className="text-3xl text-left">Horarios de las Actividades Programadas</h1>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-2 pt-6 pb-6'>
    <Select
    options={sucursales}  placeholder="Sucursal" />

    </div>
    <FullCalendar
      plugins={[ timeGridPluggin]}
      initialView={"timeGridWeek"}
      events={events}
    />
    </div>
  )
}