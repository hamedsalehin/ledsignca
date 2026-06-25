"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    onError: (err) => {
      alert("Chatbot Error: " + err.message + "\n\nIf you are the admin, make sure you added GEMINI_API_KEY to your Vercel Environment Variables or local .env file, and redeployed!");
    }
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ca8a04] hover:bg-[#a16207] text-white rounded-full p-4 shadow-xl transition-all hover:scale-105 flex items-center justify-center group"
          aria-label="Open support chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-semibold">
            Need Help?
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#1e293b] p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-[#f7f82d] p-2 rounded-full">
                <Bot className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Nano Signs Support</h3>
                <p className="text-xs text-slate-300">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center text-slate-500 text-sm mt-8">
                <p>👋 Hi! How can we help you today?</p>
                <p className="mt-2 text-xs">Ask about our signs, pricing, or turnaround times.</p>
              </div>
            )}
            
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 max-w-[85%] ${
                  m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    m.role === "user"
                      ? "bg-[#ca8a04] text-white"
                      : "bg-[#1e293b] text-[#f7f82d]"
                  }`}
                >
                  {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`p-3 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-[#ca8a04] text-white rounded-tr-sm"
                      : "bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm"
                  }`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-8 h-8 rounded-full bg-[#1e293b] text-[#f7f82d] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-slate-200 shrink-0"
          >
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#ca8a04] focus:ring-1 focus:ring-[#f7f82d] transition-all text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-1.5 bg-[#ca8a04] text-white rounded-lg hover:bg-[#a16207] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
               <p className="text-[10px] text-slate-400">Powered by Nano Signs AI (Gemini)</p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
