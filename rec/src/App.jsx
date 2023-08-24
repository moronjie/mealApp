import { useGlobalContext } from "./Context";
import Meal from "./components/Meal";
import Search from "./components/Search";
import Model from "./components/Model"

function App() {
  const {showModel} = useGlobalContext()
  return (
    <>
      <Search />
      <Meal />
      {showModel && <Model />}
    </>
  );
}

export default App;
