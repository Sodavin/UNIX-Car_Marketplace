import { useEffect } from 'react';

function Homepage() {
  useEffect(() => {
    document.title = 'UNIX | Home';
  }, []);

  return (
    <>
    </>
  );
}

export default Homepage;
