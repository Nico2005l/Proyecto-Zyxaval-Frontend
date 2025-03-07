import { useState, useEffect } from 'react';

export default function BreathingGuide() {
  const [phase, setPhase] = useState('Inhala');

  useEffect(() => {
    const cycle = ['Inhala', 'Mantén', 'Exhala'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % cycle.length;
      setPhase(cycle[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Guía de Respiración</h3>
        <div className="relative flex justify-center p-4 items-center">
            <div
                className={`w-24 h-24  rounded-full bg-blue-300 transition-transform duration-4000 ease-in-out`}
                style={{
                    transform: phase === 'Inhala' ? 'scale(1.5)' : phase === 'Mantén' ? 'scale(1.5)' : 'scale(1)',
                }}
            ></div>
            <div className="absolute w-24 h-24 rounded-full bg-blue-500 flex justify-center items-center">
                <p className="text-2xl text-white">{phase}</p>
            </div>
        </div>
    </div>
);
}