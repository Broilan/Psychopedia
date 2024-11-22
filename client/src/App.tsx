import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Homepage, ArticlePage, AboutPage} from './pages'
import { Toaster } from "./components/ui/toaster";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>

      <Toaster />
    </>
  )
}