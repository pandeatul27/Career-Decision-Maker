# Career-Decision-Maker
Link for detailed Description - [https://docs.google.com/document/d/1K8J_JVGTZlKqeZMGMI9SGNgwZpId8xL8cEPMa4B39dY/edit?usp=sharing]
Link for the Video - [https://drive.google.com/file/d/14eP2uwX-VbDUEaOiBWwomgoQz6Gbhibw/view?usp=sharing]

Problem Statement:
Design and develop a user-friendly web application that harnesses the capabilities of the Chatbot GPT API to provide personalized career guidance. 

Description: 
Numerous students encounter challenges when making career choices that align with their interests, skills, and educational backgrounds.The application should allow users to input their educational background, skills, and interests. Leveraging the ChatGPT API, the system will generate tailored career recommendations based on the user's profile.

Tech stack used:
HTML ,CSS ,Javascript ,Node.js ,Express.js ,ChatGPT API

Solution: 

Application Features:
Multi-step form for users to input their educational and professional details, such as 12th-grade stream, bachelor's degree, masters and Ph.D. status, and related details.
Captures information on the user's interests, skills, and any projects or experiences they have undertaken.
Dynamic tech stack includes HTML for structure, CSS for layout and styling, and JavaScript for client-side interactivity.
Backend powered by Node.js and Express.js for efficient server-side development and API handling.
Integration of the ChatGPT API for intelligent conversation capabilities and personalized career guidance.

JavaScript Functionality:
Responsible for managing user interactions and form submissions, dynamically creating and removing project input fields based on user actions.
Utilizes the 'fetch' API to communicate with the server-side application, implemented using the Express framework in Node.js.

Server-Side Application:
Built with Express, featuring an endpoint that receives user skills and interests data.
Utilizes the OpenAI API, specifically the 'gpt-3.5-turbo-instruct' model, to generate personalized career recommendations based on the user's input.
Returns the recommended career paths to the client-side JavaScript for display to the user.

OpenAI Integration:
Utilizes the 'gpt-3.5-turbo-instruct' model for the prompt results, which provides five potential career options for the user, along with essential details for each career path.
The prompt includes user-provided data such as educational background, skills, and experience/projects, enabling the AI model to generate tailored and relevant career recommendations.
Further fine-tuning of the prompt can enhance the specificity and accuracy of the recommended career options, providing users with more precise and customized suggestions.

Why 'gpt-3.5-turbo-instruct' model?
The 'gpt-3.5-turbo-instruct' model, a variant of the GPT-3.5 architecture.
Improved capacity for processing complex instructions and prompts, leading to more accurate and relevant responses for the user's career recommendations.
Enhanced language generation capabilities, allowing for more precise and customized outputs, and a broader knowledge base for comprehensive and informed suggestions.
