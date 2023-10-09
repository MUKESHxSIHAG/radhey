import React from 'react'
import { Container } from 'react-bootstrap'

const Location = () => {
    return (
        <>
            <section className='bg-grey py-3'>
                <Container className='py-5'>
                    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" height="500px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=all time cake, Dn iti, road, near Fatehabad, near bahttu, Bhattu Mandi, Haryana 125053&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
                </Container>
            </section>
        </>
    )
}

export default Location