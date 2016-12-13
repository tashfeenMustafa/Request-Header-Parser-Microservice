'use strict';

module.exports = function(app) {
  app.route('/whoami').get(function(request, response) {
    var ip = request.headers['x-forwarded-for'] || 
             request.connection.remoteAddress || 
             request.socket.remoteAddress ||
             request.connection.socket.remoteAddress;
             
    var language = request.headers["accept-language"].split(',')[0]
    
    var software = request.headers['user-agent'].split(') ')[0].split(' (')[1]
    var info = {
        'ip': ip,
        'language': language, 
        'software': software
    };
    
    response.send(info);
    
  });
}; 