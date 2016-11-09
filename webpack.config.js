require('webpack');
require('weex-loader');

var path = require('path');
var fs = require('fs');

var entry={};
function getFiles(dir, root) {
  var directory = path.join(__dirname, root, dir)
  fs.readdirSync(directory)
    .forEach(function (file) {
      let fullpath = path.join(directory, file);
      let stat = fs.statSync(fullpath);

      if (stat.isFile() && path.extname(fullpath) === '.we') {
        let name = path.join( dir, path.basename(file, '.we'));
        entry[name] = fullpath + '?entry=true'
      /*} else if(stat.isFile() && path.extname(fullpath) === '.png' ){
        let name = path.join( dir, path.basename(file, '.png'));
        entry[name] = fullpath;
      } else if(stat.isFile() && path.extname(fullpath) === '.jpg' ){
        let name = path.join( dir, path.basename(file, '.jpg'));
        entry[name] = fullpath;*/
      }else if (stat.isDirectory()) {
        let subdir = path.join(dir, file);
        getFiles(subdir, root)
      }
    })
}
getFiles('./', 'src');

module.exports = {
  entry: entry,
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  devtool:'inline-source-map',
  module: {
    loaders: [
      {test: /\.we(\?[^?]+)?$/,loaders: ['weex-loader']},
      /*{test: /\.(png|jpg)$/, loader: "file-loader?name=[name].[ext]" },*/
    ]
  }
}
