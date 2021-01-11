function deleterow(el) {
    el.closest('tr').remove();
}



function editRow(em){
    em.innerHTML = (em.innerHTML == "Edit" ? "Save" : "Edit");
    var cells = document.querySelectorAll('td');
    cells.forEach(cell => {
    cell.addEventListener('click', () =>
        console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));
        if(document.querySelector("#tableData > thead > tr:nth-child("+(cell.closest('tr').rowIndex + 1)+") > td:nth-child(14) > button:nth-child(1)").innerHTML == "Save"){
            cell.contentEditable = true;
            if(cell.cellIndex == 13){
                cell.contentEditable = false;
            }
        }
        else{
            cell.contentEditable = false;
        }
    });
}
