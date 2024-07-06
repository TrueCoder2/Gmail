import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/slice';
import  heroImg  from "../assets/hero-gmail-1.webp"
import connect from "../assets/connect.png"
import { MdOutlineWifiOff } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SignIn = () => {

    const dispatch = useDispatch();
     
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(setAuthUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }));
        } catch (error) {
            console.log(error);
        }
    }

  return (

    <div className='absolute'>
        <nav className="flex justify-between items-center  shadow-lg p-3  fixed w-full bg-white ">
         <div className="logo flex gap-x-4 items-center ml-16 z-0">
         <img className='w-6 h-6' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
         <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
         </div>

         <div className='flex gap-x-4 mr-16'>
            <button className='text-blue-400 p-2 text-xl font-semibold'>For work</button>
          <button onClick={signInWithGoogle} className='bg-blue-600 px-12 py-2 text-medium text-white font-semibold rounded-sm'>Login</button>
         </div>
        </nav>
         
        

         {/* Hero section starts here */}
        <div className='w-full flex flex-row mt-10 '>
          <div className='cta pl-16 pt-24 w-[50%] mt-20'>
            <h1 className='text-6xl font-semibold text-gray-900'>Secure, smart, </h1>
            <h1 className='text-6xl font-semibold text-gray-900'>and easy to use </h1>
            <h1 className='text-6xl font-semibold text-gray-900'>email </h1>

            <p className='font-semibold text-gray-500 mt-10 text-lg'>Get more done with Gmail. Now integrated with Google Chat, Google Meet, and more, all in one place. </p>

            <button onClick={signInWithGoogle} className='bg-blue-600 px-16 py-2 text-medium text-white font-semibold rounded-sm mt-10'>Login</button>
            <button className='text-blue-600 p-2 pl-8 text-base font-semibold'>For work</button>
          </div>

          <div className='w-[50%] '>
             <img className='' src={heroImg} alt="" />
          </div>
          
        </div>

     <div className='p-12'>
      <h1 className='text-5xl font-semibold text-gray-900'> Email that's secure, </h1>
      <h1 className='text-5xl font-semibold text-gray-900'>private, and puts you in </h1>
      <h1 className='text-5xl font-semibold text-gray-900'> control.  </h1>
     </div>

        {/* Security section starts here */}
        <div className='w-full flex'>
          <div className='w-[50%] p-12'>
            <div className='border-l-4 border-blue-600 p-4'>
              <h1 className='text-xl text-blue-600'>
              We never use your Gmail content for any ads purposes 
              </h1>  

              <p className='text-gray-600 font-semibold leading-6'>Gmail uses industry-leading encryption for all messages you </p>
              <p className='text-gray-600 font-semibold leading-6'>receive and send. We never use your Gmail content to personalize ads.</p>
              <p className='text-gray-600 font-semibold leading-6'>personalize ads.</p>
              </div>
              
              <div className='border-l-4 border-gray-400 p-4'>
              <h1 className='text-xl text-gray-700 mt-10'>
              Gmail keeps over a billion people safe every
              </h1>  
              <h1 className='text-xl text-gray-700 '>
              day 
              </h1> 

              <p className='text-gray-600 font-semibold'> Gmail blocks 99.9% of spam, malware, and dangerous links from </p>
              <p className='text-gray-600 font-semibold'> ever reaching your inbox.</p>
              </div>

              <div className='border-l-4 border-gray-400 p-4'>
              <h1 className='text-xl text-gray-700 mt-10'>
              The most advanced phishing protections  
              </h1>
              <h1 className='text-xl text-gray-700 '>
              available 
              </h1> 


              <p>Gmail uses industry-leading encryption for all messages you </p>
              <p>receive and send. We never use your Gmail content to personalize ads.</p>
              <p>personalize ads.</p>
              </div>

              <div className='border-l-4 border-gray-400 p-4'>
              <h1 className='text-xl text-gray-700 mt-10'>
              We never use your Gmail content for any ads purposes 
              </h1>  

              <p>Gmail uses industry-leading encryption for all messages you </p>
              <p>receive and send. We never use your Gmail content to personalize ads.</p>
              <p>personalize ads.</p>
              </div>
          </div>

          <div className=' w-[50%] '>
            <img className='' src="https://lh3.googleusercontent.com/Cle-1GLl4P8zbJafbrnN8-7CgfVSduAR1j2DACNepAm5JL37GANl8tIM1h72Cyga71wO2lGcNPONnQl5MKFi_1TGSBQM8mV9qaKdQw=rw-e365-w2880" alt="" />
          </div>
        </div>


        {/* connected section is here */}
        <div className='w-full flex'>

        

        <div className=' w-[50%] mt-10 p-5'>
           <img src={connect} alt="" />
          </div>

           

          <div className='w-[50%] p-12'>

          <div>
      <h1 className='text-4xl font-semibold text-gray-900'> Get more done with  </h1>
      <h1 className='text-4xl font-semibold text-gray-900 py-3'>Gmail </h1>
     
     </div>

            <div className='border-l-4 border-blue-600 p-4 mt8'>
              <h1 className='text-xl text-blue-600'>
              We never use your Gmail content for any ads purposes 
              </h1>  

              <p className='text-gray-600 font-semibold leading-6'>Gmail uses industry-leading encryption for all messages you </p>
              <p className='text-gray-600 font-semibold leading-6'>receive and send. We never use your Gmail content to personalize ads.</p>
              <p className='text-gray-600 font-semibold leading-6'>personalize ads.</p>
              </div>
              
              <div className='border-l-4 border-gray-400 p-4'>
              <h1 className='text-xl text-gray-700 mt-10'>
              Gmail keeps over a billion people safe every
              </h1>  
              <h1 className='text-xl text-gray-700 '>
              day 
              </h1> 

              <p className='text-gray-600 font-semibold'> Gmail blocks 99.9% of spam, malware, and dangerous links from </p>
              <p className='text-gray-600 font-semibold'> ever reaching your inbox.</p>
              </div>

              <div className='border-l-4 border-gray-400 p-4'>
              <h1 className='text-xl text-gray-700 mt-10'>
              The most advanced phishing protections  
              </h1>
              <h1 className='text-xl text-gray-700 '>
              available 
              </h1> 


              <p>Gmail uses industry-leading encryption for all messages you </p>
              <p>receive and send. We never use your Gmail content to personalize ads.</p>
              <p>personalize ads.</p>
              </div>

              
          </div>

          
        </div>



        {/* app store Link */}

        <div className='w-full flex items-center justify-center bg-slate-100 py-20'>
          <div>
            <h1 className='text-xl font-semibold'>Bring the best of Gmail to your device </h1>
            <div className='flex gap-x-4 justify-center items-center mt-8'>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111" alt="" /> 
             <img className='w-36' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png" alt="" /> 
            </div>
          </div>
        </div>

        {/* Three tab grid */}
        <div>
          <div className='bg-white p-8'></div>
          <div className='bg-gray-200 flex justify-center items-center'>
            <div className='w-[80%] flex justify-between items-center gap-x-4 p-10'>
              <div>
              <div className='bg-blue-600 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                <TiTick color='white' size={28}/>
              </div>
                 <h1 className='font-semibold text-xl my-4'>Works with other tools</h1>
                 <p className='text-gray-700 text-base font-semibold'>
                 Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird, including contact and event sync. 
                 </p>
              </div>

              <div>
              <div className='bg-blue-600 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                <MdOutlineWifiOff color='white' size={28}/>
              </div>
                 <h1 className='font-semibold text-xl my-4'>Stay productive, even offline </h1>
                 <p className='text-gray-700 text-base font-semibold'>
                 Gmail offline lets you read, reply, delete, and search your Gmail messages when you’re not connected to the internet. 
                 </p>
              </div>

              <div>
              <div className='bg-blue-600 h-[50px] w-[50px] rounded-full flex justify-center items-center'>
                <MdOutlineDevices color='white' size={28}/>
              </div>
                 <h1 className='font-semibold text-xl my-4'>Experience Gmail on any device </h1>
                 <p className='text-gray-700 text-base font-semibold'>
                 Enjoy the ease and simplicity of Gmail, wherever you are. 
                 </p>
              </div>
              
            </div>
          </div>
          <div className='bg-white p-10'></div>
          
      
        </div>

      <div className='flex justify-center items-start'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-8 h-6 ' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
          <h1 className='text-4xl font-semibold text-gray-900 mt-6'>Show the world</h1>
          <h1 className='text-4xl font-semibold text-gray-900 mt-4'>how it’s done. </h1>
          <p className='text-gray-700 font-medium text-3xl mt-4'>Get started with a more powerful Gmail. </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mt-6'>Create an account</button>
          <button className='bg-gray-100 text-blue-600 my-6 font-semibold py-3 px-6 rounded'>For work</button>
        </div>
      </div>


       <div>
        <img src="https://lh3.googleusercontent.com/2oSWh6r_utxN6yagJ8CDNGktMjCSZAw7EsrwNeYq6wmnm9qneA2ZrkIeZzylCiawALG7CqmsBQD-JRBvayjGKYCC6eiLVMlLaRKZ-iA=rw-e365-w2880" alt="" />
       </div>

       <div className='Footer bg-gray-200 p-6'>
        <div className='flex items-center'>
        <ul className='flex gap-x-12 items-center'>
          <li className='font-semibold text-2xl text-gray-600 ml-14'>Google</li>
          <li className='text-gray-700 '>Privacy</li>
          <li className='text-gray-700 '>Terms</li>
          <li className='text-gray-700 '>About Google</li>
          <li className='text-gray-700 '>Products</li>
          <li className='text-gray-700 '>Policy</li>
          <li className='text-gray-700 '>Privacy & Security</li>
        </ul>
       </div>
       </div>
    </div>
  )
}

export default SignIn
