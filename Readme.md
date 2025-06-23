# QuizApp

QuizApp is a simple and interactive quiz application built with React Native and Expo. It allows users to test their knowledge across various categories, track their scores, and challenge themselves to beat their best score.

## Features

- Multiple choice questions from different categories (Geography, Technology, Science, etc.)
- Timer for each question (20 seconds per question)
- Score tracking and best score memory
- Option to restart the quiz
- Responsive and clean UI

## Screenshots

![QuizApp Screenshot](./assets/111.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone <https://github.com/Abhijit-Thander/QuizAppl>
   cd QuizApp
   ```

2. Install dependencies:

- npm install

3. Start the app:

- npm start

## Project Structure

- src/App.tsx - Entry point of the app
- src/components/ - UI components (QuestionCard, AnswerOpt, Card, CustomButton)
- src/app/QuizScreen.tsx - Main quiz screen logic
- src/provider/Quizprovider.tsx - Context provider for quiz state management
- src/Data/Quizdata.js - Quiz questions data
- src/types.ts - TypeScript type
