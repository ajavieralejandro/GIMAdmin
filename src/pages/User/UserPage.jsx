
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.actions";
const UserPage = () =>{
	let dispatch = useDispatch();

    const [user,setUser] = useState({
        email : '',
        password : ''
    });
    const clickLogin = async (e) => {
        console.log("Hola user es : ",user);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
                email : user.email,
                password :user.password
            })
        };
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data =>{
				console.log("Holaaa estoy aca");	
				console.log(data.message);
				 if(data.message!=="Unauthorized")
				 dispatch(setCurrentUser(data))
				else 
					Alert("Usuario invalido");
				}
				  );
      }

    return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Ingresar</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input onChange={e=>setUser({...user,email:e.target.value})} autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">email</label>
						</div>
						<div className="relative">
							<input onChange={e=>setUser({...user,password:e.target.value})} autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">password</label>
						</div>
						<div className="relative">
							<button onClick={(e)=>clickLogin(e)} className="bg-blue-500 text-white rounded-md px-2 py-1">Ingresar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    )
}

export default UserPage;