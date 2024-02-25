const suggestions = {
    "Positive": [
        "Good going! keep it up",
        "Welldone! keep motivating others",
        "Keep up the great work!",
        "You're doing fantastic!",
        "Your efforts are paying off!",
        "You're making a real difference!",
        "You're on the right track!"
    ],
    "Negative": [
        "Deep breathing daily really helps a lot",
        "Nature time",
        "Connect with loved ones",
        "Self-care routines",
        "Limit negative news",
        "Seek therapy if needed",
        "Practice mindfulness"
    ],
    "Neutral": [
        "Choose positivity every day!",
        "Stay optimistic, good things are coming!",
        "Believe in the power of positivity!",
        "Radiate positive vibes!",
        "Find joy in the little things!",
        "Embrace a positive mindset!",
        "Focus on the good!"
    ]
};

function getRandomSuggestion(category) {
    if (suggestions.hasOwnProperty(category)) {
        const categorySuggestions = suggestions[category];
        const randomIndex = Math.floor(Math.random() * categorySuggestions.length);
        return categorySuggestions[randomIndex];
    } else {
        return "Invalid category";
    }
}

module.exports=getRandomSuggestion;
