import { useMemo, useState } from "react";
import ModalSide from "./modal";
import { createPortal } from "react-dom";

const CardCom = ({data}) => {

  const [open,setOpen] = useState(false)

    let disPrice = useMemo(() => {
        return data.price - (data.price*(data.discount/100))
    },[data.price,data.discount])
    return <div className="border rounded-[10px]">
        <div className="w-[160px] h-[180px] rounded-[10px]">
            <img src={data.img} alt={data.title} className="w-full h-full rounded-[10px]"/>
        </div>
        <div className="p-[12px]">
            <h3>Nomi:{data.title}</h3>
            <p>Tasnif:{data.desc}</p>
            <div>
                <p>Yangi narx:{disPrice}$</p>
                <p>Narxi:<del>{data.price}</del>$</p>
            </div>
            <p>count:{data.count}</p>
            <div className="flex justify-end">
                <button className="border rounded bg-[#166199] text-white p-[2px]" onClick={() => setOpen(true)}>buyurtma</button>
            </div>
        </div>
        {
            open && createPortal(<ModalSide type={data.type} setOpen={setOpen}/>,document.getElementById("mod"))
        }
    </div>
}
export default CardCom;