import { useState } from "react";
const AvatarUploader = ({setClient}) =>{
    const [file,setFile] = useState(null);
    const handleChange = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]));

    }
    return(
        <div className="flex justify-center items-center">
        <div className="bg-white px-4 py-5 rounded-lg  text-center w-48">
            <div className="mb-4">
            {!file?
                <img className="w-auto mx-auto rounded-full object-cover object-center" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Avatar Upload" />:
                <img className="w-auto mx-auto rounded-full object-cover object-center" src={file}  alt="Avatar Upload" />
        }
            </div>
            <label className="cursor-pointer mt-6">
                <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Subir Imagen</span>
                <input onChange={e=>handleChange(e)}  type='file' className="hidden"  />
            </label>
            </div>
        </div>
    )
}

export default AvatarUploader;