// POST event details to db
const postNewEvent = async (event) => {
  const name = document.querySelector('#new-event-name').value.trim();
  const type = document.querySelector('#event-type').value;
  const budget = document.querySelector('#new-event-budget').value.trim();
  const attendees = document.querySelector('#new-event-guests').value.trim();
  const date = document.querySelector('#new-event-date').value.trim();
  const venue = document.querySelector("#venue-true").checked;


  event.preventDefault();
 // if (name && type && attendees && budget && date) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, type, budget, attendees, date }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const newEvent = await response.json();

    if (response.ok) {
      document.location.replace(`/events/${newEvent.id}`);
    } else {
      alert('Failed to create event');
    };
}

document
  .querySelector('#create-event-form')
  .addEventListener('submit', postNewEvent);
// suitableVendorVenue,

// const newFormHandler = async (event) => {
//   event.preventDefault();
//   const name = document.querySelector('#new-event-name').value.trim();
//   const type = document.querySelector('#event-type').value.trim();
//   const budget = document.querySelector('#new-event-budget').value.trim();
//   const attendees = document.querySelector('#new-event-guests').value.trim();
//   const date = document.querySelector('#new-event-date').value.trim();

//   // if (name && type && attendees && budget && date) {
//     const response = await fetch(`/api/events`, {
//       method: 'POST',
//       body: JSON.stringify({ name, type, budget, attendees, date }),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
//     const newEvent = await response.json();
//     if (response.ok) {
//       document.location.replace(`/events/${newEvent.id}`);
//     } else {
//       alert('Failed to create event');
//     };

//     const emailsend = await fetch('/api/create', {
//       method: 'POST',
//       body: JSON.stringify({ name, type, budget, attendees, date }),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
//     // if (response.ok) {
//     //   document.location.replace(`/events/${newEvent.id}`);
//     // } else {
//     //   alert('Failed to create event');
//     // };
// };

// const viewEvent = async (event) => {
//   const response = await fetch(`api/events/:id`, {
//     method: 'GET',
//     // body: JSON.stringify({ name, type, budget, attendees, date }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// // app.get('/profile', async (req, res) => {
// //   const Eventdata = await Event.findByPk(req.params.id)
// //   const event = Eventdata.get({ plain: true });
//   if (response.ok) {
//     document.location.replace(`/events`);
//   } else {
//     alert('Failed to view event');
//   };
// };

// document
//   .querySelector('.new-event-form')
//   .addEventListener('submit', newFormHandler);

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete event');
    }
  }
};

document
  .querySelectorAll('.delete-event-btn') 
  .forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });
  
// If event venue_id = null, then ignore the cost of venue 
// && the event should always get all the vendors that belong to this event 
// Only conditionally does it get the cost from the venue 

// Front end - when you have all venues rendered (cost information will be provided)
// Conditionally state does the user want to include venues or not and if so, 
// include the cost of venues with vendors as a whole 


// // ADD EVENT CARD/ ADD EVENT FORM ----------------------------------------------------------------------
// document.querySelector('#create-event-form').addEventListener('submit', newFormHandler)

const toggle = document.querySelector('.add-toggle-content');
 
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

// GET route for the filtered info by buget 
// const suitableVendorVenue = async (vendors) => {
//   vendors.preventDefault();
//   const selectedchoices = {};
  
//   // Concatinate the objects - in order to pass one object into the handlebar section 
//   const fetchVendor = await fetch (`/api/vendors/budget/${eventBudget}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
  
//   fetchVendor.push(selectedchoices);
  
//   console.log(fetchVendor)
  
//   if (venue) {
//     const fetchVenue = await fetch (`/api/venues/budget/${eventBudget}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
    
//     const fetchVenueCap = await fetch (`/api/venues/capacity/${eventCapacity}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
    
//     fetchVenue.push(selectedchoices);
//     fetchVenueCap.push(selectedchoices);
//     console.log(fetchVenue);
//     console.log(fetchVenueCap);

//   }; 

// }; 


