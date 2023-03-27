import linkedIn from '../images/linkedin-svgrepo-com.svg'
import instagram from '../images/iconmonstr-instagram-11.svg'
import mail from '../images/mail.svg'
import '../styles/Socials.css'

function LinkedIn() {
    return (
        <div className='linked-in'>
            <a href='https://www.linkedin.com/in/junxiang-zhang-359918230/' target="_blank">
                <img
                    src={linkedIn}
                >
                </img>
            </a>
        </div>

    );
}
function Instagram(){
    return (
        <div className='instagram'>
            <a href='https://www.instagram.com/junxiang_zhang/' target="_blank">
                <img
                    src={instagram}
                >
                </img>
            </a>
        </div>

    );
}

function Mail(){
    return (
        <div className='instagram'>
            <a href='mailto:junxiang_zhang@brown.edu' target="_blank">
                <img
                src={mail}>
                </img>
            </a>
        </div>

    );
}


export default function SocialLinks() {
    return (
    <div className='social-bar'>
        <Mail/>
        <LinkedIn/>
        <Instagram/>
    </div>);


}