// stores/userStore.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [
      {
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        status: "paid",
        amount: 250,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 2,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        status: "unpaid",
        amount: 370,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 3,
        firstName: "Cathy",
        lastName: "Brown",
        email: "cathy.brown@example.com",
        status: "overdue",
        amount: 200,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
        overdueDetails: [
          {
            date: "10/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "12/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "15/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "20/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
        ],
      },
      {
        id: 4,
        firstName: "David",
        lastName: "Wilson",
        email: "david.wilson@example.com",
        status: "paid",
        amount: 300,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 5,
        firstName: "Ella",
        lastName: "Taylor",
        email: "ella.taylor@example.com",
        status: "unpaid",
        amount: 250,
        userStatus: "inactive",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 6,
        firstName: "Frank",
        lastName: "Anderson",
        email: "frank.anderson@example.com",
        status: "paid",
        amount: 750,
        userStatus: "inactive",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 7,
        firstName: "Erin",
        lastName: "Levin",
        email: "Erin.levin@example.com",
        status: "overdue",
        amount: 450,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
        overdueDetails: [
          {
            date: "10/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "12/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "15/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "20/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
        ],
      },
      {
        id: 8,
        firstName: "Lincoln",
        lastName: "Levin",
        email: "Lincoln.levin@example.com",
        status: "unpaid",
        amount: 350,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
      {
        id: 9,
        firstName: "Mira",
        lastName: "Levin",
        email: "Mira.levin@example.com",
        status: "overdue",
        amount: 250,
        userStatus: "active",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
        overdueDetails: [
          {
            date: "10/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "12/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "15/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            activity: "Final Notice",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
          {
            date: "20/APR/2024",
            activity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mauris id purus vehicula condimentum.",
            details:
              "Lorem ipsum dolor sit amet,Integer suscipit mi nec justo tempor, non laoreet nulla tempor. Praesent lacinia, Praesent lacinia,",
          },
        ],
      },
      {
        id: 10,
        firstName: "Phillip",
        lastName: "Saris",
        email: "Phillip.Saris@example.com",
        status: "paid",
        amount: 450,
        userStatus: "inactive",
        lastLogin: "14/APR/2024",
        payDateStatus: "15/APR/2024",
      },
    ],
  }),

  getters: {
    totalPayableAmount(state) {
      return state.users
        .filter((user) => user.status === "unpaid" || user.status === "overdue")
        .reduce((total, user) => total + user.amount, 0);
    },

    filteredUsers: (state) => (status) => {
      if (status === "all") {
        return state.users;
      } else {
        return state.users.filter((user) => user.status === status);
      }
    },
  },

  actions: {
    updateUserStatus(userId, newStatus) {
      const user = this.users.find((user) => user.id === userId);
      if (user) {
        user.status = newStatus;
      }
    },
  },
});
