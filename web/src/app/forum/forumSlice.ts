import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ThreadCardData } from "./types"
import { sortParamTypes } from "../../services/ThreadService"

interface Forum {
  sortedBy: sortParamTypes,
  recentThreadCards: ThreadCardData[] | null,
  topThreadCards: ThreadCardData[] | null
}

const initialState: Forum = {
  sortedBy: 'date_desc',
  recentThreadCards: null,
  topThreadCards: null
}

const forumSlice = createSlice({
  name: 'forum',

  initialState,

  reducers: {
    updateRecentThreadCards: (state, action: PayloadAction<ThreadCardData[]>) => {
      state.sortedBy = 'date_desc'
      state.recentThreadCards = action.payload
    },

    updateTopThreadCards: (state, action: PayloadAction<ThreadCardData[]>) => {
      state.sortedBy = 'popularity_desc'
      state.topThreadCards = action.payload
    }

  }
})

export const { updateRecentThreadCards, updateTopThreadCards } = forumSlice.actions

export default forumSlice.reducer
