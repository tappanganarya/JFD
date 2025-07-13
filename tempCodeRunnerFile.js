var students =[
    {
        id : 1,
        name : "Joko",
        major : "IT",
        isGraduated : true
    },
    {
        id : 2,
        name : "Yuni",
        major : "Akuntasi",
        isGraduated : false
    }
]
// Read
function showStudents(){
    console.log(` Student List :`);
    for (let index = 0; index < students.length; index++) {
        if (students[index].isGraduated === true) {
            console.log(`${students[index].id}. [v] ${students[index].name}, ${students[index].major}`); 
        }else{
            console.log(`${students[index].id}. [ ] ${students[index].name}, ${students[index].major}`); 
        }
    }
}

function addStudent(name,major){
    let lastindex = students.length -1;
    let id = students[lastindex].id + 1;
    let isGraduated = false;

    students.push({
        id,name,major,isGraduated
    });
}