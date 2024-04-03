
import { useSelector } from "react-redux";

const ClientAvatar = () => {
    let client = useSelector(state => state.client);
    console.log("El cliente es : ",client);
    return(
        <div>
        <div className="flex justify-center items-center">
        <div className="bg-white px-4 py-5 rounded-lg  text-center w-48">
            <div className="mb-4">
                <img className="w-auto mx-auto rounded-full object-cover object-center" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Avatar Upload" />
            </div>
        </div>
        </div>
        </div>
    )
}

export default ClientAvatar;