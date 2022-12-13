import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ThreadsSortedBy = 'top' | 'recent'

interface Forum {
  ThreadsSortedBy: ThreadsSortedBy
}

const initialState: Forum = {
  ThreadsSortedBy: 'recent'
}

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    toggleSort: (state, action: PayloadAction<ThreadsSortedBy>) => {
      state.ThreadsSortedBy = action.payload 
    }
  }
})

export const { toggleSort } = forumSlice.actions

export default forumSlice.reducer
