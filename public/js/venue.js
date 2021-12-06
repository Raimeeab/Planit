 loadVenues = async (venue) => {
    const venueId = document.querySelector('.venue-id')
    const venueName = document.querySelector('.venue-name');
    const venueImage = document.querySelector('.venue-img')
    const venueDesc = document.querySelector('.event-desc');

    const response = await fetch(`/venues`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/venues');
    } else {
        alert('Failed to display venues')
    };
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
    });

    if (response.ok) {
        document.location.replace('/venues/:id');
    } else {
        alert('Failed to display venues/:id')
    };
    
    console.log(response);
};

