function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState === 4 && xhr.status == "200"){
			callback(xhr.responseText);
		}
	}
xhr.send();
}
//calling the function
getjson("data.json",function(text){
	var data = JSON.parse(text);
	console.log(data);
	mydetails(data.details);
	movies(data.favmovies);
	food(data.favfood);
})

var parent = document.querySelector(".parent-div");

function mydetails(React){
	var d=document.createElement("div");
	d.classList.add("Basicdetails");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Basic details:";
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var i=document.createElement("img");
	i.src=React.image;
	i.alt="profile image";
	d.appendChild(i);
	
	var name=document.createElement("h4");
	name.classList.add("name");
	name.setAttribute("id","name");
	name.textContent=React.name;
	d.appendChild(name);

	var e=document.createElement("p");
	e.classList.add("mail");
	e.textContent=React.email;
	d.appendChild(e);

	var ul=document.createElement("ul");
	var li=document.createElement("li");
	li.textContent=React.phone;
	ul.appendChild(li);
	var li1=document.createElement("li");
	li1.textContent=React.address;
	ul.appendChild(li1);
	d.appendChild(ul);
}

function movies(M){
	var d=document.createElement("div");
	d.classList.add("movies");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Movies names:";
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));
	ol=document.createElement("ol");
	for (var i = 0; i <M.length; i++) {
		var li=document.createElement("li");
		li.textContent=M[i];
		ol.appendChild(li);
}
d.appendChild(ol);
}

function food(nonveg){
	var d=document.createElement("div");
	d.classList.add("food-fav");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Foodies :"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var table=document.createElement("table");
	var row="";
	for (var i = 0; i <nonveg.length; i++) {
		row+="<tr><td>"+nonveg[i].name+"</td><td>"+nonveg[i].items+"</td></tr>";
	}
	table.innerHTML=row;
	d.appendChild(table);
}