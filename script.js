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
      <style>
      p, h4{
        font-size: 20px;
      }
      p{
        margin: 20px;
      }
      </style>
      <div class="pdf">
      <h4>PERSONAL  INFORMATION</h4>
      <p><strong>Name:</strong> ${nameOfPerson}</p>
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
      </div>
    `;

    previewContent.innerHTML = resumeHTML;
  }

  print.onclick = () =>{
    window.print();
  }
});

function convertHTMLtoPDF() {
  const { jsPDF } = window.jspdf;

  let doc = new jsPDF('p', 'px', [800,800]);
  let pdfjs = document.querySelector('#preview-content');

  doc.html(pdfjs, {
      callback: function(doc) {
          doc.save("newpdf.pdf");
      },
      x: 12,
      y: 12
  });               
}  


  
