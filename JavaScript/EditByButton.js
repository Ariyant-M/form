function deleterow(el) {
    el.closest('tr').remove();
}
var change = 0;
function editRow(em){
    var cells = document.querySelectorAll('td');
    cells.forEach(cell => {
    cell.addEventListener('click', () =>
        console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));
        var rowID = cell.closest('tr').rowIndex;
        if(change % 2 == 0){
            if(rowID == cell.closest('tr').rowIndex){
                cell.contentEditable = true;
                if(cell.cellIndex == 13){
                    cell.contentEditable = false;
                }
            }
            em.innerHTML = "Save";
        }
        else{
            cell.contentEditable = false;
            em.innerHTML = "Edit";
        }
        
    });
    change++;
}
