//Compare the ages of persons using classes
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {//taking created object(instance) as an arguement
		
		if(this.age != other.age){
         let str = '';
		this.age > other.age ? str=`${other.name} is younger than me.` : str=`${other.name} is older than me.`
		return str;
		}
		else 
			return `${other.name} is the same age as me.`;
	}
}

p1 = new Person("sana",23);
p2 = new Person("nawaz",15);
p3 = new Person("Chiu",23);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p3.compareAge(p1));