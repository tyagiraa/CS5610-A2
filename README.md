# AirBNB Listings Reloaded

This project displays the first 50 AirBNB listings from a JSON dataset using JavaScript `fetch` with `async/await`. The listings are dynamically rendered on the page using starter code provided in class and styled with Bootstrap.

## Features

The page displays the following information for each listing:

- Listing name  
- Description  
- Amenities  
- Host name and host photo  
- Price per night  
- Thumbnail image  

### Creative Addition

Each listing includes a **“View on Airbnb”** button that links directly to the original Airbnb listing page using the `listing_url` from the dataset.

## Data Loading

- Data is loaded from `airbnb_sf_listings_500.json`
- The first 50 listings are displayed using `Array.slice()`
- Listings are rendered dynamically using JavaScript

## Deployment

The project is deployed using **Netlify** and can be viewed here:

**Live Site:**  
https://jade-khapse-453141.netlify.app/
