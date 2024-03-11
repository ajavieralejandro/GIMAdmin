import Input from "antd/es/input/Input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Select } from "antd";
import { useState } from "react";
import { useNavigation } from "react-router-dom";


const CreateUserConf = () =>{
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        c_password:''
    })

    
const handleClick = () =>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body :JSON.stringify({
            email : user.email,
            c_password : user.c_password,
            name : user.name,
            password :user.password
        })
    };
     fetch('https://stingray-app-4224s.ondigitalocean.app/api/auth/register', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data) );
  }



    return(
        <div className="flex items-center justify-center ">
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input onChange={e=>{setUser({...user,name:e.target.value})}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input  onChange={e=>{setUser({...user,email:e.target.value})}}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input  onChange={e=>{setUser({...user,password:e.target.value})}}  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Confirmar Password
      </label>
      <input    onChange={e=>{setUser({...user,c_password:e.target.value})}}    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************" />
    </div>
    <div className="mb-6"
    >
        <Select   style={{
        width: '100%',
      }} mode="multiple" placeholder={"Sucursales"} options={[
            {key:1,value:"Lomas"}, {key:2,value:"Lanus"}
        ]}></Select>
    </div>
    <div className="mb-6"
    >
        <GenericSelect placeholder={"Roles"} options={[
            {key:1,value:'admin'},{key:2,value:'gerente'},{key:3,value:'cajero'},{key:4,value:'Profesor'}
        ]} ></GenericSelect>
    </div>
    <div className="flex items-center justify-center">
      <button onClick={()=>handleClick()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Registrar Usuario
      </button>

    </div>

  </form>

</div>
        </div>
    )
}

export default CreateUserConf;