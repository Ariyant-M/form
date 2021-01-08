function deleterow(el) {
    el.closest('tr').remove();
}



var change=1;
function editRow(em){
    em.innerHTML = (em.innerHTML == "Edit" ? "Save" : "Edit");
    change++;
    var cells = document.querySelectorAll('td');
    var rowID = em.closest('tr').rowIndex;
    cells.forEach(cell => {
    cell.addEventListener('click', () =>
        console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));
        if(change % 2 == 0){
            if(rowID == cell.closest('tr').rowIndex){
                cell.contentEditable = true;
                if(cell.cellIndex == 13){
                    cell.contentEditable = false;
                }
            }
        }
        else{
            cell.contentEditable = false;
        }
    });
}
