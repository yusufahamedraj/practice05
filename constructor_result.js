

function ResultSystem() {
    
    this.gpa = function(marks) {
        let gpa;

        if (marks >=0 && marks <= 32) {
            gpa = 0
        } else if (marks >=33 && marks <= 40) {
            gpa = 1
        } else if (marks >=41 && marks <= 50) {
            gpa = 2
        } else if (marks >=51 && marks <= 60) {
            gpa = 3
        } else if (marks >=61 && marks <= 70) {
            gpa = 3.5
        } else if (marks >=71 && marks <= 80) {
            gpa = 4
        } else if (marks >=81 && marks <= 100) {
            gpa = 5
        }
        return gpa
    }

    this.grade = function (marks){
        let grade;

        if (marks >=0 && marks <= 32) {
            grade = 'F'
        } else if (marks >=33 && marks <= 40) {
            grade = 'D'
        } else if (marks >=41 && marks <= 50) {
            grade = 'C'
        } else if (marks >=51 && marks <= 60) {
            grade = 'B'
        } else if (marks >=61 && marks <= 70) {
            grade = '-A'
        } else if (marks >=71 && marks <= 80) {
            grade = 'A'
        } else if (marks >=81 && marks <= 100) {
            grade ='A+'
        }
        return grade

    }

    this.cgpa = function (ban, eng, math, sic){

        let total_gpa = (ban + eng + math + sic)
        let cgpa = total_gpa / 4

        if (ban == 0 || eng == 0 || math == 0 || sic == 0) {
            return 'Your are failed'
        } else {
            return`Your CGPA = ${cgpa.toFixed(2)} & Grade ${this.finalgrade(cgpa)}`
        }

    }

    this.finalgrade = function (cgpa){

        let final_grade;

        if (cgpa >=0 && cgpa <1) {
            final_grade = 'F'
        } else if (cgpa >=1 && cgpa <2) {
            final_grade = 'D'
        } else if (cgpa >=2 && cgpa <3) {
            final_grade = 'C'
        } else if (cgpa >=3 && cgpa <3.5) {
            final_grade = 'B'
        } else if (cgpa >= 3.5  && cgpa <4) {
            final_grade = '-A'
        } else if (cgpa >=4 && cgpa <5) {
            final_grade = 'A'
        } else if (cgpa == 5 ) {
            final_grade = 'A+'
        }
        return final_grade;

    }


}
