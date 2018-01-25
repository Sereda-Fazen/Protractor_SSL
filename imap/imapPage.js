


    
        var MailListener = require("mail-listener2");
        var mailListener = new MailListener({
            username: "auto.testfloship1@gmail.com",
            password: "fJ4qEn5Y",
            host: "imap.gmail.com",
            port: 993,
            tls: true,
            tlsOptions: {rejectUnauthorized: false},
            mailbox: "INBOX",
            markSeen: true,
            fetchUnreadOnStart: true,
            attachments: true,
            attachmentOptions: {directory: "attachments/"}
        });

        mailListener.start();

        mailListener.on("mail", function (mail) {
            var maillText = mail.text;
            var splitMaillText = maillText.split('\n\n');
        
            console.log(splitMaillText[2]);
            browser.get(splitMaillText[2]);
        
        });
    



    // mailListener.on("server:connected", function () {
    //     console.log("imapConnected");
    // });
    //
    // mailListener.on("server:disconnected", function () {
    //     console.log("imapDisconnected");
    // });
    //
    // mailListener.on("error", function (err) {
    //     console.log(err);
    // });
    //
