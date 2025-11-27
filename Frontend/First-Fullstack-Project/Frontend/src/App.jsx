import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/message");
      setMessage(res.data.message);
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Express + Axios Demo</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
