const {Curl} = require("../index");

test("Returns a successful GET reponse on TLS Fingerprinting protected URL", async () => {
    const curl = new Curl();
    curl.impersonate('chrome');
    curl.url('https://www.sogou.com');
    curl.get();
    curl.followRedirect(true);
    curl.timeout(30);
    const res = await curl;
    
    console.log(res.body);
    console.log(res.statusCode);
});