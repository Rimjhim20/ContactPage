import "tailwindcss/tailwind.css"
import './index.css';


function App() {
  return (
   <>
   
      <div class= "container justify-between bg-purple-50 ">
           <div class= "container  justify-start  mx-auto ">
                <div class="flex flex-wrap  lg:-mt-2 -mt-18">
          <div class="w-full lg:w-6/12 px-8">
         <div class=" relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg mt-7 rounded-3xl bg-purple-50">
        <div class="flex-auto p-5 lg:p-10">
          <h1 class="text-2xl font-bold">Let's Chat.</h1>
          <span class="text-2xl font-bold">Tell me about your Project.</span>
          <p class="mt-1 mb-4 text-gray-600 leading-relaxed">Let's create something together 🤟</p>


        <div class=" container text-center rounded-md w-64 bg-white break-words shadow-lg p-3 h-20  "> 

        <span>  Mail me at </span>
        <a href=" amityvirtuallab@gmail.com" class="font-bold  text-blue-800"> amityvirtuallab@gmail.com</a>
        </div>
          </div>
          </div>
          </div>
      </div>
       </div>


      <div class="flex flex-wrap justify-end ">
      <div class="w-full lg:w-5/12 mb-7  px-8">
      <div class=" relative flex-wrap flex flex-col min-w-0 break-words w-full h-full  shadow-lg rounded-3xl bg-white">
        <div class=" flex-auto   lg:p-7">
          <span class="text-2xl font-bold">Send us a message 🚀</span>
          <div class="relative w-full mb-1 mt-6">
          
            <input type="text"   class=" px-2 py-2  border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent   w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Full Name*"></input></div>
            <div class="relative w-full mb-1 mt-5">
            <input type="email" class="  px-2 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Email Address*"></input>
            </div>
            <div class="relative w-full mb-3 mt-5">
            <input type="subject" class="  px-2 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  w-full text-purple-800 bg-purple-100 rounded text-sm shadow "placeholder="Subject"></input>
          </div>
           <div class="relative w-full mb-3 mt-5">
             <p>Tell us more about your project </p>
            <textarea name=" " id="" cols="20" rows="4"  class="w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-purple-800 rounded-lg bg-purple-100"></textarea>
          </div>
          <div class=" mt-6">
            <button class="text-white  text-sm bg-blue-700 font-bold  px-4 py-3 rounded-md hover:shadow-2xl shadow-purple mb-1">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   
   </>

   
  );
}

export default App;
