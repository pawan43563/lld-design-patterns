// Build an adapter that converts XML response from a service into a JSON-compatible format.

class xmlService {
    getXML(data) {
        return `<data>${data}</data>`;
    }
}


class XTMtoJSONAdapter {
    constructor(xmlResponse) {
        this.xmlResponse = xmlResponse
    }

    getJson(data) {
        return this.xmlResponse.getXML(data)
    }
}

const xmlServiceRes = new xmlService();
const adapter = new XTMtoJSONAdapter(xmlServiceRes);
console.log(adapter.getJson("hello"))