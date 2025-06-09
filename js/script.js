
// الانتقال بين النماذج فيي صفحات اللوقن
function showForm(type, clickedIcon) {
    const formGroups = {
      student: {
        show: "stdForm",
        hide: "parentForm",
        activeImg: "images/std-on.png",
        inactiveImg: "images/par-off.png",
        activeIcon: "icon-std",
        inactiveIcon: "icon-parent"
      },
      parent: {
        show: "parentForm",
        hide: "stdForm",
        activeImg: "images/par-on.png",
        inactiveImg: "images/std-off.png",
        activeIcon: "icon-parent",
        inactiveIcon: "icon-std"
      },
      teacher: {
        show: "teacherForm",
        hide: "adminForm",
        activeImg: "images/teacher.png",
        inactiveImg: "images/manager-off.png",
        activeIcon: "icon-teacher",
        inactiveIcon: "icon-admin"
      },
      admin: {
        show: "adminForm",
        hide: "teacherForm",
        activeImg: "images/manager.png",
        inactiveImg: "images/teacher-off.png",
        activeIcon: "icon-admin",
        inactiveIcon: "icon-teacher"
      }
    };
  
    // التأكد إن النوع صحيح
    if (!formGroups[type]) return;
  
    const group = formGroups[type];
    const showFormEl = document.getElementById(group.show);
    const hideFormEl = document.getElementById(group.hide);
    const activeIconImg = document.getElementById(group.activeIcon).querySelector("img");
    const inactiveIconImg = document.getElementById(group.inactiveIcon).querySelector("img");
  
    hideFormEl.style.display = "none";
    showFormEl.style.display = "block";
    showFormEl.classList.add("fade-in");
  
    activeIconImg.src = group.activeImg;
    inactiveIconImg.src = group.inactiveImg;
  
    document.querySelectorAll('.icon, .login-icon').forEach(icon => {
      icon.classList.remove('active-icon');
    });
    clickedIcon.classList.add('active-icon');
  }
  


