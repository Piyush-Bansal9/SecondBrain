import  Button  from "./components/Button"
import Card from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
    <div >
      <Button icon={<ShareIcon size="md"/>} variant = "secondary" text="Share Brain" />
      <Button icon={<PlusIcon size="md"/>} variant = "primary" text="Add Content"/>
      <Card/>
    </div>
    </>
  )
}

export default App
