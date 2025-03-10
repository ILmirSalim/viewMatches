import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApiResponse, Match, MatchesState, StatusFilter } from "./types"
import axios from "axios";

const url = 'https://app.ftoyd.com/fronttemp-service/fronttemp'

export const fetchMatches = createAsyncThunk<Match[], void>(
  'matches/fetchMatches',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ApiResponse>(url)
      return response.data.data.matches

    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Unknown error occurred')
    }
  }
)

const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null,
  statusFilter: StatusFilter.ALL
}

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<StatusFilter>) => {
      state.statusFilter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false
        state.matches = action.payload
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { setStatusFilter } = matchesSlice.actions
export default matchesSlice.reducer

