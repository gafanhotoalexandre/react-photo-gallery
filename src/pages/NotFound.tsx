import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="text-center">
      <h2
        className="leading-tight text-3xl mt-0 mb-2 text-blue-600"
      >Content Not Found</h2>
      <p>Return to<span> </span>
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >Home</Link>.
      </p>
    </div>
  );
}
