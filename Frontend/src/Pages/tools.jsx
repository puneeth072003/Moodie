import React from 'react';
import './pageStyles.css'; // Assuming you have a separate CSS file for styling
import { Navbar } from '../Navbar/Navbar';
import { Support } from '../Support bar/Support';
import "../Navbar/navbar.css";
import "../Support bar/support.css"
import logo from "./img/try/letterlogo1.png"

function ToolsPage() {
    return (
        <>
            <Navbar/>
            <div className='to_container'>
            <center><img src={logo} width="250px" style={{marginBottom:'2rem'}}/></center>
                <header>
                    <h1 className='to-head'>Tools used in our project</h1>
                </header>
                <section className="to_tools">
                    <div className="to_tool">
                        <h2>Vader</h2>
                        <p> A rule-based sentiment analysis tool designed to detect sentiment in social media text, including emojis and slang, with sensitivity to sarcasm and irony.</p>
                        <a href="https://www.geeksforgeeks.org/python-sentiment-analysis-using-vader/" target="_blank">Learn More</a>
                    </div>
                    <div className="to_tool">
                        <h2>Praw</h2>
                        <p>PRAW (Python Reddit API Wrapper) is a powerful Python library that allows you to interact with the Reddit API programmatically.</p>
                        <a href="https://praw.readthedocs.io/en/stable/" target="_blank">Learn More</a>
                    </div>
                    <div className="to_tool">
                        <h2>Node JS</h2>
                        <p>A JavaScript runtime environment built on Chrome's V8 engine, enabling server-side scripting and event-driven architecture.</p>
                        <a href="https://nodejs.org/en" target="_blank">Learn More</a>
                    </div>
                    <div className="to_tool">
                        <h2>React</h2>
                        <p>  A declarative, component-based JavaScript library for building user interfaces, focused on efficient rendering and creating reusable, maintainable code.</p>
                        <a href="https://react.dev/" target="_blank">Learn More</a>
                    </div>
                    <div className="to_tool">
                        <h2>MongoDB Atlas</h2>
                        <p> A cloud-based database service offering a managed MongoDB experience, simplifying deployment, scaling, and administration.</p>
                        <a href="https://www.mongodb.com/atlas/" target="_blank">Learn More</a>
                    </div>
                </section>
                <footer className='to-foot'>
                    <p>&copy; 2k24 Dev-Den.</p>
                </footer>
            </div>
            <Support />
        </>
    );
}

export default ToolsPage;
