const express = require("express");
const app = express();

require("dotenv").config();

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2022 },
  { id: 4, make: "Chevrolet", model: "Corvette", year: 2023 },
  { id: 5, make: "Tesla", model: "Model 3", year: 2021 },
  { id: 6, make: "Nissan", model: "Altima", year: 2022 },
  { id: 7, make: "BMW", model: "X5", year: 2023 },
  { id: 8, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 9, make: "Audi", model: "A4", year: 2022 },
  { id: 10, make: "Lexus", model: "RX", year: 2023 },
  { id: 11, make: "Hyundai", model: "Tucson", year: 2021 },
  { id: 12, make: "Kia", model: "Seltos", year: 2022 },
  { id: 13, make: "Mazda", model: "CX-5", year: 2023 },
  { id: 14, make: "Subaru", model: "Outback", year: 2021 },
  { id: 15, make: "Volkswagen", model: "Golf", year: 2022 },
];

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.post("/cars", (req, res) => {
  const newCars = req.body;
  if (!newCars.make || !newCars.model || !newCars.year) {
    res.status(400).json({ error: "Make , model and year are required" });
  } else {
    cars.push(newCars);
    res.status(201).json({ success: "Car added Sucessfully", car: newCars });
  }
});

app.delete("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const index = cars.findIndex((car) => car.id == carId);
  console.log(index);
  if (index === -1) {
    res.status(400).json({ error: "Car not found!" });
  } else {
    cars.splice(index, 1);
    res.status(201).json({ success: "Car deleted sucessfully" });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});
const port = 3000;
app.listen(port, () => {
  console.log("Server is running on the port", port);
});
