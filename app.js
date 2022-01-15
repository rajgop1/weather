let container=document.getElementById("container")
let city=document.getElementById("city")
let cityname=document.getElementById("searchbox")
let iconimage=document.getElementById("iconimage")
let degreec=document.getElementById("degreec")
let degreef=document.getElementById("degreef")
let weather=document.getElementById("weather")
let msgbox=document.getElementById("msgbox")
const searchbox=document.getElementById("searchbutton")
const getWeather = new openweather()
const menyberg=document.getElementById("menyburg")
searchbox.addEventListener("click",()=>{


    if(cityname.value==""){
        document.getElementById("alertbox").classList.remove("remove")
        return}
    getWeather.search(cityname.value).then((data)=>{
        
        const degreecel = data.main.temp-273.15
        
        const degreecelc = Math.floor(degreecel)
        const degreeFar = degreecel*1.8+32
        const degreefarah=Math.floor(degreeFar)
         console.log(data)

        // http://openweathermap.org/img/wn/10n@2x.png
         let results={
             city:data.name,
             weather:data.weather[0].main,
             humidity:data.main.humidity,
             degreec:degreecelc,
             degreef:degreefarah,
             icon:"http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
         }
         city.textContent=`City: ${results.city}`
         iconimage.setAttribute("src",`${results.icon}`)
         degreec.innerHTML=`Degree Celcius: ${results.degreec}&#8451;`
         degreef.innerHTML=`Degree farenheit: ${results.degreef}&#8457;`
         weather.innerText=`${results.weather}`
    }).catch(()=>{
        city.classList.add("error")
        city.innerHTML=`Sorry!<br/> Could not found any data related to ${cityname.value}`
         iconimage.removeAttribute("src")
         degreec.innerHTML=``
         degreef.innerHTML=``
         weather.innerText=``

    })

    
})

msgbox.addEventListener("click",()=>{
    let alert = document.getElementById("alertbox")
    alert.classList.add("remove")
    
})
menyberg.addEventListener("click",()=>{
    console.log("hello")
  let menyitem=document.getElementById("menyitem")
  menyitem.classList.toggle("menuitemdisp")  
})