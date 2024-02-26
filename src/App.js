import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home" ;
import DetailPage from "../src/pages/DetailPage/DetailPage" 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="detailpage" element={<DetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
