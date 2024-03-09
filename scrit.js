function calculateTemperedGlass() {
    const initialStock = parseInt(document.getElementById("tempered-glass-initial").value);
    const soldToday = parseInt(document.getElementById("tempered-glass-sold").value);
  
    if (isNaN(initialStock) || isNaN(soldToday) || initialStock < 0 || soldToday < 0) {
      alert("Please enter valid numbers for initial stock and sold today.");
      return;
    }
  
    const remainingStock = initialStock - soldToday;
    const resultElement = document.getElementById("tempered-glass-result");
    resultElement.textContent = `Remaining Tempered Glass: ${remainingStock}`;
  }
  
  function calculateBackCover() {
    const initialStock = parseInt(document.getElementById("back-cover-initial").value);
    const soldToday = parseInt(document.getElementById("back-cover-sold").value);
  
    if (isNaN(initialStock) || isNaN(soldToday) || initialStock < 0 || soldToday < 0) {
      alert("Please enter valid numbers for initial stock and sold today.");
      return;
    }
  
    const remainingStock = initialStock - soldToday;
    const resultElement = document.getElementById("back-cover-result");
    resultElement.textContent = `Remaining Back Covers: