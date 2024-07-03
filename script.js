document.getElementById('address').addEventListener('input', async function() {
    const query = this.value;
    if (query.length < 3) {
        document.getElementById('suggestions').innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${query}`);
        const suggestions = await response.json();

        // Debugging: Log the response to check if it contains results
        console.log('API response:', suggestions);

        if (suggestions.length === 0) {
            document.getElementById('suggestions').innerHTML = '<div>No results found</div>';
        } else {
            const suggestionsList = suggestions.map(item => 
                `<div class="suggestion-item" data-address="${item.display_name}">${item.display_name}</div>`
            ).join('');
            document.getElementById('suggestions').innerHTML = suggestionsList;
        }
    } catch (error) {
        console.error('Error fetching address suggestions:', error);
    }
});

document.getElementById('suggestions').addEventListener('click', function(e) {
    if (e.target.classList.contains('suggestion-item')) {
        document.getElementById('address').value = e.target.dataset.address;
        this.innerHTML = '';
    }
});
