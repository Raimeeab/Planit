const eventName = document.querySelector('#event-name').value.trim();
const eventType = document.querySelector('#event-type');
const eventBudget = document.querySelector('#event-budget').value.trim();
const attendees = document.querySelector('#event-guest').value.trim();

// Used to dictate if event needs venue
const venueYes = document.querySelector('#venue-yes');
const venueNo = document.querySelector('#venue-no');

// Used to display venue details (if selected)
// const eventVenue = 

const newFormHandler = async (event) => {
  event.preventDefault();


  if (eventName && eventBudget && attendees) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ eventName, eventBudget, attendees }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create event');
    };
  };
};

const viewEvent = async (event) => {
  const response = await fetch(`/api/events/:id`, {
    method: 'GET',
    body: JSON.stringify({ eventName, eventType, eventBuget, attendees, eventVenue }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/profile/events/:id');
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

document
  .querySelector('.new-event-form')
  .addEventListener('submit', newFormHandler);


document
  .querySelectorAll('.delete-event-btn') 
  .forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });
  

// ADD EVENT CARD/ ADD EVENT FORM ----------------------------------------------------------------------
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