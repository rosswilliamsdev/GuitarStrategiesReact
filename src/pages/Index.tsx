import { Link } from "react-router-dom";
import "../App.css";

const Index: React.FC = () => {
  return (
    <div className="index-body">
      <section className="index-content-wrap">
        <img
          className="index-img"
          src="src/assets/img/Cropped-Ross-black-sunglasses copy.jpeg"
          alt="Ross smiling outdoors"
        />
        <div className="index-text">
          <h2>Hi, I'm Ross Williams.</h2>
          <p>
            I turn music fans like you into musicians with
            <strong> heart</strong> and <strong>soul</strong>. Together, we'll
            explore and develop your talent to its fullest potential. With the
            knowledge and skills gained from lessons, you'll get to live the
            dream of making music just how <strong>you</strong> hear it.
          </p>
          <p>
            If you live in the Kansas City area,{" "}
            <Link className="index-book-lessons" to="/book-lessons">
              book a month of lessons
            </Link>{" "}
            with me and we'll make a plan to help you find your sound.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
