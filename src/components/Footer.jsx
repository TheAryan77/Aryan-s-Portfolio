import React from 'react'


const Footer = () =>{
    return(
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon '>
                    <a href="https://github.com/TheAryan77">
                    <img src="/assets/github.svg" alt="github" className='w-8 h-8' /></a>
                </div>
                <div className='social-icon'>
                    <a href="https://x.com/AryanMahendru5"><img src="/assets/twitter.svg" alt="twitter" className='w-8 h-8' /></a>
                    
                </div>
                <div className='social-icon'>
                    <a href="www.linkedin.com/in/aryan-mahendru-854093253"><img src="/assets/linkedin.svg" alt="linkedin" className='w-8 h-8' /></a>
                    
                </div>
                <div className='social-icon'>
                    <a href="https://www.instagram.com/aryanmahendru77/"><img src="/assets/instagram.svg" alt="instagram" className='w-8 h-8' /></a>
                    
                </div>
                <div className='social-icon'>
                    <a href="https://lichess.org/@/TheAryan7777"><img src="/assets/chess.svg" alt="chess" className='w-8 h-8' /></a>
                    
                </div>
            </div>
            <p className='text-white-500'>&copy;2024 Aryan. All rights reserved</p>

        </section>
    )
}
export default Footer;