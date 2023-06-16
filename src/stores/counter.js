import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    selectedEmployee: {
      id: null,
      name: null,
      email: null,
    },
  }),
  actions: {
    selectEmployee(id, name, email) {
      this.selectedEmployee.id = id;
      this.selectedEmployee.name = name;
      this.selectedEmployee.email = email;

      console.log('selectedEmployee after selectEmployee action:', this.selectedEmployee);
    },
  },
});
