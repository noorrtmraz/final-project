
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


  
  document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("sidebarToggle");
    const sidebarStd = document.getElementById("sidebarStd");
    const closeBtn = document.getElementById("closeSidebar");
    const mainContent = document.getElementById("mainContent");

    function toggleSidebar() {
      const isHidden = sidebarStd.classList.contains("hidden");
      sidebarStd.classList.toggle("hidden");
      mainContent.classList.toggle("with-sidebarStd", isHidden);
      mainContent.classList.toggle("no-sidebarStd", !isHidden);
    }

    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      toggleSidebar();
    });

    closeBtn.addEventListener("click", function() {
      sidebarStd.classList.add("hidden");
      mainContent.classList.remove("with-sidebarStd");
      mainContent.classList.add("no-sidebarStd");
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


  document.addEventListener("DOMContentLoaded", function () {
    const sidebarStd = document.querySelector(".sidebarStd");
    const overlayStd = document.createElement("div");
    const toggleBtn = document.getElementById("sidebarToggle");

    // إنشاء الـ overlay إذا مش موجود
    overlayStd.id = "overlayStd";
    document.body.appendChild(overlayStd);

    // إظهار السايدبار والـ overlay
    toggleBtn.addEventListener("click", function () {
      sidebarStd.classList.toggle("active");
      overlayStd.classList.toggle("active");
    });

    // إغلاق عند الضغط على الخلفية
    overlay.addEventListener("click", function () {
      sidebarStd.classList.remove("active");
      overlayStd.classList.remove("active");
    });
  });



// كلاس ال active على السايد بار

  document.querySelectorAll('.sidebar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });




  // التقويم في سايد بار الطالب

  
 document.addEventListener("DOMContentLoaded", function () {
  const miniMonthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const miniWeekDays = ["ح", "ن", "ث", "ر", "خ", "ج", "س"];
  let miniDate = new Date();

  function renderMiniCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const header = document.getElementById("mini-month-year");
    const grid = document.getElementById("mini-calendar-grid");

    if (!header || !grid) return; // تأكيد وجود العناصر

    header.textContent = `${miniMonthNames[month]} ${year}`;
    grid.innerHTML = "";

    miniWeekDays.forEach(d => {
      const day = document.createElement("div");
      day.innerHTML = `<strong>${d}</strong>`;
      grid.appendChild(day);
    });

    for (let i = 0; i < firstDay; i++) {
      grid.appendChild(document.createElement("div"));
    }

    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("div");
      cell.textContent = day;

      if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        cell.classList.add("today");
      }

      grid.appendChild(cell);
    }
  }

  function changeMonth(offset) {
    miniDate.setMonth(miniDate.getMonth() + offset);
    renderMiniCalendar(miniDate);
  }

  renderMiniCalendar(miniDate);
});



  // المخططات في صفحة علامات الطلاب عند المعلم 
document.addEventListener("DOMContentLoaded", function () {

   const barData = {
      labels: ['0-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
      datasets: [{
        label: 'عدد الطلاب',
        data: [2, 5, 8, 4,9,3],
        backgroundColor: '#589F43',
        borderRadius: 0
      }]
    };

    const barOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'توزيع الدرجات'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'الفئة' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'عدد الطلاب' }
        }
      }
    };

    // بيانات مخطط الدائري
    const donutData = {
      labels: ['قدموا', 'لم يُقدموا', 'ناجحين', 'راسبين'],
      datasets: [{
        data: [12, 3, 9, 3],
        backgroundColor: ['#003c9dff', '#ff9800', '#589F43', '#d35000']
      }]
    };

    const donutOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'حالة الطلاب'
        }
      },
      cutout: '60%'
    };

    // إنشاء الرسومات
    
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: barData,
      options: barOptions
    });

    new Chart(document.getElementById('donutChart'), {
      type: 'doughnut',
      data: donutData,
      options: donutOptions
    });

  });


  // ------------------------------------
  // اسئلة الاختبار 
  const questionsPerPage = 5;
  const totalQuestions = 10;
  let currentPage = 1;

  // إنشاء أزرار الأرقام الجانبية
  const btnContainer = document.getElementById("questionNumbers");
  for (let i = 1; i <= totalQuestions; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-sm", "question-number-btn");
    
    btn.textContent = i;
    btn.onclick = () => {
      const page = Math.ceil(i / questionsPerPage);
      showPage(page);
    };
    btnContainer.appendChild(btn);
  }

  function showPage(page) {
    const start = (page - 1) * questionsPerPage + 1;
    const end = Math.min(start + questionsPerPage - 1, totalQuestions);

    // إخفاء كل الأسئلة
    for (let i = 1; i <= totalQuestions; i++) {
      document.getElementById(`question-${i}`).style.display = "none";
    }

    // عرض أسئلة الصفحة الحالية
    for (let i = start; i <= end; i++) {
      document.getElementById(`question-${i}`).style.display = "block";
    }

    // تمييز الأزرار الخاصة بالصفحة
    const allBtns = document.querySelectorAll(".question-number-btn");
    allBtns.forEach((btn, index) => {
      const questionNumber = index + 1;
      const isInPage = questionNumber >= start && questionNumber <= end;
      btn.classList.toggle("active", isInPage);
    });

    currentPage = page;
  }

  // التالي والسابق
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage * questionsPerPage < totalQuestions) {
      showPage(currentPage + 1);
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  window.onload = () => {
    showPage(1);
  };



  // ---------------------------------------

  // عداد الوقت 

  const timerElement = document.getElementById("timer");
  let durationInMinutes = parseInt(timerElement.dataset.time);
  let time = durationInMinutes * 60;

  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      endExam(); // انتهى الوقت
    }

    time--;
  }

  function endExam() {
    alert("انتهى الوقت! سيتم تسليم الاختبار الآن.");
  }

  updateTimer(); // عرض أولي
  const timerInterval = setInterval(updateTimer, 1000);





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


// القائمة المنسدلة للطلاب فيي الساييد بار
document.addEventListener("DOMContentLoaded", function () {
  const toggleLink = document.querySelector(".dropdown-toggle-custom");
  const menu = document.querySelector("#studentsMenu");
  const icon = toggleLink.querySelector(".toggle-icon");

  toggleLink.addEventListener("click", function (e) {
    e.preventDefault();

    if (menu.style.maxHeight) {
      // القائمة مفتوحة → أغلقها
      menu.style.maxHeight = null;
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      // القائمة مغلقة → افتحها
      menu.style.maxHeight = menu.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});




  // صفحة المحادثات
 
    const toggleBtn = document.getElementById('sidebarToggle');
  const chatList = document.querySelector('.chat-list');
  const messageArea = document.querySelector('.main-message-area');

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();

    chatList.classList.toggle('slide-hidden');
    messageArea.classList.toggle('expanded');
  });

// بعرض قائمة الرسائل عند تصغير الشاشة 
   function toggleChatList() {
    const chatList = document.querySelector('.chat-list');
    chatList.classList.toggle('active');
  
  }




  const chatItems = document.querySelectorAll(".chat-item");
  const msgStart = document.querySelector(".msg-start");
  const conversation = document.querySelector(".conversation");

  chatItems.forEach(item => {
    item.addEventListener("click", () => {
      // إظهار المحادثة
      msgStart.style.display = "none";
      conversation.style.display = "block";

      // تمييز الرسالة المختارة
      chatItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      // (اختياري) تحديث الرسائل أو الاسم حسب العنصر المختار
    });
  });


  // الرسائل عند الطالب 
  
  const chatItemsStd = document.querySelectorAll(".chat-item");
  const msgStartStd = document.querySelector(".msg-start-std");
  const conversationStd = document.querySelector(".conversation-std");

  chatItemsStd.forEach(item => {
    item.addEventListener("click", () => {
      // إظهار المحادثة
      msgStartStd.style.display = "none";
      conversationStd.style.display = "block";

      // تمييز الرسالة المختارة
      chatItemsStd.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      // (اختياري) تحديث الرسائل أو الاسم حسب العنصر المختار
    });
  });



  // المحادثات عند ولي الأمر

function openChatPopup(name) {
  document.getElementById("chatUserName").innerText = name;
  document.getElementById("chatPopup").style.display = "block";

  // إغلاق نافذة الرسائل
  const offcanvasEl = document.getElementById('messagesOffcanvas');
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (bsOffcanvas) {
    bsOffcanvas.hide();
  }
}

  function closeChatPopup() {
    document.getElementById("chatPopup").style.display = "none";
  }

 function sendMessage(event) {
  if (event.key === "Enter") {
    const input = event.target;
    const message = input.value.trim();
    if (message) {
      const chatBody = document.getElementById("chatBody");

      // رسالة المستخدم
      const userMsg = document.createElement("div");
      userMsg.className = "chat-msg-user";
      userMsg.textContent = message;
      chatBody.appendChild(userMsg);

      input.value = "";

      // رد تلقائي بعد ثانية
      setTimeout(() => {
        const botReply = document.createElement("div");
        botReply.className = "chat-msg-reply";
        botReply.textContent = "شكراً لرسالتك!";
        chatBody.appendChild(botReply);

        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);

      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
}









   document.querySelectorAll('.unit-header').forEach(header => {
    header.addEventListener('click', () => {
      const unit = header.parentElement;
      unit.classList.toggle('open');
    });
  });






  // المخططات في صفحة علامات الطلاب عند المعلم 
document.addEventListener("DOMContentLoaded", function () {

   const barData = {
      labels: ['0-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
      datasets: [{
        label: 'عدد الطلاب',
        data: [2, 5, 8, 4,9,3],
        backgroundColor: '#589F43',
        borderRadius: 0
      }]
    };

    const barOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'توزيع الدرجات'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'الفئة' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'عدد الطلاب' }
        }
      }
    };

    // بيانات مخطط الدائري
    const donutData = {
      labels: ['قدموا', 'لم يُقدموا', 'ناجحين', 'راسبين'],
      datasets: [{
        data: [12, 3, 9, 3],
        backgroundColor: ['#003c9dff', '#ff9800', '#589F43', '#d35000']
      }]
    };

    const donutOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'حالة الطلاب'
        }
      },
      cutout: '60%'
    };

    // إنشاء الرسومات
    
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: barData,
      options: barOptions
    });

    new Chart(document.getElementById('donutChart'), {
      type: 'doughnut',
      data: donutData,
      options: donutOptions
    });

  });


  

  
  