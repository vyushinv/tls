const tls = require('tls');

var services = []

services.push(tls.connect('port', 'host', function () { console.log('tls.connect') }))

services.forEach(tlsSocket => {

    tlsSocket.on("secureConnect", function () {
        console.log('secureConnect');
        console.log('getProtocol :' + tlsSocket.getProtocol());
        console.log('remoteAddress :' + tlsSocket.remoteAddress);
        console.log('remotePort :' + tlsSocket.remotePort);
        const peerCertificate = tlsSocket.getPeerCertificate(false)
        console.log('issuer :' + peerCertificate.issuer.CN)
        console.log('serialNumber :' + peerCertificate.serialNumber)
        console.log('valid_from :' + peerCertificate.valid_from)
        console.log('valid_to :' + peerCertificate.valid_to)
        console.log('fingerprint256 :' + peerCertificate.fingerprint256)
        console.log('infoAccess :' + peerCertificate.infoAccess.CN)
        console.log('subject :' + peerCertificate.subject.CN)
        tlsSocket.end;
    })

});