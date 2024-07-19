import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import GrtHealth from "./Pages/GrtHealth"
import Opportunities from "./Pages/Opportunities"
import Become from "./Pages/Become"
import Plan from "./Pages/Plan"
import Reflection from "./Pages/Reflection"
import DoesNotExist from "./Pages/DoesNotExist"
import WhoAmI from "./Pages/WhoAmI"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="grthealth" element={<GrtHealth />} />
          <Route path="whoami" element={<WhoAmI />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="become" element={<Become />} />
          <Route path="plan" element={<Plan />} />
          <Route path="reflection" element={<Reflection />} />
          <Route path="*" element={<DoesNotExist />} />
        </Routes>
      </Layout>
    </BrowserRouter>  
  )
}

export default App
