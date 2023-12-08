import Link from "next/link";
import { AiOutlineCheck,AiOutlineEdit,AiOutlineDelete,AiOutlineHourglass } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Todoo = ({id,todoName,remainedTime,completed,onChangeCondition,onTodoDelete}) => {
    return ( 
        <div className={`grid grid-cols-6 p-4 shadow-md rounded-md gap-6 ${completed?'bg-teal-700 ':'bg-teal-300'}`}>
            <div className="flex justify-between item-center flex-1 col-span-4">
                <p>{todoName}</p>
                {completed ? <p>done</p> : <p className="flex items-center gap-x-1"><AiOutlineHourglass className="icon"/>{remainedTime}</p>}
            </div>
           <div className="flex justify-end items-center gap-4 col-span-2">
            <div className="flex justify-center items-center">
                {completed && <AiOutlineCheck className="icon cursor-pointer" onClick={onChangeCondition} />}
                {!completed && <MdCheckBoxOutlineBlank className="icon cursor-pointer" onClick={onChangeCondition} />}
            </div>
            <Link legacyBehavior href={`/todos/${id}`} className="flex justify-center items-center"><a><AiOutlineEdit className="icon cursor-pointer"/></a></Link>
            <div className="flex justify-center items-center"><AiOutlineDelete className="icon cursor-pointer" onClick={onTodoDelete}/></div>
           </div>

        </div>
     );
}
 
export default Todoo;