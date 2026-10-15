import CardCom from "./components/Card";
import { data } from "./constants/data";

const App = () => {
  return <main className="flex gap-[24px] p-[32px]">

{
  data.map(item => <CardCom data={item}/>)
}

  </main>
}
export default App;