import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searcher.css";

// eslint-disable-next-line react/prop-types
export function Searcher({ query }) {
  const [search, setSearch] = useState(query ? query : "");
  const desaign = query ? "photos-label-searching" : "photos-label";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/photos/${search}`);
    }
  };

  return (
    <label className={desaign}>
      <span className="photos-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="#E5E7EB" strokeWidth="2" />
          <path
            d="M20 20L17 17"
            stroke="#E5E7EB"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="photos-input"
          placeholder="Enter your keywords..."
          autoComplete="off"
          spellCheck="false"
          required
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </label>
  );
}
