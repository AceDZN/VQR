import Image from "next/image";
import ImageUpload from "@/components/ImageUpload";
import QuestionInput from "@/components/QuestionInput";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState('');

  const handleQuestionSubmit = (submittedQuestion) => {
    try {
      console.log(`Received question: ${submittedQuestion}`);
      setQuestion(submittedQuestion);
    } catch (error) {
      console.error('Error handling question submission:', error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Upload your image</h1>
      <ImageUpload />
      <QuestionInput onSubmit={handleQuestionSubmit} />
      <div>
        {question && (
          <p className="mt-8">
            <strong>Question:</strong> {question}
          </p>
        )}
      </div>
    </main>
  );
}