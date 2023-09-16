function gradingStudents(grades: number[]): number[] {
    return grades.map(e=>{
        
        if(e>35 && e%5>=3){
            return e+5-(e%5)
        }
        return e
    })

}