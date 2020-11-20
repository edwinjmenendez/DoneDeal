import { useState, useEffect } from 'react'
import * as Location from 'expo-location'; 

export default useLocation = () => {
  const [location, setLocation] = useState();

  const requestLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync(); // for performance reasons; we'll use lastKnownLoc for now
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log('error in location:', error)
    }
  }

  useEffect(() => {
    requestLocation();
  }, [])
  
  return location;
}