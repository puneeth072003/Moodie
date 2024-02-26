import React from 'react';
import './pageStyles.css';
import { Navbar } from '../Navbar/Navbar';
import { Support } from '../Support bar/Support';
import "../Navbar/navbar.css";
import "../Support bar/support.css"
import logo from "./img/try/letterlogo1.png"

function CaseStudy() {
    return (
        <div>
            <Navbar/>
            <center><img src={logo} width="250px" style={{marginBottom:'2rem'}}/></center>
            <header>
                <h1 className='to-head'>Case Studies</h1>
            </header>

            <main className="ca_case_page">
                <section className="ca_overview">
                    <h2>The City of New York</h2>
                    <p>
                        The City of New York implemented SaaS-based sentiment analysis to monitor feedback in real-time, identify issues, and improve public services. This system enabled them to proactively address citizen concerns and enhance the overall quality of life for residents.
                    </p>
                </section>

                <section className="ca_challenge">
                    <h2>Delta Air Lines</h2>
                    <p>
                        Delta Air Lines utilized sentiment analysis to analyze customer feedback on social media platforms. By leveraging insights gained from sentiment analysis, Delta was able to predict demand for flights more accurately, optimize routes, and improve revenue management during peak seasons.
                    </p>
                </section>

                <section className="ca_solution">
                    <h2>Microsoft Corporation</h2>
                    <p>
                        Microsoft Corporation integrated sentiment analysis with chatbots to enhance their customer support services. By combining these technologies, Microsoft empowered their customer support agents with deeper insights into customer sentiment, enabling them to provide more personalized and effective assistance to users.
                    </p>
                </section>
                <section className="ca_solution">
                    <h2>Amazon</h2>
                    <p>
                        Amazon employed sentiment analysis to enhance product recommendations and customer service interactions. By analyzing customer sentiment, Amazon was able to tailor product suggestions and improve the overall shopping experience for users.
                    </p>
                </section>

                <section className="ca_solution">
                    <h2>Google</h2>
                    <p>
                        Google implemented sentiment analysis to analyze user feedback on various products and services. This enabled Google to identify areas for improvement and prioritize features based on user sentiment, ultimately enhancing user satisfaction and loyalty.
                    </p>
                </section>
            </main>
            <Support/>
        </div>
    );
}

export default CaseStudy;
