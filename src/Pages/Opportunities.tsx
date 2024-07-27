import SubNavbar from "../Components/SubNavbar";
import Card from "../Components/Card";
import Image from "../Components/Image";
import dev from '../Images/Opportunities/CDG_blog_post_image_01.jpg'
import softdev from '../Images/Opportunities/software-developer-1.avif'

export default function Opportunities() {
    return (
        <>
            <SubNavbar text="What are my opportunities?" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 px-5 py-4">
                <Image image={dev} width={500} />
                <div className="flex items-center">
                    <Card title="Future job opportunities"
                     text="After completing my coop, I now have work experience with web development and software development in general. 
                        With this newfound experience, I can explore opportunities related to software engineering, and other related fields. In software 
                        engineering, I can also look to expand my career to more than just web development, such as ios and Andriod development." 
                        additionalStyles="animate-move-down-2" />
                </div>
            </div>
            <div className="mt-3 mb-5 flex justify-center items-center">
                <Image image={softdev} width={500} />
            </div>
        </>
    );
}