import React, { Component } from 'react';
let bacon = 'Corned beef short ribs sirloin, venison salami tongue ball tip bresaola sausage shank shankle tri-tip porchetta jerky pastrami. Leberkas flank salami landjaeger filet mignon. Jerky turkey andouille, doner pork loin shoulder porchetta leberkas meatball pastrami ball tip corned beef tongue tri-tip. Pork chop ball tip capicola andouille hamburger salami bresaola porchetta tongue pancetta strip steak boudin ground round. Strip steak ham hock alcatra tri-tip tenderloin short loin. Shank brisket pork chop swine, shankle sirloin doner chuck ground round.'
let bacon2 = 'Cow bacon turkey porchetta boudin, rump alcatra. Flank shoulder hamburger jowl, shank pork belly turkey short ribs meatloaf ham hock pancetta strip steak ground round ball tip pig. Sirloin tri-tip pancetta, prosciutto cupim landjaeger capicola alcatra cow. Biltong porchetta frankfurter shoulder jerky ribeye chuck. Hamburger jerky chuck fatback kevin. Kielbasa biltong shank swine frankfurter landjaeger tri-tip.'

class About extends Component {
    render() {
        return (
            <main className='container center-align'>
                <section>
                    <h2 className='teal-text'> ABOUT </h2>
                    <p className='flow-text'> {bacon} </p>
                </section>
                <section>
                    <h2 className='teal-text'>OUR STORY </h2>
                    <p className='flow-text'> {bacon2} </p>
                </section>
            </main>
        );
    }
}

export default About;