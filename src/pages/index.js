import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./component/Button";
import { getAnswer, textToSpeech } from "../services/apiService";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [answer, setAnswer] = useState("");
  const [isShow, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleStart = () => {
    setShow(!isShow);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const responseAnswer = await getAnswer(transcript);
      setAnswer(responseAnswer);
      textToSpeech(responseAnswer);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleReset = () => {
    resetTranscript();
    setAnswer("");
  };

  const options = {
    continuous: true,
    language: "en-CA",
    onError: (error) => console.error("Speech Recognition Error:", error),
  };

  return (
    <div>
      {isShow ? null : (
        <div className="flex flex-col h-screen justify-center items-center">
          <div className="mb-5 text-3xl">Ask Dr. Moustache</div>
          <input
            className="mb-5 text-center h-10"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <Button className="" onClick={handleStart} text="Start" />
        </div>
      )}

      {isShow ? (
        <div className="container mx-auto px-1">
          <div className="p-8 text-center">
            <div className="mb-5 text-l font-sans">
              Hi! {name}
              <br></br>I am Doctor Moustache.
              <br></br>Ask Me Any Question.
            </div>

            <p
              className="pb-5 font-sans"
              style={{ color: listening ? "green" : "red" }}
            >
              {listening ? "Listening..." : "Microphone Off"}
            </p>
            <div className="mb-5 flex justify-between">
              <Button
                onClick={() => SpeechRecognition.startListening(options)}
                text="Start"
              />
              <Button onClick={SpeechRecognition.stopListening} text="Stop" />
              <Button onClick={handleReset} text="Reset" />
            </div>

            <div className="questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded">
              {transcript ? (
                transcript
              ) : (
                <span className="text-gray-400">
                  Press "Start" to record your question...
                </span>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="border
              block
              w-full
              mb-5
              border-gray-400 
              rounded-lg 
              bg-white
              hover:shadow-md
              hover:border-opacity-0
              font-sans 
              text-gray-700
              text-m
              py-3"
            >
              Submit
            </button>

            <div className="answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded">
              {answer ? (
                answer
              ) : (
                <span className="text-gray-400">
                  The answer will appear here...
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
