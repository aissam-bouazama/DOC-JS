const d = document,
n = navigator;
function getgeolocation(id){
    const $iddiv = d.querySelector(id);
    const success=(position)=>{
        console.log(position);
        let coords = position.coords;
        $iddiv.innerHTML = `<p>la teva posicio actual és:</p>
        <ul>
        <li>latitud: ${coords.latitude}</li>
        <li>longitud: ${coords.longitude}</li>
         <li>Precisió: ${coords.accuracy} metres</li>
         </ul>
         <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">veure</a>
        `;
    };
    const error = (err)=>{
        console.log(err);
        $iddiv.innerHTML = `<p><mark>${err.code}: - ${err.message}</mark></p>`
    };
    const options = {
        enableHighAccuracy:true,//maxima preciessió
        timeout:5000,//temps d'espera maxim
        maximumAge:0,//no ytilizar la cau
    };
    n.geolocation.getCurrentPosition(success,error,options);

}

function getWatchgeolocation(id){
    const $iddiv = d.querySelector(id);
    const success=(position)=>{
        console.log(position);
        let coords = position.coords;
        $iddiv.innerHTML = `<p>la teva posicio actual és:</p>
        <ul>
        <li>latitud: ${coords.latitude}</li>
        <li>longitud: ${coords.longitude}</li>
         <li>Precisió: ${coords.accuracy} metres</li>
         </ul>
         <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">veure</a>
        `;
    };
    const error = (err)=>{
        console.log(err);
        $iddiv.innerHTML = `<p><mark>${err.code}: - ${err.message}</mark></p>`
    };
    const options = {
        enableHighAccuracy:true,//maxima preciessió
        timeout:5000,//temps d'espera maxim
        maximumAge:0,//no ytilizar la cau
    };
    n.geolocation.watchPosition(success,error,options);
}
d.addEventListener("DOMContentLoaded",getgeolocation(".geolocation"));
d.addEventListener("DOMContentLoaded",getWatchgeolocation(".geolocation"));