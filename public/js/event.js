const loadEvent = async (event) => {
  try {  
      const eventName = document.querySelector('.event-name');
      const eventType = document.querySelector('.event-type');
      const eventDate = document.querySelector('.event-date');
      const eventBudget = document.querySelector('.event-budget');
      const eventGuests = document.querySelector('.event-guests');
      const venue = document.querySelector('.venue-yes');
      const userId = document.querySelector('.user-id')

      const response = await fetch(`/events/:id`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      const viewEvent = await response.json();
      res.status(200);

  } catch (err){
      res.status(500).json(err);
      console.log('error with displaying content:', err);
  };

};

const addVenue = async (venue) => {
  venue.preventDefault();
  const addVenue = document.querySelector('#add-venue');
  const eventId = addVenue.getAttribute('data-eventid');
  const venueSelect = document.querySelector('#venue-id');
  const venueId = venueSelect.value;

  const response = await fetch (`api/events/${eventId}/venues/${venueId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
  });

  console.log(response);
};

document.getElementById('add-venue').addEventListener('submit', addVenue) 


// const addVendor = async (vendor) => {
//    const response = await fetch (`api/events/${}/vendors/${}`)
// };









