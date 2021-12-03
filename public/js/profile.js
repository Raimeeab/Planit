

// Used to display venue details (if selected)
// const eventVenue = 

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#new-event-name').value.trim();
const type = document.querySelector('#new-event-type').value.trim();
const budget = document.querySelector('#new-event-budget').value.trim();
const attendees = document.querySelector('#new-event-guests').value.trim();
const date = document.querySelector('#new-event-date').value.trim();
// Used to dictate if event needs venue
const venueYes = document.querySelector('.venue-yes');
const venueNo = document.querySelector('.venue-no');

console.log(date)
  // if (name && type && attendees && budget && date) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, type, budget, attendees, date }),
      headers: {
        'Content-Type': 'application/json',
      }
    
    })
    console.log('added')
    console.log(date)
    console.log(type)
    console.log(event)
    // viewEvent();
    viewEvent()
  };
//     });

//     if (response.ok) {
//       document.location.replace('/homepage');
//     } else {
//       alert('Failed to create event');
//     };
//   };
// };

const viewEvent = async (event) => {
  const response = await fetch(`api/events/:id`, {
    method: 'GET',
    // body: JSON.stringify({ name, type, budget, attendees, date }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
// app.get('/profile', async (req, res) => {
//   const Eventdata = await Event.findByPk(req.params.id)
//   const event = Eventdata.get({ plain: true });
  if (response.ok) {
    document.location.replace(`/events/`);
  } else {
    alert('Failed to view event');
  };
  

};



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

// document
//   .querySelector('.new-event-form')
//   .addEventListener('submit', newFormHandler);


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
document.querySelector('.submitbutton').addEventListener('click', newFormHandler)

const toggle = document.querySelector('.add-event-toggle');
 
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

