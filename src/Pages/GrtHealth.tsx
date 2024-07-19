import Typewriter from 'typewriter-effect';
import Card from '../Components/Card';
import { role, description, creation } from '../Data/GrtHealth';

export default function GrtHealth() {
    return (
        <>
            <div className='text-center text-4xl text-white bg-slate-500 py-5'>
                <p>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(65)
                                .typeString("What did I do at GrtHealth?")
                                .start();
                        }}
                    />
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-3 p-4'>
                <div className='flex flex-col'>
                    <Card title='What is GrtHealth?' 
                    text={description} additionalStyles='animate-move-down'
                    />
                    <Card title='My role at GrtHealth' 
                    text={role} additionalStyles='animate-move-down-2' 
                    />
                </div>
                <div>
                    <img src='' alt='work-image' className='mt-1'></img>
                    <Card title='What did I create?'
                    text={creation} additionalStyles='animate-move-down'
                    />
                </div>
            </div>
        </>
    );
}