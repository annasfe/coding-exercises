const btn = document.getElementById("button");

btn.addEventListener("click", getCountry)

function getCountry(e) {
    console.log(e);

    let name = this.previousElementSibling.value;
    let URL = `https://api.nationalize.io/?name=${name}`;

    fetch(URL)
        .then(function (response) {
            if (response.ok)
                return response.json()
            else
                return Promise.reject("Failed!")
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log("Something went wrong: " + err)
        })
}