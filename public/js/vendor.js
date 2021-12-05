const loadVendors = async (vendor) => {
    const vendorType = document.querySelector('.vendor-type');
    const vendorName = document.querySelector('.vendor-name');
    const vendorDesc = document.querySelector('.vendor-desc');
    const vendorImage = document.querySelector('.vendor-img');

    const response = await fetch(`/vendors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/vendors');
    } else {
        alert('Failed to display vendors')
    };
};

const loadVendorById = async (vendor) => {
    const vendorName = document.querySelector('.vendor-name');
    const vendorDesc = document.querySelector('.event-desc');
    const vendorNo = document.querySelector('.vendor-no');
    const vendorEmail = document.querySelector('.vendor-email');
    const vendorPrice = document.querySelector('.vendor-price');
    const vendorImage = document.querySelector('.vendor-img');

    const response = await fetch ('/vendors/:id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/vendors/:id');
    } else {
        alert('Failed to display vendors')
    };
    
};













