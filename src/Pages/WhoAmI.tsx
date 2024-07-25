import SubNavbar from "../Components/SubNavbar";
import Image from '../Components/Image';
import { artifactDescriptions, artifacts } from "../Data/WhoAmI";
import Box from "../Components/Box";
// import Video from "../Components/Video";

export default function WhoAmI() {
    return (
        <>
            <SubNavbar text="Who am I?" />
            <div className="bg-rose-700 py-6 px-8">
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="animate-move-down">
                        <Image image={artifacts[0]} width={250} />
                    </div>
                    
                    <div className="animate-move-left max-w-xl">
                        <Box message={artifactDescriptions[0]} additionalStyles="text-white mx-7 border-slate-950" />
                    </div>
                </div>
            </div>

            <div className="bg-orange-600 py-6 px-8">
                <div className="flex items-center justify-end flex-col lg:flex-row">
                    <div className="animate-move-right max-w-xl">
                        <Box message={artifactDescriptions[1]} additionalStyles="text-white mx-7 border-slate-950" />
                    </div>

                    <div className="animate-move-down">
                        <Image image={artifacts[1]} width={250} />
                    </div>
                </div>
            </div>

            <div className="bg-emerald-600 py-6 px-8">
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="animate-move-down-2">
                       {/* <Video video={artifacts[2]} width={150} /> */}
                       <a href="https://youtu.be/UweWKMyssLY" target="_blank" rel="noreferrer"
                        className="underline text-sky-300">Day in the life</a>
                    </div>

                    <div className="animate-move-left max-w-xl">
                        <Box message={artifactDescriptions[2]} additionalStyles="text-white mx-7 border-slate-950" />
                    </div>
                </div>
            </div>

            {/* <div className="bg-purple-700 py-6 px-8">
                <div className="flex items-center justify-end flex-col lg:flex-row">
                    <div className="animate-move-right max-w-xl">
                        <Box message={artifactDescriptions[3]} additionalStyles="text-white mx-7 border-slate-950" />
                    </div>

                    <div className="animate-move-down-2">
                       <Image image={artifacts[3]} width={250} />
                    </div>
                </div>
            </div> */}
        </>
    );
}