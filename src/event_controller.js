// CEMS Event Controller - Core Registration & Capacity
class EventController {
    constructor(eventId, capacity) {
        this.eventId = eventId;
        this.capacity = capacity;
        this.registeredCount = 0;
    }

    checkCapacity() {
        return this.registeredCount < this.capacity;
    }
}

module.exports = EventController;

function validateStudentEligibility(studentId) {
    return studentId && studentId.startsWith("1500");
}
