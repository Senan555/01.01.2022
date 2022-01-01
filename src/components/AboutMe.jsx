import React from 'react'
import profil from '../profil.jpg'

const AboutMe = () => {
    return (
        <div className='container  py-5' >
            <div className='row'>
                <div className='.col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={profil} alt="" />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>About Me</h1>
                    <p className='p-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus magnam delectus repellendus odit dicta nisi culpa temporibus itaque ullam ut exercitationem voluptates nulla incidunt architecto adipisci ad quod accusantium accusamus dolor, totam perferendis? Obcaecati labore earum atque tenetur dolores asperiores rem reprehenderit debitis voluptatibus, dolorum error veritatis odio quasi cumque?</p>

                </div>

            </div>

        </div>
    )
}

export default AboutMe
