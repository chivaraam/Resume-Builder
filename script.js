document.addEventListener("DOMContentLoaded", () => {

const generateBtn = document.getElementById("generateBtn");
const previewContent = document.getElementById("preview-content");
const print = document.getElementById("print");

generateBtn.addEventListener("click", generateResume);

  function generateResume() {

    const nameOfPerson = document.getElementById("nameOfPerson").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const degree = document.getElementById("degree").value;
    const university = document.getElementById("university").value;
    const dateOfGraduation = document.getElementById("dateOfGraduation").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;

    const resumeHTML = `
      
      <h2>${nameOfPerson}</h2>
      <hr>
      <p>${email} || ${phone} || ${location}</p>
      <br>

      <h3>EDUCATION</h3>
      <p>${degree} - ${university}</p>
      <p>${dateOfGraduation}</p>
      
      <h3>WORK EXPERIENCE</h3>
      <p>${jobTitle} at ${company}</p>

      <h3>SKILLS</h3>
      <p>${skills}</p>
    `;

    previewContent.innerHTML = resumeHTML;
  }

  print.onclick = () =>{
    window.print();
  }
});



  
