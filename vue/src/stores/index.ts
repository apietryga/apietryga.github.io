import { defineStore } from 'pinia'
import data from './data'

export const useDataStore = defineStore('data', () => {
  return data
})