let ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 10, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" },
    { id: 4, name: "chapati", restaurant: "kibandaski", image: "chapati.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 5, name: "garlic", restaurant: "Sunrise", image: "garlic.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 6, name: "kachumbari", restaurant: "Hillton", image: "kachumbari.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 7, name: "spagheti", restaurant: "Mitrork", image: "spagheti.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 8, name: "sandwitch", restaurant: "EastCoust", image: "sandwitch.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 9, name: "beetroot", restaurant: "kistonpark", image: "beetroot.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 10, name: "kuku", restaurant: "kistonpark", image: "kuku.jpg", rating: 4, comment: "Very flavorful!" },






];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing content
    
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailDiv = document.getElementById('ramen-detail');
    detailDiv.querySelector('.detail-image').src = ramen.image || '';
    detailDiv.querySelector('.name').textContent = ramen.name || '';
    detailDiv.querySelector('.restaurant').textContent = ramen.restaurant || '';
    detailDiv.querySelector('.rating').textContent = ramen.rating ? `Rating: ${ramen.rating}` : '';
    detailDiv.querySelector('.comment').textContent = ramen.comment || '';
    
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.style.display = 'block';
    deleteBtn.onclick = () => deleteRamen(ramen.id);
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: parseInt(form.rating.value) || undefined,
            comment: form.comment.value || undefined
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function deleteRamen(id) {
    ramens = ramens.filter(ramen => ramen.id !== id);
    displayRamens();
    // Clear details if deleted ramen was being displayed
    const detailDiv = document.getElementById('ramen-detail');
    if (!ramens.length) {
        detailDiv.querySelector('.detail-image').src = '';
        detailDiv.querySelector('.name').textContent = '';
        detailDiv.querySelector('.restaurant').textContent = '';
        detailDiv.querySelector('.rating').textContent = '';
        detailDiv.querySelector('.comment').textContent = '';
        document.getElementById('delete-btn').style.display = 'none';
    } else {
        handleClick(ramens[0]); // Show first ramen
    }
}

function main() {
    displayRamens();
    addSubmitListener();
    
    // Display first ramen automatically (optional requirement)
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

// Wait for DOM to load before running main
document.addEventListener('DOMContentLoaded', main);