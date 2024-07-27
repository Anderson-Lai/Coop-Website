import SubNavbar from "../Components/SubNavbar";
import Image from "../Components/Image";
import Card from "../Components/Card";
import embed from '../Images/Become/embedded.jpg'
import web from '../Images/Become/webdev.jpg'

export default function Become() {
    return (
        <>
            <SubNavbar text="What do I want to become?" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 px-5 py-4 mt-5">
                <div className="shadow-lg rounded-lg border-2 border-indigo-300 px-5 py-4 animate-move-down-2 flex flex-col justify-end">
                    <Image image={embed} width={500} />
                    <Card title="Embedded systems engineer" additionalStyles="my-6"  
                        text="One of the jobs in software engineering I would like to go into is designing embedded systems.
                        These pieces of software are used to program microcontrollers, small processors used for devices that do not
                        need powerful computers, such as printers, small medical devices, engines, or where large computers are too expensive,
                        such as in space." 
                    />
                </div>
                <div className="shadow-lg rounded-lg border-2 border-indigo-300 px-5 py-4 animate-move-down-2 flex flex-col justify-end">
                    <Image image={web} />
                    <Card title="Backend web developer" additionalStyles="my-6"
                        text="After my work experience doing web development, I have learnt that I enjoy
                        backend web development significantly more than frontend web development. Backend web development
                        focuses on manipulating data sent by the frontend, and is focused on the technical side of web programming,
                        as opposed to frontend development, which focuses on creating an appealing user experience, and is what the user
                        of a website will see. A backend web developer will mainly be creating web apis, and dealing with databases to store information."
                    />
                </div>
            </div>
        </>
    );
}