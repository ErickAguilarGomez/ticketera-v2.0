import NavBar from "./NavBar"
import Input from "./Input"

const Header = () => {
  return (
    <header className="flex bg-red-500 flex-col">
      <div className="flex justify-between items-center mb-4 p-4">
        <img 
          src="https://www.pipol.news/content/images/2020/10/tiendamia.jpg" 
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
       
      <Input/>

       <ul className="list-none flex justify-around p-3 space-x-6">
        <li className="mx-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000" alt="Facebook" className="w-6 h-6" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="Instagram" className="w-6 h-6" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="WhatsApp" className="w-6 h-6" />
          </a>
        </li>
      </ul>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
