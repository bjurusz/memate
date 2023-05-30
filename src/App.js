import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hot from "./components/Hot";
import AddMeme from "./components/AddMeme";
import Regular from "./components/Regular";
import Mem, { allMemes } from "./components/Mem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Mem />} />
            <Route path="/regular" element={<Regular memes={allMemes} />} />
            <Route path="/hot" element={<Hot memes={allMemes} />} />
            {/* powyżej nadaję propsa, czyli przekazuję tablicę jako nazwa memes (przekazuję allMemes) dla Hot i regular, w ten sam sposób przekazuję upvotes i downvotes*/}
            <Route path="/add_meme" element={<AddMeme />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
