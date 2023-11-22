const sehirBilgisi = document.getElementById("sehirler")
const wrapper = document.querySelector(".wrapper")

sehirler=["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", " Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];
// async function getWeather(){
//     let response = await fetch(api)
//     if(response.ok){
//         let data = await response.json()
//         console.log(data);
//     }else{
//         console.log(response.status);
//     }
    
// }

sehirler.forEach(sehir => {
    const option = document.createElement("option")
    option.textContent = sehir
    sehirBilgisi.append(option)
});
async function getWeather(city) {
    
    let key = "584eb03d5064de483e02b6413a28a361"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
    try {
      const response = await axios.get(api);
      ekranaYazdir(response.data);
    } catch (error) {
      console.error(error);
    }
  }


sehirBilgisi.addEventListener("change",()=>{
    getWeather(sehirBilgisi.value)
    
})

function ekranaYazdir(data){
wrapper.innerHTML = ""
console.log(data);
let sicaklik = data.main.temp
let hissedilen = data.main.feels_like
let nem = data.main.humidity
let bulut = data.weather[0].description
let resim = data.weather[0].icon

let card = document.createElement("div")
card.classList.add("card","p-0")
card.innerHTML =
`
   
    <div class="card-body p-3">
    <div class="d-flex justify-content-between align-items-center>
    <h5 class="card-title">${sehirBilgisi.value}</h5>
    <img src="${resim}.png" class="resim-boyut" alt="...">

    </div>
   
    <p class="card-text">Sıcaklık :${sicaklik}</p>
    <p class="card-text">Hissedilen Sıcaklık : ${hissedilen}</p>
    <p class="card-text">Nem : ${nem}</p>
    <p class="card-text">Hava Durumu: ${bulut}</p>
  
    </div>

`
wrapper.append(card)

}