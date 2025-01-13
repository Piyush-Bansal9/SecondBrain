import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import SidebarItem from "./SidebarItem";

export default function SideBar() {
    return <div className="bg-white h-screen w-72 border-r flex flex-col fixed top-0 left-0">
        <div className="font-bold text-xl p-6 pb-8">Second Brain</div>
        <div className="flex flex-col ">
            <SidebarItem type="Tweets" icon={<TwitterIcon/>}/>
            <SidebarItem type="Videos" icon={<PlayIcon/>}/>
            <SidebarItem type="Documents" icon={<DocumentIcon/>}/>
            <SidebarItem type="Links" icon={<LinkIcon/>}/>
            <SidebarItem type="Tags" icon={<TagIcon/>}/>
        </div>
    </div>
}