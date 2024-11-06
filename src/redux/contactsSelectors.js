import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "../redux/filtersSlice";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// export const selectVisibleTasks = (state) => {
//   console.log("selectVisibleTasks");
//   const contacts = selectContacts(state);
//   const textFilter = selectTextFilter(state);
//   return contacts.filter((contacts) =>
//     contacts.name.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export const selectFilteredContacts  = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, statusFilter) => {
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
);
