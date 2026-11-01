// Event Listing Filter Service
function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
}

module.exports = { filterEventsByCategory };
