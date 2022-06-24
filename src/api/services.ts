import api from './config'

export async function getAllUsers() {
  const response = await api.get('/users')
  return response.data
}

export async function getUserById(id:any) {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export async function createUser(user:any) {
  const response = await api.post('/users', user)
  return response.data
}

export async function updateUser(user:any) {
  const response = await api.put(`/users/${user.id}`, user)
  return response.data
}

export async function deleteUser(id:any) {
  const response = await api.delete(`/users/${id}`)
  return response.data
}

export async function getAllTracks() {
  const response = await api.get('/tracks')
  return response.data
}

export async function getTrackById(id:any) {
  const response = await api.get(`/tracks/${id}`)
  return response.data
}

export async function createTrack(track:any) {
  const response = await api.post('/tracks', track)
  return response.data
}

export async function updateTrack(track:any) {
  const response = await api.put(`/tracks/${track.id}`, track)
  return response.data
}


