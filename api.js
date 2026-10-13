function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        { id: 1, title: "Review lecture slides on DOM manipulation", completed: false },
        { id: 2, title: "Implement ES6 class immutability", completed: true },
        { id: 3, title: "Write asynchronous API test suite", completed: false },
        { id: 4, title: "Push minimum 7 commits to GitHub repo", completed: false }
      ];
      resolve(mockData);
    }, 1500);
  });
}