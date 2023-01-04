import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"
import { RegisterForm } from "../components/RegisterForm"

export const MainRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    if (!isAuthenticated) {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<RegisterForm />} />
                        <Route path="*" element={<LoginForm />} />  
                    </Routes>
                </BrowserRouter>
            </>
        )
    } else {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                         
                    </Routes>
                </BrowserRouter>
            </>
        )
    }

   
}