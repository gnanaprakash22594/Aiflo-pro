import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="contact-section" id="contact">
            <div className="container contact-container">
                <h2 className="section-title">Ready to launch?</h2>
                <p className="contact-subtitle">Let's turn your manual workflows into automated machines.</p>

                <div className="contact-actions">
                    <a href="mailto:hello@aiflo.pro" className="btn btn-primary">
                        <Mail size={20} /> Email Me
                    </a>
                    <a href="#" className="btn btn-secondary">
                        <Calendar size={20} /> Book a Call
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Aiflo.pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
