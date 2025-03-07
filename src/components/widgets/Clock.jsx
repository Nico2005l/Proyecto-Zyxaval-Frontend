import React, { useState, useEffect } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

return (
    <>
        <h2 className="text-2xl font-semibold mb-4">Reloj</h2>
        <p className="text-4xl font-medium text-blue-600">
            {time.toLocaleTimeString()} UTC -3
        </p>
    </>
);
}

