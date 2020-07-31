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
getjson("taskdata.json",function(text){
	var data = JSON.parse(text);
	console.log(data);
	mydetails(data.details);
	languages(data.Languages);
	hobb(data.hobbies);
	main(data.obj);
	edu(data.educationalqualifications);
	ach(data.achievements);
	tech(data.technicalskills);
	area(data.areaointerest);
	dec(data.obj);
})

var parent = document.querySelector(".parent-div");

function mydetails(React){
	var d=document.createElement("div");
	d.classList.add("basicdetails");
	parent.appendChild(d);

	var i=document.createElement("img");
	i.src=React.image;
	i.alt="icon";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.classList.add("name");
	name.setAttribute("id","name");
	name.textContent=React.name;
	d.appendChild(name);

	var qualify=document.createElement("p");
	qualify.classList.add("qualification");
	qualify.textContent=React.qualification;
	d.appendChild(qualify);

	var e=document.createElement("p");
	e.classList.add("mail");
	e.textContent=React.email;
	d.appendChild(e);

	var p=document.createElement("p");
	p.classList.add("phone");
	p.textContent=React.phone;
	d.appendChild(p);

	var r=document.createElement("a");
	r.textContent="google |";
	r.classList.add("lin");
	r.href=React.link1;
	d.appendChild(r);

	var r=document.createElement("a");
	r.textContent="fb account |";
	r.classList.add("lin");
	r.href=React.link2;
	d.appendChild(r);

	var r=document.createElement("a");
	r.textContent="git login";
	r.classList.add("lin");
	r.href=React.link3;
	d.appendChild(r);

	var h=document.createElement("h1");
	d.appendChild(document.createElement("hr"));

}

function languages(L){
	var d=document.createElement("div");
	d.classList.add("Languages");
	parent.appendChild(d);
	var h=document.createElement("h4");
	h.textContent="Languages:";
	d.appendChild(h);
	ul=document.createElement("ul");
	for (var i = 0; i <L.length; i++) {
		var li=document.createElement("li");
		li.textContent=L[i];
		ul.appendChild(li);
}
d.appendChild(ul);

var h=document.createElement("h1");
	d.appendChild(document.createElement("hr"));
}

function hobb(H){
	var d=document.createElement("div");
	d.classList.add("hobbies");
	parent.appendChild(d);
	var h=document.createElement("h4");
	h.textContent="Hobbies:";
	d.appendChild(h);
	ul=document.createElement("ul");
	for (var i = 0; i <H.length; i++) {
		var li=document.createElement("li");
		li.textContent=H[i];
		ul.appendChild(li);
}
d.appendChild(ul);
}

function main(Q){
	var d=document.createElement("div");
	d.classList.add("main");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Career Objective:";
	d.appendChild(h);
	var c=document.createElement("p");
	c.classList.add("obj");
	c.textContent=Q.career;
	d.appendChild(c);
}

function edu(U){
	var d=document.createElement("div");
	d.classList.add("education");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Educational qualifications:"
	d.appendChild(h);

	var table=document.createElement("table");
	var row="";
	for (var i = 0; i <U.length; i++) {
		row+="<tr><td>"+U[i].specialisation+"</td><td>"+U[i].institute+"</td><td>"+U[i].pass+"</td><td>"+U[i].percentage+"</td></tr>";
	}
	table.innerHTML=row;
	d.appendChild(table)
}
 function ach(V){
 	var d=document.createElement("div");
 	d.classList.add("achieve");
 	parent.appendChild(d);
 	var h=document.createElement("h2");
	h.textContent="Achievements:";
	d.appendChild(h);
	ul=document.createElement("ul");
	for (var i = 0; i <V.length; i++) {
		var li=document.createElement("li");
		li.textContent=V[i];
		ul.appendChild(li);
}
d.appendChild(ul);
 }

 function tech(T){
 	var d=document.createElement("div");
 	d.classList.add("tech");
 	parent.appendChild(d);
 	var h=document.createElement("h2");
	h.textContent="Technical Skills:";
	d.appendChild(h);
	ul=document.createElement("ul");
	for (var i = 0; i <T.length; i++) {
		var li=document.createElement("li");
		li.textContent=T[i];
		ul.appendChild(li);
}
d.appendChild(ul);
 }

 function area(A){
 	var d=document.createElement("div");
 	d.classList.add("area");
 	parent.appendChild(d);
 	var h=document.createElement("h2");
	h.textContent="Area of Interest:";
	d.appendChild(h);
	ul=document.createElement("ul");
	for (var i = 0; i <A.length; i++) {
		var li=document.createElement("li");
		li.textContent=A[i];
		ul.appendChild(li);
}
d.appendChild(ul);
 }

 function dec(W){
	var d=document.createElement("div");
	d.classList.add("dec");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Declaration:";
	d.appendChild(h);
	var c=document.createElement("p");
	c.classList.add("obj");
	c.textContent=W.declaration;
	d.appendChild(c);
}