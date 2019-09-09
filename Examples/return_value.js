function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

let plus5 = makeAdder(5);
console.log(plus5(10));
let plus10 = makeAdder(10);
console.log(plus10(10));

function buildUri(scheme, domain, path) {
    return `${scheme}://${domain}/${path}`;
}
buildHttpsUri = fixSchemeUri('https');
let twitterFavico = buildHttpsUri('twitter.com', 'favicon.ico');
let exampleUri = buildHttpsUri('example.com', 'api/v1');
console.log(twitterFavico);
console.log(exampleUri);

function fixSchemeUri(scheme) {
    return function(domain, path) {
        return buildUri(scheme, domain, path);
    };
}

class UriBuilder {
    constructor(scheme) {
        this.scheme = scheme;
    }
    anotherMethod() {
        this.scheme = 'http';
    }
    buidlUri(domain, path) {
        return `${this.scheme}://${domain}/${path}`;
    }
}

let builder = new UriBuilder('https');
console.log(builder.buidlUri('twitter.com', 'favicon.ico'));