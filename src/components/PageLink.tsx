import { Link } from "react-router-dom";
import "./PageLink.css";

type PageLinkProps = {
  children: React.ReactNode;
  path: string;
  focused?: boolean;
};

function PageLink({ children, path, focused = false }: PageLinkProps) {
  return (
    <Link to={path}>
      <button
        id="page-link"
        style={{
          color: focused ? "var(--text-color)" : "var(--secondary-text-color)",
        }}
      >
        <h5>{children}</h5>
      </button>
    </Link>
  );
}

export default PageLink;
