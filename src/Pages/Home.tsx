import TypewriterEffect from "../Components/TypewriterEffect";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center text-white bg-slate-500 py-5">
                <div className='text-center text-4xl'>
                    <TypewriterEffect message="Welcome to Anderson Lai's IPP" />
                </div>
            </div>
        </>
    );
}