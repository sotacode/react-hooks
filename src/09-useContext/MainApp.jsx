import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { DefaultPage } from "./DefaultPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"




export const MainApp = () => {
    return (

        <UserProvider >
            <div className="hookCard">
                <h2>useContext - React Hook</h2>
                <hr />
                <p>The "useContext" hook is used to save the state or actions that are required at different levels of a component tree, thus avoiding having to pass all the arguments through the props.</p>
                <p>In this example, we implement the router to see the case of different pages.</p>

                <h5>Main</h5>
                <NavBar />
                <hr />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="default" element={<DefaultPage />} />

                    <Route path="/*" element={<Navigate to="default" />} />
                </Routes>
            </div>

        </UserProvider>

    )
}

