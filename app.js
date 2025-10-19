// Exhibition Data
const exhibitionData = {
  exhibition_info: {
    title: '台灣反共愛國文學展覽',
    subtitle: '歷史、記憶與文學的對話 (1950-1987)',
    description: '系統性呈現台灣戰後至解嚴前的反共愛國文學發展歷程',
    period: '1950-1987年',
    visit_time: '約100分鐘'
  },
  
  exhibition_zones: [
    {
      id: 1,
      name: '序幕：時代的轉折',
      period: '1945-1950',
      theme: '1949年政權轉移、冷戰格局、反共國策',
      exhibits: '歷史照片、政策文件、時代背景說明',
      highlights: '政府文告、文藝政策綱領',
      time: '10分鐘',
      description: '透過多媒體影像重現1945-1950年代的歷史轉折，展示國民政府遷台背景與反共國策形成過程'
    },
    {
      id: 2,
      name: '國族想像與文學書寫',
      period: '1950-1960',
      theme: '國族認同、反共意識形態、愛國主義文學',
      exhibits: '代表作品、作家手稿、文學評論',
      highlights: '王藍《藍與黑》、潘人木作品',
      time: '20分鐘',
      description: '聚焦1950年代反共文學的主要創作主題，展示國族認同的文學建構與愛國主義敘事'
    },
    {
      id: 3,
      name: '戰鬥文藝的實踐',
      period: '1950-1970',
      theme: '軍中文學、戰鬥文藝政策、作家與政治',
      exhibits: '軍中文學作品、文藝政策文件、作家照片',
      highlights: '朱西甯《狼煙》、司馬中原作品',
      time: '15分鐘',
      description: '探討戰鬥文藝政策下的文學生產機制，呈現軍中文學的發展與特色'
    },
    {
      id: 4,
      name: '離散與鄉愁',
      period: '1960-1980',
      theme: '大陸記憶、家國情懷、身份認同',
      exhibits: '懷鄉文學作品、書信、日記、回憶錄',
      highlights: '於梨華《又見棕櫚又見棕櫚》、白先勇《台北人》',
      time: '20分鐘',
      description: '聚焦反共文學中的懷鄉主題，探討離散經驗如何形塑文學想像與身份認同'
    },
    {
      id: 5,
      name: '文藝統制與創作空間',
      period: '1950-1987',
      theme: '文藝審查、文藝刊物、創作限制與突破',
      exhibits: '禁書名單、審查制度說明、文藝刊物、地下文學',
      highlights: '《自由中國》、《文星》、現代詩社團',
      time: '20分鐘',
      description: '呈現威權時期的文藝審查制度，以及作家如何在限制中尋求突破與創新'
    },
    {
      id: 6,
      name: '尾聲：歷史的反思',
      period: '1987-現在',
      theme: '文學史定位、當代反思、歷史評價',
      exhibits: '文學史資料、學術評論、當代討論',
      highlights: '當代文學史論述、學術研究成果',
      time: '15分鐘',
      description: '引導觀眾思考反共文學的歷史定位與當代意義，呈現多元觀點與學術反思'
    }
  ],
  
  key_writers: [
    { name: '王藍', work: '《藍與黑》', period: '1950年代', genre: '長篇小說' },
    { name: '潘人木', work: '《蓮漪表妹》', period: '1950年代', genre: '小說' },
    { name: '姚一葦', work: '《旋風》', period: '1950年代', genre: '戲劇' },
    { name: '朱西甯', work: '《狼煙》', period: '1960年代', genre: '軍中文學' },
    { name: '司馬中原', work: '短篇小說集', period: '1960年代', genre: '小說' },
    { name: '白先勇', work: '《台北人》', period: '1970年代', genre: '短篇小說集' },
    { name: '於梨華', work: '《又見棕櫚又見棕櫚》', period: '1970年代', genre: '長篇小說' },
    { name: '鄭愁予', work: '《錯誤》', period: '1960年代', genre: '現代詩' }
  ],
  
  key_exhibits: [
    { id: 'A-001', name: '1949年《中央日報》政府遷台報導', category: '歷史文獻', zone: '序幕', importance: '★★★' },
    { id: 'A-002', name: '《戰鬥文藝政策綱領》原件', category: '政策文件', zone: '序幕', importance: '★★★' },
    { id: 'B-001', name: '王藍《藍與黑》初版本', category: '文學作品', zone: '第一展區', importance: '★★★' },
    { id: 'B-002', name: '潘人木《蓮漪表妹》手稿', category: '手稿', zone: '第一展區', importance: '★★★' },
    { id: 'C-001', name: '朱西甯《狼煙》初版', category: '文學作品', zone: '第二展區', importance: '★★★' },
    { id: 'C-002', name: '《軍中文藝》創刊號', category: '刊物', zone: '第二展區', importance: '★★★' },
    { id: 'D-001', name: '白先勇《台北人》初版', category: '文學作品', zone: '第三展區', importance: '★★★' },
    { id: 'E-001', name: '《自由中國》禁刊文件', category: '歷史文獻', zone: '第四展區', importance: '★★★' },
    { id: 'E-002', name: '《文星》雜誌合訂本', category: '刊物', zone: '第四展區', importance: '★★★' }
  ],
  
  activities: [
    { type: '專題講座', name: '戰後台灣文學史專題', frequency: '每月1場', duration: '2小時' },
    { type: '專題講座', name: '反共文學的時代脈絡', frequency: '每月1場', duration: '2小時' },
    { type: '工作坊', name: '文學創作體驗：懷鄉書寫', frequency: '每月2場', duration: '3小時' },
    { type: '工作坊', name: '詩歌朗誦與創作工作坊', frequency: '每月2場', duration: '3小時' },
    { type: '導覽活動', name: '策展人導覽', frequency: '每週3場', duration: '1.5小時' },
    { type: '文學朗讀會', name: '經典作品朗讀會', frequency: '每月1場', duration: '1.5小時' }
  ],
  
  visit_info: {
    total_time: '100分鐘',
    zones_count: 6,
    exhibits_count: 18,
    budget: '1,190萬元',
    preparation_time: '10個月'
  }
};

// Application State
let currentZone = 0;
let currentSection = 'home';
let filteredWriters = [...exhibitionData.key_writers];
let filteredExhibits = [...exhibitionData.key_exhibits];

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('zone-modal');
const modalClose = document.getElementById('modal-close');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeHamburgerMenu();
  initializeScrollEffects();
  renderZones();
  renderWriters();
  renderExhibits();
  renderActivities();
  initializeFilters();
  initializeModal();
});

// Navigation Functions
function initializeNavigation() {
  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = this.getAttribute('data-section');
      navigateToSection(targetSection);
    });
  });
  
  // Handle button clicks
  document.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-section')) {
      e.preventDefault();
      const targetSection = e.target.getAttribute('data-section');
      navigateToSection(targetSection);
    }
  });
  
  // Set initial active section
  updateActiveSection('home');
}

function navigateToSection(sectionId) {
  // Hide all sections
  sections.forEach(section => section.classList.remove('active'));
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    updateActiveNavLink(sectionId);
    
    // Close mobile menu if open
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    
    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateActiveNavLink(sectionId) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    }
  });
}

function updateActiveSection(sectionId) {
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  updateActiveNavLink(sectionId);
  currentSection = sectionId;
}

// Hamburger Menu
function initializeHamburgerMenu() {
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
}

// Scroll Effects
function initializeScrollEffects() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Zone Functions
function renderZones() {
  const zonesGrid = document.getElementById('zones-grid');
  if (!zonesGrid) return;
  
  zonesGrid.innerHTML = exhibitionData.exhibition_zones.map(zone => `
    <div class="zone-card" data-zone-id="${zone.id}">
      <div class="zone-header">
        <div class="zone-number">${zone.id}</div>
        <h3 class="zone-title">${zone.name}</h3>
        <span class="zone-period">${zone.period}</span>
      </div>
      <div class="zone-content">
        <div class="zone-theme">${zone.theme}</div>
        <p class="zone-description">${zone.description}</p>
        <div class="zone-meta">
          <span class="zone-time">參觀時間：${zone.time}</span>
          <span class="zone-highlights">${zone.highlights}</span>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add click listeners to zone cards
  document.querySelectorAll('.zone-card').forEach(card => {
    card.addEventListener('click', function() {
      const zoneId = parseInt(this.getAttribute('data-zone-id'));
      showZoneModal(zoneId);
    });
  });
  
  // Initialize zone navigation
  initializeZoneNavigation();
}

function initializeZoneNavigation() {
  const prevBtn = document.getElementById('prev-zone');
  const nextBtn = document.getElementById('next-zone');
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => navigateZone('prev'));
    nextBtn.addEventListener('click', () => navigateZone('next'));
    updateZoneNavigation();
  }
}

function navigateZone(direction) {
  const maxZones = exhibitionData.exhibition_zones.length;
  
  if (direction === 'prev' && currentZone > 0) {
    currentZone--;
  } else if (direction === 'next' && currentZone < maxZones - 1) {
    currentZone++;
  }
  
  updateZoneNavigation();
  
  // Optionally scroll to the current zone or show it
  const zoneCard = document.querySelector(`[data-zone-id="${currentZone + 1}"]`);
  if (zoneCard) {
    zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function updateZoneNavigation() {
  const prevBtn = document.getElementById('prev-zone');
  const nextBtn = document.getElementById('next-zone');
  
  if (prevBtn && nextBtn) {
    prevBtn.disabled = currentZone === 0;
    nextBtn.disabled = currentZone === exhibitionData.exhibition_zones.length - 1;
  }
}

// Modal Functions
function initializeModal() {
  if (modalClose) {
    modalClose.addEventListener('click', closeZoneModal);
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeZoneModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeZoneModal();
    }
  });
}

function showZoneModal(zoneId) {
  const zone = exhibitionData.exhibition_zones.find(z => z.id === zoneId);
  if (!zone) return;
  
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  if (modalTitle && modalBody) {
    modalTitle.textContent = `${zone.id}. ${zone.name}`;
    
    modalBody.innerHTML = `
      <div class="modal-zone-details">
        <div class="modal-zone-meta">
          <span class="modal-zone-period"><strong>時期：</strong>${zone.period}</span>
          <span class="modal-zone-time"><strong>參觀時間：</strong>${zone.time}</span>
        </div>
        
        <div class="modal-zone-section">
          <h4>主題</h4>
          <p>${zone.theme}</p>
        </div>
        
        <div class="modal-zone-section">
          <h4>展覽內容</h4>
          <p>${zone.description}</p>
        </div>
        
        <div class="modal-zone-section">
          <h4>展品類型</h4>
          <p>${zone.exhibits}</p>
        </div>
        
        <div class="modal-zone-section">
          <h4>重點展品</h4>
          <p>${zone.highlights}</p>
        </div>
      </div>
    `;
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeZoneModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Writers Functions
function renderWriters() {
  const writersGrid = document.getElementById('writers-grid');
  if (!writersGrid) return;
  
  writersGrid.innerHTML = filteredWriters.map(writer => `
    <div class="writer-card" data-period="${writer.period}">
      <h3 class="writer-name">${writer.name}</h3>
      <div class="writer-work">${writer.work}</div>
      <div class="writer-meta">
        <span class="writer-period">${writer.period}</span>
        <span class="writer-genre">${writer.genre}</span>
      </div>
    </div>
  `).join('');
}

function filterWriters(period) {
  if (period === 'all') {
    filteredWriters = [...exhibitionData.key_writers];
  } else {
    filteredWriters = exhibitionData.key_writers.filter(writer => writer.period === period);
  }
  renderWriters();
}

// Exhibits Functions
function renderExhibits() {
  const exhibitsGrid = document.getElementById('exhibits-grid');
  if (!exhibitsGrid) return;
  
  exhibitsGrid.innerHTML = filteredExhibits.map(exhibit => `
    <div class="exhibit-card" data-zone="${exhibit.zone}" data-category="${exhibit.category}">
      <div class="exhibit-header">
        <div class="exhibit-id">${exhibit.id}</div>
        <h3 class="exhibit-name">${exhibit.name}</h3>
      </div>
      <div class="exhibit-content">
        <div class="exhibit-meta">
          <span class="exhibit-category">${exhibit.category}</span>
          <span class="exhibit-zone">${exhibit.zone}</span>
        </div>
        <div class="exhibit-importance">${exhibit.importance}</div>
      </div>
    </div>
  `).join('');
}

function filterExhibits() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const zoneFilter = document.getElementById('zone-filter').value;
  const categoryFilter = document.getElementById('category-filter').value;
  
  filteredExhibits = exhibitionData.key_exhibits.filter(exhibit => {
    const matchesSearch = exhibit.name.toLowerCase().includes(searchTerm);
    const matchesZone = zoneFilter === 'all' || exhibit.zone === zoneFilter;
    const matchesCategory = categoryFilter === 'all' || exhibit.category === categoryFilter;
    
    return matchesSearch && matchesZone && matchesCategory;
  });
  
  renderExhibits();
}

// Activities Functions
function renderActivities() {
  const activitiesGrid = document.getElementById('activities-grid');
  if (!activitiesGrid) return;
  
  const activityIcons = {
    '專題講座': '🎓',
    '工作坊': '✍️',
    '導覽活動': '🎯',
    '文學朗讀會': '📖'
  };
  
  activitiesGrid.innerHTML = exhibitionData.activities.map(activity => `
    <div class="activity-card">
      <div class="activity-icon">${activityIcons[activity.type] || '📚'}</div>
      <div class="activity-type">${activity.type}</div>
      <h3 class="activity-name">${activity.name}</h3>
      <div class="activity-details">
        <div class="activity-detail">
          <span class="activity-detail-label">頻率</span>
          <span class="activity-detail-value">${activity.frequency}</span>
        </div>
        <div class="activity-detail">
          <span class="activity-detail-label">時長</span>
          <span class="activity-detail-value">${activity.duration}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Initialization
function initializeFilters() {
  // Writer period filters
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // Update active tab
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Filter writers
      const period = this.getAttribute('data-period');
      filterWriters(period);
    });
  });
  
  // Exhibit filters
  const searchInput = document.getElementById('search-input');
  const zoneFilter = document.getElementById('zone-filter');
  const categoryFilter = document.getElementById('category-filter');
  
  if (searchInput) {
    searchInput.addEventListener('input', filterExhibits);
  }
  
  if (zoneFilter) {
    // Populate zone filter options
    const zones = [...new Set(exhibitionData.key_exhibits.map(exhibit => exhibit.zone))];
    zones.forEach(zone => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = zone;
      zoneFilter.appendChild(option);
    });
    
    zoneFilter.addEventListener('change', filterExhibits);
  }
  
  if (categoryFilter) {
    // Populate category filter options
    const categories = [...new Set(exhibitionData.key_exhibits.map(exhibit => exhibit.category))];
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
    
    categoryFilter.addEventListener('change', filterExhibits);
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Add loading states and error handling
function showLoading(element) {
  if (element) {
    element.innerHTML = '<div style="text-align: center; padding: 2rem;">載入中...</div>';
  }
}

function showError(element, message) {
  if (element) {
    element.innerHTML = `<div style="text-align: center; padding: 2rem; color: #e53e3e;">${message}</div>`;
  }
}

// Performance optimization
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards for animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Add slight delay to ensure cards are rendered
  setTimeout(() => {
    document.querySelectorAll('.zone-card, .writer-card, .exhibit-card, .activity-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }, 100);
});

// Add custom CSS for modal animations
const style = document.createElement('style');
style.textContent = `
  .modal-zone-details {
    line-height: 1.6;
  }
  
  .modal-zone-meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  
  .modal-zone-meta span {
    background: var(--color-cream);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
  }
  
  .modal-zone-section {
    margin-bottom: 1.5rem;
  }
  
  .modal-zone-section h4 {
    color: var(--color-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-gold);
    padding-bottom: 0.25rem;
    display: inline-block;
  }
  
  .modal-zone-section p {
    color: var(--color-text-light);
    line-height: 1.7;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .modal-zone-meta {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .modal-content {
      margin: 1rem;
      max-height: 85vh;
    }
  }
`;
document.head.appendChild(style);