import { useState, useEffect } from "react";
import { Avatar, fullname, username, LoremIpsum } from "react-lorem-ipsum";
import "./App.css";

const lorem = (
  <>
    <div className="combo-avatar-text">
      <div className="user">
        <Avatar className="avatar" gender="male" />
        <div className="fullname">{fullname("male")}</div>
        <div className="username">{`@${username()}`}</div>
      </div>
      <div className="lorem-content">
        <LoremIpsum
          p={8}
          avgWordsPerSentence={9}
          avgSentencesPerParagraph={6}
        />
      </div>
    </div>
    <div className="combo-avatar-text">
      <div className="lorem-content">
        <LoremIpsum
          p={8}
          avgWordsPerSentence={9}
          avgSentencesPerParagraph={6}
        />
      </div>

      <div className="user">
        <Avatar className="avatar" gender="female" />
        <div className="fullname">{fullname("female")}</div>
        <div className="username">{`@${username()}`}</div>
      </div>
    </div>
  </>
);

const useScroll = () => {
  const [barWidth, setBarWidth] = useState(0);

  const onScroll = () => {
    const topScrollingPosition = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setBarWidth((topScrollingPosition / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return barWidth;
};

export default function App() {
  const barWidth = useScroll();

  return (
    <div className="main-content">
      <div className="progress-bar-bg">
        <div className="progress-bar" style={{ width: `${barWidth}%` }}></div>
      </div>
      <h1>Scrollons...</h1>
      {lorem}
    </div>
  );
}
