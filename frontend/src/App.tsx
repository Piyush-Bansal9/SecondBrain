import  Button  from "./components/Button"
import Card from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button icon={<ShareIcon size="md"/>} variant = "secondary" text="Share Brain" />
        <Button icon={<PlusIcon size="md"/>} variant = "primary" text="Add Content"/>
      </div>
      <div className="flex gap-2 items-start">
        <Card title="First tweet" type="tweet" link="https://x.com/elonmusk/status/1878339006171083214"/>
        <Card title="First yt video" type="youtube"/>
        {/* <Card title="Some notes" type="document"/> */}
      </div>
        
    </div>
    </>
  )
}

export default App
