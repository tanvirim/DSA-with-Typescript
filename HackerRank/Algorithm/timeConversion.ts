function timeConversion(s: string) {
    let hour
    if (s.includes("PM")) {
        hour = Number(s.slice(0, 2))
        if(hour<12){
            hour = (hour + 12).toString()
        }
        const str = s.replace("PM","")
        const newString = hour + str.slice(2)
        return newString
        }

        if (s.includes("AM")) {
            hour = Number(s.slice(0, 2))
            if (hour == 12) {
                hour = "00"}
            const str = s.replace("AM","")
            const newString = hour + str.slice(2)
            return newString

        }
 


    }
   




console.log(timeConversion("04:59:59AM"));
console.log(timeConversion("01:05:34PM"));
