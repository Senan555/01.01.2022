import React from 'react';
import Typed from 'react-typed';
import Shekil from '../wall-and-laptop-background.jpg'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>
                    Web development and website services
                </h1>
                <Typed className='typed-text'
                strings={[
                    'Sənan Murtuzayev',
                    'İTİF',
                    'Komputer mühəndisliyi']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    
                </Typed>

                <a href={Shekil} className="downloadcv" >Download CV</a>


            </div>
            
        </div>
    )
}

export default  Header
