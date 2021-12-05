const vendorsByBudget = async (vendor) => {

    const response = await fetch(`api/vendors/budget/${vendor.budget}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
    
const venueByBudget = async (venue) => {

    const response = await fetch (`api/venues/budget/${venue.budget}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    });

};

const venueByCapacity = async (venue) => {

    const capacity = await fetch (`api/venues/capacity/${venue.capacity}`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
    },
    });
};


module.exports = { vendorsByBudget, venueByCapacity, venueByBudget}