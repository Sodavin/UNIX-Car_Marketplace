import { useEffect } from 'react';

function AboutPage() {
  useEffect(() => {
    document.title = 'UNIX | About';
  }, []);

  return (
    <>
    </>
  );
}

export default AboutPage;
