# Express Cars API 🚗

This is a simple Express.js project that manages a list of cars using RESTful APIs. It demonstrates how to **create**, **read**, and **delete** data on the server using Express.

## 📚 What I Learned

- How to use Express.js to build RESTful routes.
- How to handle incoming JSON data using `express.json()`.
- How to implement a **DELETE** route to remove data based on a dynamic `id` from an in-memory array.
- How to send appropriate HTTP status codes and JSON responses.

## 📁 Endpoints

### GET `/`
Returns a greeting message from the server.

### GET `/cars`
Returns the full list of cars.

### POST `/cars`
Adds a new car to the list.

**Request Body (JSON):**
```json
{
  "id": 16,
  "make": "Porsche",
  "model": "911",
  "year": 2024
}
