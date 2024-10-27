const Experience: React.FC = () => {
  return (
    <div>
      <div className="exp-content-wrap">
        <img
          src="/assets/img/Ross Studio Website.png"
          alt="Ross in his home studio"
          className="exp-img"
        />
        <section className="education">
          <h2>Education</h2>
          <li>
            <strong>3 years</strong> study with KC jazz luminary{" "}
            <a href="http://brianbaggett.net/home.html" target="_blank">
              Brian Baggett
            </a>
          </li>
          <li>
            <strong>2 years</strong> classical Bel Canto vocal study with
            award-winning professor{" "}
            <a href="https://wualumni.org/Snook" target="_blank">
              Dr. Lee Snook
            </a>{" "}
            at Washburn University
          </li>
          <li>
            <strong>2 years</strong> classical guitar study with the late
            award-winning guitarist{" "}
            <a
              href="https://www2.ljworld.com/news/2013/oct/26/2013-phoenix-awards-classical-guitarist-finds-life/"
              target="_blank"
            >
              John Jervis
            </a>
          </li>
          <li>
            <strong>3 years</strong> jazz ensemble at Washburn University and
            Allen College
          </li>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <li>
            <strong>15 years</strong> teaching guitar, bass, and songwriting
          </li>
          <li>
            <strong>15 years</strong> working as a live and studio musician
          </li>
          <li>
            <strong>10 years</strong> in audio engineering and music production
          </li>
          <li>
            <strong>Principal</strong> songwriter and bandleader of several
            bands
          </li>
          <li>
            <strong>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRQTepg1UreoVfknfCip72AmZP9V_aXuHMn3KNXabvHIpnA6SZtzB7spXnSovLjyaHAvc53KHk63eRl/pub"
                target="_blank"
              >
                Chronological CV
              </a>
            </strong>
          </li>
        </section>
      </div>
    </div>
  );
};

export default Experience;
