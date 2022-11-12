import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate();
    return (
        <section className>
            {/* Footer */}
            <footer className="text-center text-white mt-5" style={{ backgroundColor: '#000' }}>
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: CTA */}
                    <section className>
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for book now</span>
                            <button type="button" className="btn btn-outline-dark btn-rounded" onClick={(e) => navigate('/login')}>
                                Sign up!
                            </button>
                        </p>
                    </section>
                    {/* Section: CTA */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className="text-white"> Touristo.com</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </section>

    )
}

export default Footer