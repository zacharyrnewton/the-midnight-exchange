import firebase from "../services/firebase-config";

const isBrowser = typeof window !== `undefined`

const getUser = () => firebase.auth().currentUser;

export const isLoggedIn = () => {
  if (!isBrowser) return true

  const user = firebase.auth().currentUser
  return !!user

}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  callback()
}
