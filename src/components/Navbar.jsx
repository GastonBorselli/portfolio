
//librerias: bootstrap, tailwind, mui.
export function Navbar(){
    return(
        <nav className="nav">
            
            <a href="/home" className="titulo">Gastón</a>
            <ul>
                <li>
                    <a className="active" href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">Acerca de mí</a>
                </li>
                <li>
                    <a href="/abilities">Habilidades</a>
                </li>
                <li>
                    <a href="/projects">Proyectos</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}