<template>
  <div>
    <div class="row mt-3">
      <div class="col-3">
        <TaskList list-name="backlog" list-title="Backlog" />
      </div>
      <div class="col-3">
        <TaskList list-name="ready" list-title="Ready" />
      </div>
    </div>

    <Dialog 
      header="Edit task" 
      v-model:visible="tasksStore.showEditModal" 
      :breakpoints="{'960px': '75vw', '640px': '90vw'}" 
      :style="{width: '35vw'}" 
      :modal="true"
    >
      <textarea :value="tasksStore.selectedTask.content" class="form-control mt-1" rows="4"></textarea>

      <div class="mb-3 mt-3">
        <label for="priority" class="form-label">Priority</label>
        <select name="" id="" class="form-select">
          <option value="3">Normal</option>
          <option value="2">Medium</option>
          <option value="1">High</option>
        </select>
      </div>

      <div>
        <button class="btn btn-primary w-100 mt-2">
          Save
        </button>
      </div>
    </Dialog>

    <Dialog 
      header="Delete task" 
      v-model:visible="tasksStore.showDeleteModal" 
      :style="{width: '350px'}" 
      :modal="true"
    >
      <div class="confirmation-content">
        <span>Are you sure you want to delete this task?</span>
      </div>
      
      <template #footer>
        <button class="btn btn-primary" @click="tasksStore.showDeleteModal = false">Cancel</button>
        <button class="btn btn-danger" @click="tasksStore.deleteTask()">Delete</button>
      </template>
    </Dialog>

    <Dialog 
      header="Add new task" 
      v-model:visible="tasksStore.showAddTaskModal" 
      :breakpoints="{'960px': '75vw', '640px': '90vw'}" 
      :style="{width: '35vw'}" 
      :modal="true"
    >
      <textarea class="form-control mt-1" rows="4"></textarea>

      <div class="mb-3 mt-3">
        <label for="priority" class="form-label">Priority</label>
        <select name="" id="" class="form-select">
          <option value="3">Normal</option>
          <option value="2">Medium</option>
          <option value="1">High</option>
        </select>
      </div>

      <div>
        <button class="btn btn-primary w-100 mt-2">
          Save
        </button>
      </div>
    </Dialog>

  </div>
</template>

<script>
import TaskList from '@/components/TaskList'
import { useMainStore } from '@/stores/mainStore'
import { useTasksStore } from '@/stores/tasksStore'
import Dialog from 'primevue/dialog/sfc'

export default {
  data() {
    return {
      displayModal: true
    }
  },
  setup() {
    const store = useMainStore()
    const tasksStore = useTasksStore()

    return {
      store,
      tasksStore
    }
  },
  components: {
    TaskList,
    Dialog
  },
  methods: {}
}
</script>
