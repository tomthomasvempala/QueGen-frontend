const teacherCSV = (teachers) => {
    if (teachers.length === 1) {
        return teachers[0]
    } else {
        let tcrStr = teachers[0]
        for (let i = 1; i < teachers.length; i++) {
            tcrStr = tcrStr + ", " + teachers[i];
        }
        return tcrStr;
    }
}

export default teacherCSV;