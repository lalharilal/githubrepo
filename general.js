const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(
      `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  getAllBooks,
  getBooksByAuthor,
  getBooksByTitle,
  getBookByISBN
};
