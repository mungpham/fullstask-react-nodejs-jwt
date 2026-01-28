import { useEffect } from "react";
import axios from "./utils/axios.customize.js";

function App() {

  useEffect(() => {
    const fetchDate = async () => {
      const response = await axios.get("/v1/api/test-api");
      console.log('>>> check data axios: ', response.data)
    }
    fetchDate();
  }, [])

  return (
    <>
      hello world
    </>
  )
}

export default App
