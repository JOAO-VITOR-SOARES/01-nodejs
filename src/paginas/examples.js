function getCountryById(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(id == 1){
                resolve("ID FOUND")
            }
            else{
                reject("ERROR FOUND")
            }
        }, 2000, id)
    })
}

function user(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve([{
                id: 1,
                user: joao
            }, {
                id: 2,
                user: Luan
            }])
        }, 2000)
    })
}

async function makeRequests(id){
    const tempObject = await user()
    console.log(tempObject)

    return await getCountryById(id)

}

makeRequests(1)
.then(data => console.log(data))
.catch(error => console.log(error))