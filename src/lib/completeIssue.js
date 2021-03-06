const Request = require('request');

module.exports = (options, cb) => {
  const headers = {
    'User-Agent': 'PomoNodo',
    'Authorization': `token ${options.access_token}`
  };
  const labelUrl = options.issueUrl + '/labels';
  const newLabelPayload = [ 'Ready for Review' ];
  Request.delete({
    url: labelUrl + '/In%20Progress',
    headers: headers
  }, (err, res, body) => {
    if (err) cb(err);
    else {
      Request.post({
        url: labelUrl,
        headers: headers,
        json: newLabelPayload
      }, cb);
    }
  });
};
