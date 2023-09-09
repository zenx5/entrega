import { useEffect, useState } from "react"

export default function List() {
  const [newItem, setNewItem] = useState("")
  const [list, setList] = useState<Array<string>>([])

  useEffect(() => {
    const list = sessionStorage.getItem("list")
    if(list) setList(JSON.parse(list))
  }, [setList])

  const handlerSave = () => {
    setList([...list, newItem])
    sessionStorage.setItem("list", JSON.stringify([...list, newItem]))
    setNewItem("")
  }

  const handlerDelete = (index:number) => () => {
    const newList = list.filter((item:string, i:number) => i !== index)
    setList(newList)
    sessionStorage.setItem("list", JSON.stringify(newList))
  }

  const handlerChange = (event:any) => {
    setNewItem(event.target.value)
  }


  return (
    <div className="p-5 bg-gray-100 h-screen">
      <div className="w-1/3 mx-auto flex flex-col rounded-lg p-4 bg-white gap-4 shadow-lg shadow-gray-400 h-min-1/4">
        <h3 className="text-center font-bold">Nuevo Item</h3>
        <input type="text" placeholder="Nombre" value={newItem} onChange={handlerChange} className="text-gray-500 font-bold outline-none border border-blue-200 bg-blue-50 p-2 rounded-lg hover:border-blue-400 focus:border-blue-400 focus:bg-blue-200"/>
        <button onClick={handlerSave} className="bg-purple-500 p-2 px-10 rounded-lg text-white font-bold w-fit mx-auto hover:p-3 hover:px-12 transition-[padding] transition-5000">Guardar</button>
      </div>
      <div className="w-1/3 mx-auto flex flex-col rounded-lg p-4 bg-white gap-4 shadow-lg shadow-gray-400 mt-10">
        <h3 className="text-center font-bold">Lista de Items</h3>
        <ul className="border-t-2 border-b-2 pt-2" >
          { list && list.map( (item:string, index:number) => <li className="group flex flex-row justify-between p-2 border-b cursor-pointer items-center hover:bg-blue-100" key={index} onClick={handlerDelete(index)}>
            <span>
              <p className="font-semibold group-hover:text-purple-500">{item}</p>
            </span>
            <span className="hidden group-hover:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </span>
          </li>)}
          { list.length===0 && <li className="flex flex-row justify-between p-2 border-b cursor-pointer items-center hover:bg-blue-100">
            <span className="text-center w-full">
              <p className="font-semibold text-gray-500 italic">No hay items</p>
            </span>
          </li>}
        </ul>
      </div>
    </div>
  );
}
