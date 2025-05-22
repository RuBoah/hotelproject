// Fake Hotel Rooms Data
const roomsData = {
  rooms: [
    {
      id: "101",
      name: "Deluxe King Room",
      type: "Deluxe",
      capacity: 2,
      floor: 1,
      price: 199,
      amenities: [
        "King Bed",
        "Ocean View",
        "Mini Bar",
        "Smart TV",
        "Free WiFi",
      ],
      available: true,
      rating: 4.5,
      image: "/api/placeholder/400/250",
      imageAlt: "Deluxe King Room with ocean view and modern amenities",
    },
    {
      id: "205",
      name: "Executive Suite",
      type: "Suite",
      capacity: 4,
      floor: 2,
      price: 349,
      amenities: [
        "Separate Living Room",
        "Two Queen Beds",
        "Balcony",
        "Coffee Maker",
        "Free WiFi",
      ],
      available: false,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      imageAlt: "Executive Suite with separate living room and balcony",
    },
    {
      id: "302",
      name: "Standard Twin Room",
      type: "Standard",
      capacity: 2,
      floor: 3,
      price: 129,
      amenities: ["Two Twin Beds", "City View", "Work Desk", "Free WiFi"],
      available: true,
      rating: 3.9,
      image: "/api/placeholder/400/250",
      imageAlt: "Standard Twin Room with city view and work desk",
    },
    {
      id: "408",
      name: "Premium Ocean Suite",
      type: "Suite",
      capacity: 6,
      floor: 4,
      price: 599,
      amenities: [
        "Master Bedroom",
        "Ocean View",
        "Private Balcony",
        "Jacuzzi",
        "Kitchen",
        "Free WiFi",
      ],
      available: true,
      rating: 4.9,
      image: "images/deluxe-king-room.jpg",
      imageAlt: "Premium Ocean Suite with private balcony and jacuzzi",
    },
    {
      id: "156",
      name: "Family Deluxe Room",
      type: "Deluxe",
      capacity: 4,
      floor: 1,
      price: 279,
      amenities: [
        "Two Double Beds",
        "Garden View",
        "Mini Fridge",
        "Gaming Console",
        "Free WiFi",
      ],
      available: true,
      rating: 4.3,
      image: "/api/placeholder/400/250",
      imageAlt: "Family Deluxe Room with garden view and gaming console",
    },
    {
      id: "312",
      name: "Business Standard Room",
      type: "Standard",
      capacity: 1,
      floor: 3,
      price: 159,
      amenities: [
        "Queen Bed",
        "Work Station",
        "High-Speed Internet",
        "Coffee Maker",
        "Free WiFi",
      ],
      available: false,
      rating: 4.1,
      image: "/api/placeholder/400/250",
      imageAlt: "Business Standard Room with dedicated work station",
    },
  ],
};

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const roomsContainer = document.getElementById("rooms-container");
  const filterAllBtn = document.getElementById("filter-all");
  const filterAvailableBtn = document.getElementById("filter-available");
  const filterSuitesBtn = document.getElementById("filter-suites");

  // Display rooms function
  function displayRooms(rooms) {
    roomsContainer.innerHTML = "";

    if (rooms.length === 0) {
      roomsContainer.innerHTML =
        '<p class="no-rooms">No rooms found matching your criteria.</p>';
      return;
    }

    rooms.forEach((room) => {
      const roomCard = document.createElement("div");
      roomCard.className = "room-card";

      roomCard.innerHTML = `
                <div class="room-image-container">
                    <img src="${room.image}" alt="${
        room.imageAlt
      }" class="room-image" loading="lazy">
                    <div class="image-overlay">
                        <span class="status ${
                          room.available ? "available" : "occupied"
                        }">
                            ${room.available ? "Available" : "Occupied"}
                        </span>
                    </div>
                </div>
                <div class="room-content">
                    <div class="room-header">
                        <span class="room-number">Room ${room.id}</span>
                        <h2 class="room-name">${room.name}</h2>
                        <span class="room-type">${room.type}</span>
                    </div>
                    <div class="room-details">
                        <p><strong>Floor:</strong> ${room.floor}</p>
                        <p><strong>Capacity:</strong> ${
                          room.capacity
                        } guests</p>
                        <p><strong>Price:</strong> <span class="price">$${
                          room.price
                        }/night</span></p>
                        <p><strong>Rating:</strong> <span class="rating">${"★".repeat(
                          Math.floor(room.rating)
                        )}${room.rating % 1 !== 0 ? "☆" : ""} ${
        room.rating
      }/5</span></p>
                    </div>
                    <div class="amenities">
                        <div class="amenities-title">Amenities:</div>
                        <div class="amenities-list">
                            ${room.amenities
                              .map(
                                (amenity) =>
                                  `<span class="amenity">${amenity}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;

      roomsContainer.appendChild(roomCard);
    });
  }

  // Filter functions
  function showAllRooms() {
    displayRooms(roomsData.rooms);
  }

  function showAvailableRooms() {
    const availableRooms = roomsData.rooms.filter((room) => room.available);
    displayRooms(availableRooms);
  }

  function showSuitesOnly() {
    const suiteRooms = roomsData.rooms.filter((room) => room.type === "Suite");
    displayRooms(suiteRooms);
  }

  // Set up event listeners
  filterAllBtn.addEventListener("click", showAllRooms);
  filterAvailableBtn.addEventListener("click", showAvailableRooms);
  filterSuitesBtn.addEventListener("click", showSuitesOnly);

  // Show all rooms by default when page loads
  showAllRooms();
});
