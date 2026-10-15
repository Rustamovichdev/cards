import { useMemo, useState } from "react"

const ModalSide = ({type,setOpen}) => {

    const [select,setselect] = useState(0)
    let changePrice = useMemo(() => {
        return type[select].price - (type[select].price*type[select].discount/100)  
    },[type[select].price,type[select].discount])

    function closeComponents(){
    setOpen(false)

    }

    function handleModal(e){
        e.stopPropagation()
    }

    return <div className="absolute top-0 left-0 bg-[#0009] flex justify-center items-center w-full h-screen" onClick={closeComponents}>
        <div className="p-[32px] bg-white rounded-[10px] flex gap-[32px]" onClick={(e) => handleModal(e)}>
            <div className="w-[160px] h-[140px]">
                <img src={type[select].img} alt={type[select].title} className="w-full h-full object-cantain"/>
            </div>
            <div>
                <h1>title:{type[select].title}</h1>
                <p>price: <del>{type[select].price}</del>$</p>
                <p>yangi narx:{changePrice}$</p>

                <div className="mt-[24px] flex gap-[12px] mb-[32px]">
                    {type.map((item,index) => (
                        <button className="w-[40px] h-[50px] border rounded" onClick={() => setselect(index)}>
                            <img src={item.img} alt="" className="w-full h-full" />
                        </button>
                    ))}
                </div>

                <button className="w-full bg-green-600 text-white">Buyurtma berish</button>
            </div>
        </div>
    </div>
}
export default ModalSide