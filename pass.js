var password;
var pass1="123"
password=prompt('Enter the password','');
if(password==pass1)
alert('correct password, click ok to enter.');
else
{
    window.location="file:///D:/Amrita/Subjects/UID/LAB%20PROJECTS/RESUME%20ASSIG/index.html"
}
var password2="456";
function passcheck(){
    if(document.getElementById('pass2').value !=password2) {
        alert('worng password,try again.')
    }
    if(document.getElementById('pass2').vale == password2) {
        alert('correct password,click ok to enter.')
    }
}