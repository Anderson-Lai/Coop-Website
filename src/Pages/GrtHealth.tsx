import TypewriterEffect from '../Components/TypewriterEffect';
import Card from '../Components/Card';
import { role, description, creation } from '../Data/GrtHealth';
import Image from '../Components/Image';
import dashboard from '../Images/dashboard.png';
import lobby from '../Images/lobby_2.png';

export default function GrtHealth() {
    return (
        <>
            <div className='text-center text-4xl text-white bg-slate-500 py-5'>
                <TypewriterEffect message="What did I do at GrtHealth?" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-3 p-4'>
                <div className='flex flex-col justify-end'>

                    <div className='flex rounded-lg shadow-lg flex-col p-4 mb-14
            border-2 border-indigo-300 animate-move-down-2'>
                        <a href='https://www.grthealth.com/'
                        target='_blank' rel='noreferrer'
                        className='underline'>Visit the website: https://www.grthealth.com/</a>
                    </div>

                    <div className='mb-4'>
                        <Image image={lobby} width={600} />
                    </div>

                    <Card title='What is GrtHealth?' 
                    text={description} additionalStyles='animate-move-down-2'
                    />

                </div>
                <div className='flex flex-col justify-start'>
                    <Image image={dashboard} width={800} />

                    <Card title='What did I create?'
                    text={creation} additionalStyles='animate-move-down'
                    />

                    <Card title='My role at GrtHealth' 
                    text={role} additionalStyles='animate-move-down-2' 
                    />
                </div>
            </div>
        </>
    );
}