import React from 'react';
import  Feature  from "../../components/feature/Feature";
import { featureTextGPT3, featureTextChat, featureTextKnowlegebase, featureTextEducation } from "./feature-text";
import "./gpt.css";
 


const GPT = () => {
    return (
        <div className = "gpt__whatgpt3 section__margin" id="whgpt3">
            <div className="gpt__whatgpt3-feature">
                <Feature title={featureTextGPT3.title} text={featureTextGPT3.text} />
            </div>
            <div className="gpt__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt__whatgpt3-container">
                <Feature title={featureTextChat.title} text={featureTextChat.text} />
                <Feature title={featureTextKnowlegebase.title} text={featureTextKnowlegebase.text} />
                <Feature title={featureTextEducation.title} text={featureTextEducation.text}/>
            </div>
        </div>
    )
}

export default GPT
