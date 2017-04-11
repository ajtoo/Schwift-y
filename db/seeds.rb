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
  drivetrain: "RWD",
  location: "Los Angeles"
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
  drivetrain: "RWD",
  location: "Sacramento"

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
  drivetrain: "RWD",
  location: "Los Angeles"
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
  drivetrain: "RWD",
  location: "Orange County"
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
  drivetrain: "RWD",
  location: "San Francisco"
)

c6 = Car.create(
  make: "Ford",
  model: "Mustang Shelby GT350",
  year: 2016,
  mileage: 1332,
  price: 61500,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125869/car6_pcrimg.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD",
  location: "Los Angeles"
)

c7 = Car.create(
  make: "Ford",
  model: "Mustang GT",
  year: 2010,
  mileage: 63780,
  price: 15350,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1490125870/car7_aqwhhz.jpg",
  body: "Coupe",
  transmission: "Manual",
  drivetrain: "RWD",
  location: "Sacramento"
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
  drivetrain: "AWD",
  location: "Washington DC"
)

c9 = Car.create(
  make: "Mazda",
  model: "MX-5 Miata",
  year: 2016,
  mileage: 4110,
  price: 25700,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1491934116/car9_gw9mve.jpg",
  transmission: "Manual",
  drivetrain: "RWD",
  body: "Coupe",
  location: "San Diego"
)

c10 = Car.create(
  make: "Fiat",
  model: "Abarth 500",
  year: 2015,
  mileage: 5637,
  price: 15350,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1491934355/car10_srpvfg.jpg",
  transmission: "Automatic",
  drivetrain: "FWD",
  body: "Hatchback",
  location: "San Diego"
)

c11 = Car.create(
  make: "Mazda",
  model: "CX-3 Touring",
  year: 2016,
  mileage: 12617,
  price: 21000,
  img_url: "https://res.cloudinary.com/ajtoo/image/upload/v1491934583/c11_vfjwo3.jpg",
  transmission: "Automatic",
  drivetrain: "FWD",
  body: "SUV",
  location: "San Diego"
)

td1 = TestDrive.create(
    date: "12/2/2013",
    phone_number: "137-1234",
    location: "1700 W Burbank Blvd, Burbank, CA",
    user_id: demo_user.id,
    car_id: c9.id
)