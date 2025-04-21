import { useState, useEffect } from 'react';

function SpaceTrivia() {
  const [triviaFact, setTriviaFact] = useState("⏳ Loading Space Trivia...");
  const [loading, setLoading] = useState(false);
  
  const fetchTrivia = async () => {
    const API_KEY = "AIzaSyB7RvEk0U0JYsr8UA7-szhn2vwPaqqxjCw";
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    try {
      setLoading(true);
      setTriviaFact("⏳ Generating a fun space fact...");

      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Give me a fun and interesting fact about space." }] }]
        })
      });

      if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);

      const data = await response.json();
      setTriviaFact(data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠ No trivia found.");
    } catch (error) {
      setTriviaFact(`⚠ Failed to fetch trivia: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchTrivia();
  }, []);

  return (
    <section className="glass-box">
      <div className="section-header">
        <h2>🌌 Space Fact</h2>
        <button 
          className="refresh-button" 
          onClick={fetchTrivia}
          disabled={loading}
        >
          🔄 Refresh
        </button>
      </div>
      <div>
        <p>{triviaFact}</p>
      </div>
    </section>
  );
}

export default SpaceTrivia;
