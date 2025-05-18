import { useState } from "react";

import { OpenAI } from "openai";

const api = new OpenAI({
    baseURL: 'https://api.aimlapi.com/v1',
    apiKey: 'Bearer 09e3e9b7671845d8ba3ae2a4596ec7b7',
    dangerouslyAllowBrowser: true,
   
});

// Custom hook to handle chat logic
function useChat() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResponse("");
        try {
            const result = await api.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: "user",
                        content: input
                    }
                ],
                temperature: 0.7,
                top_p: 0.7,
                frequency_penalty: 1,
                max_output_tokens: undefined,
                top_k: 50,
            });
            const message = result.choices[0].message.content;
            setResponse(message);
        } catch (err) {
            setResponse("Error al comunicarse con la IA.");
        }
        setLoading(false);
    };

    return { input, setInput, response, loading, askAI };
}

function InteligenseTests() {
    const { input, setInput, response, loading, askAI } = useChat();

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Inteligense Tests</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                />
                <button
                    className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition-colors p-2"
                    onClick={askAI}
                    disabled={loading}
                >
                    {loading ? "Preguntando..." : "Preguntar"}
                </button>
            </div>
            {response && (
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700 whitespace-pre-line">
                    {response}
                </div>
            )}
        </div>
    );
}

export default InteligenseTests;
