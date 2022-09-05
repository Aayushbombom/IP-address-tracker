const map1 = document.querySelector('.map');
const header = document.querySelector('.header');
const iptext = document.querySelector('#ip');
const loc = document.querySelector('#loc');
const tz = document.querySelector('#tz');
const isptext = document.querySelector('#isp');
const input = document.querySelector('#ipinp');
const btn = document.querySelector('#btn')
let map;


function locate({isp, ip, location}){
      iptext.textContent = ip;
      loc.textContent = location.city+", "+location.region;
      tz.textContent = 'UTC'+location.timezone;
      isptext.textContent = isp;
}

function setMap({lat,lng}){
    map = L.map('map').setView([lat, lng], 13);
    var marker = L.marker([lat, lng]).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}


function recenter({lat,lng}){
    map.flyTo([lat, lng], 13)
    L.marker([lat, lng]).addTo(map);
}



//booting
fetch("https://api.ipify.org/?format=json")
.then((response) => {
     return response.json();
})
.then((data) => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_msM4fnMk3RsmcePlMlHcDhk9Vmf8H&ipAddress=${data.ip}`)
    .then((response) => {
        return response.json();
    })
    .then( data =>  {
        //console.log(data);
        locate(data);
        setMap(data.location)
    });
});

//relocating
btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(ipinp.value != "");
    
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_msM4fnMk3RsmcePlMlHcDhk9Vmf8H&ipAddress=${ipinp.value}`)
            .then((response) => { return response.json()})
            .then((data) => {
                locate(data);
                recenter(data.location);
            });    
        
})



