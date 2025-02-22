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
import NotFound from "./pages/NotFound";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* Protected routes begins */}
        <Route element={<Auth />}>
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
        </Route>
        {/* Protected routes ends */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
