import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Manager from "./components/Manager"
import Audiences from "./components/Audiences"
import Campaigns from "./components/Campaigns"
import Templates from "./components/Templates"
import Analytics from "./components/Analytics"
import Campaign from "./components/Campaign"

function App() {

  return (
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/home" element={<Home />} />
		<Route path="/manage" element={<Manager />} >
			<Route path="campaigns" element={<Campaigns />}/>
			<Route path="campaign" element={<Campaign />}/>
			<Route path="audiences" element={<Audiences />} />
			<Route path="templates" element={<Templates />} />
			<Route path="analytics" element={<Analytics />} />
		</Route>
	</Routes>
  )
}

export default App
