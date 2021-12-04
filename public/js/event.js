// const moment = require('moment');

const loadEvent = async (event) => {
  try {  
      const eventName = document.querySelector('.event-name');
      const eventType = document.querySelector('.event-type');
      const eventDate = document.querySelector('.event-date');
      const eventBudget = document.querySelector('.event-budget');
      const eventGuests = document.querySelector('.event-guests');
      const eventVenue = document.querySelector('.event-venue');
      const userId = document.querySelector('.user-id')

    //   const response = await fetch(`/events/:id`, {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json',
    //       },
    //   });

      const viewEvent = await response.json();
      
      const vendorsByBudget = async (vendor) => {
    
        const response = await fetch(`/vendors/budget/${event.budget}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
      };
      
      // TODO: figure out why this isn't working 
      const venueByBudget = async (venue) => {
        
        const response = await fetch (`/venues/budget/${venue.budget}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

      };

      const venueByCapacity = async (venue) => {

        const capacity = await fetch (`/venues/capacity/${venue.capacity}`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
          },
        });
      };


    if (response.ok) {
      document.location.replace('/events');
    } else {
      alert('Failed to create event');
    }

  } catch (err){
      res.status(500).json(err);
      console.log('error with displaying content:', err);
  };

};

const availableVenues = async () => {
    try { 
        const venueId = document.querySelector('.venue-id')
        const venueName = document.querySelector('.venue-name');
        const venueImage = document.querySelector('.venue-img')
        const venueCap = document.querySelector('.venue-cap');
        const venueDesc = document.querySelector('.event-desc');
        const venueNo = document.querySelector('.venue-no');
        const venueEmail = document.querySelector('.venue-email');
        const venuePrice = document.querySelector('.venue-price');

        const res = await fetch('/venues', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const viewVenues = await res.json()


    } catch (err){
      console.log(err);
      res.status(500).json(err);
    }
}


const showVendors = () => {
  try {

  } catch (err){
    console.log(err);
  }
}
// NEWLY CREATED EVENT CARD DETAILS + ADD VENUE + ADD VENDOR ----------------------------------------------------------------------
// HIDE CARDS/SHOW VENUES 
const toggle = document.querySelector('.add-venue-toggle');
 
toggle.addEventListener('click', (submit) =>{
  submit.preventDefault();
  console.log('clicked!')
  const contents = document.querySelectorAll('.toggle-content')
  console.log(contents)
  contents.forEach(content => {
    console.log(content)
    const ariaHidden = content.getAttribute('aria-hidden')

    console.log(content)
    content.setAttribute('aria-hidden', ariaHidden === 'true' ? 'false' : 'true') 
  })

});  

// HIDE CARDS/SHOW VENDORS
const toggle2 = document.querySelector('.add-vendor-toggle');

toggle2.addEventListener('click', (submit) =>{
    submit.preventDefault();
    console.log('clicked!')
    const contents = document.querySelectorAll('.toggle-content')
    console.log(contents)
    contents.forEach(content => {
      console.log(content)
      const ariaHidden = content.getAttribute('aria-hidden')
  
      console.log(content)
      content.setAttribute('aria-hidden', ariaHidden === 'true' ? 'false' : 'true') 
    })
  
  });  