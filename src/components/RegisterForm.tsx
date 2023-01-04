import { NavLink } from "react-router-dom"

export const RegisterForm = () => {

    //on submit function
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit")
        if (e.currentTarget) {
            const formData = new FormData(e.currentTarget)
            const username = formData.get("username")
            const email = formData.get("email")
            const password = formData.get("password")
            const confirm_password = formData.get("confirm_password")
            console.log(username)
            console.log(email)
            console.log(password)
            console.log(confirm_password)
        }
    }

    return (
        <div className="place-content-center flex m-10">
            <div className="border-solid w-1/3 justify-center rounded drop-shadow-lg">
                <form className="bg-white col-span-1 place-content-start p-8" onSubmit={onSubmit}>
                    <h1 className="text-3xl text-center text-sky-600 font-bold mb-5">
                        Register
                    </h1>
                    <div className="mb-4 place-content-start">
                        <label htmlFor="Username" className="text-gray-600 text-sm font-bold mb-2">Username</label>
                        <input type="text" name="username" id="username" className="border-2 p-2 rounded w-full" />
                    </div>
                    <div className="mb-4 place-content-start">
                        <label htmlFor="email" className="text-gray-600 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="email" id="email" className="border-2 p-2 rounded w-full" />
                    </div>
                    <div className="mb-6 place-content-start" >
                        <label htmlFor="password" className="text-gray-600 text-sm font-bold mb-2">Password</label>
                        <input type="password" name="password" id="password" className="border-2 p-2 rounded w-full" />
                    </div>
                    <div className="mb-6 place-content-start" >
                        <label htmlFor="password" className="text-gray-600 text-sm font-bold mb-2">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" className="border-2 p-2 rounded w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 p-2 rounded text-white w-full drop-shadow-lg font-bold ">Sign up</button>
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        Already have an account?{" "}
                        <NavLink
                            to="/login"
                            className="font-medium text-sky-500 hover:underline"
                        >
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    )
}
