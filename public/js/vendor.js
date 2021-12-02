const loadVendors = async (venue) => {
    const vendorType = document.querySelector('.vendor-type');
    const vendorName = document.querySelector('.vendor-name');
    const vendorDesc = document.querySelector('.vendor-desc');
    // const vendorNo = document.querySelector('.vendor-no');
    // const vendorEmail = document.querySelector('.vendor-email');
    // const vendorPrice = document.querySelector('.vendor-price');

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

const loadVendorById = async (vendor) => {
    const vendorName = document.querySelector('.vendor-name');
    const vendorDesc = document.querySelector('.event-desc');
    const vendorNo = document.querySelector('.vendor-no');
    const vendorEmail = document.querySelector('.vendor-email');
    const vendorPrice = document.querySelector('.vendor-price');

    const response = await fetch ('/venues/:id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
}
document
    .querySelector('#nav-vendors')
    .addEventListener('click', loadVendors);

document
    .querySelector('.vendor-id')
    .addEventListener('click', loadVendorById);