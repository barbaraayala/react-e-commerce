import'./NavBar.css'
import CardWidget from '../cardWidget/Cardwidget.js'

const NavBar =()=>{
return(
    <header>
         <nav class="nav bg-danger-subtle">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled">Disabled</a>
                <a class="nav-link "><CardWidget cantidad="10"/></a>
            </nav>
            
    </header>
)

}

export default NavBar
