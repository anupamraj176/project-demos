import React, { useState, useEffect, useRef } from 'react';
import '../SearchBar.css';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleIconClick = () => {
    setIsExpanded(true);
  };

  return (
    <section className={`main-section ${isExpanded ? 'expanded-bg' : 'collapsed-bg'}`}>
      <div
        ref={searchContainerRef}
        className={`search-container ${isExpanded ? 'expanded' : 'collapsed'}`}
      >
        <div className="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={handleIconClick}
            className={`search-icon ${isExpanded ? 'icon-expanded' : 'icon-collapsed'}`}
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isExpanded && (
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        )}
      </div>
    </section>
  );
};

export default SearchBar;
