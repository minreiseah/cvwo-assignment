import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ThreadCardData } from "./types"

type sortedBy = 'top' | 'recent'

interface Forum {
  sortedBy: sortedBy,
  recentThreadCards: ThreadCardData[] | null,
  topThreadCards: ThreadCardData[] | null
}

const initialState: Forum = {
  sortedBy: 'recent',
  recentThreadCards: null,
  topThreadCards: null
}

const forumSlice = createSlice({
  name: 'forum',

  initialState,

  reducers: {
    toggleSort: (state, action: PayloadAction<sortedBy>) => {
      state.sortedBy = action.payload 
    },

    updateRecentThreadCards: (state, action: PayloadAction<ThreadCardData[]>) => {
      state.recentThreadCards = action.payload
    },

    updateTopThreadCards: (state, action: PayloadAction<ThreadCardData[]>) => {
      state.topThreadCards = action.payload
    }

  }
})

export const { toggleSort, updateRecentThreadCards, updateTopThreadCards } = forumSlice.actions

export default forumSlice.reducer
