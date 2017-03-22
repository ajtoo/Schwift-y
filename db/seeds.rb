demo_user = User.create(email: "demo@gmail.com", password: "1234567890")

c1 = Car.create(
  make: "Dodge",
  model: "Challenger R/T",
  year: 2014,
  mileage: 12898,
  price: 25500,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car1_oi0ag5.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD"
)

 c2 = Car.create(
  make: "Dodge",
  model: "Challenger R/T",
  year: 2014,
  mileage: 15090,
  price: 22600,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car2_o4qntk.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD"
)

c3 = Car.create(
  make: "Dodge",
  model: "Charger R/T",
  year: 2016,
  mileage: 36592,
  price: 23487,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car3_rp9btu.jpg",
  body: "Sedan",
  transmission: "Automatic",
  drivetrain: "RWD"
)

c4 = Car.create(
  make: "Chevrolet",
  model: "Camaro SS",
  year: 2015,
  mileage: 40977,
  price: 21800,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car4_mfu1tn.jpg",
  body: "Coupe",
  transmission: "Automatic",
  drivetrain: "RWD"
)

c5 = Car.create(
  make: "Tesla",
  model: "Roadster",
  year: 2008,
  mileage: 36953,
  price: 49350,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car5_iiusey.jpg",
  body: "Coupe",
  transmission: "Automatic",
  drivetrain: "RWD"
)

c6 = Car.create(
  make: "Ford",
  model: "Mustang Shelby GT350",
  year: 2016,
  mileage: 1332,
  price: 61500,
  img_url: "http://res.cloudinary.com/ajtoo/image/upload/v1490125869/car6_pcrimg.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD"
)

c7 = Car.create(
  make: "Ford",
  model: "Mustang GT",
  year: 2010,
  mileage: 63780,
  price: 15350,
  img_url: "http://res.cloudinary.com/ajtoo/image/upload/v1490125870/car7_aqwhhz.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD"
)

c8 = Car.create(
  make: "Porsche",
  model: "Cayenne",
  year: 2016,
  mileage: 12702,
  price: 57050,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490123863/car8_iqbmgv.jpg",
  body: "SUV",
  transmission: "Automatic",
  drivetrain: "AWD"
)

c9 = Car.create(
  make: "Rick's",
  model: "Cruiser",
  year: 2013,
  mileage: 771983,
  price: 6421125,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490139925/car9_z1j72a.png",
  transmission: "Manual",
  drivetrain: "RWD",
  body: "Coupe"
)