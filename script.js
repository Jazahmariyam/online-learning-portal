
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkModeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const search = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const courseList = ['Web Development', 'Data Science', 'AI & ML', 'Cybersecurity', 'Graphic Design', 'Photography'];

function showSuggestions() {
  const query = search.value.toLowerCase();
  suggestions.innerHTML = '';
  if (query) {
    const filteredCourses = courseList.filter(course => course.toLowerCase().includes(query));
    filteredCourses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      li.addEventListener('click', () => {
        search.value = course;
        suggestions.innerHTML = '';
      });
      suggestions.appendChild(li);
    });
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
}


const courses = [
  { title: "Web Development", img: "images/web.jpg", description: "Learn to build websites.", hours: 40, duration: "2 months" },
  { title: "Data Science", img: "images/data.jpg", description: "Analyze data effectively.", hours: 50, duration: "3 months" },
  { title: "AI & ML", img: "images/ml.jpg", description: "Master AI & ML concepts.", hours: 60, duration: "4 months" },
  { title: "Cybersecurity", img: "images/security.jpg", description: "Protect systems and data.", hours: 45, duration: "2.5 months" },
  { title: "Graphic Design", img: "images/design.jpg", description: "Design stunning visuals.", hours: 35, duration: "2 months" },
  { title: "Photography", img: "images/photo.jpg", description: "Capture perfect moments.", hours: 20, duration: "1 month" },
  { title: "Digital Marketing", img: "images/digital.jpg", description: "Grow your brand online.", hours: 30, duration: "1.5 months" },
  { title: "Programming Basics", img: "images/basic.jpg", description: "Start coding today.", hours: 25, duration: "1 month" },
  { title: "Blockchain Basics", img: "images/block.jpg", description: "Understand blockchain tech.", hours: 40, duration: "2 months" },
  { title: "Creative Writing", img: "images/writing.jpg", description: "Write compelling stories.", hours: 30, duration: "1.5 months" },
];

const courseListContainer = document.getElementById('courseList');
let visibleCourses = 3;

function loadCourses() {
  courseListContainer.innerHTML = '';
  courses.slice(0, visibleCourses).forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Hours:</strong> ${course.hours} | <strong>Duration:</strong> ${course.duration}</p>
    `;
    courseListContainer.appendChild(card);
  });
}

function loadMoreCourses() {
  visibleCourses = courses.length;
  loadCourses();
  document.getElementById('loadMore').style.display = 'none';
}

function highlightSection() {
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.menu-items a[href="#courses"]').classList.add('highlight');
  setTimeout(() => {
    document.querySelector('.menu-items a[href="#courses"]').classList.remove('highlight');
  }, 2000);
}

window.onload = () => {
  loadCourses();
};

function highlightMyLearning() {
    const myLearningSection = document.getElementById('mylearning');
    myLearningSection.scrollIntoView({ behavior: 'smooth' });
    myLearningSection.style.backgroundColor = '#e8f5e9'; 
  
    setTimeout(() => {
      myLearningSection.style.backgroundColor = '#f4f8fa';
    }, 2000);
  }
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const startDate = document.getElementById('startDate').value;
  
    if (!name || !email || !course || !startDate) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert('Name must contain only letters and spaces.');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Registration successful!');
    this.reset();
  });
  