import { SendOutlined } from '@ant-design/icons';
import FontAwesome from 'react-fontawesome';
import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import { FooterWrapper, NavBottom } from './style';

const Footer = () => {
    return (
        <>
         <FooterWrapper>
            <div className='footer-container' >
                <div className='footer-header'>
                    <p className='dark-color'><FontAwesome name="paper-plane-o" /> Sign up to Newsletter</p>
                    <span>...and receive <strong>$20 coupon for first shopping and free delivery.</strong></span>
                    <div className='footer-search'>
                        <Input.Group compact>
                            <Input
                                placeholder='Enter your email address'
                            />
                            <Button type="primary">Submit</Button>
                        </Input.Group>
                    </div>
                </div>
                <div className='footer-content'>
                    <div className='contact-section'>
                        <div className='contact-call-section'>
                            <img alt='' src={require('../../assets/Support-icon.png')} width="60" height="60" />
                            <p>
                                <span className='font-face-light dark-color'>Got questions? Call us 24/7!</span> <br/>
                                <span className='dark-color'>(800) 8001-8588, (0600) 874 548</span>
                            </p>
                        </div>
                        <div className='contact-adress-section'>
                            <span className='font-face-bold dark-color'>Contact info</span>
                            <p className='dark-color font-face-rg'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>
                        <div className='social-media-section'>
                            <FontAwesome name="facebook" />
                            <FontAwesome name="twitter" />
                            <FontAwesome name="linkedin" />
                            <FontAwesome name="google-plus" />
                            <FontAwesome name="dribbble" />
                            <FontAwesome name="flickr" />
                            <FontAwesome name="rss" />
                        </div>
                    </div>
                    <div>
                        <span className='title-block font-face-bold dark-color'>Find it Fast</span>
                            <ul>
                                <li>Laptops & Computers</li>
                                <li>Cameras & Photography</li>
                                <li>Smart Phones & Tablets</li>
                                <li>Video Games & Consoles</li>
                                <li>TV & Audio</li>
                                <li>Gadgets</li>
                                <li>Car Electronics & GPS</li>
                                <li>Printers & Ink</li>
                                <li>Software</li>
                                <li>Office Supplies</li>
                                <li>Computer Components</li>
                                <li>Accessoires</li>
                            </ul>
                    </div>
                    <div>
                        <span className='title-block font-face-bold dark-color'>In the Spotlight</span>
                        <ul>
                                <li>Electronics</li>
                                <li>Toys</li>
                                <li>Video Games</li>
                                <li>Home Products</li>
                                <li>Clothing</li>
                                <li>Sport & Outdoors</li>
                                <li>Baby Products</li>
                            </ul>
                    </div>
                    <div>
                        <span className='title-block font-face-bold dark-color'>Customer Care</span>
                        <ul>
                            <li>My Account</li>
                            <li>Other Traking</li>
                            <li>Wich List</li>
                            <li>Customer Service</li>
                            <li>Returns / Exchange</li>
                            <li>FAQs</li>
                            <li>Product Support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='navbar-container'>
                <img src={require('../../assets/payment.png')}  />
            </div>
         </FooterWrapper>
        </>
    )
}

export default Footer;