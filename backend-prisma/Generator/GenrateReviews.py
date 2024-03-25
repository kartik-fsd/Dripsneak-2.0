import json
import random
from datetime import datetime, timezone

# Define your Product IDs and User IDs
product_ids = [
    "65f59c9e8f4571f62669b51b",
    "65f59d6d8f4571f62669b51f",
    "65f59d6d8f4571f62669b520",
    "65f59d6d8f4571f62669b521",
    "65f59d6d8f4571f62669b522",
    "65f59d6d8f4571f62669b523"
]

user_ids = [
    "65f5a20a8f4571f62669b531",
    "65f5a22f8f4571f62669b534",
    "65f5a2428f4571f62669b536",
    "65f5a2498f4571f62669b538",
    "65f5a2508f4571f62669b53a",
    "65f5a2568f4571f62669b53c",
    "65f5a25e8f4571f62669b53e",
    "65f5a26c8f4571f62669b540",
    "65f5a2728f4571f62669b542",
    "65f5a2798f4571f62669b544",
    "65f5a2808f4571f62669b546",
    "65f5a2878f4571f62669b548",
    "65f5a28d8f4571f62669b54a",
    "65f5a2948f4571f62669b54c",
    "65f5a29b8f4571f62669b54e",
    "65f5a2a08f4571f62669b550",
    "65f5a2a68f4571f62669b552",
    "65f5a2ad8f4571f62669b554",
    "65f5a2b48f4571f62669b556",
    "65f5a2b98f4571f62669b558"
]

# Define the number of reviews per product
min_reviews_per_product = 10
max_reviews_per_product = 13

# Function to generate a random rating between 1 and 5


def generate_rating():
    return random.randint(1, 5)

# Function to generate a random review content from predefined statements


def generate_content():
    statements = ["Good product", "Amazing product",
                  "Great value for money", "Highly recommended", "Very satisfied"]
    return random.choice(statements)

# Function to generate a random review image (empty list for simplicity)


def generate_review_img():
    return []


# Generate mockup data
reviews = []
for product_id in product_ids:
    # Randomly select 10-13 unique user IDs
    selected_user_ids = random.sample(user_ids, random.randint(
        min_reviews_per_product, max_reviews_per_product))
    for user_id in selected_user_ids:
        review = {
            "productId": product_id,
            "userId": user_id,
            "rating": generate_rating(),
            "content": generate_content(),
            "reviewImg": generate_review_img(),
            "createdAt": "2024-03-16T13:32:55.124+00:00"
        }
        reviews.append(review)

# Convert the data to JSON
json_data = json.dumps(reviews, indent=2)

# Print or save the JSON data
print(json_data)
