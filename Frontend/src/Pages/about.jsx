import React from 'react';
import './pageStyles.css';
import { Navbar } from '../Navbar/Navbar';
import { Support } from '../Support bar/Support';
import "../Navbar/navbar.css";
import "../Support bar/support.css"
import logo from "./img/try/letterlogo1.png"

function AboutPage() {
    return (
        <div className='about'>
            <Navbar/>
            <div className="about-container">
                <h1>About Our Sentiment Analysis Application</h1>
                <p>Welcome to our sentiment analysis application! Our application leverages cutting-edge natural language processing (NLP) techniques to analyze text your reddit posts and determine the sentiment expressed within it.</p>
                
                <h2>How Our Application Works</h2>
                <p>Our sentiment analysis application employs machine learning algorithms to analyze text data and classify it into different sentiment categories, such as positive, negative, or neutral. Here's how it works:</p>
                
                <ol>
                    <li><strong>Data Collection:</strong> Our application collects textual data from the most recent posts of a user in Reddit using Reddit API.</li>
                    <li><strong>Preprocessing:</strong> The collected text data undergoes preprocessing steps to remove noise, standardize text formats, and extract relevant features.</li>
                    <li><strong>Feature Extraction:</strong> We use advanced NLP techniques to extract features from the preprocessed text data and feed it to our pre-trained model (VADER) to analyse.</li>
                    <li><strong>Sentiment Analysis:</strong> Our application models performs sentiment analysis on new text data by predicting the sentiment label associated with each piece of text.</li>
                    <li><strong>Visualization and Insights:</strong> Our application provides users with visualizations and insights into the sentiment distribution across different texts, sentiment trends over time, and sentiment correlations with other variables.</li>
                </ol>
                
                <p>Our goal is to provide users with actionable insights into the sentiment expressed within text data, enabling them to make informed decisions, understand public opinion, and enhance their products, services, or content.</p>
            </div>
            <Support/>
        </div>
    );
}

export default AboutPage;