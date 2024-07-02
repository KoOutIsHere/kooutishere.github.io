document.getElementById('address').addEventListener('input', async function() {
    const query = this.value;
    if (query.length < 3) {
        document.getElementById('suggestions').innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=bakery+in+berlin+wedding&format=jsonv2&limit=1`);
        const suggestions = await response.json();
        const suggestionsList = suggestions.map(item => 
            `<div class="suggestion-item" data-address="${item.display_name}">${item.display_name}</div>`
        ).join('');
        document.getElementById('suggestions').innerHTML = suggestionsList;
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
