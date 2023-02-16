import './styleFooter.css';

export const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footerLogo">Logo</div>
            <div className="contact">
                <div className="footerInst">Instagram</div>
                <div className="footerVk">Telegram</div>
                <div className="footerTel">+7 (222) 321-32-55</div>
            </div>
        </footer>
    );
}