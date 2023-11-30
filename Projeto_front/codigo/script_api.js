// APIs
const apiKey = "6a9769f4e36e03333b6d7bb593c9efff";
const apiCountryURL = "https://flagsapi.com/flat/64.png";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

// Dados da cidade
const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

const weatherContainer = document.querySelector('#weather-data');


const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");




// Funções --------

// Loader
const toggleLoader = () => {
    loader.classList.toggle("hide");
};

const getWeatherData = async(city) => { // consultar os dados da API
    toggleLoader();  // faz o desenho de carregamento aparecer antes da chamada da API

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;  // link da API
    const res = await fetch(apiWeatherURL);  // esperar o fetch da URL
    const data = await res.json();  // dados em json transformados em javascript

    toggleLoader();  // faz o desenho de carregamento ser escondindo depois do término da chamada

    return data;  // retorna os dados 
}  


// Tratamento de erro
const showErrorMessage = () => {
    errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
    errorMessageContainer.classList.add("hide");
    weatherContainer.classList.add("hide");
  
    weatherContainer.classList.add("hide");
};


// puxar os dados do tempo da API
const showWeatherData = async(city) => {
    hideInformation();


    const data = await getWeatherData(city);


    if (data.cod === "404") {
        showErrorMessage();
        return;
    }
    // aqui está substituindo os valores reais do tempo da cidade na tela do computador
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`;

    
    weatherContainer.classList.remove('hide');  // quando a busca é iniciada, o container se "abre"
}


// Eventos --------

// clique no botão de busca
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();  // pra não enviar o formulário

    const city = cityInput.value; 
    showWeatherData(city);   // pegando o texto escrito na barra de pesquisa
});


// o usuário apertar em qualquer tecla do computador, ao invés do botão de lupa pra pesquisar
cityInput.addEventListener('keyup', (e) => {
    if(e.code == 'Enter') {
        const city = e.target.value;

        showWeatherData(city);
    }
});

// Quando a pessoa clica em qualquer lugar fora da api, ela volta ao tamanho original
document.addEventListener('click', (e) => {
    const isClickInsideWeatherContainer = weatherContainer.contains(e.target);
    if (!isClickInsideWeatherContainer) {
        resetAPISize(); // Chamando a função de resetar
    }

    const searchBar = document.getElementById('city-input');

    // Clique ocorreu fora da barra de pesquisa
    if (!searchBar.contains(event.target)) {
        // Limpa a barra de pesquisa
        searchBar.value = '';
    }
});

// Reseta o tamanho da api
const resetAPISize = () => {
    hideInformation();
};