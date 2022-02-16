

function authorise(params) {
    return new Promise((resolve, reject) => {
        let url = `https://m7c27ovye5.execute-api.eu-west-1.amazonaws.com/Production/authentication`
        fetch(url, {
            method: 'POST',
            mode: "cors",// no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({
                method: params.method,
                password: params.password,
                username: params.username
            })
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                let body = {
                    ...json.body,
                    statusCode: json.statusCode,
                }
                console.log(json);
                resolve(body);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
    });

}

export default authorise;