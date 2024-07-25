import Card from '../Components/Card';
import { role, description, creation } from '../Data/GrtHealth';
import Image from '../Components/Image';
import dashboard from '../Images/GrtHealth/dashboard.png';
import lobby from '../Images/GrtHealth/lobby_2.png';
import SubNavbar from '../Components/SubNavbar';

export default function GrtHealth() {
    return (
        <>
            <SubNavbar text='What did I do at GrtHealth?' />
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
                <div className='flex flex-col justify-end'>
                    <Image image={dashboard} width={550} />

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