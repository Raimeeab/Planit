// const moment = require('moment');

const loadEvent = async (event) => {

    try {  
         // {"id":2,"name":"Koren's Hens Party","type":"Hens","budget":"1000.00","attendees":30,"date":"4/12/2021","venue_id":null,"user_id":1}
        const eventName = document.querySelector('.event-name');
        const eventType = document.querySelector('.event-type');
        const eventDate = document.querySelector('.event-date');
        const eventBudget = document.querySelector('.event-budget');
        const eventGuests = document.querySelector('.event-guests');
        const eventVenue = document.querySelector('.event-venue');
        const userId = document.querySelector('.user-id')

        const response = await fetch(`/events/:id`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        // const eventCountdown = async () => {
        //     try {
        //         
        //     } catch (err) {
        //         console.log('error with countdown:', err);
        //     }
        // };

            if (response.ok) {
              document.location.replace('/events');
            } else {
              alert('Failed to create project');
            }
          

    } catch (err){
        res.status(500).json(err);
        console.log('error with displaying content:',err);
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