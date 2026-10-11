document.addEventListener("DOMContentLoaded", function () {

// LocalStorage'dan o'qituvchi ismini olish

const teacherName =
    localStorage.getItem("teacherName");


if (teacherName) {

    document.getElementById("teacherName").textContent =
        teacherName;

    document.getElementById("welcomeName").textContent =
        teacherName;

}


// Keyingi tugma

const nextButton =
    document.getElementById("nextButton");


nextButton.addEventListener("click", function () {

    const selectedClass =
        document.getElementById("class").value;

    const subject =
        document.getElementById("subject").value;

    const tasks =
        document.getElementById("tasks").value;


    // Tekshirish

    if (!selectedClass) {

        alert("Iltimos, sinfni tanlang.");

        return;
    }


    if (!subject) {

        alert("Iltimos, fanni tanlang.");

        return;
    }


    if (!tasks || tasks < 1) {

        alert("Iltimos, topshiriqlar sonini kiriting.");

        return;
    }


    // Bazadan tanlangan sinf o'quvchilarini olish

    const classStudents =
        students[selectedClass];


    if (!classStudents) {

        alert(
            "Bu sinf uchun o‘quvchilar bazasi hali mavjud emas."
        );

        return;
    }


    // Ma'lumotlarni LocalStorage'ga saqlash

    localStorage.setItem(
        "selectedClass",
        selectedClass
    );

    localStorage.setItem(
        "selectedSubject",
        subject
    );

    localStorage.setItem(
        "taskCount",
        tasks
    );

    localStorage.setItem(
        "classStudents",
        JSON.stringify(classStudents)
    );


    // Keyingi sahifa

    window.location.href =
        "assessment.html";

});


});
