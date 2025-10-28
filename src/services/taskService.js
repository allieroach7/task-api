import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

// NEW: Get task by ID service
export async function getTaskById(id) {
  return taskRepository.findById(id);
}