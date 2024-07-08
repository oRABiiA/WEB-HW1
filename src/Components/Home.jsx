import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Icon from "../assets/Charts/research.png"
import Header from "./Header.jsx"

const Home = (props) => {

    const navigateToFacebook = () => {
        const url = 'https://www.facebook.com';
        window.location.href = url;
    };

    const navigateToTwitter = () => {
        const url = 'https://www.x.com';
        window.location.href = url;
    };

    return (
        <section>
            <Header />
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 dark:bg-customDark">
                <div className="md:w-1/3 max-w-sm lg:mr-56">
                    {/*<img*/}
                    {/*    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"*/}
                    {/*    alt="Home Image"*/}
                    {/*/>*/}
                    <img
                        src={Icon}
                        alt="Home Image"
                    />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <label className="mr-1">Sign in with</label>
                        <button
                            type="button"
                            className="mx-1 h-9 w-9 rounded-full bg-neutral-200 hover:bg-neutral-500 text-black shadow-[0_4px_9px_-4px_#e5e5e5]"
                            onClick={navigateToFacebook}
                        >
                            <BiLogoFacebook
                                size={20}
                                className="flex justify-center items-center w-full"
                            />
                        </button>
                        <button
                            type="button"
                            className="inlne-block mx-1 h-9 w-9 rounded-full bg-neutral-200 hover:bg-neutral-500 uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e5e5e5]"
                            onClick={navigateToTwitter}
                        >
                            <AiOutlineTwitter
                                size={20}
                                className="flex justify-center items-center w-full"
                            />
                        </button>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                            Or
                        </p>
                    </div>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black"
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 text-black"
                        type="password"
                        placeholder="Password"
                    />
                    <div className="mt-4 flex justify-between font-semibold text-sm">
                        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                            <input className="mr-1" type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a
                            className="text-neutral-200 hover:text-neutral-500 hover:underline hover:underline-offset-4"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="text-center md:text-left">
                        <button
                            className="mt-4 bg-neutral-200 hover:bg-neutral-500 px-4 py-2 text-black uppercase rounded text-xs tracking-wider"
                            type="submit"
                            onClick={() => props.setCurrentPage('uploadPage')}
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Don&apos;t have an account?{" "}
                        <a
                            className="text-red-600 hover:underline hover:underline-offset-4"
                            href="#"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
