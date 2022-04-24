import React,{useState} from 'react'
import {MenuIcon} from '@heroicons/react/solid';
import  BUtton from './Button'
import  ButtonAudio from '../audio/button.wav';
import ButtonAudioTwo from '../audio/button-2.wav';
import ButtonAudioEqualTo from '../audio/equal-to.wav';


function Calculator() {
  // state
const audioPlay=new Audio(ButtonAudio);
const audioPlayTwo=new Audio(ButtonAudioTwo);   
const buttonAudioEqualTo=new Audio(ButtonAudioEqualTo);   
  const [number, setnumber] = useState('');
  // funtcions
  const HandelClick=(e)=>{setnumber(number.concat(e.target.value));audioPlay.play() }
  const HandelClear=()=>{setnumber('');audioPlayTwo.play()}
  const HandelSlice=()=>{setnumber(number.slice(0, -1)) ;audioPlayTwo.play()}
  const HandelAnswer=()=>{ 
    try{
      setnumber(eval(number).toString())
    }catch(error){
      setnumber('Invalid')}
      buttonAudioEqualTo.play()
}
  return (
   <React.Fragment>
        <section>
        <div className='bg-gray-900 w-96 h-custom mx-auto rounded-lg overflow-hidden mt-36'>
            <div className='text-gray-200 w-full font-semibold text-2xl h-16 flex    space-x-2 pl-2'>
            <MenuIcon className='w-7' />
            <p className='uppercase pt-4'>Calculator App</p>
            </div>
            {/*  */}
            <div className=' h-20'>
                <input 
                type="text"
                value={number}
                placeholder='0'
              
                className='w-full h-full border border-white placeholder:text-green-400 text-green-400 bg-gray-900 text-4xl text-right pr-5'
                 />
                 </div>
                 {/*  */}
                 <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
                  
                 <BUtton onClick={HandelClear} className='text-gray-900 w-20 h-20 bg-white inner-shadow'>AC</BUtton>
                 <BUtton onClick={HandelSlice} className='text-gray-900 w-20 h-20 bg-white inner-shadow'>C</BUtton>
                 <BUtton value='/' onClick={HandelClick}  className=' text-gray-900 w-20 h-20 bg-white inner-shadow'>/</BUtton>
                 <BUtton value='+' onClick={HandelClick} className='text-gray-900 w-20 h-40 bg-white row-span-2 inner-shadow'>+</BUtton>
                
                 <BUtton value='9' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>9</BUtton>
                 <BUtton value='8' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>8</BUtton>
                 <BUtton value='7' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>7</BUtton>
                
                 <BUtton value='4' onClick={HandelClick} className=' text-gray-900 w-20 h-20 bg-green-400 inner-shadow-2'>4</BUtton>
                 <BUtton value='5' onClick={HandelClick} className=' text-gray-900 w-20 h-20 bg-green-400 inner-shadow-2'>5</BUtton>
                 <BUtton value='6' onClick={HandelClick} className=' text-gray-900 w-20 h-20 bg-green-400 inner-shadow-2'>6</BUtton>
                 <BUtton value='-' onClick={HandelClick} className='text-gray-900 w-20 h-20 bg-white inner-shadow'>-</BUtton>

                 <BUtton value='1' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>1</BUtton>
                 <BUtton value='2' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>2</BUtton>
                 <BUtton value='3' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>3</BUtton>
                 <BUtton value='*' onClick={HandelClick} className='text-gray-900 w-20 h-20 bg-white  inner-shadow'>*</BUtton>
                 
                 <BUtton value='.' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>.</BUtton>
                 <BUtton value='0' onClick={HandelClick} className='text-white w-20 h-20 bg-green-400 inner-shadow-2'>0</BUtton>
                 <BUtton onClick={HandelAnswer} className='text-gray-900 w-42 h-20 bg-white col-span-2 hover:border-green-400 anime inner-shadow  transition-all '>=</BUtton>
                 
                </div>
            </div>
        
        </section>
   </React.Fragment>
  )
} 


export default Calculator
