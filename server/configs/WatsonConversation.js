(function () {
  "use strict";

  module.exports = {
    "username": process.env.CONV_USER || JSON.parse(process.env.VCAP_SERVICES)["conversation"][0].credentials.username,
    "password": process.env.CONV_PASS || JSON.parse(process.env.VCAP_SERVICES)["conversation"][0].credentials.password,
    "version": "v1",
    "version_date": "2016-09-20"
  };
}());
