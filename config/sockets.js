module.exports.sockets = {

  adapter: 'memory',

  //
  // -OR-
  //

  // adapter: 'socket.io-redis',
  // host: '127.0.0.1',
  // port: 6379,
  // db: 0,
  // pass: '<redis auth password>',

  grant3rdPartyCookie: false,



  /***************************************************************************
  *                                                                          *
  * `beforeConnect`                                                          *
  *                                                                          *
  * This custom beforeConnect function will be run each time BEFORE a new    *
  * socket is allowed to connect, when the initial socket.io handshake is    *
  * performed with the server.                                               *
  *                                                                          *
  * By default, when a socket tries to connect, Sails allows it, every time. *
  * (much in the same way any HTTP request is allowed to reach your routes.  *
  * If no valid cookie was sent, a temporary session will be created for the *
  * connecting socket.                                                       *
  *                                                                          *
  * If the cookie sent as part of the connection request doesn't match any   *
  * known user session, a new user session is created for it.                *
  *                                                                          *
  * In most cases, the user would already have a cookie since they loaded    *
  * the socket.io client and the initial HTML page you're building.         *
  *                                                                          *
  * However, in the case of cross-domain requests, it is possible to receive *
  * a connection upgrade request WITHOUT A COOKIE (for certain transports)   *
  * In this case, there is no way to keep track of the requesting user       *
  * between requests, since there is no identifying information to link      *
  * him/her with a session. The sails.io.js client solves this by connecting *
  * to a CORS/jsonp endpoint first to get a 3rd party cookie(fortunately this*
  * works, even in Safari), then opening the connection.                     *
  *                                                                          *
  * You can also pass along a ?cookie query parameter to the upgrade url,    *
  * which Sails will use in the absence of a proper cookie e.g. (when        *
  * connecting from the client):                                             *
  * io.sails.connect('http://localhost:1337?cookie=smokeybear')              *
  *                                                                          *
  * Finally note that the user's cookie is NOT (and will never be) accessible*
  * from client-side javascript. Using HTTP-only cookies is crucial for your *
  * app's security.                                                          *
  *                                                                          *
  ***************************************************************************/
  // beforeConnect: function(handshake, cb) {
  //   // `true` allows the connection
  //   return cb(null, true);
  //
  //   // (`false` would reject the connection)
  // },


  /***************************************************************************
  *                                                                          *
  * `afterDisconnect`                                                        *
  *                                                                          *
  * This custom afterDisconnect function will be run each time a socket      *
  * disconnects                                                              *
  *                                                                          *
  ***************************************************************************/
  // afterDisconnect: function(session, socket, cb) {
  //   // By default: do nothing.
  //   return cb();
  // },


  transports: ["polling", "websocket"],
  origns: '*:*'

};
