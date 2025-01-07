// Select elements
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Render expenses on the page
function renderExpenses() {
  expenseList.innerHTML = ""; // Clear the list
  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - $${expense.amount} on ${expense.date}
      <button class="delete" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}

// Add expense
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  if (name && amount && date) {
    const newExpense = { name, amount, date };
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
    expenseForm.reset(); // Clear the form
  }
});

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1); // Remove expense
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

// Initialize app
renderExpenses();
