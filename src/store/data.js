import { defineStore } from 'pinia'
import { db } from '../firebase'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'

export const useDataStore = defineStore('data', {
  state: () => ({
    studySessions: [],
    careerPaths: [],
    achievements: [],
    error: null
  }),
  actions: {
    async fetchStudySessions() {
      try {
        const querySnapshot = await getDocs(collection(db, 'studySessions'))
        this.studySessions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      } catch (error) {
        this.error = error.message
      }
    },
    async addStudySession(session) {
      try {
        await addDoc(collection(db, 'studySessions'), session)
        await this.fetchStudySessions()
      } catch (error) {
        this.error = error.message
      }
    },
    async updateStudySession(id, updatedSession) {
      try {
        await updateDoc(doc(db, 'studySessions', id), updatedSession)
        await this.fetchStudySessions()
      } catch (error) {
        this.error = error.message
      }
    },
    async deleteStudySession(id) {
      try {
        await deleteDoc(doc(db, 'studySessions', id))
        await this.fetchStudySessions()
      } catch (error) {
        this.error = error.message
      }
    },
    async fetchCareerPaths() {
      try {
        const querySnapshot = await getDocs(collection(db, 'careerPaths'))
        this.careerPaths = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      } catch (error) {
        this.error = error.message
      }
    },
    async fetchAchievements() {
      try {
        const querySnapshot = await getDocs(collection(db, 'achievements'))
        this.achievements = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      } catch (error) {
        this.error = error.message
      }
    }
  }
})

