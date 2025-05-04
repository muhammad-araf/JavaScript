function user(name,id){
    this.name = name;
    this.id = id;
    this.print = function(marks){
        console.log(`name : ${name}\n Id : ${id}\n marks : ${marks}`);
        
    }
}
const student = new user("araf",991);
student.print(90);