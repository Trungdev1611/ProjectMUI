import { Box } from "@mui/system";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Box><Sidebar /></Box>

    </div>
  );
}

export default App;
