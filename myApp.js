require('dotenv').config();

// 1) Install and Set Up Mongoose

let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// 2) Create a Model: CRUD Part I - CREATE

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

// 3) Create and Save a Record of a Model

const createAndSavePerson = (done) => {
  let robertLewandowski = new Person({
    name: "Robert Lewandowski",
    age: 34,
    favoriteFoods: ["salad", "juice"]
  });
  
  robertLewandowski.save(function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// 4) Create Many Records with model.create()

const arrayOfPeople = [
  { name: "Cristiano Ronaldo",
    age: 37,
    favoriteFoods: ["bifana", "caldo verde"]},

  { name: "Lionel Messi",
    age: 35,
    favoriteFoods: ["parillas", "choripan", "provoleta"]},

  { name: "Karim Benzema",
    age: 35,
    favoriteFoods: ["ratatouille"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
