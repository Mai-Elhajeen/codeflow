export const codeExamples = {
  "App.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
    
function App() {
  const [code, setCode] = useState("");
    
  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };
    
  return (
    <div className="app">
      <CodeEditor onChange={setCode} onAI={handleAICompletion} />
    </div>
  );
}`,
  "Hero.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
    
function Hero() {
  const [code, setCode] = useState("");
    
  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };
    
  return (
    <div className="app">
      <CodeEditor onChange={setCode} onAI={handleAICompletion} />
    </div>
  );
}`,
  "Navbar.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
    
function Navbar() {
  const [code, setCode] = useState("");
    
  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };
    
  return (
    <div className="app">
      <CodeEditor onChange={setCode} onAI={handleAICompletion} />
    </div>
  );
}`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestion in real-time.",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generating automatically.",
  },
    "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project.",
  },
};