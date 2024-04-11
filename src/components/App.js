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
import { VideoPage } from "./pages/VideoPage";
import { Games } from "../Games";
export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/games" element={<Games />}/>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
