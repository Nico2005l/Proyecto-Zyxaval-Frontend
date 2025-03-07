import { useState, useEffect } from 'react';

// Mood Tracker
export default function MoodTracker() {
  const [mood, setMood] = useState(localStorage.getItem('mood') || '😊');

  useEffect(() => {
    localStorage.setItem('mood', mood);
  }, [mood]);
return (
    <div className="flex gap-5 justify-evenly text-center bg-gradient-to-r bg-white rounded-lg  max-w-md mx-auto ">
        <h3 className="text-2xl font-semibold mt-2"> Estado de Ánimo</h3>
        <select className=" p-3 text-2xl bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" value={mood} onChange={(e) => setMood(e.target.value)}>
            <option>😊</option>
            <option>😢</option>
            <option>😠</option>
            <option>😴</option>
            <option>😍</option>
        </select>
    </div>
);
}

