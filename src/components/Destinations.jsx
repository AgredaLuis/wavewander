
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>

            <div className='overflow-hidden w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <img className='w-full h-full object-cover hover:scale-105 duration-200 ' src={BoraBora} alt="/" />
            </div>
            <div className='overflow-hidden w-full h-full'>
            <img className='w-full h-full object-cover hover:scale-105 duration-200 ' src={BoraBora2} alt="/" />
            </div>
            <div className='overflow-hidden w-full h-full'>
            <img className='w-full h-full object-cover hover:scale-105 duration-200 ' src={Maldives} alt="/" />
            </div>
            <div className='overflow-hidden w-full h-full'>
            <img className='w-full h-full object-cover hover:scale-105 duration-200 ' src={Maldives2} alt="/" />
            </div>
            <div className='overflow-hidden w-full h-full'>
            <img className='w-full h-full object-cover hover:scale-105 duration-200 ' src={KeyWest} alt="/" />
            </div>
            
        </div>
    </div>
  )
} 

export default Destinations