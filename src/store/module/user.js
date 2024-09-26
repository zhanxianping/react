import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        token: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkUwMjY5RjhBMjRFOTE2NDgxMkIzMzE4QkE0NzA4NzEzM0REMUE1RTlSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjRDYWZpaVRwRmtnU3N6R0xwSENIRXozUnBlayJ9.eyJuYmYiOjE3MjU5MzE3NzMsImV4cCI6MTcyNjAxODE3MywiaXNzIjoiaHR0cDovLzE5Mi4xNjguMC4xNzM6NTAwMCIsImNsaWVudF9pZCI6IjJjYmRiOGIxNWNkZTQ3Yzk5YTczODkyYWJiMTk1NzU2Iiwic3ViIjoiMjI0MTUxNDQ1MTM5OTA5IiwiYXV0aF90aW1lIjoxNzI1OTMxNzczLCJpZHAiOiJsb2NhbCIsIm5hbWUiOiLnoJTlj5Hpg6jmtYvor5XotKblj7ciLCJqdGkiOiJENkQ5M0I3RjUyNjcwN0IzNzM0MDhENjNFQzk0NDA5QiIsImlhdCI6MTcyNTkzMTc3Mywic2NvcGUiOlsiSW50ZXJuYWwiLCJvcGVuaWQiLCJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImN1c3RvbWVyIl19.s8sY1JcJaQYOlZsuqCkECCcKn0XXmHt9uubpXmzK7rWOEka--KMkzAM4ApXp6QrnzhAlEZDEFUfrZgo2UZGO_COW8k4FrjcuuJan0V6J_7_GQfOi4d4f9QrQzlVZ1p5vD2_nBqM1bkj6Neo3bsgkVQC4dvWKhov-X_UVcgWh7KDj4bjmr7Z6vn8m3L_Ln_LgdALO3JtMJAykFOiMyw6Kep5ZnNRGD_Qn8XERGppvU1flEHv7if4hl3eOr5kyVda-hAeTZbqu1Rl6J4FecPjU6Tql4N49UGRO_DjT24ds-Xhhb8_3dPBwl4rsNKk6eR4my52VP5peCgOJMjxZlHVrEA',
        count: 0
    },
    reducers: {
        setCount(state, action) {
            state.count = action.payload
        }
    }
})

export default UserSlice.reducer;
export const { setCount } = UserSlice.actions
//创建异步方法
export const getData = createAsyncThunk("order/fetchDemoData", async (data, { dispatch }) => {

});