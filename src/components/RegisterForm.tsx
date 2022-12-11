import { NavLink } from "react-router-dom"

export const RegisterForm = () => {
    return (
        <div className="place-content-center flex m-10">
            <div className="border-solid w-1/3 justify-center rounded drop-shadow-lg">
                <form className="bg-white col-span-1 place-content-start p-8">
                    <h1 className="text-3xl text-center text-sky-600 font-bold mb-5">
                        Register
                    </h1>
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
                        <input type="password" name="password" id="password" className="border-2 p-2 rounded w-full" />
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
