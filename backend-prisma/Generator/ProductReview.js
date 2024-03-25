const router = require("express").Router();
// Define your Product IDs and User IDs
const productIds = [
  "660196913752dc71e31f310d",
  "660196913752dc71e31f310e",
  "660196913752dc71e31f310f",
];

const userIds = [
  "66002af20117af9498d82b5c",
  "66019dae3752dc71e31f3119",
  "66019dbb3752dc71e31f311b",
  "66019dc33752dc71e31f311d",
  "66019dcc3752dc71e31f311f",
  "66019dd63752dc71e31f3121",
  "66019e5d3752dc71e31f3124",
  "66019e683752dc71e31f3126",
  "66019e763752dc71e31f3128",
  "66019e813752dc71e31f312a",
  "66019e893752dc71e31f312c",
  "66019e993752dc71e31f312f",
  "66019ea33752dc71e31f3131",
  "66019eac3752dc71e31f3133",
  "66019eb53752dc71e31f3135",
  "66019ec23752dc71e31f3137",
  "66019eca3752dc71e31f3139",
  "6601aa750059b2ce0188ae7b",
  "6601aa7d0059b2ce0188ae7d",
  "6601aa850059b2ce0188ae7f",
  "6601aa8f0059b2ce0188ae81",
  "6601aa970059b2ce0188ae83",
  "6601aaa00059b2ce0188ae85",
  "6601aaa90059b2ce0188ae87",
  "6601aab10059b2ce0188ae89",
  "6601aab90059b2ce0188ae8b",
  "6601aac30059b2ce0188ae8d",
];

// Define the number of reviews per product
const minReviewsPerProduct = 15;
const maxReviewsPerProduct = 27;

// Function to generate a random rating between 1 and 5
function generateRating() {
  return Math.floor(Math.random() * 5) + 1;
}

// Function to generate a random review content from predefined statements
function generateContent() {
  const statements = [
    "These sneakers are incredibly comfortable! I can walk for hours without any discomfort.",
    "Love the sleek design of these sneakers. They're stylish and versatile, perfect for any outfit.",
    "The cushioning in these sneakers is top-notch. It feels like walking on clouds!",
    "Impressed by the durability of these sneakers. They've held up well even after months of regular use.",
    "The traction on these sneakers is excellent. I feel secure and stable even on slippery surfaces.",
    "These sneakers offer great arch support, which is perfect for someone like me with high arches.",
    "Super lightweight sneakers! It feels like I'm barely wearing anything on my feet.",
    "The breathability of these sneakers is outstanding. My feet stay cool and dry even on hot days.",
    "The quality of materials used in these sneakers is evident. They feel premium and well-made.",
    "I appreciate the attention to detail in the design of these sneakers. Every element seems well thought out.",
  ];
  return statements[Math.floor(Math.random() * statements.length)];
}

// Function to generate a random review image (empty array for simplicity)
function generateReviewImg() {
  return [];
}

// Generate mockup data
const reviews = [];
for (const productId of productIds) {
  // Randomly select 10-13 unique user IDs
  const selectedUserIds = userIds
    .sort(() => 0.5 - Math.random())
    .slice(
      0,
      Math.floor(
        Math.random() * (maxReviewsPerProduct - minReviewsPerProduct + 1)
      ) + minReviewsPerProduct
    );
  for (const userId of selectedUserIds) {
    const review = {
      productId: productId,
      userId: userId,
      rating: generateRating(),
      content: generateContent(),
      reviewImg: generateReviewImg(),
      createdAt: "2024-03-16T13:32:55.124+00:00",
    };
    reviews.push(review);
  }
}

// Send data to backend API using Fetch API
const url = "http://localhost:3000/product/reviews/bulk"; // Replace with your actual API endpoint

fetch(url, {
  method: "POST", // Specify POST method for bulk data creation
  headers: {
    "Content-Type": "application/json", // Set content type for JSON data
  },
  body: JSON.stringify(reviews), // Convert data to JSON string
})
  .then((response) => response.json()) // Parse response as JSON if successful
  .then((data) => {
    console.log("Reviews created successfully:", data); // Log success message with response data (optional)
  })
  .catch((error) => {
    console.error("Error creating reviews:", error); // Log error message
  });
