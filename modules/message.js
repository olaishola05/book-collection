function showMsg(msg) {
  msg = document.querySelector('.success-message');
  msg.style.visibility = 'visible';
  msg.textContent = 'Your book added successfully!';
  setTimeout(() => {
    msg.textContent = '';
  }, 3000);
}

const errMsg = (error) => {
  error = document.querySelector('.error');
  error.style.visibility = 'visible';
  error.style.margin = '10px';
  setInterval(() => {
    error.style.visibility = 'hidden';
    error.style.margin = '0';
  }, 5000);
};
export { showMsg, errMsg };
