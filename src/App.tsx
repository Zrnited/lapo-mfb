import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/dashboard/layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CardProfile from "./pages/CardProfile";
import CardRequest from "./pages/CardRequest";
import CreateProfile from "./pages/CreateProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard/card-profile" element={<CardProfile />} />
          <Route
            path="/dashboard/card-profile/create-profile"
            element={<CreateProfile />}
          />
          <Route path="/dashboard/card-request" element={<CardRequest />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
