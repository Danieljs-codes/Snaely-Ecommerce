import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteChangeListener() {
  const location = useLocation();

  useEffect(() => {
    function onRouteChange() {
      window.scrollTo(0, 0);
    }

    onRouteChange();
  }, [location]);

  return null; // This component doesn't render anything
}

export default RouteChangeListener;
