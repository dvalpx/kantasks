<template>
  <div>
		<div class="card">
			<h5 class="card-header text-center">{{ listTitle }}</h5>
			<div class="card-body">

        <p v-if="!taskItems.length" class="text-center text-muted mt-2">
          This list is empty..
          <br>
          Add a new task or drag one here
        </p>
        
				<draggable
					class="list-group"
					:list="taskItems"
					group="tasks"
					@change="log"
					itemKey="name" 
				>
					<template #item="{ element, index }">
						<div class="list-group-item" :class="[setTaskBackground(element.priority)]">
							<p>{{ element.content }}</p>
							<hr>
							<div>
								<button @click="showEditModal(element.id)" class="btn btn-primary btn-sm me-2">
									<font-awesome-icon icon="fa-solid fa-file-lines" class="bi d-block mx-auto mb-1" />
								</button>
								<button class="btn btn-danger btn-sm" @click="showDeleteModal(element.id)">
									<font-awesome-icon icon="fa-solid fa-trash-can" class="bi d-block mx-auto mb-1" />
								</button>
							</div>
						</div>
					</template>
				</draggable>
			</div>
		</div>

		<div class="mt-2">
			<button @click="addTask()" class="btn btn-primary w-100 mt-2">
				<font-awesome-icon icon="fa-solid fa-plus" class="bi d-block mx-auto mb-1" />
			</button>
		</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { useTasksStore } from '@/stores/tasksStore'

export default {
	data() {
    return {
			taskBackgrounds: [
        { id: 1, color: 'primary' },
        { id: 2, color: 'secondary' },
        { id: 3, color: 'success' }
      ]
		}
  },
  setup() {
    const store = useTasksStore()

    return {
      store
    }
  },
	props: ['listName', 'listTitle'],
  components: {
    draggable
  },
	computed: {
		taskItems() {
			return this.store[this.listName]
		},
		listTitle() {
			return this.listTitle
		}
	},
	methods: {
    setTaskBackground(priority) {
      var backgroundObject = this.taskBackgrounds.find(x => x.id === priority)
      return 'list-group-item-' + backgroundObject.color
    },
		log(e) {
			console.log(e)
		},
    showEditModal(taskId) {
      this.store.selectedTask = this.taskItems.find(x => x.id === taskId)
      this.store.showEditModal = true
    },
		showDeleteModal(taskId) {
			this.store.showDeleteModal = true
      this.store.taskToDelete = {
        task_id: taskId,
        list_name: this.listName
      }
		},
    addTask() {
      this.store.showAddTaskModal = true
    }
  }
}
</script>

<style>

</style>