

type Props = {
    message: string,
    additionalStyles: string
}

export default function Box( { message, additionalStyles } : Props ) {
    return (
        <div className={(`flex rounded-lg shadow-lg flex-col p-3 my-2
            border-2 border-blue-600 ${additionalStyles}`)}>
            <p className="my-3">{message}</p>
        </div>
    );
}