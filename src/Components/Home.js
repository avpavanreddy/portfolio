import pic from './images/photo.jpg';

import c1 from './images/contact/phone.png';
import c2 from './images/contact/email.png';
import c3 from './images/contact/linkedin.png';
import c4 from './images/contact/github.png';
import { useState } from 'react';

function Home() {
    let [details, SetDetails] = useState("");

    return (
        <div className='homeContainer'>
            <div className='picDetails'>
                <div className='home'>
                    <div style={{ backgroundColor: 'white', height: "80%", marginTop: "5%", marginLeft: "5.6%", width: "89%", borderRadius: "5%" }}>
                        <div className='text-center'>
                            <p className='name m-0'>Hello, I'm</p>
                            <b className='name' style={{ color: 'DodgerBlue' }}>Adhi Venkata Pavan Reddy</b>
                            <br />
                            <div className='wrapper text-center'>
                                <div className='staticText'>a</div>
                                <ul className='dynamicText'>
                                    <li><spam>Web Developer.</spam></li>
                                    <li><spam>Problem Solver.</spam></li>
                                    <li><spam>Native Developer.</spam></li>
                                    <li><spam>Techie</spam></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='contactDetails row mx-2 ' onMouseLeave={() => { SetDetails("") }}>
                                    <li className='col-3' onMouseOver={() => { SetDetails(['Phone No : ', '8247645979']) }}><img src={c1} width='37%' /></li>
                                    <a href='mailto:pavanreddy2609@gmail.com' className='col-3'><li onMouseOver={() => { SetDetails(['EmailId : ', 'pavanreddy2609@gmail.com']) }}><img src={c2} width='35%' style={{ borderRadius: '50%' }} /></li></a>
                                    <a href="https://www.linkedin.com/in/avpavanreddy/" className='col-3'><li onMouseOver={() => { SetDetails(['LinkedIn : ', 'avpavan']) }}><img src={c3} width='44%' /></li></a>
                                    <a href='https://github.com/avpavanreddy' className='col-3'><li onMouseOver={() => { SetDetails(['GitHub : ', 'avpavanreddy']) }}><img src={c4} width='38%' /></li></a>
                                </ul>
                            </div>
                            <p className='big'><b>{details[0]}</b>{details[1]}</p>
                        </div>
                    </div>
                </div>
                <img src="" className='pic'></img>
                <div className='down'>
                    <div style={{ backgroundColor: 'white', height: "40vw" }}>
                        <div className='text-center'>
                            <p className='name m-0'>Hello, I'm</p>
                            <b className='name' style={{ color: 'blue' }}>Adhi Venkata Pavan Reddy</b>
                            <br />
                            <div className='wrapper text-center'>
                                <div className='staticText'>a</div>
                                <ul className='dynamicText'>
                                    <li><spam>Web Developer.</spam></li>
                                    <li><spam>Problem Solver.</spam></li>
                                    <li><spam>Native Developer.</spam></li>
                                    <li><spam>Techie</spam></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='contactDetails row mx-2 ' onMouseLeave={() => { SetDetails("") }}>
                                    <li className='col-3' onMouseOver={() => { SetDetails(['Phone No : ', '+91 9347169145']) }}><img src={c1} width='37%' /></li>
                                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlLXFGddsGtvbLXtcQzVFRfHTMdsNHPDdzpbsGLTFfqXhVGMhTSJJlClLBZvnDbqWmbWLV' className='col-3'><li onMouseOver={() => { SetDetails(['EmailId : ', 'pavanreddy2609@gmail.com']) }}><img src={c2} width='35%' style={{ borderRadius: '50%' }} /></li></a>
                                    <a href="https://www.linkedin.com/in/avpavanreddy/" className='col-3'><li onMouseOver={() => { SetDetails(['LinkedIn : ', 'avpavan']) }}><img src={c3} width='44%' /></li></a>
                                    <a href='https://github.com/avpavanreddy' className='col-3'><li onMouseOver={() => { SetDetails(['GitHub : ', 'avpavanreddy']) }}><img src={c4} width='38%' /></li></a>
                                </ul>
                            </div>
                            <p className='details'><b>{details[0]}</b>{details[1]}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;