import Button from '../../button/button';
import Cartwidget from '../../cartwidget/cartwidget';
import './navbar.css';
const Navbar = ()=>{
    const text='hice click'
    const handleclick = ()=>{
        alert(text)
    }
    return(
        <nav className="Navbar">
            <div>
                <h3>Tu tecnologia al alcance</h3>
            </div>
            <div className='button'>
                 <Button handleclick= {handleclick} label='celulares' color='blue'/>
                 <Button handleclick={handleclick} label='tablets' color='red'/>
                 <Button handleclick={handleclick} label='notebooks' color='green'/>
        
        <Cartwidget/>
            </div>
        </nav>
    )
}
export default Navbar