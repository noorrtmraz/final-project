
  function showForm(type, clickedIcon) {
    const studentForm = document.getElementById("stdForm");
    const parentForm = document.getElementById("parentForm");
    const iconStd = document.getElementById("icon-std").querySelector("img");
    const iconParent = document.getElementById("icon-parent").querySelector("img");

    if (type === "student") {
      studentForm.style.display = "block";
      parentForm.style.display = "none";
      iconStd.src = "images/std-on.png";
      iconParent.src = "images/par-off.png";
    } else if (type === "parent") {
      studentForm.style.display = "none";
      parentForm.style.display = "block";
      iconStd.src = "images/std-off.png";
      iconParent.src = "images/par-on.png";
    }
  }
