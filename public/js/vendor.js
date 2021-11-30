// const loadVendors = async (venue) => {
//     const vendorName = document.querySelector('.vendor-name');
//     const vendorDesc = document.querySelector('#vendor-desc');
//     const vendorNo = document.querySelector('#vendor-no');
//     const vendorEmail = document.querySelector('#vendor-email');
//     const vendorPrice = document.querySelector('#vendor-price');

//     const response = await fetch(`/venues`, {
//         method: 'GET',
//         body: JSON.stringify({ vendorName, vendorDesc, vendorNo, vendorEmail}),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.replace('/venues');
//     } else {
//         alert('Failed to display venues')
//     };
// };

// loadVenues();