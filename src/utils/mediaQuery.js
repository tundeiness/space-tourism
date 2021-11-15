/* eslint-disable max-len */
import { useState, useEffect } from 'react';

const useMediaQuery = (queryString) => {
  const [queryMatch, setQueryMatch] = useState(false);

  useEffect(() => {
    const windowSize = window.matchMedia(queryString);

    if (windowSize.matches !== queryMatch) {
      setQueryMatch(windowSize.matches);
    }

    const event = () => {
      setQueryMatch(windowSize.matches);
    };

    windowSize.addEventListener('change', event);

    return () => windowSize.removeEventListener('change', event);
  }, [queryMatch, queryString]);

  return queryMatch;
};

// const useMediaQuery = (query, whenTrue, whenFalse) => {
//   if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') { return whenFalse; }

//   const mediaQuery = window.matchMedia(query);
//   const [match, setMatch] = useState(!!mediaQuery.matches);

//   useEffect(() => {
//     const handler = () => setMatch(!!mediaQuery.matches);
//     mediaQuery.addListener(handler);
//     return () => mediaQuery.removeListener(handler);
//   }, []);

//   return match ? whenTrue : whenFalse;
// };

export default useMediaQuery;
