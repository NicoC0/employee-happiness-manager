import { localStorageType, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState:Person[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(localStorageType.FAVORITES) ? JSON.parse(getLocalStorage(localStorageType.PEOPLE) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageType.FAVORITES, state)
      return action.payload
    }
  }
})

export const { addFavorite } = favoritesSlice.actions