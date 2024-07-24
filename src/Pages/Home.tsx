import TypewriterEffect from "../Components/TypewriterEffect";
import { links } from "../Data/Links";
import { tabs } from "../Data/Links";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center text-white bg-sub-nav-bg py-5">
                <div className='text-center text-4xl'>
                    <p>Welcome to Anderson Lai's IPP</p>
                </div>
            </div>
            <div className="text-center bg-slate-400 font-bold text-3xl py-8">
                <TypewriterEffect message="Click one of the buttons below to get started" />
            </div>
            <h2></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-black mt-5">
                {
                    links.map((value, index) => {
                        return (
                            <>
                                <Link to={`/${value}`} key={index} className="bg-indigo-300 rounded-lg
                                    text-center p-4 duration-150 hover:-translate-y-2 hover:scale-105 animate-move-down mx-10 my-9
                                    py-6">
                                    {tabs[index]}
                                </Link>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
}