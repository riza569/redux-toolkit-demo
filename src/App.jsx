import "./App.css";
import CakeView from "./features1/cake/cakeView.jsx";
import IcecreamView from "./features1/icecream/icecreamView.jsx";
import UserView from "./features1/user/userView.jsx";
function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
