

type Props = {
    title: string,
    text: string,
    additionalStyles: string,
}


export default function Card( { title, text, additionalStyles } : Props) {
    return (
        <div className={(`flex rounded-lg shadow-lg flex-col p-5 pb-2 my-2
            border-2 border-indigo-300 ${additionalStyles}`)}>
            <h4 className="font-bold text-2xl mb-2">{title}</h4>
            <hr className="border-2" />
            <p className="my-3">{text}</p>
        </div>
    );
}