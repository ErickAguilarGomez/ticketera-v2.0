import { useContext } from "react"
import { GlobalContext } from "../../Context/Contex"


const Input = () => {
    const {filterValue}=useContext(GlobalContext)
    function handleInput(e){
      filterValue(e.target.value)
    }


  return (
    <input 
    type="text" 
    placeholder="Busca Productos" 
    className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={handleInput}
  />
  )
}

export default Input
