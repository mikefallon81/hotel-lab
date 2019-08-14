use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Mat",
    email: "mat@mattymattymat.com",
    checkInStatus: true

  },
  {
    name: "Michael",
    email: "michael@mongoclient.com",
    checkInStatus: true
  }
])
