import { useEffect } from "react";
import api from "../config/axios";
import "./success.css"; // 

export default function Success() {

  useEffect(() => {

    const upgradeUser = async () => {
      try {

        const userId = localStorage.getItem("userId");

        if (!userId) {
          console.error("User ID not found");
          return;
        }

        const res = await api.put(`/user/${userId}`, {
          isPro: true,
        });

        console.log(res.data);

      } catch (err) {
        console.error("Upgrade failed:", err);
      }
    };

    upgradeUser();

  }, []);

  return (
    <div className="success-page">
      <div className="success-card">

        <h1 className="success-title">
          Payment Successful 🎉
        </h1>

        <p className="success-subtext">
          Your account has been upgraded to Pro.
          Enjoy all premium features!
        </p>

        <button
          className="success-btn"
          onClick={() => window.location.href = "/dashboard"}
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
}
