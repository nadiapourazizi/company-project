import Logo from './../../assets/Images/logo-htb.svg'
import background from './../../assets/Images/bg-hero.svg'
import {useState } from 'react'


const Header = () => {
    const [menu ,setMenu] = useState(['Business','Hackers','Industries','Resources','Company'])
    const [Industries , setIndustries] = useState(['Government', 'Finance' , 'Manufacturing' , 'Healthcare' , 'Academia'])

    const [mega, setMaga] = useState(['Knowledge Base','Blog','Affiliate Program','Glossary','Forum','Community','Meetups','Testimonials','Certificate Validation'])
    const [company, setCompany] = useState(['About Us','Join Us','Contact Us','Swag','Gift Cards','Events','News','Partners'])
    const [sign, setSign] = useState(['HTB Academy','HTB Labs','HTB Business','HTB CTF'])
    let bodyClose = document.getElementsByTagName('body')[0]


    const megaOpen =()=>{
        liIndustries.style.display = 'flex'
    }
     let liIndustries = document.getElementById('megaNoneIndustries')
        bodyClose.addEventListener('click' ,function(){
            liIndustries.style.display = 'none'
    })

    const megaOpen2 =()=>{
       liIndustries2.style.display = 'flex'
   }
    
    let liIndustries2 = document.getElementById('megaNoneIndustries2')
    bodyClose.addEventListener('click' ,function(){
        liIndustries2.style.display = 'none'
     })
     const megaOpen3 =()=>{
        liIndustries3.style.display = 'flex'
    }
    let liIndustries3 = document.getElementById('megaNoneIndustries3')
    bodyClose.addEventListener('click' ,function(){
        liIndustries3.style.display = 'none'
     })
     const megaOpen4 =()=>{
        liIndustries4.style.display = 'flex'
    }
    let liIndustries4 = document.getElementById('megaNoneIndustries4')
    bodyClose.addEventListener('click' ,function(){
        liIndustries4.style.display = 'none'
     })
     const megaOpen5 =()=>{
        liIndustries5.style.display = 'flex'
    }
    let liIndustries5 = document.getElementById('megaNoneIndustries5')
    bodyClose.addEventListener('click' ,function(){
        liIndustries5.style.display = 'none'
     })
    
    

  return (
    <>
     <nav className="container-fluid Header_nav">
        <section className="container p-0 Header_section1">
        <div className="col-12 container d-flex">
            <div className="col-lg-2 col-6 Header_Div1 d-flex justify-content-center align-items-center">
                <figure className='d-flex justify-content-center align-items-center'>
                    <img src={Logo} alt="Logo" />
                </figure>
            </div>
            <div className="col-8 d-none d-lg-flex Header_Div2 d-flex justify-content-center align-items-center ">
                <ul className='d-flex justify-content-center align-items-center'>
                    <li className='px-2'><a href="#">{menu[0]}</a></li>
                    <li className='px-2'><a href="#">{menu[1]}</a></li>
                    <li onClick={megaOpen} className='px-2'><a href="#">{menu[2]}</a></li>
                    <li onClick={megaOpen2} className='px-2'><a href="#">{menu[3]}</a></li>
                    <li onClick={megaOpen3} className='px-2'><a href="#">{menu[4]}</a></li>
                </ul>
            </div>
            <div className="col-2 Header_Div3 d-none d-lg-flex  d-flex justify-content-evenly align-items-center">
                <h4 onClick={megaOpen4} className='Header_Div3_h4'>Sign In</h4>
                <button onClick={megaOpen5} className='Header_Div3_Button1'>Get Started</button>
            </div>

            <div className='col-6 Header_icon justify-content-end d-flex d-lg-none'>
              <span className="material-symbols-outlined">menu</span>
            </div>
        </div>
      
    </section>
    </nav>


   <section id='megaNoneIndustries'>
     <div className='triangle'></div>


       <div className='megaIndustries'>
           <ul>
               <li><a href="#">{Industries[0]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>megaIndustries</h6></li>
               <li><a href="#">{Industries[1]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Minimize risk in financial orgs</h6></li>
               <li><a href="#">{Industries[2]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Protect your operations</h6></li>
               <li><a href="#">{Industries[3]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Safeguard patient data</h6></li>
               <li><a href="#">{Industries[4]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Training beyond the classroom</h6></li>
           </ul>
       
       </div>
   </section>





   <section id='megaNoneIndustries2'>
     <div className='triangle2'></div>


       <div className='megaIndustries2'>
           <ul>
               <li><a href="#">{mega[0]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>User Guides and FAQs</h6></li>
               <li><a href="#">{mega[1]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>News, Stories, Insights </h6></li>
               <li><a href="#">{mega[2]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Promote HTB. Earn rewards! </h6></li>
               <li><a href="#">{mega[3]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Your Hacking Dictionary</h6></li>
               <li><a href="#">{mega[4]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Community Discussions </h6></li>
               <li><a href="#">{mega[5]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>The Heart of HTB</h6></li>
               <li><a href="#">{mega[6]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Meet, Learn, Hack</h6></li>
               <li><a href="#">{mega[7]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>What Players Say</h6></li>
               <li><a href="#">{mega[8]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>For Official HTB Certs</h6></li>
           </ul>
       
       </div>
   </section>



   <section id='megaNoneIndustries3'>
     <div className='triangle3'></div>


       <div className='megaIndustries3'>
           <ul>
               <li><a href="#">{company[0]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Read Our Story</h6></li>
               <li><a href="#">{company[1]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>We Are Hiring!</h6></li>
               <li><a href="#">{company[2]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>For General Inquiries</h6></li>
               <li><a href="#">{company[3]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Official Merch Store</h6></li>
               <li><a href="#">{company[4]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>The Gift Of Cyber</h6></li>
               <li><a href="#">{company[5]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>CTFs, Meetups, Tradeshows</h6></li>
               <li><a href="#">{company[6]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>All Our Latest News</h6></li>
               <li><a href="#">{company[7]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Let is Partner and Do Magic</h6></li>
           </ul>
       
       </div>
   </section>


   <section id='megaNoneIndustries4'>
     <div className='triangle4'></div>


       <div className='megaIndustries4'>
           <ul>
               <li><a href="#">{sign[0]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Learn cybersecurity from zero</h6></li>
               <li><a href="#">{sign[1]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Level up your hacking skills</h6></li>
               <li><a href="#">{sign[2]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Upskill your cyber team</h6></li>
               <li><a href="#">{sign[3]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Play or host a hacking competition</h6></li>
              
           </ul>
       
       </div>
   </section>



   <section id='megaNoneIndustries5'>
     <div className='triangle5'></div>


       <div className='megaIndustries5'>
           <ul>
               <li><a href="#">{sign[0]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Learn cybersecurity from zero</h6></li>
               <li><a href="#">{sign[1]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Level up your hacking skills</h6></li>
               <li><a href="#">{sign[2]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Upskill your cyber team</h6></li>
               <li><a href="#">{sign[3]}</a><span className="material-symbols-outlined">arrow_right_alt</span><h6>Play or host a hacking competition</h6></li>
              
           </ul>
       
       </div>
   </section>



    <div className='Header_background'>
        <img src={background} alt="background" />
    </div>
    </>
  )
}

export default Header
