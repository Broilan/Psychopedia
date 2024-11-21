import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import ArticlePage from './pages/ArticlePage'
import { Toaster } from "./components/ui/toaster";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </Router>

      <Toaster />
    </>
  )
}