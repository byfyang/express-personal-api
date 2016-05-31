// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var profile = [
{
  name: "Benjamin Yang",
  github_link: "https://github.com/byfyang",
  github_profile_image: "https://avatars2.githubusercontent.com/u/18609201?v=3&s=460",
  current_city: "San Francisco, CA",
  pets: {
    name: "Chewy",
    type: "dog",
    breed: "German Shepherd"
  }
}
];