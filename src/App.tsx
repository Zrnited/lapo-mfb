import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/dashboard/layout";
import Home from "./pages/Home";
// import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import CardProfile from "./pages/CardProfile";
import CardRequest from "./pages/CardRequest";

const queryclient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryclient}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard/card-profile" element={<CardProfile />} />
            <Route path="/dashboard/card-request" element={<CardRequest />} />
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
