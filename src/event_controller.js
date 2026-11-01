// CEMS Event Controller - Core Registration & Capacity
class EventController {
    constructor(eventId, capacity, maxWaitlist = 20) {
        this.eventId = eventId;
        this.capacity = capacity;
        this.maxWaitlist = maxWaitlist;
        this.registeredCount = 0;
    }

    checkCapacity() {
        return this.registeredCount < this.capacity;
    }
}

module.exports = EventController;
