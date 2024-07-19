import { ReactElement } from "react";
import { links } from "../Data/Links";
import { tabs } from "../Data/Links";
import { Link } from "react-router-dom";

type Props = {
    children: ReactElement
}

export default function Layout( { children } : Props) {
    return (
        <>
            <header className="shadow-md p-4 bg-nav-bg text-white">
                <nav className="flex justify-between flex-col lg:flex-row">
                    <Link to={"/"} className="mb-2 lg:mb-0 p-2 mx-2">
                        <p>
                            Anderson Lai IPP
                        </p>
                    </Link>
                    <ul className="list-none">
                        {
                            links.map((value, index) => {
                                return (
                                <li key={index} className="inline-block mx-2 p-2
                                hover:bg-hover duration-150
                                hover:-translate-y-2 delay-100 rounded-lg">
                                    <Link to={`/${value}`}>{tabs[index]}</Link>
                                </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer></footer>
        </>
    );
}