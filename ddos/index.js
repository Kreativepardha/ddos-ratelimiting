const fs = require('fs')
const path = require('path')

const endpoint = 'http://localhost:3000/api/v1/student'
const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE5ZTBjMzAxZDQ1MzgxMGUzNjQyM2EiLCJpYXQiOjE3MjI0MDkxNTV9.0fCvvaVkDOY4wLqTxMNF6mkWOYtk1f-dh4R0ZhJUzR4"
const data = path.join(__dirname, 'ROLLNO.json')
const students = JSON.parse(fs.readFileSync(data,'utf-8'))


const createStudent = async(student) => {
    try {
        console.log('Sending student data:', student);
            const res = await axios.post(endpoint,{student}, {
                headers: {
                    'Authorization': authToken,
                    'Content-Type': 'application/json'

                }

            })
            console.log(student created: ${res.data})
            console.log(student created: ${res.data.name})
    } catch (err) {
        // console.error(Error creating student: ${error.response ? error.response.data : error.message});
        console.log(err)
        process.exit(1);
    }
}



const populateStudents = async() => {
    for(const student of students) {
        await createStudent(student);
    }
    console.log("ALL students have been processed")
}

populateStudents(); .
