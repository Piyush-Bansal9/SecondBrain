
//controlled component

import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";

interface modalProps {
    open: boolean;
    onClose: () => void;
}

export default function CreateContentModal(props: modalProps){
    return <div>
        {props.open && <div className="h-screen w-screen bg-slate-500 fixed left-0 top-0 opacity-50 flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-3 rounded-md z-50">
                <div className="flex justify-end text-red-600">
                    <div onClick={props.onClose} className="cursor-pointer">
                    <CrossIcon/>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <Input placeholder = "title"/>
                    <Input placeholder = "link"/>
                </div>
                <div className="flex justify-center p-3">
                    <Button variant="primary" text="Submit"/>
                </div>
            </span>
            </div>
        </div>}
    </div>
}
interface inputInterface {
    placeholder: string;
}

function Input ({placeholder} : inputInterface){
    return <div>
        <input type="text" placeholder={placeholder} className="px-4 py-2 border-slate-300 border rounded-md gap-2"></input>
    </div>
}