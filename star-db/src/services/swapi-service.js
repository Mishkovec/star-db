export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${result.status}`);
            }
            return await result.json();
    }

    async getAllPeople () {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson (id) {
        return this.getResource(`/people/${id}/`);
    }
    async getAllPlanets () {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getPlanet (id) {
        return this.getResource(`/planet/${id}/`);
    }
    async getAllStarships () {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getStarship (id) {
        return this.getResource(`/starship/${id}/`);
    }
}

const swapi =new SwapiService();

swapi.getAllPeople().then((people)=>{
    people.forEach((el) => {
        console.log(el.name);
    });
})