import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/componentPages/Profile";
import Pricing from "./Components/componentPages/Pricing";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Components/componentPages/Settings";
import Chat from "./Components/componentPages/Chat";
import BlankPage from "./Components/componentPages/BlankPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item><Sidebar /></Grid>

        <Grid item xs sx={{ margin: "0 20px", backgroundColor: '#f7f9fc' }}>
          {/* <Box><Searchbar /></Box> */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Default' element={<Dashboard />} />
            <Route path='/Analytics' element={<Dashboard />} />
            <Route path='/SaaS' element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/BlankPage" element={<BlankPage />} />


          </Routes>
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
