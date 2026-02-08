import { useState } from 'react'
import './Feedback.css'
import Navbar from '../components/Navbar';
import api from "../config/axios";
import { useEffect } from 'react';

function Feedback() {
  const [reviews, setReviews] = useState(() => {
    const today = new Date().toLocaleDateString();
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
    return [
      { id: 1, text: "Great product! Really loved it.", date: today },
      { id: 2, text: "Customer service was helpful.", date: yesterday }
    ];
  });
  const [newReview, setNewReview] = useState("");
  const [user, setUser] = useState(null);
    
      // Fetch user
      useEffect(() => {
        const fetchUser = async () => {
          try {
            const userId = localStorage.getItem("userId");
    
            if (!userId) {
              console.error("No userId found");
              return;
            }
    
            const res = await api.get(`/user/${userId}`);
    
            setUser(res.data.data);
          } catch (err) {
            console.error("Fetch user error:", err);
          }
        };
    
        fetchUser();
      }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    const review = {
      id: Date.now(),
      text: newReview,
      date: new Date().toLocaleDateString()
    };

    setReviews([review, ...reviews]);
    setNewReview("");
  };

  return (
    <>
      <Navbar user={user} />
      <div className="feedback-container">
        <h1>Customer Feedback</h1>
        <div className="review-form-card">
          <h2>Leave a Review</h2>
          <form onSubmit={handleAddReview}>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here..."
              rows="4"
              required
            />
            <button type="submit" className="feedback-button">Post Review</button>
          </form>
        </div>
        <div className="reviews-list">
          <h2>Recent Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to add one!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="review-card">
                <p className="review-date">{review.date}</p>
                <p className="review-text">{review.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Feedback