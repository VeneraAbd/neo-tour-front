import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home" ;
import DetailPage from "../src/pages/DetailPage/DetailPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="detailpage" element={<DetailPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;