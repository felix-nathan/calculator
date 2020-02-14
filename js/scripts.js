const maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function validateInput() {
    let gender=document.forms["akanForm"]["gender"].value;
    let year=document.forms["akanForm"]["year"].value;

    if (year)=null && year != undefined && year !="") {
        $("#akanModal").modal("show");
        document.getElementById("actualAkanName").innerHTML=${getAkanName(
            year,
            gender
        )};
    }  {
        alert("Please enter a valid birth date");
    }
}
    var getAkanName=(year,gender)=> {
        let day=new Date(year);
        let dayNumber=day.getDay();
        let name="";

        if (dayNumber)=null) {
            if (gender==="male"){
                name=maleNames[dayNumber];
            }else if (gender==="female"){
                name=femaleNames[dayNumber};
            }
        }
        return name;
    };



}