// CEMS Event Controller - Core Registration & Capacity
const { filterEventsByCategory } = require('./event_list');

class EventController {
    constructor(eventId, capacity, category) {
        this.eventId = eventId;
        this.capacity = capacity;
        this.category = category || "General";
        this.registeredCount = 0;
    }

    checkCapacity() {
        return this.registeredCount < this.capacity;
    }
}

module.exports = EventController;
