import presscube from './../../assets/Images/Comp.gif'
const Footer = () => {

  const footerenter1 =()=>{
    document.getElementsByClassName('span1_Footer')[0].style.display='none'
    document.getElementsByClassName('span2_Footer')[0].style.display='block'
    document.getElementsByClassName('span2_Footer')[0].style.color='#9fef00'
    document.getElementById('footer1_id_h5').style.color='#9fef00'
  }
  const footerleave1 =()=>{
    document.getElementsByClassName('span1_Footer')[0].style.display='block'
    document.getElementsByClassName('span2_Footer')[0].style.display='none'
    document.getElementById('footer1_id_h5').style.color='white'
  }

  const footerenter2 =()=>{
    document.getElementsByClassName('span3_Footer2')[0].style.display='none'
    document.getElementsByClassName('span4_Footer2')[0].style.display='block'
    document.getElementsByClassName('span4_Footer2')[0].style.color='#9fef00'
    document.getElementById('footer2_id_h5').style.color='#9fef00'
  }
  const footerleave2 =()=>{
    document.getElementsByClassName('span3_Footer2')[0].style.display='block'
    document.getElementsByClassName('span4_Footer2')[0].style.display='none'
    document.getElementById('footer2_id_h5').style.color='white'
  }
  return (
    <div className="container footer_div1 text-center">
        <section className="row d-flex justify-content-center">
          <div onMouseEnter={footerenter1} onMouseLeave={footerleave1} className="col-12 col-md-4 footer_div2">
            <div>
              <img className='w-100' src={presscube} alt="gifPic" />
            </div>
           <div>
             <h2 className='footer_h2'>For Business</h2>
             <p>One solution for developing cybersecurity<br/> skills across your entire IT team</p>
           </div>
           <div className='d-flex justify-content-center align-items-center'>
              <h5 id='footer1_id_h5'>Get a Demo</h5>
              <span className="material-symbols-outlined span1_Footer">chevron_right</span>
              <span className="material-symbols-outlined span2_Footer">arrow_right_alt</span>
            </div>
          </div>
          <div onMouseEnter={footerenter2} onMouseLeave={footerleave2} className="col-12 col-md-4  footer_div2">
            <div>
              <img className='w-100' src={presscube} alt="gifPic" />
            </div>
            <div>
              <h2 className='footer_h2'>For Hackers</h2>
              <p>A unified suite of hacking experiences - from<br/> beginners to seasoned professionals</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>  
              <h5 id='footer2_id_h5'>Join for Free</h5>
              <span className="material-symbols-outlined span3_Footer2">chevron_right</span>
              <span className="material-symbols-outlined span4_Footer2">arrow_right_alt</span>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Footer
