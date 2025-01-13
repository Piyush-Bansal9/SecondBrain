import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    icon?: ReactElement;
    onClick? : () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-100 text-purple-500"
}

const defaultStyles = "rounded-md px-3 py-2 flex items-center gap-2 font-light text-sm";

export default function Button(props: ButtonProps){
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles}`}>
            {props.icon} {props.text}
        </button>
}