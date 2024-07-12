import React, { useState } from 'react'
import {Card,FormField,Loader} from '../components';
const RenderCards = ({data,title})=>{
    if(data?.length>0) {return data.map((post)=><Card key={post._id}{...post}/>)}
    return(
        <h2 className='mt-5 font-bold text-purple-700 text-xl uppercase'>{title}</h2>
    )
}
const Home = () => {
    const [loading, setloading] = useState(false);
    const [allPosts, setallPosts] = useState(null);
    const [searchText, setsearchText] = useState('a');
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='font-extrabold text-black text-[32px]'>
            <h1>Community showcase</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus pariatur aspernatur nostrum dolorum! Saepe.
            </p>

        </div>
        <div className='mt-16'>
            <FormField/>
        </div>
        <div className='mt-10 '>{loading?(
            <div className='flex justify-center items-center'>
                    <Loader/>
            </div>
        ):(
            <>
            {searchText&&(
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing results for <span className='text-[#222328]'>{searchText}</span></h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                {searchText?(
                    <RenderCards 
                        data={[]}
                        title = "No search results found "
                    />
                ):
                <RenderCards
                    data={[]}
                    title = "No posts found "                
                />
                }
            </div>
            </>
        )}</div>
    </section>
  )
}

export default Home