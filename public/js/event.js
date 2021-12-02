const loadEvent = async (event) => {
    // {"id":2,"name":"Koren's Hens Party","type":"Hens","budget":"1000.00","attendees":30,"date":"4/12/2021","venue_id":null,"user_id":1}
    const eventName = document.querySelector('.event-name');
    const eventType = document.querySelector('.event-type');
    const eventDate = document.querySelector('.event-date');
    const eventBudget = document.querySelector('.event-budget');
    const eventGuests = document.querySelector('.event-guests');

    const response = await fetch(`/events/:id`, {
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
}

