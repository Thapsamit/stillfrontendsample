import logo from "./logo.svg";
import "./App.css";
import Auth from "./Auth";
import Razorpaypayments from "./Razorpaypayment";

function App() {
  const fetchBack = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <button onClick={fetchBack}>Click me</button>

      <Auth />
    </>
  );
}

export default App;
