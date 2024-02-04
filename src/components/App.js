import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { useState } from "react";
export default function App() {
  const [qna,setQna] = useState();
  return (
    <AuthProvider >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz/:id" element={<Quiz />} setQna={setQna} />
          <Route path="/result/:id" element={<Result />} /> 
        </Routes>
      </Layout>
    </AuthProvider>
  );
}