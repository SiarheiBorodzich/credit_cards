class BaseModel {
  constructor() {
    this.listeners = new Map();
  }

  subscribe(eventName, callback) {
    this.listeners.has(eventName) || this.listeners.set(eventName, []);
    this.listeners.get(eventName).push(callback);
  }

  emit(eventName, ...args) {
    if (!eventName) {
      throw new Error('Event name is required');
    }

    const listeners = this.listeners.get(eventName);

    if (!(listeners && listeners.length)) {
      return;
    }

    listeners.forEach(listener => listener(...args));
  }
}

export default BaseModel;
