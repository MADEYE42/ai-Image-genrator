import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField,Loader} from '../components';


const CreatePost = () => {

  const navigate = useNavigate()
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingimg, setgeneratingimg] = useState(false);
  const [loading, setloading] = useState(false);
  const generatingImage = ()=>{

  }
  const handleSubmit = ()=>{

  }
  const handleChange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handleSurpriseMe = ()=>{
    const randomPrompt = getRandomPrompt(form.prompt)
    setform({...form,prompt:randomPrompt})
  }
  return (
<section className='max-w-7xl mx-auto'>
<div className='font-extrabold text-black text-[32px]'>
            <h1>Create</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus pariatur aspernatur nostrum dolorum! Saepe.
            </p>

        </div>
        <form className='mt-16 max-w-3xl ' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField 
              labelName = 'Your name'
              type='text'
              name='name'
              placeholder = 'Gouresh Madye'
              value={form.name}
              handleChange={handleChange}
            />
            <FormField 
              labelName = 'Prompt'
              type='text'
              name='prompt'
              placeholder = 'an oil painting by Matisse of a humanoid robot playing chess'
              value={form.prompt }
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className='relative bg-gray-50 border border-gray-300  text-sm text-gray-900 focus:ring-purple-900 focus:border-purple-700 w-64 h-64 p-3  flex justify-center items-center '>
                 {form.photo?(
                  <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
                 ):
                 (
                  <img src={preview} alt='preview'  className='w-9/12 opacity-40 h-9/12 object-contain'/>
                 )
                 }
                 {
                  generatingimg&&(
                    <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'> 
                        <Loader/>
                    </div>
                  )
                 }
            </div>
          </div>
          <div className='mt-5 flex gap-5'>
                <button type='button' onClick={generatingImage} className='text-white w-full bg-purple-500 rounded-md text-sm sm:w-auto px-5 py-2.5 text-center hover:bg-purple-600 duration-300' >
                  {generatingimg?'Generating....':'Generate'}
                </button>
          </div>
          <div className='mt-10'>
              <p className='mt-2 text-gray-400 text-[14px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem natus nam earum minima, eum non maxime obcaecati rerum quam qui?</p>
              <button type='submit'className=' mt-3 text-white w-full bg-blue-500 rounded-md text-sm sm:w-auto px-5 py-2.5 text-center hover:bg-blue-600 duration-300'>{loading?'Sharing...':'Share with the community'}</button>
          </div>
        </form>
</section>
  )
}

export default CreatePost