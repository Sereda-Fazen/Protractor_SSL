var home = require('./page/homePage');
var imap = require('./imap/imapPage.js');
describe ("Login in the system", function () {

    
    beforeAll(function () {
        

        home.goto('https://floship-staging.herokuapp.com/password/reset/');
        
    });

    describe("Sample test case", function () {
        it("should login with a registration code sent to an email", function () {
            
        });
    })
            
        
});
