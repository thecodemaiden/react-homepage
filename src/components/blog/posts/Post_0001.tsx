// /src/components/blog/posts/Post_0001.tsx
import React from "react";

const Post_0001 = () => {
    return (
        <article>
            <p>
               I recently took <a href="https://huggingface.co/agents-course">Hugging Face's Agents Course</a>&nbsp;
               as my first focused introduction to the world of AI Agents. The final project required us to build an agent
               that could handle at least a few "Level 1" tasks from Hugging Face's <a href="https://huggingface.co/spaces/gaia-benchmark"> GAIA benchmark</a>&nbsp;
               for AI assistants. I used Google's Gemini 2.0 Flash model as the base for my model, and managed to do 
               better -- 60%! 
            </p>
            <p>
               In the process, I learned a lot about how the libraries and overall architecture of the agent
               you build actually has a lot to do with the capabilities and interface of the model itself. Now that I
               have a passing agent built, I will detail how I built it, why I think it's janky, and how I improve it for future use. 
            </p>
            <p>
                Of course, I need to show off my certificate of completion!
                <center><img src="/huggingface_ai_agents.png" alt="Certificate of Completion for Hugging Face AI Agents Course" /></center>
            </p>
        </article>
    )
}

export default Post_0001;