import "css/global/Global.css";

// Fonts
import "css/global/fonts/FontClasses.css";
import "css/global/fonts/FontVariables.css";

import Routes from "routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
