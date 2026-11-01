// CEMS Event Controller - Core Registration & Capacity
// Resolved Conflict: Combined category filtering with waitlist support
const { filterEventsByCategory } = require('./event_list');

class EventController {
    constructor(eventId, capacity, category = "General", maxWaitlist = 20) {
        this.eventId = eventId;
        this.capacity = capacity;
        this.category = category;
        this.maxWaitlist = maxWaitlist;
        this.registeredCount = 0;
    }

    checkCapacity() {
        return this.registeredCount < this.capacity;
    }
}

module.exports = EventController;
