import TypewriterEffect from '../Components/TypewriterEffect';
import Card from '../Components/Card';
import { role, description, creation } from '../Data/GrtHealth';
import temp from "../Images/temp.webp";

export default function GrtHealth() {
    return (
        <>
            <div className='text-center text-4xl text-white bg-slate-500 py-5'>
                <TypewriterEffect message="What did I do at GrtHealth?" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-3 p-4'>
                <div className='flex flex-col justify-end'>
                    <div className='flex rounded-lg shadow-lg flex-col p-4 my-2
            border-2 border-indigo-300 animate-move-down'>
                        <a href='https://www.grthealth.com/'
                        target='_blank' rel='noreferrer'
                        className='underline'>Visit the website: https://www.grthealth.com/</a>
                    </div>

                    <Card title='What is GrtHealth?' 
                    text={description} additionalStyles='animate-move-down'
                    />
                    <Card title='My role at GrtHealth' 
                    text={role} additionalStyles='animate-move-down-2' 
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-center'>
                        <img src={temp} alt='work-image' className='mt-1
                        h-[180px]' />
                    </div>

                    <Card title='What did I create?'
                    text={creation} additionalStyles='animate-move-down'
                    />
                </div>
            </div>
        </>
    );
}