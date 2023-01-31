import logo from "./logo.svg";
import "./App.css";
import { PaystackButton } from "react-paystack";

function App() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "h.d.sogbesan@gmail.com",
    amount: 200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_7ff4fce15eed96e8ab32929f57eba26532326b87", // replace with the public key thats connected to the environment youre targetting
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log("copy this reference", reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  return (
    <div className="App">
      <PaystackButton {...componentProps} />
    </div>
  );
}

export default App;
