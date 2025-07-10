import { Link } from "react-router-dom";
import "./PageLink.css";

type PageLinkProps = { children: React.ReactNode; path: string };

function PageLink({ children, path }: PageLinkProps) {
  return (
    <Link to={path}>
      <button id="page-link">
        <h5>{children}</h5>
      </button>
    </Link>
  );
}

export default PageLink;
