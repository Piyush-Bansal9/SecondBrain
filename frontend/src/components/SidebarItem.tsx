import { ReactElement } from "react";

interface ItemProps {
    type: string;
    icon: ReactElement;
}

export default function SidebarItem (props: ItemProps){
    return <div className="p-4 pl-5 gap-2 flex items-center hover:bg-gray-300 cursor-pointer transition-all">
        {props.icon} {props.type}
    </div>
}