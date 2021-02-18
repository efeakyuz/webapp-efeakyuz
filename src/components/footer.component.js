import React from 'react'
import "../content/css/footer.css"

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="Row m-2">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Made with <span role="img" aria-label="sheep">💜</span> Efe Akyuz
                    </p>
                </div>
            </div>
        </div>
    )
}
