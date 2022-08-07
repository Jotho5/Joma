import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './context/ProtectedRoutes'
import Account from './pages/Account'
import Footer from './components/Footer'
import Test from './pages/Test'

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Register />} />
					<Route path="/contact" element={<Contact />} />

					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
						exact
					/>
					<Route
						path="/dashboard/test"
						element={
							<ProtectedRoute>
								<Test />
							</ProtectedRoute>
						}
						exact
					/>

					<Route
						path="/dashboard/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer data-aos="fade" data-aos-duration="800" data-aos-delay="1000" />
		</AuthContextProvider>
	)
}

export default App
