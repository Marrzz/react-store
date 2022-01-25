class Requests {

   async getRequest(url) {
        
        const response = await fetch(url);
        const data = await response.json;
        return data;
    }

    async postRequest(url, data){

        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'Application/json'},
            body: JSON.stringify(data)
        });
    }

}