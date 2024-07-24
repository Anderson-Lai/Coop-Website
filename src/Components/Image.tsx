

type Props = {
    image: string,
    width?: number,
    height?: number,
}

export default function Image( { image, width, height} : Props ) {
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
            <img src={image} alt='image' style={{maxWidth: width, maxHeight: classHeight}}/>
        </div>
    );
}