import './Navbar.scss'
import Menu from '../../Assets/interfaces/main-menu.svg'

const Navbar = () => {


  const onChangeInput = ()=> {
    const inputSearch = document.querySelector('input')
    const root = document.querySelector(':root')
    if(inputSearch.value != null){
      root.style.setProperty('--display-header', 'none')
    }
    if(inputSearch.value === ''){
      root.style.setProperty('--display-header', 'flex')
    }
  }

  return (
    <nav>
      <div className="lt-side">
        H-commerce
      </div>
      <div className="md-side">
        <input type="text" placeholder='Search item...' name='searh' onChange={onChangeInput}/>
      </div>
      <div className="rt-side">
        <div className="menu">
          <img src={Menu} alt="" />
        </div>
      </div>
    </nav>
    );
}
 
export default Navbar;