 loadVenues = async (venue) => {
    const venueId = document.querySelector('.venue-id')
    const venueName = document.querySelector('.venue-name');
    const venueImage = document.querySelector('.venue-img')
    // const venueCap = document.querySelector('.venue-cap');
    const venueDesc = document.querySelector('.event-desc');
    // const venueNo = document.querySelector('.venue-no');
    // const venueEmail = document.querySelector('.venue-email');
    // const venuePrice = document.querySelector('.venue-price');

    const response = await fetch(`/venues`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // if (response.ok) {
    //     document.location.replace('/venues');
    // } else {
    //     alert('Failed to display venues')
    // };
};

loadVenueById = async (venue) => {
    const venueName = document.querySelector('.venue-name');
    const venueImage = document.querySelector('.venue-img')
    const venueDesc = document.querySelector('.event-desc');
    const venueCap = document.querySelector('.venue-cap');
    const venueNo = document.querySelector('.venue-no');
    const venueEmail = document.querySelector('.venue-email');
    const venuePrice = document.querySelector('.venue-price');

    const response = await fetch ('/venues/:id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
    console.log(response);
};

// document
//     .querySelector('#nav-venues')
//     .addEventListener('click', loadVenues);

// document
//     .querySelector('.venue-id')
//     .addEventListener('click', loadVenueById);


// If event venue_id = null, then ignore the cost of venue 
// && the event should always get all the vendors that belong to this event 
// Only conditionally does it get the cost from the venue 

// Front end - when you have all venues rendered (cost information will be provided)
// Conditionally state does the user want to include venues or not and if so, 
// include the cost of venues with vendors as a whole 