const URL = "https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=03a484074690756b1a434fca686dc622";

function fetchClustersUsingPromise(url) {
  const promise = fetch(url);

  promise
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data.weather);
    })
    .catch((error) => console.log("error" + error));
}
fetchClustersUsingPromise(URL);


//ASYNC 

async function fetchClustersUsingAsyncAwait(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.weather);
  } catch (error) {
      console.log("Something went wrong" + error);
  }
}
fetchClustersUsingAsyncAwait(URL);

