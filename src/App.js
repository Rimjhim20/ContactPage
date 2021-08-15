/* eslint-disable jsx-a11y/alt-text */
import "tailwindcss/tailwind.css"
import './index.css';
import circle from './img/blue1.jpg';
import chat from './img/chat.png'
function App() {
  return (
   <>

   <div class="container mt-16 mx-auto ">
  <div class="flex flex-col md:flex-row lg:flex-row 2xl:flex-row justify-evenly text-center  space-x-16">


          <div class=" relative flex flex-col min-w-0  break-words w-5/12 mb-6 ml-20 mt-20  bg-white">
           <div class="flex-auto p-5 w-max m-0 md:-ml-28 lg:m-0 2xl:m-0 ">
             <div class="container  " >
           <h1 class="text-5xl font-semibold mr-40 flex flex-wrap">Let's Chat</h1>
          <span class="text-5xl font-semibold tracking-tighter sm:tracking-tighter flex flex-wrap">Tell me about </span>
          <p class=" text-5xl font-semibold mr-44 flex flex-wrap">Project.</p>
          </div>
          <p class="mt-3 mb-4 text-gray-600 flex flex-wrap leading-relaxed mr-48">Let's create something together 🤟</p>
          <div class=" container transform hover:scale-110 border-2 flex flex-wrap  motion-reduce:transform-none text-center rounded-md w-72 bg-white break-words shadow-lg p-3 h-20  "> 
          <img src="https://img.icons8.com/fluency/50/000000/apple-mail.png"/> 
        <span > Mail me at </span>
        <a href=" amityvirtuallab@gmail.com" class="font-bold ml-12 -mt-8 text-blue-800"> amityvirtuallab@gmail.com</a>
        </div>
          </div>
          <div class=" flex  ">
     <img src={ circle } class=" w-10 h-10 rounded-full"/>
       </div>
          </div>
         
          <div class=" relative   flex-wrap flex flex-col w-max break-words  shadow-lg rounded-3xl bg-white">
        <div class=" flex-auto   md:p-3 lg:p-7">
        <div class=" flex  ">
         <img src={ circle } class=" w-10 h-10 rounded-full"/>
        
          <span class="text-2xl font-bold">Send us a message 🚀</span>
          </div>
          <div class="relative w-full mb-1 mt-6">
          
            <input type="text"   class=" px-2 py-2  border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent   w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Full Name*"></input></div>
            <div class="relative w-full mb-1 mt-5">
            <input type="email" class="  px-2 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Email Address*"></input>
            </div>
            <div class="relative w-full mb-3 mt-5">
            <input type="subject" class="  px-2 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Subject"></input>
          </div>
           <div class="relative  w-max  mb-3 mt-5">
             <p class="mr-32 mb-4 ">Tell us more about your project </p>
            <textarea name=" " id="" cols="20" rows="4"  class="w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-purple-800 rounded-lg bg-purple-100"></textarea>
          </div>
          <div class="  mt-6">
            <button class="text-white  text-sm bg-blue-700 font-bold  px-4 py-3 rounded-md   transform hover:scale-110 motion-reduce:transform-none mb-1">Send Message</button>
          </div>
        </div>
        </div>
        <div class=" flex  ">
         <img src={ circle } class=" w-20 h-20 rounded-full"/>
         </div>
      </div>
       <div class=" flex justify-end mr-24  ">
  <img src={ circle } class=" w-10 h-10 rounded-full"/>
         <img src={ chat } class=" w-20 h-20 m-5 "/>
         </div>    
</div>
   </>
  );
}
export default App;
