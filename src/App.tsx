import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@pages/Home"
import Test from "@pages/Test"
import CardPage from "@pages/CardPage"
import ScrollToTop from "./components/shared/ScrollToTop"
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
