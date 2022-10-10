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

// 5) Use model.find() to Search Your Database

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// 6) Use model.findOne() to Return a Single Matching Document from Your Database

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, data) {
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// 7) Use model.findById() to Search Your Database By _id 

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function(err, data){
    if(err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// 8) Perform Classic Updates by Running Find, Edit, then Save

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id: personId}, function(err, person){
    if(err) {
      return console.error(err);
    }
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if(err) {
        return console.error(err);
      }
      done(null, updatedPerson);
    });
  });
};

// 9) Perform New Updates on a Document Using model.findOneAndUpdate()

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  const query = { name: personName };
  Person.findOneAndUpdate(query, {age: ageToSet}, { new: true }, function(err, updated) {
    if(err) {
      return console.error(err);
    }
    done(null, updated);
  });
};

// 10) Delete One Document Using model.findByIdAndRemove

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, removedPerson){
    if(err) {
      return console.error(err);
    }
    done(null, removedPerson);
    });
};

// 11) Delete Many Documents with model.remove()

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, function(err, response) {
    if(err) {
      return console.log(err);
    }
    done(null, response);
  });
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
