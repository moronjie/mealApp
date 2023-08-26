import { useGlobalContext } from "./Context";
import Meal from "./components/Meal";
import Search from "./components/Search";
import Model from "./components/Model"
import Favorite from "./components/Favorite";

function App() {
  const {showModel, favoriteMeals} = useGlobalContext()
  return (
    <>
      <Search />
      {favoriteMeals.length > 0 && <Favorite/>}
      <Meal />
      {showModel && <Model />}
    </>
  );
}

export default App;
