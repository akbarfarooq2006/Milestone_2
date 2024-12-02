import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MoveRightIcon } from 'lucide-react'


const BLog_main = ({link,p,h,w,web}:{link:string,p:string,h:string,w:string,web:string}) => {
  return (
    <div>
        <Link href={web} className=' w-full'>
        <div className='w-full bg-secondary p-1.5 rounded-xl border-[1px] border-brown_primary/0 hover:border-brown_primary hover:scale-[102%] down'> 
            <Image
            alt='/'
            src={link}
            width={w}
            height={h}
            className='rounded-md'
            />
            <div className='flex flex-col gap-y-3 p-4'>
                <p className='text-sm font-normal text-wht'>Web Designing</p>
                <h3 className='capitalize text-lg font-bold text-wht font-urbanist'>{p}</h3>
                <div className='w-full flex justify-between text-wht'>
                    <p className='text-base'>View More</p>
                    <MoveRightIcon className='text-base'/>
                </div>
            </div>
        </div>
        </Link>

    </div>
  )
}

export default BLog_main