import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image1 from "../../assets/i1.png";
import image2 from "../../assets/i2.png";
import image3 from "../../assets/i3.png";
import image4 from "../../assets/i4.png";
import image5 from "../../assets/i5.png";

const Article2 = () => {
  return (
    <div>
      <Navbar />
      <div className="relative pt-12 pb-4 px-2 sm:pt-16 lg:pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <div className="text-blue-shade-2 font-semibold text-sm pb-4">
                ARTIFICIAL INTELLIGENCE & ML
              </div>
              {/* First */}
              <h1
                href="/"
                className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl text-justify
                "
              >
                A New Era of Artificial Intelligence: Meet ChatGPT, the
                OpenAI-Trained Language Model
              </h1>
              {/* <hr />   */}
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                It’s probably not a secret that AI has exponentially grown its
                influence on us and the development of our society, economy, and
                even military. AI is used in all the common products from spam
                detection in large quantities of email to robotic vacuum
                cleaners which clean your home by learning its perimeters.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Wide usage of AI has been employed on chatbots that use{" "}
                <b>Natural language processing (NLP)</b> technology to recognize
                sentences, interpret the information, and determine what the
                customer or user is saying.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                One such chatbot <b>ChatGPT</b>, a new dialogue-optimized AI
                model has been rolled out by <b>OpenAI</b> and is available for
                public use this week.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                OpenAI has already made waves in AI technology by introducing
                DALL-E and image generation technology that creates realistic
                images and art from a description in natural language. ChatGPT
                is a sibling model to InstructGPT, which was trained to follow
                instructions in a prompt and provide a detailed response.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Taking inspiration from the latest language model GPT-3, ChatGPT
                is based on the GPT-3.5 series and has been trained with the
                help of human feedback. The goal of this model is to assist
                OpenAI in developing a better AI system by using feedback
                responses.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                OpenAI used Reinforcement Learning from Human Feedback (RLHF)
                for the training of the chatbot, in which they recorded various
                conversations between AI trainers and the chatbot.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                In the next step, they asked a set of trainers to rate the
                generated response and organize them from best to worst. For
                fine-tuning, proximal policy optimization was used. This process
                was repeated multiple times.
              </p>
              <img src={image1} alt="" className="rounded-md pb-8" />
              {/* Second */}
              <h1
                href="/"
                className="text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl"
              >
                ChatGPT making GOOGLE run for its money
              </h1>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Whether stuck in debugging code or requiring help in code logic,
                ChatGPT can show answers to numerous of those without any
                hassle.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Here we have shared an example where we ask it to share with us
                a program to convert temperatures between Celsius and
                Fahrenheit, even though the code shared with us is in python,
                the logic is transferable to any programming language of your
                choice.
              </p>
              <div className="flex justify-center mx-2">
                <img src={image2} alt="" className="rounded-md" />
              </div>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                ChatGPT in some ways provides us a way to move our conversation
                from “This code is bad but workable” to “I can actually use this
                code in production without any worries.”{" "}
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                In this other example, we are establishing its feature by asking
                ChatGPT to explain various terms in data science and it
                delivered exactly what we almost always hope from google every
                time we perform a search query from it.
              </p>
              <div className="flex justify-center mx-2">
                <img src={image3} alt="" className="rounded-md" />
              </div>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Here’s the comparison to google results with respect to the same
                question.
              </p>
              <div className="flex justify-center mx-2">
                <img src={image4} alt="" className="rounded-md" />
              </div>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                We can notice that it was a brief answer but still delivers what
                it is asked for, unlike google search, which provides us a set
                of links where we would have to perform research on which answer
                to choose from them. ChatGPT with its underlying technology has
                the potential to surpass a search engine like Google.
              </p>
              {/* Third */}
              <h1
                href="/"
                className="text-gray-700 font-bold text-2xl lg:text-3xl py-2"
              >
                Will people lose their jobs to AI bots?
              </h1>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Even though ChatGPT comprises various features, it still has a
                long way to go toward its desired use cases, currently, the
                model would sometimes represent biased or incorrect answers to a
                few topics.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                There are a few case scenarios also where the model assumes what
                the user intended where it would have asked clarifying questions
                when the user provided an ambiguous query. ChatGPT also rejects
                queries about people or current topics, citing a lack of
                Internet access.
              </p>
              <div className="flex justify-center mx-2">
                <img src={image5} alt="" className="rounded-md" />
              </div>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                So for now,{" "}
                <b> ChatGPT is not going to take over anyone’s job</b>, this is
                just a research release of ChatGPT, the latest step in OpenAI’s
                iterative deployment of increasingly safe and useful AI systems.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Many lessons from the deployment of earlier models like GPT-3
                and Codex have informed the safety mitigations in place for this
                release, including substantial reductions in harmful and
                untruthful outputs achieved by using reinforcement learning from
                human feedback (RLHF).
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article2;
