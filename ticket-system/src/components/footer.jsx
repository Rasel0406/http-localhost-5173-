import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#000000]  p-10 text-gray-400 grid grid-cols-5 gap-4">
                <nav>
                    <h6 className=" text-xl text-[#FFFFFF]">CS — Ticket System</h6>
                    <p>CS Ticket System helps support teams manage customer issues efficiently.
                        It allows teams to track, prioritize, and resolve customer tickets in a
                        simple and organized way, improving response time and customer satisfaction.</p>
                </nav>
                <nav className='ml-15'>
                    <h6 className="text-xl text-[#FFFFFF]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="text-xl text-[#FFFFFF]">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-[#FFFFFF]">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-[#FFFFFF]">Social Links</h6>
                    <div className=" ">
                        <a className="link link-hover my-2 flex items-center gap-2">   <span className="bg-white text-gray-600 p-1 rounded-full flex items-center justify-center w-6 h-6">
                            <FaFacebook />
                        </span>
                            FACEBOOK
                        </a>
                        <a className="link link-hover my-2 flex items-center gap-2">
                            <span className="bg-white text-gray-600 p-1 rounded-full flex items-center justify-center w-6 h-6">
                                <FaTwitter />
                            </span>
                            TWITTER
                        </a>
                        <a className="link link-hover my-2 flex items-center gap-2">
                            <span className="bg-white text-gray-600 p-1 rounded-full flex items-center justify-center w-6 h-6">
                                <FaLinkedin />
                            </span>
                            LINKEDIN
                        </a>
                        <a className="link link-hover my-2 flex items-center gap-2">
                            <span className="bg-white text-gray-600 p-1 rounded-full flex items-center justify-center w-6 h-6">
                                <FaInstagram />
                            </span>
                            INSTAGRAM
                        </a>
                        <a className="link link-hover my-2 flex items-center gap-2">
                            <span className="bg-white text-gray-600 p-1 rounded-full flex items-center justify-center w-6 h-6">
                                <FaGithub />
                            </span>
                            GITHUB
                        </a>
                    </div>
                </nav>
            </footer>
            <hr />
            <footer className="footer sm:footer-horizontal footer-center bg-[#000000]  p-10 text-[#FFFFFF]">
                <aside>
                    <p>© 2025 CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default footer;