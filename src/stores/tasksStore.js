import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    backlog: [
      { id: 1, content: "Write code", priority: 1 },
      { id: 2, content: "Drink coffee", priority: 2 },
      { id: 3, content: "Feed the cat", priority: 3 }
    ],
    ready: [
      { id: 1, content: "Clear desk", priority: 1 },
      { id: 2, content: "Eat lunch", priority: 2 }
    ],
    inProgress: [],
    inReview: [],
    completed: [],
    showEditModal: false,
    showDeleteModal: false,
    selectedTask: {},
    taskToDelete: {},
    showAddTaskModal: false
  }),
  actions: {
    deleteTask() {
      var list = this[this.taskToDelete.list_name]
      var id = this.taskToDelete.task_id
      this[this.taskToDelete.list_name] = list.filter(obj => obj.id !== id)
      this.showDeleteModal = false
    },
  }
})