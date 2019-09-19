const _ = require('underscore');
let data = [
    {
      "origin":"BOS","dest":"LAX","date":"2015-01-12",
      "number":"25","carrier":"AA","delay":0.0,"cancelled":false
    },
    {
      "origin":"BOS","dest":"LAX","date":"2015-01-13",
      "number":"25","carrier":"AA","delay":0.0,"cancelled":false
    },
    {
        "origin":"ATL","dest":"MDW","date":"2015-01-13",
        "number":"25","carrier":"TZ","delay":100.0,"cancelled":false
    },
    {
        "origin":"FLL","dest":"HNL","date":"2015-01-13",
        "number":"25","carrier":"CO","delay":0.0,"cancelled":true
    },
    {
        "origin":"FLL","dest":"HNL","date":"2015-01-13",
        "number":"25","carrier":"CO","delay":0.0,"cancelled":false
    },
    {
        "origin":"DTW","dest":"MIA","date":"2015-01-13",
        "number":"25","carrier":"EV","delay":0.0,"cancelled":true
    },
    {
        "origin":"DTW","dest":"MIA","date":"2015-01-13",
        "number":"25","carrier":"EV","delay":0.0,"cancelled":false
    },
    {
        "origin":"IAH","dest":"JFK","date":"2015-01-13",
        "number":"25","carrier":"AA","delay":10.0,"cancelled":false
    },
    {
        "origin":"JFK","dest":"DTW","date":"2015-01-13",
        "number":"50","carrier":"EV","delay":105.0,"cancelled":false
    },
    {
        "origin":"JFK","dest":"MDW","date":"2015-01-13",
        "number":"50","carrier":"EV","delay":50.0,"cancelled":false
    }
];

// Summarize flight delay info

function summarizeFlightDelay() {

    function summarize(rows) {
        return {
            count: rows.length,
            cancellations: rows.filter(r => r.cancelled).length,
            totalDelay: rows.filter(r => !r.cancelled).reduce((acc, each) => acc + each.delay, 0)
        };
    }

    function formResult(row) {
        return {
            meanDelay: row.totalDelay / (row.count - row.cancellations),
            cancellationRate: row.cancellations / row.count
        };
    }
   return _.chain(data)
                     .groupBy(r => r.dest)
                     .mapObject(summarize)
                     .mapObject(formResult)
            .value();
}

console.log(summarizeFlightDelay());