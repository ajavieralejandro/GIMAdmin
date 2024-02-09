const Navbar = () =>{
    return (
        <>
<nav className="px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div className="text-indigo-500 md:order-1">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
             
				<li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Ventas</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Ingreso Web</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Acceso</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Historial</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Tutoriales</a></li>
			</ul>
		</div>
		<div className="order-2 md:order-3">
        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"></img>
		</div>
	</div>
</nav>
        </>
    )
}

export default Navbar;