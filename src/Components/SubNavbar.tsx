import TypewriterEffect from "./TypewriterEffect";

type Props = {
    text: string
}

export default function SubNavbar( { text } : Props ) {
    return (
        <>
            <div className='text-center text-4xl text-white bg-sub-nav-bg py-5'>
                <TypewriterEffect message={text} />
            </div>
        </>
    );
}