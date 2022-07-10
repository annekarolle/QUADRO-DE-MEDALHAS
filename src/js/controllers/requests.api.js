class RequestApi {
    static basicUrl = "https://kenzie-olympics.herokuapp.com/paises";
    static paises = [];
    static async getCountries() {
        return await fetch(this.basicUrl , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }           
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
}

export default RequestApi