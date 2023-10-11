import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [search, setSearch] = useState('Lagos');

  useEffect(
    function () {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=9d97f695dbd849c1a26110511231010&q=${search}`
        )
        .then((res) => {
          setCurrentWeather(res.data.current);
          setLocation(res.data.location);
          console.log(res.data.location);
          console.log(res.data.current);
        });
    },
    [search]
  );

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = formattedHours + ':' + formattedMinutes;

  return (
    <>
      <div className="flex justify-between items-center mt-10 mx-10 mb-[180px] text-white text-2xl">
        <input
          type="text"
          className=" bg-transparent border-b-4 border-white outline-none"
          onClick={handleSearch}
        />
        <div>
          <div className="flex gap-3 items-center">
            <img src={currentWeather?.condition.icon} alt="icon" />
            <p>{currentWeather?.cloud}&deg; C</p>
          </div>
          <p>{location?.name}</p>
        </div>
      </div>

      <div className="text-white mb-20 text-center">
        <h1 className="text-[150px]">{timeString}</h1>
        <h3 className="text-4xl ">Good afternoon, Elijah</h3>
      </div>
      <div className="w-[100%] text-center text-white">
        <p className="text-4xl mb-10">What is your main focus for today?</p>
        <input
          type="text"
          className=" bg-transparent border-b-4 border-white outline-none w-[40%]"
        />
      </div>

      <div className="text-white flex justify-center gap-10 mt-[80px]">
        <p>
          {location?.name},{location?.country}
        </p>
        <p>
          Successful people have fear, successful people have doubts, and
          successful people have worry. They just dont let these feelings stop
          them
        </p>
      </div>
    </>
  );
}

export default App;
