//FAKE API
const getData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve([12, 23, 42, 12])
        }, 1500);
    }); 
}

//FAKE ApI 2
const getOtherData = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(id === 12){
                resolve("OK, 12!")
            }else{
                reject("ERRROR")
            }
        }, 1500, id);
    })
}

const apiResponse = getData();

async function processApisRequests(){

    const apiResponse = await getData();
    console.log(apiResponse);

    const api2Response = await getOtherData(apiResponse[0]);
    console.log(api2Response);

    return api2Response
}

processApisRequests().then(result => {
    console.log(result + " YEAH")
});
