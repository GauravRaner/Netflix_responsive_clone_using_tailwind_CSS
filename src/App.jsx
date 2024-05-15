import logo from './assets/logo.png'
import tv from './assets/tv.png'
import video1 from './assets/video1.m4v'
import img1 from './assets/image1.jpg'
import img2 from './assets/image2.png'
import img3 from './assets/image3.gif'
import img4 from './assets/image4.png'
import video2 from './assets/video2.m4v'
import img5 from './assets/image5.png'
function App() {

  return (
   <>
        <section className="w-[100%] bg-[url('assets/bg.jpg')] bg-center bg-cover ">
    <div className="bg-[rgba(0,0,0,0.5)] w-[100%] pb-[50px]">
      <header className="px-[36px] py-[20px] flex justify-between items-center mb-36 sm:mb-10 md:mb-6">
        <img src={logo} alt="" className="h-[80px] w-[148px] md:h-[80px] md:w-[140px] sm:h-[60px] sm:w-[120px] "/>
        <div>
          <select name="" id="" className="py-[6px] px-[36px] sm:px-[16px] border-gray-400 bg-transparent text-white border-[0.5px] rounded-[4px] font-sans">
            <option value="English" className="text-black">English</option>
            <option value="Hindi" className="text-black">Hindi</option>
          </select>
          <button className="bg-[#E50914] hover:bg-[rgba(229,9,20,0.6)] text-white px-4 py-2 rounded-[4px] ml-[24px] sm:ml-[12px]" >Sign In</button>
        </div>
      </header>
      <div className="max-w-[870px] mx-auto mt-28 md:mt-18 sm:mt-10">
        <h1 className="text-white text-[48px] md:text-[40px] sm:text-[36px] sm:leading-10 font-bold text-center font-helivetica">Unlimited movies, TV shows and more</h1>
        <p className="text-white text-[24px] sm:text-[20px] p-[16px 0px] sm:mt-[10px] text-center">Watch anywhere. Cancel anytime.</p>
        <h2 className="text-white text-[20px] text-center mt-4 sm:px-8">Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className="flex justify-center items-center pt-3 gap-2 sm:flex-col" >
          <input type="text" placeholder="Email address" className="px-[24px] py-[16px]  max-w-[368px] h-[56px] bg-[rgba(0,0,0,0.5)] border-[0.5px] rounded-[4px] text-white outline-none"/>
          <button className="bg-[#E50914] hover:bg-[rgba(229,9,20,0.6)] text-white text-[30px] font-semibold rounded-[4px]  px-[20px] py-2 ">Get Started </button>
        </div>
      </div>
    </div>
        </section>

       <section className='bg-black border-t-[10px] border-t-[#5A5A5A] flex justify-center items-center px-[120px] md:px-[30px] md:py-[50px] sm:px-[10px]  md:flex-col md:items-center' >
        <div className='w-1/2 text-white text-center  px-[36px] md:px-[20px] md:py-[20px] sm:px-[10px] sm:py-[30px] md:w-full md:text-center'>
            <h1 className='text-[48px] md:text-[40px] sm:text-[36px] sm:leading-8 font-extrabold sm:font-bold'>Enjoy on your TV</h1>
            <p className='text-[22px] sm:text-[16px] mt-8 md:mt-5 pl-[25px] text-start'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className='w-1/2 relative md:w-full left-0 right-0 md:flex justify-center items-center'>
          <video src={video1} autoPlay loop className='absolute text-center md:h-[320px] md:w-[430px]'></video>
            <img src={tv} className='h-[370px] w-[500px] md:h-[330px] md:w-[450px] sm:h-[300px] sm:w-[400px] relative'  alt="" />
        </div>
       </section>

        <section className='bg-black  border-t-[10px] border-t-[#5A5A5A] flex flex-row-reverse justify-center items-center px-[120px] md:px-[20px] sm:px-[10px] md:py-[50px] sm:pt-[100px] sm:pb-[80px] md:flex-col' >
        <div className='w-1/2 text-white text-center  px-[36px] md:px-0 md:w-full'>
            <h1 className='text-[48px] md:text-[40px] md:text-center sm:text-[32px] font-extrabold sm:font-bold sm:leading-9 text-start sm:text-center'>Download your shows to watch offline</h1>
            <p className='text-[22px] mt-8  text-start md:text-center'>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className='w-1/2 relative md:w-full md:flex justify-center items-center '>
            <img src={img1} className='h-[370px] w-[500px] md:h-[340px] md:w-[450px] sm:h-[320px] sm:w-[400px] relative '  alt="" />
            <div className='h-[96px] md:h-[90px] sm:h-[80px] max-w-[309px] border-[2px] border-[#5A5A5A] rounded-[10px] absolute bottom-4 ml-[90px] md:mx-auto sm:ml-[50px] bg-black px-[8px] py-[12px] flex justify-between items-center'>
              <img src={img2}  className="h-full" alt="" />
              <div className='pr-9 md:ml-2 sm:ml-3'>
                <p className='text-white'>Stranger Things </p>
                <p className='text-[#0071eb]'>Downloading...</p>
              </div>
              <img src={img3} className='h-full' alt="" />
            </div>
        </div>
        </section>

        <section className='bg-black  border-t-[10px] border-t-[#5A5A5A] flex justify-center items-center px-[120px] md:px-[20px] sm:px-[10px] sm:pt-[100px] md:flex-col md:py-[50px] sm:pb-12' >
        <div className='w-1/2 text-white text-center  px-[36px] sm:px-0 md:w-full'>
            <h1 className='text-[48px] md:text-[40px] sm:text-[36px] md:font-bold sm:font-bold font-extrabold'>Watch everywhere</h1>
            <p className='text-[22px] mt-8 sm:mt-4 text-start sm:text-center'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.  </p>
        </div>
        <div className='w-1/2 relative md:w-full md:flex justify-center items-center'>
          <video src={video2} autoPlay loop className='absolute text-center h-[200px] max-w-[300px] md:left-auto sm:max-w-[210px] sm:h-[270px] top-[20px] left-[90px] sm:top-[-50px]'></video>
            <img src={img4} className='max-h-[370px] max-w-[500px] sm:h-[280px] sm:max-w-[400px] relative '  alt="" />
        </div>
       </section>

       <section className='bg-black border-t-[10px] border-b-[10px] border-b-[#5A5A5A] border-t-[#5A5A5A] flex flex-row-reverse justify-center items-center px-[120px] md:px-[20px] md:py-[50px] sm:px-[10px] sm:pt-[360px] sm:pb-[310px] md:flex-col' >
        <div className='w-1/2 text-white text-center  px-[36px] sm:px-0 md:w-full '>
            <h1 className='text-[48px] md:text-[40px] md:text-center sm:text-[36px] md:font-bold font-extrabold  sm:font-bold text-start sm:text-center'>Create profiles for kids</h1>
            <p className='text-[22px] mt-8 text-start md:text-center sm:text-center'>Send children on adventures with their favourite characters in a space made just for them—free with your membership. </p>
        </div>
        <div className='w-1/2 relative md:w-full md:flex justify-center items-center'>
            <img src={img5} className='h-[370px] w-[500px] sm:h-[320px] sm:w-[400px] relative '  alt="" />
        </div>
       </section>

       <section className='bg-[#000] py-[50px] md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 '>
          <h1 className='text-[48px] md:text-[40px] sm:text-[32px] text-white font-extrabold text-center  mb-6 '>Frequently Asked Questions</h1>
          <div className='h-[84px] max-w-[910px] p-6 sm:p-4 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between items-center'>
              <p className='text-white text-2xl md:text-3xl'>What is Netflix ?</p>
              <span className='text-white text-7xl font-thin  '>+</span>
          </div>

          <div className='h-[84px] max-w-[910px] p-6 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between items-center'>
              <p className='text-white text-2xl'>How much does Netflix cost?</p>
              <span className='text-white text-7xl font-thin '>+</span>
          </div>

          <div className='h-[84px] max-w-[910px] p-6 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between items-center'>
              <p className='text-white text-2xl'>Where can I watch ?</p>
              <span className='text-white text-7xl font-thin '>+</span>
          </div>

          <div className='h-[84px] max-w-[910px] p-6 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between  items-center'>
              <p className='text-white text-2xl'>How do I cancel ?</p>
              <span className='text-white text-7xl font-thin '>+</span>
          </div>

          <div className='h-[84px] max-w-[910px] p-6 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between items-center'>
              <p className='text-white text-2xl'>What can I watch on Netflix ?</p>
              <span className='text-white text-7xl font-thin '>+</span>
          </div>

          <div className='h-[84px] max-w-[910px] p-6 bg-[#2D2D2D] hover:bg-[rgba(45,45,45,0.7)] mx-auto mb-2 flex justify-between items-center'>
              <p className='text-white text-2xl'>Is Netflix good for kids ?</p>
              <span className='text-white text-7xl font-thin '>+</span>
          </div>

          <h3 className='text-xl text-white text-center mt-10'>Ready to watch? Enter your email or mobile number to create or restart your membership.</h3>
          <div className="flex justify-center items-center pt-3 mt-4 gap-2 sm:flex-col sm:gap-3" >
            <input type="text" placeholder="Email address" className="px-[24px] py-[16px] max-w-[368px] h-[56px] bg-[rgba(0,0,0,0.8)] border-[0.5px] rounded-[4px] text-white outline-none"/>
            <button className="bg-[#E50914] hover:bg-[rgba(229,9,20,0.6)] text-white text-[30px] font-semibold rounded-[4px]  px-[20px] py-2 ">Get Started </button>
          </div>
       </section>

       <footer className='bg-black border-t-[6px] border-t-[#5A5A5A] px-36 py-16 md:px-18 md:py-8 sm:px-6 sm:py-4'>
        <p className='text-white text-[16px]'>Questions? Call 000-800-919-1694</p>

        <div className='text-white underline list-none flex justify-start gap-[100px] py-6 flex-wrap md:text-[16px] md:gap-[20px] sm:gap-10 sm:text-[14px]'>
          <div className='flex flex-col gap-3 md:gap-2 sm:gap-1'>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </div>
          <div className='flex flex-col gap-3 md:ml-14 sm:gap-1'>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </div>
          <div className='flex flex-col gap-3 sm:gap-1'>
           <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </div>
          <div className='flex flex-col gap-3 md:ml-5 sm:gap-1'>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </div>
        </div>

        <select name="" id="" className="py-[6px] px-[36px] border-gray-400 bg-transparent text-white border-[0.5px] rounded-[4px] font-sans">
            <option value="English" className="text-black">English</option>
            <option value="Hindi" className="text-black">Hindi</option>
          </select>

          <p className='text-white text-[14px] mt-4'>Netflix India</p>
       </footer>

        
   </>
  )
}

export default App
