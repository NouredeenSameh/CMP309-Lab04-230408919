class Task {
  constructor(id, title, completed = false) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    return new Task(this.id, this.title, !this.completed);
  }
}

class TaskManager {
  constructor(tasks = []) {
    this.tasks = Object.freeze([...tasks]);
  }

  setTasks(newTasks) {
    return new TaskManager([...newTasks]);
  }

  addTask(task) {
    return new TaskManager([...this.tasks, task]);
  }

  removeTask(taskId) {
    return new TaskManager(this.tasks.filter(t => t.id !== taskId));
  }

  toggleTask(taskId) {
    const updated = this.tasks.map(t => {
      if (t.id === taskId) {
        return t.toggle();
      }
      return t;
    });
    return new TaskManager(updated);
  }
}