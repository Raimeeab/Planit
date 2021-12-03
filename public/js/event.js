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


