import express from 'express';
import fetch from 'node-fetch';
import OpenAI from "openai";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/getRecommendedCareers', async (req, res) => {
    try {
        const { skills, interests, degree, deginfo, projects, masters, phd } = req.body;
        const openai = new OpenAI({
            apiKey: "MY_OPEN_API_KEY",//can't provide it
        });
        //API prompt call
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            messages: [
                { role: 'system', content: 'Recommend careers based on skills and interests', language: 'en' },
                { role: 'user',
                content: `I have a ${degree} degree in ${deginfo} . 
                ${masters ? 'I have completed my Master\'s in ' + masters + '.' : ''}
                ${phd ? 'I have completed my PhD in ' + phd + '.' : ''}
                My skills include ${skills} and my interests are ${interests}. 
                ${projects.length > 0 ? 'My projects include ' + projects.join(', ') + '.' : 'I have no specific projects at the moment.'}`,
                language: 'en' }
            ]
            max_tokens: 100
        });
        const data = await response.json();
        res.header('Access-Control-Allow-Origin', '*'); 
        res.json({ careers: data.choices[0].message.content });
        await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
