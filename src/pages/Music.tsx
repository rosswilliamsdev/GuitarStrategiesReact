const Music: React.FC = () => {
  return (
    <div>
      <div className="music-wrap">
        <section className="bandcamp-embeds">
          <iframe
            style={{ border: "0", width: "350px", height: "470px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1239022070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://wildeyeanditsseekers.bandcamp.com/album/fire-in-the-sky">
              Fire In The Sky by Wild Eye
            </a>
          </iframe>
          <iframe
            style={{ border: "0", width: "350px", height: "470px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2509945847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://nocave.bandcamp.com/album/eyes-brighter-than-the-sun">
              Eyes Brighter Than The Sun by No Cave
            </a>
          </iframe>
          <iframe
            style={{ border: "0", width: "350px", height: "470px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=387644814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://thisevil.bandcamp.com/album/death-in-slow-motion">
              Death In Slow Motion by This Evil
            </a>
          </iframe>
        </section>
        <section className="youtube-embeds">
          <iframe
            className="youtube-vid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PL1Gp5SAAmxwWk5O8tz4yk889Ev-0TGVJ7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="youtube-vid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLRT9qxolGHUiER4po5dChjI4MLPckTuZ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="youtube-vid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FIlqD9k2HhY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Music;
