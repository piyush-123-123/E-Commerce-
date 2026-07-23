import "./Notification.css";

const Notification = ({ notification }) => {
  return (
    <section className={`notification ${notification.status}`}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </section>
  );
};

export default Notification;