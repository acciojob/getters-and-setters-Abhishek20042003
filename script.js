//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

	set name(username){
		if(username.length > 0){
				this._name = username;
		}else{
			console.log("Username cannot be empty")
		}
	}
}

get age(){
	return this._age
}

set age(userage){
	if(userage > 0){
		this._age = userage;
	}
}



class Student extends Person {
	study(){
		console.log(`${this._name} is studying`)
		
	}
	
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`)
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
