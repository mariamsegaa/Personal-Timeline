const form = document.getElementById('eventForm');
const timelineContainer = document.querySelector('.Output'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('eventTitle').value;
    const description = document.getElementById('eventDescription').value;
    const date = document.getElementById('eventDate').value;

    const eventCard = document.createElement('div');
    eventCard.classList.add('card');

    const eventContent = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
    `;
    eventCard.innerHTML = eventContent;
    timelineContainer.appendChild(eventCard);
    
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDescription').value = '';
    document.getElementById('eventDate').value = '';
});


const reset = document.getElementById('reset');
reset.onclick = () => confirm("Clear all events?") && (
    events = [],
    timelineContainer.innerHTML = '',
    localStorage.removeItem('timelineEvents')
);

const darkToggle = document.getElementById('toggle');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

