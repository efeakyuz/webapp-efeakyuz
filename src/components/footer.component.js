import React from 'react'
import "../App.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="Row m-3">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Made with <span role="img" aria-label="heart">💜</span> Efe Akyuz
                    </p>
                </div>
            </div>
        </footer>
    )
}
