<!-- Include Google Maps JavaScript API -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"></script>

<!-- Address Input Field -->
<input id="address_input" type="text" placeholder="Enter your address" style="width: 100%; padding: 10px; border-radius: 5px;">

<!-- List to display suggestions (optional) -->
<ul id="address_suggestions" style="list-style-type: none; padding: 0;"></ul>

<script>
// Initialize Google Places Autocomplete
function initAutocomplete() {
    const input = document.getElementById('address_input');
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.setFields(['address_components', 'formatted_address']);

    // Handle selection of an address
    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        
        if (!place.geometry) {
            console.error("No details available for input: '" + place.name + "'");
            return;
        }

        // Fill in address fields with selected data
        document.getElementById('address_input').value = place.formatted_address;

        // Optionally, split address components
        fillAddressFields(place.address_components);
    });
}

function fillAddressFields(addressComponents) {
    // Loop through address components and extract the relevant information
    addressComponents.forEach(component => {
        if (component.types.includes('street_number')) {
            // Do something with street number (if needed)
        }
        if (component.types.includes('route')) {
            // Do something with street name (if needed)
        }
        if (component.types.includes('locality')) {
            // Fill in city (if needed)
        }
        if (component.types.includes('administrative_area_level_1')) {
            // Fill in state (if needed)
        }
        if (component.types.includes('postal_code')) {
            // Fill in postal code (if needed)
        }
    });
}

// Load the autocomplete functionality when the page is ready
google.maps.event.addDomListener(window, 'load', initAutocomplete);
</script>
