import './Cancel.css';


export default function Cancel() {
  return (
    <div className="cancel-page">
      <div className="cancel-card">
        <h1 className="cancel-title">
          ❌ Payment Cancelled
        </h1>

        <p className="cancel-text">
          Something went wrong, please try again.
        </p>
      </div>
    </div>
  );
}
