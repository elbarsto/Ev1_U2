document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultContainer = document.getElementById("results");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtén los valores de entrada del formulario
        const studentName = document.getElementById("student-name").value;
        const subjectName = document.getElementById("subject-name").value;

        // Obtiene las notas y calcula las ponderaciones
        const unit1Note1 = parseFloat(document.getElementById("unit1-note1").value);
        const unit1Note2 = parseFloat(document.getElementById("unit1-note2").value);
        const unit2Note1 = parseFloat(document.getElementById("unit2-note1").value);
        const unit2Note2 = parseFloat(document.getElementById("unit2-note2").value);
        const unit3Note1 = parseFloat(document.getElementById("unit3-note1").value);
        const unit3Note2 = parseFloat(document.getElementById("unit3-note2").value);

        const unit1Ponderation = (unit1Note1 * 0.12 + unit1Note2 * 0.21).toFixed(2);
        const unit2Ponderation = (unit2Note1 * 0.12 + unit2Note2 * 0.21).toFixed(2);
        const unit3Ponderation = (unit3Note1 * 0.13 + unit3Note2 * 0.21).toFixed(2);

        const totalPonderation = (unit1Ponderation * 0.33 + unit2Ponderation * 0.33 + unit3Ponderation * 0.34).toFixed(2);

        const average = (unit1Ponderation * 0.33 + unit2Ponderation * 0.33 + unit3Ponderation * 0.34).toFixed(2);

        // Muestra los resultados en la página
        resultContainer.style.display = "block";
        document.getElementById("student-info").textContent = `Estudiante: ${studentName}`;
        document.getElementById("unit-scores").innerHTML = `
            <tr>
                <th>Unidad</th>
                <th>Ponderación</th>
            </tr>
            <tr>
                <td>Unidad 1</td>
                <td>${unit1Ponderation}</td>
            </tr>
            <tr>
                <td>Unidad 2</td>
                <td>${unit2Ponderation}</td>
            </tr>
            <tr>
                <td>Unidad 3</td>
                <td>${unit3Ponderation}</td>
            </tr>
            <tr>
                <th