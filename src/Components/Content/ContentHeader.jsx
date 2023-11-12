
const ContentHeader = () => {

    const changeColor= ()=>{
        document.getElementsByClassName('span3')[0].style.display='block'
        document.getElementsByClassName('span3')[0].style.color='#9fef00'
        document.getElementsByClassName('span2')[0].style.display='none'
    }
    const removeChange= ()=>{
        document.getElementsByClassName('span3')[0].style.display='none'
        document.getElementsByClassName('span2')[0].style.display='block'
        document.getElementsByClassName('span3')[0].style.color='#9fef00'
    }
  return (
    <div className="container Content_div1">
        <div className="Content_div2 row justify-content-center align-items-center">
          <div className="Content_div3 row justify-content-center align-items-center">
            <div className="Content_div4 d-flex justify-content-between">
                <div><span className="span1">NEW</span></div>
                <a href="#" onMouseEnter={changeColor} onMouseLeave={removeChange}>Join the biggest cybersecurity event for Universities! More than $65,000 in prizes</a>
                <span className="material-symbols-outlined span2">chevron_right</span>
                <span className="material-symbols-outlined span3">arrow_right_alt</span>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default ContentHeader
