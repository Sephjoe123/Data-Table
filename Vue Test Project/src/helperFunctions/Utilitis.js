export const getMatchedStatus = (users, status) => {
  return users.filter((user) => status === "all" || user.status === status);
};

export const getMatchedSearch = (users, searchValue) => {
  return users.filter((user) => {
    return searchValue
      ? user.firstName.toUpperCase().includes(searchValue.toUpperCase()) ||
          user.lastName.toUpperCase().includes(searchValue.toUpperCase())
      : true;
  });
};

export const getSortedUsers = (users, sortValue) => {
  return users.sort((a, b) => {
    if (sortValue === "firstname") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortValue === "lastname") {
      return a.lastName.localeCompare(b.lastName);
    } else if (sortValue === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortValue === "lastLogin") {
      return new Date(a.lastLogin) - new Date(b.lastLogin);
    } else if (sortValue === "active") {
      return a.userStatus === "active" ? -1 : 1;
    } else if (sortValue === "inactive") {
      return a.userStatus === "inactive" ? -1 : 1;
    } else if (sortValue === "paid") {
      return a.status === "paid" ? -1 : 1;
    } else if (sortValue === "unpaid") {
      return a.status === "unpaid" ? -1 : 1;
    } else if (sortValue === "overdue") {
      return a.status === "overdue" ? -1 : 1;
    } else {
      return 0;
    }
  });
};
