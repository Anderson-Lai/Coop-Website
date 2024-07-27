import SubNavbar from "../Components/SubNavbar";
import Card from "../Components/Card";
import Image from "../Components/Image";
import uni from '../Images/Plans/u of t.jpg'

export default function Plan() {
    return (
        <>
            <SubNavbar text="What is my plan?" />
            <div style={{maxWidth: "100%"}} className="flex flex-col items-center justify-center mt-7">
                <div className="flex justify-center" style={{maxWidth: "65%"}}>
                    <Card title="Undergraduate degree" additionalStyles="animate-move-down-2"
                    text="To achieve my goal as software engineer, my first step in my plan is to get
                    an undergraduate degree. I will aim to get a degree in computer science from the
                    University of Toronto. This is a four year program, with an optional coop. Accounting
                    for the coop, it may take nearly five years depending on the course scheduling." 
                    />
                </div>
                <div className="flex justify-center my-6">
                    <Image image={uni} width={800} />
                </div>
            </div>
        </>
    );
}