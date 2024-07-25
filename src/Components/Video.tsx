

type Props = {
    video: string,
    width?: number,
    height?: number,
}

export default function Video( { video, width, height} : Props ) {
    if (width == null) {
        width = 350;
    }


    let classHeight: string;

    if (height == null) {
        classHeight = "h-auto"
    }
    else {
        classHeight = `${height}`
        console.log(classHeight);
    }

    return (
        <div className='flex justify-center'>
            <a href={video} download={video}>
                <video controls muted autoPlay style={{maxWidth: width, maxHeight: classHeight}}>
                    <source src={video} height={height} width={width} />
                </video>
            </a>
        </div>
    );
}