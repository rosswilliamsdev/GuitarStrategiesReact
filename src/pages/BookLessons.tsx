import ContactForm from "../components/ContactForm";

const BookLessons: React.FC = () => {
  return (
    <div>
      <div className="book-lessons-container">
        <section className="book-lessons-1">
          <h2>Location:</h2>
          <li>
            <a href="http://www.brooksideguitars.com/" target="_blank">
              BKS Guitars
            </a>
          </li>
          <li>6217 Oak St., KCMO 64113</li>
          <h2>Working Hours:</h2>
          <li>Tuesdays 3:30-9pm</li>
          <li>Thursdays 3:30-9pm</li>
          <li>Saturdays 12-4pm</li>
        </section>
        <section className="book-lessons-2">
          <h2>Read:</h2>
          <li>
            <a
              className="policy"
              href="https://docs.google.com/document/d/e/2PACX-1vR3OGJUnJmhKElcpsIW4rwm8p1UYawxTyuAikcgIUG1dRIX_gm4BMd1mzZ-7mQh2Re1v8dkjiGQU-MZ/pub"
              target="_blank"
            >
              Payment & Cancellation Policy
            </a>
          </li>
          <h2>Lessons Cover:</h2>
          <li>Learning classic solos</li>
          <li>Improvisation</li>
          <li>Music theory</li>
          <li>Technique</li>
          <li>Songwriting strategies</li>
          <li>Fingerstyle playing</li>
          <li>Music history</li>
          <li>& More</li>
        </section>
        <br />
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default BookLessons;
