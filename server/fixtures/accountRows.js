// Adding some fake accountRows to initiate de database
if (AccountRows.find().count() === 0) {
    AccountRows.insert({
      "account":"0123456789",
      "time":"2015-04-01",
      "title":"course dia",
      "tags":["alimentation"],
      "value":19.54
    });

    AccountRows.insert({
      "account":"0123456789",
      "time":"2015-04-03",
      "title":"course dia",
      "tags":["alimentation"],
      "value":24.54
    });

    AccountRows.insert({
      "account":"0123456789",
      "time":"2015-04-05",
      "title":"course dia",
      "tags":["alimentation"],
      "value":34.54
    });

    AccountRows.insert({
      "account":"0123456759",
      "time":"2015-04-06",
      "title":"course dia",
      "tags":["alimentation"],
      "value":14.99
    });
}
