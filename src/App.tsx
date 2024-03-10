import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@pages/Home"
import Test from "@pages/Test"
import CardPage from "@/pages/Card"
import ScrollToTop from "@shared/ScrollToTop"
import SigninPage from "@pages/Signin"
import SignupPage from "@pages/Signup"
import Navbar from "@shared/Navbar"
import ApplyPage from "@pages/Apply"

import PrivateRoute from "@components/auth/PrivateRoute"
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <ApplyPage></ApplyPage>
            </PrivateRoute>
          }
        />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
