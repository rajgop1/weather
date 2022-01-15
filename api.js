class openweather{
    constructor()
    {
        this.apikey="60377e316c5839c44a606ac754d94b8c"
    }
    async search(cityname)
    {
        const response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${this.apikey}`)
        
        const results=await response.json()
        return results
    }
}