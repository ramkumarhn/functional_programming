/* jshint esversion:9*/
function map(array, mapperFn) {
    let mapped = [];
    for(let each of array) {
        mapped.push(mapperFn(each));
    }
    return mapped;
}

console.log(map([1, 2, 3, 4], x => 2 * x));
console.log([1, 2, 3, 4].map(x => x * 2) );

const inc = x => x + 1;
const double = x => x + x;
const square = x => x * x;

console.log(square(double(inc(5))));

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

let composition = compose(square, double, inc);
console.log(composition(5));

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

let pipeline = pipe(inc, double, square);
console.log(pipeline(5));

let data = {
    "appBody": {
        "registerUserInput": {
            "dateOfBirth": "08-10-1983",
            "emailId": 'ramkumarhn@gmail.com', 
            "firstName": "Ram",
            "kycStatus": "N",
            "lastName": "Kumar",
            "msisdn": 18923459
        },
        "requestHeader": {
            "bearer": "MOBILE",
            "deviceDetails": {
                "deviceManufacturer": "MOBILE",
                "deviceModel": "MOBILE",
                "deviceOS": "Android",
                "deviceOSVersion": "5.0",
                "imei": "MOBILE",
                "uuid": "MOBILE"
            },
            "interactionCode": "REGUSR",
            "phaseCode": "CUSTREG",
            "serviceCode": "CUSTREG",
            "serviceId": 1234,
            "subTransactionCode": "CUSTREG"
        }
    },
    "appErrors": [],
    "appHeader": {
        "appId": "com.idfc.wallet",
        "deviceId": "",
        "interfaceId": "REGUSR",
        "requestKey": "",
        "screenId": "serverScr",
        "sessionId": "",
        "source": "ROBOSOFT",
        "status": "",
        "userId": ""
    }
};

const transformDOB = data => ({...data, appBody:{...data.appzillonBody, registerUserInput: {...data.appBody.registerUserInput, 
    dateOfBirth: new Date(data.appBody.registerUserInput.dateOfBirth).toISOString()}}});

const transformEmail =  data => ({...data, appBody:{...data.appzillonBody, registerUserInput: {...data.appBody.registerUserInput, 
    emailId: data.appBody.registerUserInput.emailId.replace('@', '[AT]')}}});

let transformMap = new Map();
transformMap.set('DOB', transformDOB);
transformMap.set('Email', transformEmail);

let collectedOpsFromApi = ['Email', 'DOB'];
const transform = pipe(...collectedOpsFromApi.map(each => transformMap.get(each)));

console.log(transform(data));
console.log(data);

