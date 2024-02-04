import "./App.css"
import Text from "@shared/Text"
import Button from "./components/shared/Button"

function App() {
  return (
    <div>
      <Text typography="t1">t1</Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>
      <hr />
      <Button size="small">클릭해주세요</Button>
    </div>
  )
}

export default App
