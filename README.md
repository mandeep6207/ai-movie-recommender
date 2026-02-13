# 🎬 AI Movie Recommendation System

An end-to-end **AI-powered Movie Recommendation Platform** that intelligently suggests movies based on user input using **Machine Learning**, **Flask backend**, and a modern **React + TypeScript frontend**.

Inspired by real-world platforms like **Netflix** and **IMDb**.

---

## 🚀 Project Overview

The **AI Movie Recommendation System** allows users to:

* Browse curated movie collections (Bollywood, South Indian, Hollywood, Animated)
* Search for any movie by name
* Get **Top 10 AI-recommended movies** based on content similarity
* View detailed movie information with posters, ratings, runtime, and overview
* Experience a clean, responsive, and professional UI

The recommendation engine is powered by **Natural Language Processing (NLP)** techniques using movie metadata such as genres, keywords, cast, and overview.

---

## 🧠 How AI Recommendation Works

1. Movie metadata is processed using **TF-IDF Vectorization**
2. A similarity matrix is generated using **Cosine Similarity**
3. When a user searches for a movie:

   * The model finds the closest matching movie
   * Returns the **Top 10 most similar movies**
4. Movie posters and extra details are fetched via **TMDB API**

This creates a **hybrid recommendation system** combining:

* Content-based filtering
* Real-time API enrichment

---

## ✨ Key Features

### 🎥 Frontend (React + TypeScript)

* Modern UI inspired by OTT platforms
* Movie cards with posters and hover animations
* Dedicated pages:

  * Dashboard
  * Movie Detail Page
  * AI Recommendation Results
  * About Page
  * Feedback Form
* Fully responsive design
* Smooth routing with React Router

### ⚙️ Backend (Flask + ML)

* REST API built using Flask
* ML model using Scikit-learn
* `/recommend` endpoint for AI-based suggestions
* TMDB API integration for posters & metadata
* CORS enabled for frontend-backend communication

### 🤖 Machine Learning

* TF-IDF Vectorizer
* Cosine Similarity
* Content-based recommendation system

---

## 🛠️ Tech Stack

**Frontend**

* React
* TypeScript
* Tailwind CSS
* React Router
* Framer Motion

**Backend**

* Python
* Flask
* Flask-CORS
* Pandas
* Scikit-learn

**APIs & Data**

* TMDB API
* TMDB 5000 Movies Dataset

---

## 📁 Project Structure

```
ai-movie-recommender/
│
├── backend/
│   ├── app.py
│   ├── model.py
│   ├── data/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── README.md
└── .gitignore
```

---

## ▶️ How to Run the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend will start at:

```
http://127.0.0.1:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder:

```env
TMDB_API_KEY=your_tmdb_api_key_here
```

---

## ⭐ Feedback Feature

Users can:

* Rate the application
* Submit feedback or suggestions
* Receive a thank-you confirmation after submission

---

## 📌 Future Enhancements

* User login & profiles
* Collaborative filtering
* Watch history–based recommendations
* Cloud deployment (Render / Vercel)

---

## 👨‍💻 Author

Name:- Mandeep Kumar
AI / Data Science Student

---

## 📄 License

This project is licensed under the **MIT License**.
