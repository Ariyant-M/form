var firstName = "";
var lastName = "";
var middleName = "";
var email = "";
var password = "";
var conPassword = "";
var gender = document.getElementsByName("gender");
var phone1 = "";
var phone2 = "";
var address1 = "";
var address2 = "";
var city = "";
var zip = "";
var genderValue = '';
var regName = /^[a-zA-Z ]{2,30}$/;
var regEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$/i;
var regPhone = /^[0-9]{10}$/;
var emptyField = "Field required";
var errorStatus = 0;

//first name validation
document.getElementById("firstName").addEventListener("focusout",() => {
    firstName = document.getElementById("firstName").value;
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
});


//middle name validation
document.getElementById("middleName").addEventListener("focusout",() => {
    middleName = document.getElementById("middleName").value;
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
});


//last name validation
document.getElementById("lastName").addEventListener("focusout",() => {
    lastName = document.getElementById("lastName").value;
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
});


//email validation
document.getElementById("email").addEventListener("focusout",() => {
    email = document.getElementById("email").value;
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
});


//password validation
document.getElementById("pass").addEventListener("focusout",() => {
    password = document.getElementById("pass").value;
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
});

document.getElementById("conpass").addEventListener("focusout",() => {
    conPassword = document.getElementById("conpass").value;
    if(conPassword.length == 0){
        document.getElementById("errorConPass").style.display = "block"; 
        document.getElementById("errorConPass").innerHTML = emptyField;
        errorStatus--;
    }
    else if(password != conPassword){
        alert("Password doesn't match..")
        document.getElementById("errorConPass").style.display = "block";
        errorStatus--;
    }
    else{
        document.getElementById("errorConPass").style.display = "none";
        errorStatus++;
    }
});


//phone number validation
document.getElementById("phone1").addEventListener("focusout",() => {
    phone1 = document.getElementById("phone1").value;
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
});


document.getElementById("phone2").addEventListener("focusout",() => {
    phone2 = document.getElementById("phone2").value;
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
});


//address validation
document.getElementById("address1").addEventListener("focusout",() => {
    address1 = document.getElementById("address1").value;
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
});


//city validation
document.getElementById("city").addEventListener("focusout",() => {
    city = document.getElementById("city").value;
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
});


//zip code validation
document.getElementById("zip").addEventListener("focusout",() => {
    zip = document.getElementById("zip").value;
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
});







function showAddedResult(){

    var address2 = document.getElementById("address2").value;
    var countryList = document.getElementById("country").value;
    var stateList = document.getElementById("state").value;
    var suscribe = document.getElementById("subscribe");
    var suscribeCheck = 'No';
    //get value of gender
    
    for(i = 0; i < gender.length; i++) { 
        if(gender[i].checked) {
            genderValue = gender[i].value; 
        }
    } 
    if(genderValue == ''){
        document.getElementById("errorGender").style.display = "block";
        document.getElementById("errorGender").innerHTML = emptyField;
        errorStatus--;
    }
    else{
        document.getElementById("errorGender").style.display = "none";
        errorStatus++;
    }

    //country validation
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

    //state validation
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

    //Check for the Suscribe checkbox
    if(suscribe.checked == true){
        suscribeCheck = 'Yes';
    }


    //address field
    if(address2 != ''){
        var address = address1 + ',' + address2;
    }
    else{
        address = address1;
    }

    //array for data insert
    var dataarr = new Array();
    dataarr = [firstName,middleName,lastName,email,genderValue,phone1,phone2,address, city, stateList, countryList, zip, suscribeCheck];


    //put data into table
    if(errorStatus >= 12){
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
