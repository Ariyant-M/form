document.getElementById("showResult").addEventListener("click", editCell);
function editCell(){
    var cells = document.querySelectorAll('td');
    cells.forEach(cell => {
    cell.addEventListener('click', () =>
        console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));
        cell.contentEditable = "true";

    });
}