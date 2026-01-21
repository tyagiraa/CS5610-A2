function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);
  const statusElement = document.querySelector("#status");


  function getListingCode(listing) {
    let amenities = [];
    try {
      amenities = JSON.parse(listing.amenities);
    } catch (e) {
      amenities = [];
    }

    return `<div class="col-4">
  <div class="listing card">
    <img
      src="${listing.picture_url}"
      class="card-img-top"
      alt="AirBNB Listing"
    />
    <div class="card-body">
      <h2 class="card-title">${listing.name}</h2>
      <div>${listing.price}</div>
      <p class="card-text">
        ${listing.description}
      </p>
      <div>
          <img
            src="${listing.host_picture_url}"
            alt="Host photo"
            style="width:40px;height:40px;border-radius:50%;"
          />
          <strong>${listing.host_name}</strong>
        </div>
        <h6>Amenities</h6>
        <ul>
          ${amenities.slice(0, 5).map(a => `<li>${a}</li>`).join("")}
        </ul>
      <a href="${listing.listing_url}" target="_blank" class="btn btn-primary">View on Airbnb</a>
    </div>
  </div>
  <!-- /card -->
  </div>

  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }
    if (statusElement) statusElement.textContent = `Showing ${listings.length} listings`;
  }

  async function loadData() {
    if (statusElement) statusElement.textContent = "Loading listings…";
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    me.redraw(listings.slice(0, 50));
    if (statusElement) statusElement.textContent = "Loaded 50 listings";
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();


main.loadData();