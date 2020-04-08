function someSyncOperation (content) {
  console.log('===someSyncOperation')
  return content += '// from myLoader'
}

function someAsyncOperation (content, cb) {
  console.log('===someAsyncOperation')
  content += '// from myLoader after 1s'
  setTimeout(() => {
    cb(null, content)
  }, 1000);
}

module.exports = function(content, map, meta) {
  console.log(content, map, meta)
  content = someSyncOperation(content);

  var callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};
