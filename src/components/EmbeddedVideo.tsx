import "./EmbeddedVideo.css";

type EmbeddedVideoProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  title: string;
};

function EmbeddedVideo({ children, title, style }: EmbeddedVideoProps) {
  return (
    <div className="embedded-video" style={style}>
      <h3>{title}</h3>
      <div className="embedded-video-content">{children}</div>
    </div>
  );
}

export default EmbeddedVideo;
