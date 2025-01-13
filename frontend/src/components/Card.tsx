import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { InstaIcon } from "../icons/InstaIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

interface CardProps{
    title: string;
    type: "document" | "tweet" | "youtube" | "instapost";
    link: string;
}

const typeStyles = {
    "document": <DocumentIcon/>,
    "tweet": <TwitterIcon/>,
    "youtube": <PlayIcon/>,
    "instapost": <InstaIcon/>
}

export default function Card(props: CardProps){
    return <div className="bg-white p-4 rounded-md border border-slate-300 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between ">
                <div className="flex items-center gap-2">
                    <div className="pr-2 text-gray-500">
                    {typeStyles[props.type]}
                    </div>
                    {props.title}
                </div>
                <div className="flex items-center gap-2">
                    <div className="pr-2 text-gray-500">
                    {<ShareIcon size="md"/>}
                    </div>
                    <div className="text-gray-500">
                    {<DeleteIcon size="md"/>}
                    </div>
                </div>
            </div>
            <div className="pt-4 ">
            {props.type==="youtube" && <iframe  className="w-full " width="560" height="315" src={props.link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            // picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {props.type==="tweet" && <blockquote className="w-full twitter-tweet"> <a href={props.link?.replace("x.com", "twitter.com")}></a></blockquote>}
            </div>
    </div>
}