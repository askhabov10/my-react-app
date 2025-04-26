import { Link, NavLink } from "react-router";

function Header() {
    return ( 
        <header className="bg-cyan-900 py-4">
            <nav className="container mx-auto flex items-center justify-between">
                <div>
                    <Link to='/' className="text-4xl text-white">MR</Link>
                </div>

                <div className="flex gap-x-4">
                    <NavLink to='/title' className='live uppercase text-xl hover:text-teal-500 text-white'>Title</NavLink>
                
                    <NavLink to='/about' className='live uppercase text-xl hover:text-teal-500 text-white'>about</NavLink>
                </div>    
            </nav>
        </header>
     );
}

export default Header;