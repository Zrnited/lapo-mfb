import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/dashboard/layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CardProfile from "./pages/CardProfile";
// import CardRequest from "./pages/CardRequest";
import CreateProfile from "./pages/CreateProfile";
import CardRequests from "./pages/CardRequests";
import RequestDetails from "./pages/RequestDetails";

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
          <Route path="/dashboard/card-request" element={<CardRequests />} />
          <Route path="/dashboard/card-request/request-details" element={<RequestDetails />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
