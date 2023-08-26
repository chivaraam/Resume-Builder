document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const previewContent = document.getElementById("preview-content");
  const print = document.getElementById("print");

  generateBtn.addEventListener("click", generateResume);

  function generateResume() {
    const name = document.getElementById("name").value;
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
      <h4>PERSONAL INFORMATION</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>

      <h4>EDUCATION</h4>
      <p>${degree} - ${university}</p>
      <p><strong>Date of Graduation:</strong> ${dateOfGraduation}</p>
      
      <h4>WORK EXPERIENCE</h4>
      <p>${jobTitle} at ${company}</p>
      
      <h4>SKILLS</h4>
      <p>${skills}</p>
    `;

    previewContent.innerHTML = resumeHTML;
  }

  print.onclick = () =>{
    window.print();
  }
});


  
