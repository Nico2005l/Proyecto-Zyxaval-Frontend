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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
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

export default MuroWidgets;