
import { useEffect } from "react";

export default function InstagramHero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DU7QEqDkx3-/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "0 auto",
          maxWidth: "540px",
          width: "100%",
        }}
      />
    </div>
  );
}
