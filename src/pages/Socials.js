import linkedIn from '../images/linkedin-svgrepo-com.svg'
import instagram from '../images/iconmonstr-instagram-11.svg'
import mail from '../images/mail.svg'
import '../styles/Socials.css'
import Navbar from '../components/navbar';

function LinkedIn() {
    return (
        <div className='logo' aria-label='LinkedIn logo' aria-aria-details='Click here to connect with me on LinkedIn'>
            <a href='https://www.linkedin.com/in/junxiang-zhang-359918230/' target="_blank">
                <img
                    src={linkedIn}
                >
                </img>
            </a>
        </div>

    );
}
function Instagram() {
    return (
        <div className='logo' aria-label='Instagram logo' aria-details='Click here to see my Instagram page'>
            <a href='https://www.instagram.com/junxiang_zhang/' target="_blank">
                <img
                    src={instagram}
                >
                </img>
            </a>
        </div>

    );
}

function Mail() {
    return (
        <div className='logo' aria-label='Mail logo' aria-details='click here to email me at junxiang_zhang@brown.edu'>
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
        <div id='socials' className='socials-div'>
            <div className='socials' aria-label='Social Media Links'  aria-details='Connect with me on the accounts below!'>
                <div className='text'>Feel free to reach through LinkedIn, Instagram or Email!</div>
                <div className='social-bar'>
                    <LinkedIn />
                    <Instagram />
                    <Mail />
                </div>
            </div>
        </div>
    );

}