import "./ScrollableGallery.css";

type ScrollableGalleryProps = {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
};

function ScrollableGallery({ children, title, style }: ScrollableGalleryProps) {
  return (
    <div style={style} className="scrollable-gallery">
      <h3>{title}</h3>

      <div className="scrollable-gallery-content">{children}</div>
    </div>
  );
}

export default ScrollableGallery;
