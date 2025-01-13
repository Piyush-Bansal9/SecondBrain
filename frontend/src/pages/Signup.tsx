import Button from "../components/Button";

export function Signup() {
    return <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
        <div className="p-11 rounded-md flex flex-col gap-3 border-slate-400 border bg-white">
            <div className="pb-8 flex justify-center text-xl">
            Sign Up
            </div>
            <div className="flex flex-col gap-5">
            <Input placeholder="Enter username"/>
            <Input placeholder="Enter password"/>
            <Button variant="primary" text="Create account"/>
            </div> 
        </div>
    </div>
}

function Input(props: {
    placeholder: string;
}) {
    return <input placeholder={props.placeholder} type="text" className="p-3 border border-gray-400 rounded-md"></input>
}