import Typewriter from 'typewriter-effect';

type Props = {
    message: string,
}

export default function TypewriterEffect( { message } : Props ) {
    return (
        <Typewriter 
            onInit={(typewriter) => {
                typewriter
                    .changeDelay(65)
                    .typeString(message)
                    .start();
            }}
        />
    );
}