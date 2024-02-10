import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { HomePage } from "./pages/HomePage";
export default function App() {
  return (
    <AuthProvider >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/result/:id" element={<Result />} /> 
        </Routes>
      </Layout>
    </AuthProvider>
  );
}