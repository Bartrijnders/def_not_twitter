import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"
import { RegisterForm } from "../components/RegisterForm"

export const MainRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                     <Route path="/login" element={<LoginForm />} />
                     <Route path="/signup" element={<RegisterForm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}