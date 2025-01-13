import { useState } from "react"
import  Button  from "../components/Button"
import Card from "../components/Card"
import CreateContentModal from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import SideBar from "../components/SideBar"

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
    <div>
    <SideBar/>
    <div className="p-4 bg-slate-100 ml-72 h-screen">
    <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
    }}/>
        <div className="flex justify-end gap-4">
        <Button icon={<ShareIcon size="md"/>} variant = "secondary" text="Share Brain" />
        <Button onClick={() => {
            setModalOpen(true)
        }} icon={<PlusIcon size="md"/>} variant = "primary" text="Add Content"/>
        </div>
        <div className="flex gap-2 items-start">
        <Card title="First tweet" type="tweet" link="https://x.com/elonmusk/status/1878339006171083214"/>
        <Card title="Trip to the zoo" type="youtube" link="https://www.youtube.com/watch?v=jNQXAC9IVRw"/>
        {/* <Card title="Some notes" type="document"/> */}
        </div>
        </div>
    </div>
    )
}