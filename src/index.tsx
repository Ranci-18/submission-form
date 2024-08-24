import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

const App: React.FC = () => {
    return(
        <form action="https://httpbin.org/post" method="POST">
            <h1>Form in React and Typescript</h1>
            <label>
                <span>First Name:</span>
                <input type="text" name="firstname" placeholder="Enter your first name" required />
            </label>
            <label>
                <span>Last Name:</span>
                <input type="text" name="lastname" placeholder="Enter your last name" required />
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Enter your email" required />
            </label>
            <label>
                <span>Contact:</span>
                <input type="tel" name="contact" placeholder="Enter your contact number" required />
            </label>
            <label>
                <span>Gender</span>
                <input type="radio" name="gender" value="male" id="first" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <input type="radio" name="gender" value="other" /> Other
            </label>
            <label>
                <span>Your favorite subject</span>
                <input type="checkbox" name="subject" value="English" id="first" />English
                <input type="checkbox" name="subject" value="Math" />Math
                <input type="checkbox" name="subject" value="Science" />Science
            </label>
            <label id="upload">
                <span>Upload Resume</span>
                <input type="file" name="file" placeholder="no file selected" />
            </label>
            <label htmlFor="">
            <span>Enter URL:</span>
                <input type="url" name="url" placeholder="Enter URL" />
            </label>
            <select name="cars" id="cars">
                <option value="select..." id="firstOption">select...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <textarea name="message" id="message" cols={30} rows={10} placeholder="About yourself"></textarea>
            <span id="subRes">Submit or Reset</span>
            <div id="grid">
                <input type="reset" value="Reset" />
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
