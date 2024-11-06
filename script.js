
//  Javascrip for the new and Random Jobs Functionality   
        // Job categories and sample jobs
const jobCategories = ['Recent Jobs', 'Featured Jobs', 'Freelancer', 'Part Time', 'Full Time'];

const sampleJobs = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'Web Technology pvt.Ltd',
    location: 'Oakridge Lane Richardson',
    salary: '$1000-1200/hr',
    experience: '1 - 2 years',
    type: 'Freelancer',
    time: 'Ungently',
    minute: '3 min ago',
    logo: 'assets/company1-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Business Associate',
    company: 'Pixel Technology pvt.Ltd',
    location: 'Dodge City, Louisiana',
    salary: '$800-1800/hr',
    experience: '0 - 1 years',
    type: 'Freelancer',
    time: 'Ungently',
    minute: '3 min ago',
    logo: 'assets/company1-3.png',
    featured: false,
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'Phoenix, Arizona',
    salary: '$1500-2400/hr',
    experience: '4+ years',
    type: 'Freelancer',
    time: 'Ungently',
    minute: '3 min ago',
    logo: 'assets/company1-4.png',
    featured: false,
  },
  {
    id: 4,
    title: 'Product Director',
    company: 'Creative Agency',
    location: 'Escondido, California',
    salary: '$1500-2400/hr',
    experience: '2 - 3 years',
    type: 'Freelancer',
    time: 'Ungently',
    minute: '3 min ago',
    logo: 'assets/company1-5.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York City, NY',
    salary: '$2000-3000/m',
    experience: '3+ years',
    type: 'Part Time',
    minute: '3 min ago',
    logo: 'assets/company1-6.png',
    featured: false,
  },
  {
    id: 6,
    title: 'Freelance Writer',
    company: 'Content Creators Inc.',
    location: 'Remote',
    salary: '$1000-1500/m',
    experience: '1+ years',
    type: 'Part Time',
    minute: '3 min ago',
    logo: 'assets/company1-8.jpg',
    featured: true,
  },
  {
    id: 7,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York City, NY',
    salary: '$2000-3000/m',
    experience: '3+ years',
    type: 'Part Time',
    minute: '3 min ago',
    logo: 'assets/company1-7.png',
    featured: false,
  },
  {
    id: 8,
    title: 'Web Developer',
    company: 'Web Technology pvt.Ltd',
    location: 'Oakridge Lane Richardson',
    salary: '$1000-1200/m',
    experience: '1 - 2 years',
    type: 'Part Time',
    minute: '3 min ago',
    logo: 'assets/company1-2.png',
    featured: true,
  },
  {
    id: 9,
    title: 'Business Associate',
    company: 'Pixel Technology pvt.Ltd',
    location: 'Dodge City, Louisiana',
    salary: '$800-1800/m',
    experience: '0 - 1 years',
    type: 'Full Time',
    minute: '3 min ago',
    logo: 'assets/company1-3.png',
    featured: false,
  },
  {
    id: 10,
    title: 'Digital Marketing Manager',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'Phoenix, Arizona',
    salary: '$1500-2400/m',
    experience: '4+ years',
    type: 'Full Time',
    minute: '3 min ago',
    logo: 'assets/company1-4.png',
    featured: false,
  },
  {
    id: 11,
    title: 'Product Director',
    company: 'Creative Agency',
    location: 'Escondido, California',
    salary: '$1500-2400/m',
    experience: '2 - 3 years',
    type: 'Full Time',
    minute: '3 min ago',
    logo: 'assets/company1-5.jpg',
    featured: true,
  },
  {
    id: 12,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York City, NY',
    salary: '$2000-3000/m',
    experience: '3+ years',
    type: 'Full Time',
    minute: '3 min ago',
    logo: 'assets/company1-6.png',
    featured: false,
  },
  {
    id: 13,
    title: 'Freelance Writer',
    company: 'Content Creators Inc.',
    location: 'Remote',
    salary: '$1000-1500/m',
    experience: '1+ years',
    type: 'Featured Jobs',
    minute: '3 min ago',
    logo: 'assets/company1-7.png',
    featured: false,
  },
  {
    id: 14,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York City, NY',
    salary: '$2000-3000/m',
    experience: '3+ years',
    type: 'Featured Jobs',
    minute: '3 min ago',
    logo: 'assets/company1-8.jpg',
    featured: false,
  },
  {
    id: 15,
    title: 'Web Developer',
    company: 'Web Technology pvt.Ltd',
    location: 'Oakridge Lane Richardson',
    salary: '$1000-1200/m',
    experience: '1 - 2 years',
    type: 'Featured Jobs',
    minute: '3 min ago',
    logo: 'assets/company1-2.png',
    featured: false,
  },
  {
    id: 16,
    title: 'Business Associate',
    company: 'Pixel Technology pvt.Ltd',
    location: 'Dodge City, Louisiana',
    salary: '$800-1800/m',
    experience: '0 - 1 years',
    type: 'Featured Jobs',
    minute: '3 min ago',
    logo: 'assets/company1-3.png',
    featured: false,
  },
//   {
//     id: 17,
//     title: 'Digital Marketing Manager',
//     company: 'Jobcy Technology Pvt.Ltd',
//     location: 'Phoenix, Arizona',
//     salary: '$1500-2400/m',
//     experience: '4+ years',
//     type: 'Recent Jobs',
//     logo: 'https://s2.googleusercontent.com/s2/favicons?domain=line.me',
//     featured: true,
//   },
//   {
//     id: 18,
//     title: 'Product Director',
//     company: 'Creative Agency',
//     location: 'Escondido, California',
//     salary: '$1500-2400/m',
//     experience: '2 - 3 years',
//     type: 'Recent Jobs',
//     logo: 'https://s2.googleusercontent.com/s2/favicons?domain=uber.com',
//     featured: false,
//   },
//   {
//     id: 19,
//     title: 'UX Designer',
//     company: 'Design Studio',
//     location: 'New York City, NY',
//     salary: '$2000-3000/m',
//     experience: '3+ years',
//     type: 'Recent Jobs',
//     logo: 'https://s2.googleusercontent.com/s2/favicons?domain=dribbble.com',
//     featured: false,
//   },
//   {
//     id: 20,
//     title: 'Freelance Writer',
//     company: 'Content Creators Inc.',
//     location: 'Remote',
//     salary: '$1000-1500/m',
//     experience: '1+ years',
//     type: 'Recent Jobs',
//     logo: 'https://s2.googleusercontent.com/s2/favicons?domain=medium.com',
//     featured: true,
//   }
  
  // Add more jobs if needed
];

// Set initial active category and load jobs
let activeCategory = 'Recent Jobs';

window.onload = () => {
  filterJobs('Recent Jobs'); // Display 'Recent Jobs' on initial load
};

// Function to filter and display up to 5 jobs based on category
function filterJobs(category) {
  activeCategory = category;

  // Update active button class
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.innerText === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter jobs based on category and limit to 5 jobs
  let filteredJobs;
  
  // If the category is 'Recent Jobs', just display the first 5 jobs as an example
  if (category === 'Recent Jobs') {
    filteredJobs = sampleJobs.slice(0, 4);
  } else {
    // Otherwise, filter jobs by their type (category) and display up to 5
    filteredJobs = sampleJobs.filter(job => job.type === category).slice(0, 4);
  }

  displayJobs(filteredJobs);
}

// Function to display the job listings
function displayJobs(jobs) {
  const jobListings = document.getElementById('job-listings');
  jobListings.innerHTML = ''; // Clear previous jobs

  // Generate job cards dynamically
  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    jobCard.innerHTML = `
      <div class="job-header">
        <div><img src="${job.logo}" alt="${job.company}"></div>
        <div>
          <h3 class="job-title">${job.title}</h3>
          <p class="job-company">${job.company}</p>
        </div>
        <div><p class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p></div>
        <div><p class="job-salary">${job.salary}</p></div>
        <div><span class="job-type">${job.type}</span></div>
        <div><span class="job-type">${job.time}</span></div>

        
        ${job.featured ? '<span class="featured">★</span>' : ''}
      </div>
      
      <div class="job-footer-container">
        <p>Experience: ${job.experience}</p>
        <span class="job-post-time"><i class="fas fa-clock"></i> ${job.minute}</span>
      <div class="job-footer">
        <a href="#" class="apply-btn">Apply Now »</a>
        </div>
      </div>
    `;
    jobListings.appendChild(jobCard);
  });
}
//  Javascrip for the new and Random Jobs Functionality End