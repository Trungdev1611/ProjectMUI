import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item><Sidebar /></Grid>

        <Grid item xs>
          <Routes>
            <Route path='/Default' element={<Dashboard />} />
          </Routes>
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
