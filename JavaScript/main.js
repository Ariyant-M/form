function showAddedResult(){

    //get form data for validate form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var middleName = document.getElementById("middleName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var conPassword = document.getElementById("conpass").value;
    var gender = document.getElementsByName("gender");
    var phone1 = document.getElementById("phone1").value;
    var phone2 = document.getElementById("phone2").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var countryList = document.getElementById("country").value;
    var stateList = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var suscribe = document.getElementById("subscribe");
    var genderValue = '';
    var suscribeCheck = 'No';
    var regName = /^[a-zA-Z ]{2,30}$/;
    var regEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-.]+.[a-zA-Z0-9-.]+$/i;
    var regPhone = /^[0-9]{10}$/;
    var emptyField = "Field required";
    var errorStatus = 0;
    if(address2 != ''){
        var address = address1 + ',' + address2;
    }
    else{
        address = address1;
    }

    //table 
    var table = document.getElementById("tableData");

    //get value of gender
    
    for(i = 0; i < gender.length; i++) { 
        if(gender[i].checked) {
            genderValue = gender[i].value; 
        }
    } 

    //Check for the Suscribe checkbox
    
    if(suscribe.checked == true){
        suscribeCheck = 'Yes';
    }
    
    var del = '<button onclick = editRow(this)>Edit</button><br><button onclick = deleterow(this)>Delete</button>'
    //array for data insert
    var dataarr = new Array();
    dataarr = [firstName,middleName,lastName,email,genderValue,phone1,phone2,address, city, stateList, countryList, zip, suscribeCheck,del];
    //form validation

    //First name validation
    if(firstName.length == 0){
        document.getElementById("errorFName").style.display = "block"; 
        document.getElementById("errorFName").innerHTML = emptyField;
        errorStatus--;
    }
    else if(regName.test(firstName) == false){
        document.getElementById("errorFName").innerHTML = 
        "Please enter a valid first name..";
        document.getElementById("errorFName").style.display = "block"; 
        errorStatus--;
    }
    else{
        document.getElementById("errorFName").style.display = "none";
        errorStatus++;
    }

    //middle name validation
    if(middleName.length !=0 & regName.test(middleName) == false){
        document.getElementById("errorMidName").innerHTML = 
        "Please enter a valid middle name..";
        document.getElementById("errorMidName").style.display = "block"; 
        errorStatus--;
    }
    else{
        document.getElementById("errorMidName").style.display = "none";
        errorStatus++;
    }

    //last name validation
    if(lastName.length == 0){
        document.getElementById("errorLName").style.display = "block"; 
        document.getElementById("errorLName").innerHTML = emptyField;
        errorStatus--;
    }
    else if(regName.test(lastName) == false){
        document.getElementById("errorLName").innerHTML = 
        "Please enter a valid last name..";
        document.getElementById("errorLName").style.display = "block"; 
        errorStatus--;
    }
    else{
        document.getElementById("errorLName").style.display = "none";
        errorStatus++;
    }

    //Email validation
    if(email.length == 0){
        document.getElementById("errorEmail").style.display = "block"; 
        document.getElementById("errorEmail").innerHTML = emptyField;
        errorStatus--;
    }
    else if(regEmail.test(email) == false){
        document.getElementById("errorEmail").innerHTML = 
        "Please enter a valid email address..";
        document.getElementById("errorEmail").style.display = "block"; 
        errorStatus--;
    }
    else{
        document.getElementById("errorEmail").style.display = "none";
        errorStatus++;
    }

    //password validation
    if(password.length == 0){
        document.getElementById("errorPass").style.display = "block"; 
        document.getElementById("errorPass").innerHTML = emptyField;
        errorStatus--;
    }
    else if(password.length < 6){
        document.getElementById("errorPass").style.display = "block"; 
        document.getElementById("errorPass").innerHTML = "password is too short..";
        errorStatus--;
    }
    else{
        document.getElementById("errorPass").style.display = "none";
        errorStatus++;
    }


    if(conPassword.length == 0){
        document.getElementById("errorConPass").style.display = "block"; 
        document.getElementById("errorConPass").innerHTML = emptyField;
        errorStatus--;
    }
    else if(password != conPassword){
        document.getElementById("errorConPass").innerHTML = 
        "Password doesn't match..";
        document.getElementById("errorConPass").style.display = "block";
        errorStatus--;
    }
    else{
        document.getElementById("errorConPass").style.display = "none";
        errorStatus++;
    }

    //gender validation
    if(genderValue == ''){
        document.getElementById("errorGender").style.display = "block";
        document.getElementById("errorGender").innerHTML = emptyField;
        errorStatus--;
    }
    else{
        document.getElementById("errorGender").style.display = "none";
        errorStatus++;
    }

    //phone number validation
    if(phone1.length == 0){
        document.getElementById("errorPhone1").style.display = "block";
        document.getElementById("errorPhone1").innerHTML = emptyField;
        errorStatus--;
    }
    else if(regPhone.test(phone1) == false){
        document.getElementById("errorPhone1").style.display = "block";
        document.getElementById("errorPhone1").innerHTML = "invalid phone no.";
        errorStatus--;
    }
    else{
        document.getElementById("errorPhone1").style.display = "none";
        errorStatus++;
    }

    if(phone2.length == 0){
        document.getElementById("errorPhone2").style.display = "none";
        errorStatus++;
    }
    else if(regPhone.test(phone2) == false){
        document.getElementById("errorPhone2").style.display = "block";
        document.getElementById("errorPhone2").innerHTML = "invalid phone no.";
        errorStatus--;
    }
    else{
        document.getElementById("errorPhone1").style.display = "none";
        errorStatus++;
    }

    //address validation
    if(address1.length == 0){
        document.getElementById("errorAddress").style.display = "block";
        document.getElementById("errorAddress").innerHTML = emptyField;
        errorStatus--;
    }
    else
    {
        document.getElementById("errorAddress").style.display = "none";
        errorStatus++;
    }

    if(city.length == 0){
        document.getElementById("errorCity").style.display = "block";
        document.getElementById("errorCity").innerHTML = emptyField;
        errorStatus--;
    }
    else
    {
        document.getElementById("errorCity").style.display = "none";
        errorStatus++;
    }

    if(countryList.length == 0){
        document.getElementById("errorCountry").style.display = "block";
        document.getElementById("errorCountry").innerHTML = emptyField;
        errorStatus--;
    }
    else
    {
        document.getElementById("errorCountry").style.display = "none";
        errorStatus++;
    }
    
    if(stateList.length == 0){
        document.getElementById("errorState").style.display = "block";
        document.getElementById("errorState").innerHTML = emptyField;
        errorStatus--;
        
    }
    else
    {
        document.getElementById("errorState").style.display = "none";
        errorStatus++;
    }

    if(zip.length == 0){
        document.getElementById("errorZip").style.display = "block";
        document.getElementById("errorZip").innerHTML = emptyField;
        errorStatus--;
    }
    else
    {
        document.getElementById("errorZip").style.display = "none";
        errorStatus++;
    }
    
    if(errorStatus == 14){
        var row = document.getElementById("tableData").insertRow(-1);
        for (var c = 0; c < dataarr.length; c++) {
            cell = row.insertCell(c);
            cell.innerHTML = dataarr[c];
        }
        alert("details added sucessfully")
        document.getElementById("detailsForm").reset();
    }
}
document.getElementById("showResult").addEventListener("click", openTable);
document.getElementById("close").addEventListener("click", closeTable);
function openTable() {
    document.getElementById("tableContainer").style.display = "block";
    document.getElementById("mainForm").style.display = "none";
    document.getElementById("showResult").style.display = "none";
}

function closeTable() {
    document.getElementById("tableContainer").style.display = "none";
    document.getElementById("mainForm").style.display = "block";
    document.getElementById("showResult").style.display = "block";
}
