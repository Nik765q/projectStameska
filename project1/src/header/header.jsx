import './styleHeader.css'

export const Header =()=>{
    return(
        <header className='header'>
            <div className="headerMenu">
                <div>projects</div>
                <div>about</div>
                <div>contacts</div>
            </div>
            <div className="headerMain">
                <div className="headerMainText">
                    <div className="mainTextH1">STAMESKA</div>
                    <div className="mainText">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="headerMainImg"></div>
            </div>
        </header>
    );
}