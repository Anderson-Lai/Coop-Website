import SubNavbar from "../Components/SubNavbar";
import Card from "../Components/Card";

export default function Reflection() {
    return (
        <>
            <SubNavbar text="Reflecting on my coop" />
            <div className="flex flex-col items-center justify-center mt-7">
                <div style={{maxWidth: "65%"}}>
                    <Card title="Technical skills I learnt at my coop" additionalStyles=""
                    text="At my coop, I learned many important skills. I learnt how to use Microsoft Azure, a cloud service
                    provider used by many companies to host websites, web apis, and other services. Furthermore, I was able
                    to learn more about ASP.Net Core and C# and their main uses in web development, creating apis, manipulating data,
                    and accessing databases. Lastly, I was able to improve my Javascript skills, thus helping me create more responsive
                    and better websites in the future."
                    />
                </div>
                <div style={{maxWidth: "65%"}} className="my-4">
                    <Card title="Personal skills I learnt at my coop" additionalStyles=""
                    text="At my coop, the main skill I learnt was being able to take in feedback and criticism. While showing my 
                    work to my boss, I would have to listen to his feedback on my current progress, such as what needed improving,
                    and what additional features needed to be implemented. Moreover, I learnt to manage my time better. With new
                    project requirements constantly coming in, I had to learn to be efficient in my development, and to never
                    slack off such that I will never fall behind on my work."
                    />
                </div>
            </div>
        </>
    );
}