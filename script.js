const form = document.getElementById('registration-form');
const eventSelect = document.getElementById('event');
const nameInput = document.getElementById('name');
const registeredUsersDiv = document.getElementById('registered-users');
const eventUsersLists = {
    'Trekking': document.getElementById('Trekking'),
    'Rockclimbing': document.getElementById('Rockclimbing'),
    'Hiking': document.getElementById('Hiking')
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = eventSelect.value;
    const userName = nameInput.value.trim();
    if (eventName && userName) {
        const li = document.createElement('li');
        li.textContent = userName;
        eventUsersLists[eventName].appendChild(li);
        nameInput.value = '';
    }
});