import Lottie from "lottie-react";

import './reset.css';
import './App.css';
import constructionAnimation from "./construction.json";

function App() {
  return (
    <main className="App">
      <div className="lottie">
        <Lottie animationData={constructionAnimation} loop={true} />
      </div>
      <h1><span>Under Construction</span> &#x1F477;</h1>
    </main>
  );
}

export default App;
