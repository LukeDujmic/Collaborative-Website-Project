//colects and formats form data

var formdata = (location.search.slice(1,location.search.length).split("&"));
formdata[0] = formdata[0].slice(6,formdata[0].length);
formdata[1] = formdata[1].slice(6,formdata[1].length);
formdata[2] = formdata[2].slice(6,formdata[2].length);
formdata[2] = formdata[2].replace("%40","@");

//utilizes form data to generate the responce. 

document.getElementById("name").innerText = formdata[0]+" "+formdata[1];
document.getElementById("email").innerText = formdata[2];