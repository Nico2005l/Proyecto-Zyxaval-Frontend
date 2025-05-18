import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Clock, Weather, ExchangeRate, Calendar, GifSearch, TaskTracker, DailyQuote, PomodoroTimer, BreathingGuide, MoodTracker, News } from "./widgets/index";

const MuroWidgets = () => {
  
  const widgets = [Clock, Weather, ExchangeRate, Calendar, GifSearch, TaskTracker, DailyQuote, PomodoroTimer, BreathingGuide, MoodTracker, News];

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen p-6">
      <Header
        title="Widgets"
        description="Diversos widgets, algunos más interesantes que otros."
      />
      <div className="sm:columns-1 md:columns-2 lg:columns-3   gap-6">
        {widgets.map((Widget, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 break-inside-avoid mb-6"
          >
            <Widget />
          </div>
        ))}
      </div>
  </div>
  );
};

//Averiguar Two row bento grid layout 
//https://tailwindcss.com/docs/columns#two-row-bento-grid-layout

export default MuroWidgets;

// sm md, lg, xl, 2xl
// Responsive columns example:
// sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5
// You can adjust the number of columns per breakpoint as needed.
// Example usage in Tailwind: <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">