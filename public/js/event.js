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
      res.status(200)
      // const vendorsByBudget = async (vendor) => {
    
      //   const response = await fetch(`/vendors/budget/${event.budget}`, {
      //       method: 'GET',
      //       headers: {
      //           'Content-Type': 'application/json',
      //       },
      //   });
      // };
      
      // const venueByBudget = async (venue) => {
        
      //   const response = await fetch (`/venues/budget/${venue.budget}`, {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });

      // };

      // const venueByCapacity = async (venue) => {

      //   const capacity = await fetch (`/venues/capacity/${venue.capacity}`, {
      //     method: 'GET', 
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });
      // };


    // if (response.ok) {
    //   document.location.replace('/events');
    // } else {
    //   alert('Failed to create event');
    // }

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
const toggle = document.querySelector('.add-vendor-toggle');

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

  // VENUE INFORMATION -------------------------------------------------------
  loadVenues = async (venue) => {
    const venueId = document.querySelector('.venue-id')
    const venueName = document.querySelector('.venue-name');
    const venueImage = document.querySelector('.venue-img')
    const venueCap = document.querySelector('.venue-cap');
    const venueDesc = document.querySelector('.event-desc');
    const venueNo = document.querySelector('.venue-no');
    const venueEmail = document.querySelector('.venue-email');
    const venuePrice = document.querySelector('.venue-price');

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

// VENDOR INFORMATION ----------------------------------------------------------------------------
const loadVendors = async (vendor) => {
  const vendorType = document.querySelector('.vendor-type');
  const vendorName = document.querySelector('.vendor-name');
  const vendorDesc = document.querySelector('.vendor-desc');
  // const vendorNo = document.querySelector('.vendor-no');
  // const vendorEmail = document.querySelector('.vendor-email');
  // const vendorPrice = document.querySelector('.vendor-price');
  const VendorImage = document.querySelector('.vendor-img');

  const response = await fetch(`/vendors`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  });

  // if (response.ok) {
  //     document.location.replace('/vendors');
  // } else {
  //     alert('Failed to display vendors')
  // };
};

const loadVendorById = async (vendor) => {
  const vendorName = document.querySelector('.vendor-name');
  const vendorDesc = document.querySelector('.event-desc');
  const vendorNo = document.querySelector('.vendor-no');
  const vendorEmail = document.querySelector('.vendor-email');
  const vendorPrice = document.querySelector('.vendor-price');
  const VendorImage = document.querySelector('.vendor-img');

  const response = await fetch ('/vendors/:id', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  
}

// THIS IS ADDING THE EVENTLISTENER TO THE VENUE ADD BUTTON

document.getElementById('add-venue').addEventListener('submit', addVenue) 

//   let eventID = document.getElementById('eventID').textContent

//   const response = await put (`/venue/${eventID}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       venue_id:0
//     }),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })


const addVenue = async (venue) => {
  venue.preventDefault()
  const addVenue = document.querySelector('#add-venue');

  const response = await fetch ('/events/:id', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
  })

  console.log(response);
}








