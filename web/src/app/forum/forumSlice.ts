import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ThreadCardProps } from "./types"

type sortedBy = 'top' | 'recent'

interface Forum {
  sortedBy: sortedBy,
  recentThreadCards: ThreadCardProps[] | null,
  topThreadCards: ThreadCardProps[] | null
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

    updateRecentThreadCards: (state, action: PayloadAction<ThreadCardProps[]>) => {
      state.recentThreadCards = action.payload
    },

    updateTopThreadCards: (state, action: PayloadAction<ThreadCardProps[]>) => {
      state.topThreadCards = action.payload
    }

  }
})

export const { toggleSort, updateRecentThreadCards, updateTopThreadCards } = forumSlice.actions

export default forumSlice.reducer
