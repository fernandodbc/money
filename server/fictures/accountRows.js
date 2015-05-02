if (AccountRows.find().count() === 0) {
	AccountRows.insert({"time":"2015-04-01", "title":"course dia", "tags":["alimentation"], "value":14.54});
	AccountRows.insert({"time":"2015-04-02", "title":"castorama", "tags":["travaux"], "value":176.54});
	AccountRows.insert({"time":"2015-04-04", "title":"leroy merlin", "tags":["travaux"], "value":74.54});
	AccountRows.insert({"time":"2015-04-10", "title":"course ecofruit", "tags":["alimentation"], "value":33.7});
	AccountRows.insert({"time":"2015-04-11", "title":"course monoprix", "tags":["alimentation"], "value":14.54});
	AccountRows.insert({"time":"2015-04-11", "title":"ikea", "tags":["maison"], "value":89.54});
}