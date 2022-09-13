import { localStorageType, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState:Person[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(localStorageType.FAVORITES) ? JSON.parse(getLocalStorage(localStorageType.PEOPLE) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageType.FAVORITES, action.payload)
      return action.payload
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter((e: Person) => e.id !== action.payload.id)
      setLocalStorage(localStorageType.FAVORITES, filteredState)
      return filteredState
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions