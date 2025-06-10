
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


//   اظهار واخفاء السايد بار من خلال الضغط على اييقونة القائمة


  document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const mainContent = document.getElementById("mainContent");

    function toggleSidebar() {
      const isHidden = sidebar.classList.contains("hidden");
      sidebar.classList.toggle("hidden");
      mainContent.classList.toggle("with-sidebar", isHidden);
      mainContent.classList.toggle("no-sidebar", !isHidden);
    }

    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      toggleSidebar();
    });

    closeBtn.addEventListener("click", function() {
      sidebar.classList.add("hidden");
      mainContent.classList.remove("with-sidebar");
      mainContent.classList.add("no-sidebar");
    });
  });


//   اظهار واخفاء السايد بار عند تصغير الشاشة

  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.createElement("div");
    const toggleBtn = document.getElementById("sidebarToggle");

    // إنشاء الـ overlay إذا مش موجود
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    // إظهار السايدبار والـ overlay
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    // إغلاق عند الضغط على الخلفية
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });



// كلاس ال active على السايد بار

  document.querySelectorAll('.sidebar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
