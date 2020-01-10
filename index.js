let series_directory = "./data/"
let season_number = "01"
let series_name = "SpongeBob SquarePants (1999)" //needs to be exact, with date etc, to work with plex.
let extension = ".avi"

var myRegexp = /^(.)(..) .*$/ //will match "101 Help Wanted.avi" etc.





























const fs = require("fs")
const dirname = "./data"
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(series_directory, function(err, filenames) {
    filenames.forEach(function(filename) {
        try{
          var myString = filename
          var match = myRegexp.exec(myString);
fs.rename(series_directory + filename, series_directory + `${series_name} - S${season_number}E${match[2]}${extension}`, function (err) {
  if (err) throw err;
  console.log(`renamed complete ${series_name} - S${season_number}E${match[2]}`);
})
    }
    catch(error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
});
  });
}
readFiles()
