const depts = [];
const facilities = [];
const images = [];

const deptContainer = document.querySelector('.department-box');
const facilityContainer = document.querySelector('.facility-container');
const imageContainer = document.querySelector('.img-container');

function renderDept() {
  deptContainer.innerHTML = '';

  depts.map(
    (dept, indx) =>
      (deptContainer.innerHTML += `<p><span style="cursor: pointer;" onclick="removeDept(${indx})">&times;</span>${dept}</p>`)
  );
}

function renderFacilities() {
  facilityContainer.innerHTML = '';

  facilities.map(
    (fac, indx) =>
      (facilityContainer.innerHTML += `
    <div class="facility-box">
      <div class="header">
        <div>${fac.facIcon || 'ICON'}</div>
        <div onclick="removeFacility(${indx})" style="font-size: larger;cursor:pointer;">&times;</div>
      </div>
      <div class="body">
        <h4>${fac.facName}</h4>
        <p>${fac.facDesc}</p>
      </div>
    </div>
    `)
  );
}

function addDept() {
  depts.push(hospitalForm.department.value);
  hospitalForm.department.value = '';
  renderDept();
}

function addFacility() {
  const facName = hospitalForm.facName.value;
  const facIcon = hospitalForm.facIcon.value;
  const facDesc = hospitalForm.facDesc.value;
  facilities.push({ facName, facIcon, facDesc });

  hospitalForm.facName.value = '';
  hospitalForm.facIcon.value = '';
  hospitalForm.facDesc.value = '';

  renderFacilities();
}

function removeDept(indx) {
  depts.splice(indx, 1);
  renderDept();
}

function removeFacility(indx) {
  facilities.splice(indx, 1);
  renderFacilities();
}

function renderImages() {
  imageContainer.innerHTML = '';
  images.map(
    (img, indx) =>
      (imageContainer.innerHTML += `
    <div class="single-img">
      <img src="${img}" alt="" />
      <div onclick="removeImage(${indx})" style="cursor:pointer;">&times;</div>
    </div>
    `)
  );
}
function addMainImage(event) {
  const imgUrl = URL.createObjectURL(event.target.files[0]);
  images.push(imgUrl);
  renderImages();
}
function addMoreImages(event) {
  const mImages = [];
  mImages.push(event.target.files);
  for (let i = 0; i < mImages[0].length; i++) {
    images.push(URL.createObjectURL(mImages[0][i]));
  }
  renderImages();
}

function removeImage(indx) {
  images.splice(indx, 1);
  renderImages();
}
