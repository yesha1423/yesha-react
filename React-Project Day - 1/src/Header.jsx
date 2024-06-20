function Header (){
    return(
        <header style={{backgroundColor:"#000",color:"#fff"}}>
            <ul className="head" style={{display:"flex",listStyle:"none",marginTop:"0"}}>
                <li style={{padding:"0px 20px",height:"55px",lineHeight:"55px"}}>Home</li>
                <li style={{padding:"0px 20px",height:"55px",lineHeight:"55px"}}>About</li>
                <li style={{padding:"0px 20px",height:"55px",lineHeight:"55px"}}>Service</li>
                <li style={{padding:"0px 20px",height:"55px",lineHeight:"55px"}}>Contact</li>
            </ul>
        </header>
    )
}

export default Header