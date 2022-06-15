import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Amanda", email: "amanda@test.com", phone: 98989898, city:"Mumbai" },
  { id: 2, name: "john", email: "john@test.com", phone: 982989829, city: "Pune" },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            console.log("action",state);
            const {id, name, email, phone, city} = action.payload;
            const existingUser = state.find(user => user.id == id);
            if(existingUser) {
                existingUser.name = name;
                existingUser.email = email;
                existingUser.phone = phone;
                existingUser.city = city;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const existingUser = state.find((user) => user.id == id);
            if (existingUser) {
                return state.filter(user => user.id!=id)
            }
        }
    }
});

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer;