const loadVenues = async (venue) => {
    const name = document.querySelector('#venue-name').value;
    const venueCap = document.querySelector('venue-cap').value;
    const venueDesc = document.querySelector('#event-desc').value;
    const venueNo = document.querySelector('venue-no').value;
    const venueEmail = document.querySelector('venue-email').value;

    const response = await fetch(`/api/venues`, {
        method: 'GET',
        body: JSON.stringify({ name, venueCap, venueDesc, venueNo, venueEmail}),
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

loadVenues();