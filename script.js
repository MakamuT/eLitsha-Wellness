let currentLanguage = 'en'; // 'en' or 'xh'
let currentScreen = 'home';
let selectedSymptoms = [];
let currentCampaignIndex = 0;


let langBtn, langSpan, bottomNavButtons, screens;


const brandAssets = {
    logo: {
        primary: '🧬 eLitsha',
        secondary: 'Wellness',
        tagline: 'Bridging Traditions, Healing Communities'
    },
    colors: {
        primary: '#4A8B4F',
        secondary: '#7C3AED',
        accent: '#F59E0B',
        gradient: 'linear-gradient(135deg, #4A8B4F 0%, #7C3AED 100%)'
    },
    clinicPartners: [
        { name: 'Khayelitsha Health Centre', logo: '🏥', status: 'live' },
        { name: 'Site B Community Clinic', logo: '🏨', status: 'pilot' },
        { name: 'Mpilo Traditional Healers Assoc', logo: '🌿', status: 'partner' },
        { name: 'Western Cape Dept of Health', logo: '⚕️', status: 'govt' }
    ]
};


const campaigns = [
    {
        id: 1,
        titleEn: '🌿 Know Your Status: TB Screening Drive',
        titleXh: '🌿 Yazi Isimo Sakho: Ukhangelo lwe-TB',
        descriptionEn: 'Free screening at Khayelitsha Mall • Oct 25-30',
        descriptionXh: 'Ukhangelo lwasimahla eKhayelitsha Mall • Okt 25-30',
        image: '📢',
        cta: 'Find Location',
        sponsor: 'Western Cape Govt',
        sponsored: true,
        priority: 'high'
    },
    {
        id: 2,
        titleEn: '💚 Maternal Wellness Program',
        titleXh: '💚 Inkqubo yeMpilo yooMama',
        descriptionEn: 'Support for new & expecting mothers - Join weekly',
        descriptionXh: 'Inkxaso koomama abatsha & abakhulelweyo - Joyina veki nganye',
        image: '🤱',
        cta: 'Register Now',
        sponsor: 'Khayelitsha Clinic',
        sponsored: true,
        priority: 'medium'
    },
    {
        id: 3,
        titleEn: '⭐ Diabetes Support Group',
        titleXh: '⭐ Iqela leNkxaso yeSwekile',
        descriptionEn: 'Every Wednesday at Site B Community Hall',
        descriptionXh: 'Rhoqo ngoLwesithathu eHolweni yaseSite B',
        image: '🩺',
        cta: 'Join Group',
        sponsor: 'Partners in Health',
        sponsored: true,
        priority: 'medium'
    },
    {
        id: 4,
        titleEn: '🌱 Traditional Medicine Integration Workshop',
        titleXh: '🌱 Ucweyo lokuDityaniswa kwaMayeza eMveli',
        descriptionEn: 'For healthcare providers - CPD accredited',
        descriptionXh: 'Yaboneleli bezempilo - ivunyiwe yi-CPD',
        image: '📚',
        cta: 'Register Interest',
        sponsor: 'HPCSA & Traditional Healers Org',
        sponsored: true,
        priority: 'low'
    }
];

// ==================== PARTNER SPOTLIGHTS ====================
const partnerSpotlights = [
    {
        name: 'Dr. Mbali Nkosi',
        title: 'General Practitioner',
        clinic: 'Khayelitsha Community Clinic',
        messageEn: '"eLitsha helps me provide culturally competent care"',
        messageXh: '"I-eLitsha indinceda ndinike ukhathalelo olufanelekileyo ngokwenkcubeko"',
        image: '👩⚕️',
        featured: true
    },
    {
        name: 'Mama Nomvula',
        title: 'Traditional Healer',
        clinic: 'Site C Healing Center',
        messageEn: '"Working together with western doctors benefits our community"',
        messageXh: '"Ukusebenza kunye noogqirha baselalithini kuyinzuzo kuluntu lwethu"',
        image: '🌿',
        featured: true
    },
    {
        name: 'Thabo Mbeki',
        title: 'Clinic Manager',
        clinic: 'Site B Hospital',
        messageEn: '"Integration is the future of South African healthcare"',
        messageXh: '"Umdibaniso likamva lezempilo eMzantsi Afrika"',
        image: '🏥',
        featured: false
    }
];

// ==================== MULTILINGUAL CONTENT ====================
const translations = {
    en: {
        // Language button shows what you'll switch TO
        lang: 'isiXhosa',
        
        // Corporate Branding
        appName: 'eLitsha Wellness',
        tagline: 'Bridging Traditions, Healing Communities',
        partnerBadge: 'PILOT PROGRAM',
        
        // Navigation
        home: 'Home',
        learn: 'Learn',
        visits: 'Visits',
        find: 'Find',
        campaigns: 'Campaigns',
        partners: 'Partners',
        admin: 'Admin',
        
        // Home Screen
        welcomeTitle: 'Your Health, Your Way',
        welcomeSub: 'Integrated care with Western & Traditional Medicine',
        quickActions: 'Quick Actions',
        knowledgeHub: 'Knowledge Hub',
        checkSymptoms: 'Check symptoms',
        findProviders: 'Find Providers',
        bookAppointment: 'Book Appointment',
        
        // Campaigns Section
        featuredCampaigns: 'Health Campaigns',
        sponsored: 'Sponsored',
        viewAll: 'View All',
        campaignCta: 'Learn More',
        
        // Partner Spotlights
        partnerSpotlight: 'Provider Spotlight',
        featuredPartner: 'Featured Partner',
        
        // Notifications
        notifications: 'Updates',
        noti1: '📢 New: TB Screening Campaign this week',
        noti2: '💊 Medication: Blood pressure check tomorrow',
        noti3: '🌿 Workshop: Traditional Medicine Integration',
        
        // Health Tip
        healthTipTitle: 'Daily Wellness Tip',
        healthTip: 'Combining umhlonyane with prescribed medication? Always consult both providers first.',
        
        // Corporate Messages
        pilotMessage: 'Pilot Program • Khayelitsha • Oct 2025',
        partnersWelcome: 'Thank you to our pilot partners',
        downloadDeck: 'Download Product Deck',
        
        // Knowledge Hub
        knowledgeTitle: 'Health Education Hub',
        knowledgeSub: 'Evidence-based content reviewed by partners',
        tabAll: 'All Topics',
        tabChronic: 'Chronic Care',
        tabPrevention: 'Prevention',
        tabTraditional: 'Traditional Medicine',
        
        // Symptoms
        symptomsTitle: 'Symptom Navigator',
        symptomsSub: 'Powered by clinical guidelines',
        disclaimer: '⚠️ This tool provides guidance only. Always consult a healthcare provider.',
        selectSymptoms: 'Select Symptoms',
        recentChecks: 'Recent Checks',
        fever: 'Fever',
        cough: 'Cough',
        headache: 'Headache',
        nausea: 'Nausea',
        fatigue: 'Fatigue',
        chestPain: 'Chest Pain',
        startCheck: 'Start Symptom Check',
        
        // Directory
        clinicsTitle: 'Provider Directory',
        directorySub: 'Verified by Western Cape Dept of Health',
        searchPlaceholder: 'Search providers...',
        doctors: 'Doctors',
        clinics: 'Clinics',
        traditional: 'Traditional Healers',
        
        // Appointments
        appointmentsTitle: 'Appointments',
        upcoming: 'Upcoming Appointments',
        bookNew: 'Book New Appointment',
        selectProvider: 'Select Provider Type',
        medicalDoctor: 'Medical Doctor',
        traditionalHealer: 'Traditional Healer',
        nurse: 'Nurse Practitioner',
        dentist: 'Dentist',
        findSlots: 'Find Available Slots',
        
        // Profile
        profileTitle: 'Health Profile',
        emergencyContact: 'Emergency Contact',
        editProfile: 'Edit Profile',
        connectedProviders: 'Connected Providers',
        
        // Records
        recordsTitle: 'Visit Summaries',
        recordsSub: 'All your medical and traditional healer visits',
        addEntry: 'Add Manual Entry',
        
        // Campaign Screen
        campaignsTitle: 'Health Campaigns',
        campaignsSub: 'Sponsored by health partners',
        filterAll: 'All',
        filterHigh: 'High Priority',
        filterMedium: 'This Week',
        
        // Partners Screen
        partnersTitle: 'Our Partners',
        partnersSub: 'Making integrated care possible',
        government: 'Government',
        ngos: 'NGOs',
          // Admin
        adminTitle: 'Analytics Dashboard',
        adminSub: 'Platform performance and impact metrics',
        userEngagement: 'User Engagement',
        integrationImpact: 'Integration Impact',
        topTopics: 'Top Health Topics',
        exportReport: 'Export Report',
        
        // Manual Entry Form
        manualEntryTitle: 'Add Visit Record',
        manualEntrySub: 'Record your visit details manually',
        visitDate: 'Visit Date',
        providerType: 'Provider Type',
        providerName: 'Provider Name',
        visitReason: 'Reason for Visit',
        treatment: 'Treatment/Advice Given',
        followUp: 'Follow-up Required',
        notes: 'Additional Notes',
        saveEntry: 'Save Entry',
        cancel: 'Cancel',
        required: 'Required field',
        visitSaved: 'Visit record saved successfully!'
    },
    xh: {
        // Language button shows what you'll switch TO
        lang: 'English',
        
        // Corporate Branding
        appName: 'eLitsha Wellness',
        tagline: 'Ukudibanisa iziThethe, Ukuphilisa uLuntu',
        partnerBadge: 'INKQUBO YOKULINGA',
        
        // Navigation
        home: 'Ikhaya',
        learn: 'Funda',
        visits: 'Utyelelo',
        find: 'Fumana',
        campaigns: 'Amaphulo',
        partners: 'Amaqabane',
        admin: 'Ulawulo',
        
        // Home Screen
        welcomeTitle: 'Impilo Yakho, Ngendlela Yakho',
        welcomeSub: 'Unyango oludibeneyo lwaseNtshona neMveli',
        quickActions: 'Izenzo Ezikhawulezileyo',
        knowledgeHub: 'Indawo Yolwazi',
        checkSymptoms: 'Jonga iimpawu',
        findProviders: 'Fumana Ababoneleli',
        bookAppointment: 'Bhukisha ixesha',
        
        // Campaigns Section
        featuredCampaigns: 'Amaphulo Ezempilo',
        sponsored: 'Ixhaswe ngemali',
        viewAll: 'Bonke',
        campaignCta: 'Funda Okungakumbi',
        
        // Partner Spotlights
        partnerSpotlight: 'Iqabane eliqaqambileyo',
        featuredPartner: 'Iqabane eliPhambili',
        
        // Notifications
        notifications: 'Iinguqulelo',
        noti1: '📢 I-TB Screening Campaign kule veki',
        noti2: '💊 Iyeza: Jonga uxinzelelo lwegazi ngomso',
        noti3: '🌿 Ucweyo: UkuDityaniswa kwaMayeza eMveli',
        
        // Health Tip
        healthTipTitle: 'Ingcebiso yeMpilo yemihla ngemihla',
        healthTip: 'Usebenzisa umhlonyane kunye neyeza likagqirha? Hlala ubonana nabo bobabini kuqala.',
        
        // Corporate Messages
        pilotMessage: 'Inkqubo yokuLinga • Khayelitsha • Okt 2025',
        partnersWelcome: 'Enkosi kumaqabane ethu olingo',
        downloadDeck: 'Khuphela iProduct Deck',
        
        // Knowledge Hub
        knowledgeTitle: 'Indawo yoLwazi lweMpilo',
        knowledgeSub: 'Iziqulatho eziqinisekisiweyo ngamaqabane',
        tabAll: 'Zonke izihloko',
        tabChronic: 'Ugulo olungapheliyo',
        tabPrevention: 'Uthintelo',
        tabTraditional: 'Amayeza emveli',
        
        // Symptoms
        symptomsTitle: 'Isikhokelo seempawu',
        symptomsSub: 'Isekelwe kwizikhokelo zeklinikhi',
        disclaimer: '⚠️ Esi sixhobo sinika isikhokelo kuphela. Hlala udibana nomboneleli wezempilo.',
        selectSymptoms: 'Khetha iimpawu',
        recentChecks: 'Iimpawu zakutshanje',
        fever: 'Umgungqela',
        cough: 'Ukukhohlela',
        headache: 'Intloko ebuhlungu',
        nausea: 'Isicaphucaphu',
        fatigue: 'Ukudinwa',
        chestPain: 'Intlungu yesifuba',
        startCheck: 'Qalisa ukujonga iimpawu',
        
        // Directory
        clinicsTitle: 'Uluhlu lwababoneleli',
        directorySub: 'Iqinisekiswe liSebe lezeMpilo leNtshona Koloni',
        searchPlaceholder: 'Khangela ababoneleli...',
        doctors: 'Oogqirha',
        clinics: 'Iikliniki',
        traditional: 'Iingcibi',
        
        // Appointments
        appointmentsTitle: 'Amadinga',
        upcoming: 'Amadinga azayo',
        bookNew: 'Bhukisha idinga elitsha',
        selectProvider: 'Khetha uhlobo lomxhasi',
        medicalDoctor: 'Ugqirha wezonyango',
        traditionalHealer: 'Igqirha lemveli',
        nurse: 'Umongikazi',
        dentist: 'Ugqirha wamazinyo',
        findSlots: 'Fumana amaxesha akhoyo',
        
        // Profile
        profileTitle: 'Iprofayile yeMpilo',
        emergencyContact: 'Umnxeba ongxamisekileyo',
        editProfile: 'Hlela iprofayile',
        connectedProviders: 'Ababoneleli abaDityanisiweyo',
        
        // Records
        recordsTitle: 'Ishwankathelo lotyelelo',
        recordsSub: 'Zonke iindwendwe zakho zonyango kunye neengcibi zemveli',
        addEntry: 'Faka ngokwakho',
        
        // Campaign Screen
        campaignsTitle: 'Amaphulo ezempilo',
        campaignsSub: 'Ixhaswe ngamaqabane ezempilo',
        filterAll: 'Konke',
        filterHigh: 'Okubalulekileyo',
        filterMedium: 'Kule Veki',
        
        // Partners Screen
        partnersTitle: 'Amaqabane Ethu',
        partnersSub: 'Ukudibanisa ukhathalelo olunokwenzeka',
        government: 'Urhulumente',
        ngos: 'ii-NGOs',
          // Admin
        adminTitle: 'Ibhodi yeMpembelelo',
        adminSub: 'Ukusebenza kweqonga kunye nemilinganiselo yempembelelo',
        userEngagement: 'Ukuzibandakanya kwabasebenzisi',
        integrationImpact: 'Ifuthe lokudityaniswa',
        topTopics: 'Izihloko eziPhambili',
        exportReport: 'Thumela ingxelo',
        
        // Manual Entry Form
        manualEntryTitle: 'Yongeza irekhodi lotyelelo',
        manualEntrySub: 'Bhala iinkcukacha zotyelelo lwakho ngokwakho',
        visitDate: 'Usuku lotyelelo',
        providerType: 'Uhlobo lomboneleli',
        providerName: 'Igama lomboneleli',
        visitReason: 'Isizathu sotyelelo',
        treatment: 'Unyango/Iingcebiso ezinikiweyo',
        followUp: 'Ukulandelela kuyafuneka',
        notes: 'Amanqaku ongezelelweyo',
        saveEntry: 'Gcina irekhodi',
        cancel: 'Rhoxisa',
        required: 'Indawo efunekayo',
        visitSaved: 'Irekhodi lotyelelo ligcinwe ngempumelelo!'
    }
};

// ==================== KNOWLEDGE HUB DATA ====================
const knowledgeArticles = [
    { titleEn: 'Managing Hypertension: Western & Traditional Approaches', titleXh: 'Ukulawula uxinzelelo lwegazi: Iindlela zaseNtshona nezeMveli', category: 'Chronic Care', verified: true, reads: 1247 },
    { titleEn: 'TB Symptoms & When to Test', titleXh: 'Iimpawu ze-TB naxa kufuneka uvavanye', category: 'Prevention', verified: true, reads: 2341 },
    { titleEn: 'Umhlonyane: Benefits & Safe Usage', titleXh: 'Umhlonyane: Iinzuzo kunye nokuSetyenziswa okuKhuselekileyo', category: 'Traditional Medicine', verified: true, reads: 3421 },
    { titleEn: 'Diabetes Prevention Diet', titleXh: 'Ukutya okuthintela iswekile', category: 'Prevention', verified: true, reads: 1876 },
    { titleEn: 'HIV Care: Integrating Treatments Safely', titleXh: 'Ukhathalelo lwe-HIV: Ukudibanisa unyango ngokukhuselekileyo', category: 'Chronic Care', verified: true, reads: 2156 },
    { titleEn: 'Herbal Teas for Immunity', titleXh: 'Iiti zemifuno yokomelela komzimba', category: 'Traditional Medicine', verified: true, reads: 987 },
    { titleEn: 'Child Vaccination Schedule', titleXh: 'Ishedyuli yokugonya abantwana', category: 'Prevention', verified: true, reads: 1543 }
];

// ==================== PROVIDERS DATA ====================
const providers = [
    { name: 'Dr. Mbali Nkosi', type: 'Medical Doctor', specialty: 'General Practitioner', location: 'Khayelitsha Clinic', western: true, verified: true, distance: '0.8km' },
    { name: 'Mama Nomvula', type: 'Traditional Healer', specialty: 'Herbalist & Counselor', location: 'Site C, Khayelitsha', western: false, verified: true, distance: '1.2km' },
    { name: 'Site B Community Clinic', type: 'Clinic', specialty: 'Primary Care', location: 'Site B, Khayelitsha', western: true, verified: true, distance: '1.5km' },
    { name: 'Babalwa Traditional Healer', type: 'Traditional Healer', specialty: 'Diviner/Herbalist', location: 'Harare', western: false, verified: true, distance: '2.3km' },
    { name: 'Dr. James Peters', type: 'Medical Doctor', specialty: 'Cardiologist', location: 'Khayelitsha Hospital', western: true, verified: true, distance: '2.8km' }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    langBtn = document.querySelector('.lang-btn');
    langSpan = document.getElementById('lang');
    bottomNavButtons = document.querySelectorAll('.bottom-nav .nav-btn');
    
    screens = {
        home: document.querySelector('.home'),
        knowledge: document.getElementById('knowledgeScreen'),
        symptoms: document.getElementById('symptomsScreen'),
        folder: document.getElementById('folderScreen'),
        directory: document.getElementById('directoryScreen'),
        appointments: document.getElementById('appointmentsScreen'),
        profile: document.getElementById('profileScreen'),
        admin: document.getElementById('adminScreen')
    };
    
    // Create additional screens
    createCorporateScreens();
    
    // Re-get screens after creating new ones
    screens.campaigns = document.getElementById('campaignsScreen');
    screens.partners = document.getElementById('partnersScreen');
    
    // Set initial language
    updateLanguage('en');
    
    // Populate content
    renderKnowledgeHub('all');
    renderProviders('all');
    renderCampaigns('all');
    renderPartnerSpotlights();
    
    // Set up event listeners
    setupEventListeners();
    
    // Show home screen
    showScreen('home');
});

// ==================== CREATE CORPORATE SCREENS ====================
function createCorporateScreens() {
    const main = document.querySelector('.main');
    if (!main) return;
    
    // Campaigns Screen
    if (!document.getElementById('campaignsScreen')) {
        const campaignsScreen = document.createElement('div');
        campaignsScreen.id = 'campaignsScreen';
        campaignsScreen.className = 'hidden';
        campaignsScreen.innerHTML = `
            <div class="content-card">
                <h2 id="campaignsTitle">Health Campaigns</h2>
                <p id="campaignsSub" style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem;">Sponsored by health partners</p>
                
                <div class="tab-buttons" style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; background: #f3f4f6; padding: 0.25rem; border-radius: 2rem;">
                    <button class="tab-btn active" id="campaignFilterAll" style="flex: 1; padding: 0.5rem; border: none; border-radius: 2rem; background: white; font-weight: 600; cursor: pointer;">All</button>
                    <button class="tab-btn" id="campaignFilterHigh" style="flex: 1; padding: 0.5rem; border: none; border-radius: 2rem; background: transparent; cursor: pointer;">High Priority</button>
                    <button class="tab-btn" id="campaignFilterMedium" style="flex: 1; padding: 0.5rem; border: none; border-radius: 2rem; background: transparent; cursor: pointer;">This Week</button>
                </div>
                
                <div id="campaignsList" class="campaigns-list"></div>
                
                <div style="margin-top: 2rem; padding: 1rem; background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%); border-radius: 1rem;">
                    <p style="font-size: 0.875rem; color: #4A8B4F; font-weight: 600; margin-bottom: 0.5rem;">📊 Partner Impact</p>
                    <p style="font-size: 0.75rem; color: #6b7280;">Campaigns reaching 12,500+ community members this month</p>
                </div>
            </div>
        `;
        main.appendChild(campaignsScreen);
    }
    
    // Partners Screen
    if (!document.getElementById('partnersScreen')) {
        const partnersScreen = document.createElement('div');
        partnersScreen.id = 'partnersScreen';
        partnersScreen.className = 'hidden';
        partnersScreen.innerHTML = `
            <div class="content-card">
                <h2 id="partnersTitle">Our Partners</h2>
                <p id="partnersSub" style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem;">Making integrated care possible</p>
                
                <div id="partnersList" class="partners-list"></div>
                
                <div style="margin-top: 2rem; background: #E8F5E9; padding: 1rem; border-radius: 0.75rem;">
                    <h3 style="font-weight: 600; margin-bottom: 0.75rem;">Become a Partner</h3>
                    <p style="font-size: 0.875rem; color: #374151; margin-bottom: 1rem;">Join our pilot program in Khayelitsha</p>
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem; background: #4A8B4F; color: white; border: none; border-radius: 2rem; font-weight: 600; cursor: pointer;" id="partnerInterestBtn">Express Interest</button>
                </div>
            </div>
        `;
        main.appendChild(partnersScreen);
    }
    
    // Add "Download Deck" button to home screen if not exists
    if (!document.getElementById('downloadDeckBtn')) {
        const homeScreen = document.querySelector('.home');
        if (homeScreen) {
            const deckButton = document.createElement('button');
            deckButton.className = 'btn-primary';
            deckButton.id = 'downloadDeckBtn';
            deckButton.style.cssText = 'margin: 1rem 0; width: 100%; padding: 0.75rem; background: #4A8B4F; color: white; border: none; border-radius: 2rem; font-weight: 600; cursor: pointer;';
            deckButton.innerHTML = '<i class="fa-solid fa-file-pdf"></i> Download Product Deck';
            
            const quickActions = document.querySelector('.quickActions');
            if (quickActions) {
                quickActions.insertAdjacentElement('afterend', deckButton);
            }
        }
    }
}

// ==================== EVENT LISTENERS SETUP ====================
function setupEventListeners() {
    // Language toggle - FIXED: Now correctly toggles between languages
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            const newLang = currentLanguage === 'en' ? 'xh' : 'en';
            updateLanguage(newLang);
            currentLanguage = newLang;
            if (langSpan) langSpan.textContent = translations[newLang].lang;
        });
    }
    
    // Bottom navigation
    if (bottomNavButtons) {
        bottomNavButtons.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                const screenMap = ['home', 'knowledge', 'folder', 'directory', 'campaigns', 'partners', 'admin'];
                const screen = screenMap[index] || 'home';
                showScreen(screen);
                
                bottomNavButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Quick action buttons (from home screen)
    const quickActionButtons = document.querySelectorAll('.quickActions .act-btn');
    if (quickActionButtons.length >= 4) {
        quickActionButtons[0].addEventListener('click', (e) => {
            e.preventDefault();
            showScreen('knowledge');
        });
        quickActionButtons[1].addEventListener('click', (e) => {
            e.preventDefault();
            showScreen('symptoms');
        });
        quickActionButtons[2].addEventListener('click', (e) => {
            e.preventDefault();
            showScreen('directory');
        });
        quickActionButtons[3].addEventListener('click', (e) => {
            e.preventDefault();
            showScreen('appointments');
        });
    }
    
    // Download deck button
    const deckBtn = document.getElementById('downloadDeckBtn');
    if (deckBtn) {
        deckBtn.addEventListener('click', function() {
            alert(currentLanguage === 'en' ? 
                'Product deck download started. (Demo - PDF would open)' : 
                'Ukukhuphela kweProduct deck kuqalisiwe. (Demo - PDF iya kuvula)');
        });
    }
    
    // Symptom buttons
    document.querySelectorAll('#symptomsScreen .act-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const symptomSpan = this.querySelector('span');
            if (symptomSpan) {
                const symptomText = symptomSpan.textContent.replace(/[🤒😷🤕🤢😰💔]/g, '').trim();
                toggleSymptom(symptomText);
                this.style.background = selectedSymptoms.includes(symptomText) ? '#4A8B4F20' : '#f3f4f6';
                this.style.border = selectedSymptoms.includes(symptomText) ? '2px solid #4A8B4F' : 'none';
            }
        });
    });
    
    // Start symptom check button
    const startCheckBtn = document.querySelector('#symptomsScreen .btn-primary');
    if (startCheckBtn) {
        startCheckBtn.addEventListener('click', function() {
            if (selectedSymptoms.length === 0) {
                alert(currentLanguage === 'en' ? 'Please select at least one symptom' : 'Nceda ukhethe ubuncinci iimpawu enye');
            } else {
                alert(currentLanguage === 'en' ? 
                    '✅ Symptom check complete. Based on your selection, we recommend consulting a provider within 48 hours.' : 
                    '✅ Ukujonga iimpawu kugqityiwe. Ngokweempawu zakho, sicebisa ukuba udibane nomboneleli kwiiyure ezingama-48.');
            }
        });
    }
    
    // Knowledge Hub tabs
    const tabBtns = document.querySelectorAll('.knowledge-tabs .tab-btn, .tab-buttons .tab-btn');
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const categories = ['all', 'chronic', 'prevention', 'traditional'];
            if (index < categories.length) {
                renderKnowledgeHub(categories[index]);
            }
        });
    });
    
    // Provider directory tabs
    const providerTabs = document.querySelectorAll('#directoryScreen .tab-buttons .tab-btn');
    providerTabs.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            providerTabs.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filters = ['all', 'doctor', 'clinic', 'traditional'];
            if (index < filters.length) {
                renderProviders(filters[index]);
            }
        });
    });
    
    // Search input in directory
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const filter = e.target.value.toLowerCase();
            const items = document.querySelectorAll('#directoryScreen .provider-item');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(filter) ? 'block' : 'none';
            });
        });
    }
    
    // Campaign filter buttons
    const campaignFilterAll = document.getElementById('campaignFilterAll');
    const campaignFilterHigh = document.getElementById('campaignFilterHigh');
    const campaignFilterMedium = document.getElementById('campaignFilterMedium');
    
    if (campaignFilterAll) {
        campaignFilterAll.addEventListener('click', function() {
            document.querySelectorAll('#campaignsScreen .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            this.style.background = 'white';
            if (campaignFilterHigh) campaignFilterHigh.style.background = 'transparent';
            if (campaignFilterMedium) campaignFilterMedium.style.background = 'transparent';
            renderCampaigns('all');
        });
    }
    
    if (campaignFilterHigh) {
        campaignFilterHigh.addEventListener('click', function() {
            document.querySelectorAll('#campaignsScreen .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            this.style.background = 'white';
            if (campaignFilterAll) campaignFilterAll.style.background = 'transparent';
            if (campaignFilterMedium) campaignFilterMedium.style.background = 'transparent';
            renderCampaigns('high');
        });
    }
    
    if (campaignFilterMedium) {
        campaignFilterMedium.addEventListener('click', function() {
            document.querySelectorAll('#campaignsScreen .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            this.style.background = 'white';
            if (campaignFilterAll) campaignFilterAll.style.background = 'transparent';
            if (campaignFilterHigh) campaignFilterHigh.style.background = 'transparent';
            renderCampaigns('medium');
        });
    }
    
    // Partner interest button
    const partnerInterestBtn = document.getElementById('partnerInterestBtn');
    if (partnerInterestBtn) {
        partnerInterestBtn.addEventListener('click', function() {
            alert(currentLanguage === 'en' ? 
                'Thank you for your interest! A member of our partnerships team will contact you within 48 hours.' : 
                'Enkosi ngomdla wakho! Ilungu leqela lethu loqabane liya kuqhagamshelana nawe kwiiyure ezingama-48.');
        });
    }
    
    // Campaign CTA clicks (delegation)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('campaign-cta') || e.target.parentElement?.classList.contains('campaign-cta')) {
            const campaignCard = e.target.closest('.campaign-card');
            if (campaignCard) {
                const campaignId = campaignCard.dataset.id;
                alert(currentLanguage === 'en' ? 
                    `Campaign #${campaignId}: This would open registration/directions. (Demo)` : 
                    `Iphulo #${campaignId}: Oku kuya kuvula irejistreshini/izikhombisi. (Demo)`);
            }
        }
    });
      // Book appointment button
    const bookAppointmentBtn = document.querySelector('#appointmentsScreen .btn-primary');
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener('click', function() {
            alert(currentLanguage === 'en' ? 'Searching for available slots...' : 'Kukhangelwa amaxesha akhoyo...');
        });
    }
      // Manual Entry Form Events
    setupManualEntryForm();
    
    // Provider buttons (Book and Directions)
    document.addEventListener('click', function(e) {
        if (e.target.textContent === 'Book' || e.target.textContent === 'Bhukisha') {
            alert(currentLanguage === 'en' ? 'Booking appointment...' : 'Ukubhukisha idinga...');
        }
        if (e.target.textContent === 'Directions' || e.target.textContent === 'Indlela') {
            alert(currentLanguage === 'en' ? 'Opening directions...' : 'Ukuvula izikhombisi...');
        }
    });
}

// ==================== SCREEN NAVIGATION ====================
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });
    
    // Show selected screen
    if (screens[screenName]) {
        screens[screenName].classList.remove('hidden');
    }
    
    currentScreen = screenName;
    
    // Update bottom nav active state
    const screenMap = ['home', 'knowledge', 'folder', 'directory', 'campaigns', 'partners', 'admin'];
    const screenIndex = screenMap.indexOf(screenName);
    if (screenIndex !== -1 && bottomNavButtons) {
        bottomNavButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === screenIndex);
        });
    }
}

// ==================== LANGUAGE UPDATE ====================
function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update language button text (shows the OTHER language)
    if (langSpan) langSpan.textContent = t.lang;
    
    // Home screen
    updateElementText('.home h2', t.welcomeTitle);
    updateElementText('.home .card p', t.welcomeSub);
    
    const homeH3s = document.querySelectorAll('.home h3');
    if (homeH3s.length > 0) homeH3s[0].textContent = t.quickActions;
    
    // Quick actions
    const quickSpans = document.querySelectorAll('.quickActions .act-btn span');
    if (quickSpans.length >= 4) {
        quickSpans[0].textContent = t.knowledgeHub;
        quickSpans[1].textContent = t.checkSymptoms;
        quickSpans[2].textContent = t.findProviders;
        quickSpans[3].textContent = t.bookAppointment;
    }
    
    // Notifications
    updateElementText('.notification-card h3 span', t.notifications);
    const notiItems = document.querySelectorAll('.noti-item');
    if (notiItems.length >= 3) {
        notiItems[0].textContent = t.noti1;
        notiItems[1].textContent = t.noti2;
        notiItems[2].textContent = t.noti3;
    }
    
    // Health tip
    updateElementText('#healthTipsTitle', t.healthTipTitle);
    updateElementText('#tipContent', t.healthTip);
    
    // Download deck button
    const deckBtn = document.getElementById('downloadDeckBtn');
    if (deckBtn) deckBtn.innerHTML = '<i class="fa-solid fa-file-pdf"></i> ' + t.downloadDeck;
    
    // Knowledge Hub
    updateElementText('#knowledgeHubTitle', t.knowledgeTitle);
    updateElementText('#knowledgeScreen .content-card > p', t.knowledgeSub);
    
    // Symptoms
    updateElementText('#symptomsTitle', t.symptomsTitle);
    updateElementText('#symptomsScreen .content-card > p', t.symptomsSub);
    
    const disclaimer = document.querySelector('#symptomsScreen .content-card div[style*="background: #fef3c7"] p');
    if (disclaimer) disclaimer.textContent = t.disclaimer;
    
    const symptomsH3s = document.querySelectorAll('#symptomsScreen h3');
    if (symptomsH3s.length >= 2) {
        symptomsH3s[0].textContent = t.selectSymptoms;
        symptomsH3s[1].textContent = t.recentChecks;
    }
    
    // Update symptom buttons
    const symptomTexts = [t.fever, t.cough, t.headache, t.nausea, t.fatigue, t.chestPain];
    const emojis = ['🤒', '😷', '🤕', '🤢', '😰', '💔'];
    document.querySelectorAll('#symptomsScreen .act-btn span').forEach((el, idx) => {
        if (idx < symptomTexts.length) {
            el.textContent = emojis[idx] + ' ' + symptomTexts[idx];
        }
    });
    
    updateElementText('#symptomsScreen .btn-primary', t.startCheck);
    
    // Records
    updateElementText('#myRecordsTitle', t.recordsTitle);
    updateElementText('#folderScreen .content-card > p', t.recordsSub);
    updateElementText('#folderScreen .btn-primary', t.addEntry);
    
    // Directory
    updateElementText('#clinicsTitle', t.clinicsTitle);
    updateElementText('#directoryScreen .content-card > p', t.directorySub);
    
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Directory tabs
    const dirTabs = document.querySelectorAll('#directoryScreen .tab-buttons .tab-btn');
    if (dirTabs.length >= 4) {
        dirTabs[0].textContent = t.tabAll;
        dirTabs[1].textContent = t.doctors;
        dirTabs[2].textContent = t.clinics;
        dirTabs[3].textContent = t.traditional;
    }
    
    // Appointments
    updateElementText('#appointmentsTitle', t.appointmentsTitle);
    const aptH3s = document.querySelectorAll('#appointmentsScreen h3');
    if (aptH3s.length >= 2) {
        aptH3s[0].textContent = t.upcoming;
        aptH3s[1].textContent = t.bookNew;
    }
    
    const select = document.querySelector('#appointmentsScreen select');
    if (select && select.options.length >= 5) {
        select.options[0].text = t.selectProvider;
        select.options[1].text = t.medicalDoctor;
        select.options[2].text = t.traditionalHealer;
        select.options[3].text = t.nurse;
        select.options[4].text = t.dentist;
    }
    
    const aptBtns = document.querySelectorAll('#appointmentsScreen .btn-primary');
    if (aptBtns.length >= 2) aptBtns[1].textContent = t.findSlots;
    
    // Profile
    updateElementText('#profileScreen h2', t.profileTitle);
    const profileH3s = document.querySelectorAll('#profileScreen h3');
    if (profileH3s.length >= 2) profileH3s[1].textContent = t.emergencyContact;
    updateElementText('#profileScreen .btn-primary', t.editProfile);
    
    // Admin
    updateElementText('#adminScreen h2', t.adminTitle);
    updateElementText('#adminScreen .content-card > p', t.adminSub);
    const adminH3s = document.querySelectorAll('#adminScreen h3');
    if (adminH3s.length >= 3) {
        adminH3s[0].textContent = t.userEngagement;
        adminH3s[1].textContent = t.integrationImpact;
        adminH3s[2].textContent = t.topTopics;
    }
    updateElementText('#adminScreen .btn-primary', t.exportReport);
    
    // Campaigns screen
    updateElementText('#campaignsTitle', t.campaignsTitle);
    updateElementText('#campaignsSub', t.campaignsSub);
    updateElementText('#campaignFilterAll', t.filterAll);
    updateElementText('#campaignFilterHigh', t.filterHigh);
    updateElementText('#campaignFilterMedium', t.filterMedium);
    
    // Partners screen
    updateElementText('#partnersTitle', t.partnersTitle);
    updateElementText('#partnersSub', t.partnersSub);
    
    // Knowledge Hub tabs
    const knowledgeTabs = document.querySelectorAll('#knowledgeScreen .tab-buttons .tab-btn');
    if (knowledgeTabs.length >= 4) {
        knowledgeTabs[0].textContent = t.tabAll;
        knowledgeTabs[1].textContent = t.tabChronic;
        knowledgeTabs[2].textContent = t.tabPrevention;
        knowledgeTabs[3].textContent = t.tabTraditional;
    }
    
    // Re-render dynamic content with new language
    renderKnowledgeHub('all');
    renderProviders('all');
    renderCampaigns('all');
    renderPartnerSpotlights();
}

function updateElementText(selector, text, index = 0) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > index) {
        elements[index].textContent = text;
    }
}

// ==================== RENDER CAMPAIGNS ====================
function renderCampaigns(filter = 'all') {
    const container = document.getElementById('campaignsList');
    if (!container) return;
    
    let filtered = campaigns;
    if (filter === 'high') {
        filtered = campaigns.filter(c => c.priority === 'high');
    } else if (filter === 'medium') {
        filtered = campaigns.filter(c => c.priority === 'medium');
    }
    
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: #f9fafb; border-radius: 1rem;">
                <p style="color: #6b7280;">No campaigns in this category</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(campaign => {
        const title = currentLanguage === 'en' ? campaign.titleEn : campaign.titleXh;
        const desc = currentLanguage === 'en' ? campaign.descriptionEn : campaign.descriptionXh;
        const ctaText = currentLanguage === 'en' ? campaign.cta : 
            (campaign.cta === 'Find Location' ? 'Fumana Indawo' :
             campaign.cta === 'Register Now' ? 'Bhalisa Ngoku' :
             campaign.cta === 'Join Group' ? 'Joyina Iqela' : 'Bonisa Umdla');
        
        const campaignEl = document.createElement('div');
        campaignEl.className = 'campaign-card';
        campaignEl.dataset.id = campaign.id;
        campaignEl.style.cssText = `
            background: white;
            border-radius: 1rem;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid #e5e7eb;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            cursor: pointer;
        `;
        
        campaignEl.innerHTML = `
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="font-size: 2.5rem;">${campaign.image}</div>
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                        <strong style="font-size: 1rem; color: #111827;">${title}</strong>
                        <span style="background: #F59E0B20; color: #F59E0B; font-size: 0.625rem; padding: 0.25rem 0.5rem; border-radius: 1rem;">${translations[currentLanguage].sponsored}</span>
                    </div>
                    <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem;">${desc}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.75rem; color: #9ca3af;">${campaign.sponsor}</span>
                        <button class="campaign-cta" style="background: ${brandAssets.colors.primary}; color: white; border: none; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 600; cursor: pointer;">${ctaText}</button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(campaignEl);
    });
}

// ==================== RENDER PARTNER SPOTLIGHTS ====================
function renderPartnerSpotlights() {
    const container = document.getElementById('partnersList');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Featured partner first
    const featured = partnerSpotlights.find(p => p.featured);
    if (featured) {
        const message = currentLanguage === 'en' ? featured.messageEn : featured.messageXh;
        container.innerHTML += `
            <div style="background: linear-gradient(135deg, #4A8B4F10, #7C3AED10); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <div style="font-size: 3rem;">${featured.image}</div>
                    <div>
                        <strong style="font-size: 1.125rem;">${featured.name}</strong>
                        <p style="font-size: 0.875rem; color: #7C3AED;">${featured.title}</p>
                        <p style="font-size: 0.75rem; color: #6b7280;">${featured.clinic}</p>
                    </div>
                </div>
                <p style="font-style: italic; color: #374151; border-left: 3px solid #4A8B4F; padding-left: 1rem;">"${message}"</p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                    <span style="background: #4A8B4F; color: white; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 1rem;">Featured Partner</span>
                </div>
            </div>
        `;
    }
    
    // Other partners
    const others = partnerSpotlights.filter(p => !p.featured);
    others.forEach(partner => {
        const message = currentLanguage === 'en' ? partner.messageEn : partner.messageXh;
        container.innerHTML += `
            <div style="background: white; border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; border: 1px solid #e5e7eb;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                    <div style="font-size: 2rem;">${partner.image}</div>
                    <div>
                        <strong>${partner.name}</strong>
                        <p style="font-size: 0.75rem; color: #6b7280;">${partner.title}</p>
                    </div>
                </div>
                <p style="font-size: 0.875rem; color: #374151;">"${message}"</p>
            </div>
        `;
    });
    
    // Add clinic partners
    container.innerHTML += `
        <h3 style="font-weight: 600; margin: 1.5rem 0 1rem;">${translations[currentLanguage].clinics || 'Clinic Partners'}</h3>
    `;
    
    brandAssets.clinicPartners.forEach(partner => {
        container.innerHTML += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 0.75rem; margin-bottom: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 1.5rem;">${partner.logo}</span>
                    <span>${partner.name}</span>
                </div>
                <span style="background: ${partner.status === 'live' ? '#10b98120' : partner.status === 'pilot' ? '#f59e0b20' : '#6b728020'}; color: ${partner.status === 'live' ? '#10b981' : partner.status === 'pilot' ? '#f59e0b' : '#6b7280'}; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 1rem;">${partner.status}</span>
            </div>
        `;
    });
}

// ==================== RENDER KNOWLEDGE HUB ====================
function renderKnowledgeHub(category) {
    const container = document.getElementById('knowledgeList');
    if (!container) return;
    
    let filtered = knowledgeArticles;
    if (category !== 'all') {
        const catMap = { chronic: 'Chronic Care', prevention: 'Prevention', traditional: 'Traditional Medicine' };
        filtered = knowledgeArticles.filter(a => a.category === catMap[category]);
    }
    
    container.innerHTML = '';
    filtered.forEach(article => {
        const title = currentLanguage === 'en' ? article.titleEn : article.titleXh;
        const articleEl = document.createElement('div');
        articleEl.className = 'provider-item';
        articleEl.style.cssText = `
            background: white;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-bottom: 0.75rem;
            border: 1px solid #e5e7eb;
        `;
        articleEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <i class="fa-solid fa-leaf" style="color: ${brandAssets.colors.primary}; font-size: 1.5rem;"></i>
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong>${title}</strong>
                        <i class="fa-regular fa-bookmark" style="color: #9ca3af;"></i>
                    </div>
                    <div style="display: flex; gap: 0.75rem; margin-top: 0.25rem;">
                        <span style="font-size: 0.7rem; background: ${brandAssets.colors.primary}10; color: ${brandAssets.colors.primary}; padding: 0.15rem 0.5rem; border-radius: 1rem;">${article.category}</span>
                        <span style="font-size: 0.7rem; color: #9ca3af;"><i class="fa-regular fa-eye"></i> ${article.reads}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(articleEl);
    });
}

// ==================== RENDER PROVIDERS ====================
function renderProviders(filter) {
    const container = document.getElementById('providersList');
    if (!container) return;
    
    let filtered = providers;
    if (filter === 'doctor') filtered = providers.filter(p => p.type === 'Medical Doctor');
    else if (filter === 'clinic') filtered = providers.filter(p => p.type === 'Clinic');
    else if (filter === 'traditional') filtered = providers.filter(p => p.type === 'Traditional Healer');
    
    container.innerHTML = '';
    filtered.forEach(prov => {
        const providerEl = document.createElement('div');
        providerEl.className = 'provider-item';
        providerEl.style.cssText = `
            background: white;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-bottom: 0.75rem;
            border: 1px solid #e5e7eb;
        `;
        providerEl.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <div>
                    <strong>${prov.name}</strong>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
                        <span style="background: ${prov.western ? brandAssets.colors.primary + '20' : '#faf5ff'}; color: ${prov.western ? brandAssets.colors.primary : '#6b21a8'}; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 1rem;">${prov.type}</span>
                        ${prov.verified ? '<span style="background: #10b98120; color: #10b981; font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 1rem;"><i class="fa-regular fa-circle-check"></i> Verified</span>' : ''}
                    </div>
                </div>
                <span style="font-size: 0.875rem; color: #6b7280;"><i class="fa-regular fa-compass"></i> ${prov.distance}</span>
            </div>
            <p style="font-size: 0.875rem; color: #374151;">${prov.specialty}</p>
            <p style="font-size: 0.875rem; color: #6b7280;"><i class="fa-regular fa-building"></i> ${prov.location}</p>
            <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                <button style="flex: 1; background: ${brandAssets.colors.primary}; color: white; border: none; padding: 0.5rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 600; cursor: pointer;">${currentLanguage === 'en' ? 'Book' : 'Bhukisha'}</button>
                <button style="flex: 1; background: white; color: #374151; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 2rem; font-size: 0.75rem; cursor: pointer;">${currentLanguage === 'en' ? 'Directions' : 'Indlela'}</button>
            </div>
        `;
        container.appendChild(providerEl);
    });
}


function toggleSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index === -1) {
        selectedSymptoms.push(symptom);
    } else {
        selectedSymptoms.splice(index, 1);
    }
    
    // Update UI
    if (selectedSymptoms.length > 0) {
        const recentContainer = document.querySelector('#symptomsScreen .provider-item');
        if (recentContainer && currentScreen === 'symptoms') {
            const symptomsText = selectedSymptoms.join(', ');
            
            const indicator = document.createElement('div');
            indicator.style.cssText = 'font-size: 0.75rem; color: #4A8B4F; margin-top: 0.5rem;';
            indicator.textContent = `✓ Selected: ${symptomsText}`;
            indicator.classList.add('selected-symptoms-indicator');
            
            const oldIndicator = document.querySelector('.selected-symptoms-indicator');
            if (oldIndicator) oldIndicator.remove();
            
            recentContainer.appendChild(indicator);
        }
    } else {
        const oldIndicator = document.querySelector('.selected-symptoms-indicator');
        if (oldIndicator) oldIndicator.remove();
    }
}

// ==================== MANUAL ENTRY FORM ====================
function setupManualEntryForm() {
    const addEntryBtn = document.querySelector('#folderScreen .btn-primary');
    if (addEntryBtn) {
        addEntryBtn.addEventListener('click', function() {
            showManualEntryForm();
        });
    }
}

function showManualEntryForm() {
    const t = translations[currentLanguage];
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'manual-entry-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        z-index: 1000;
    `;
    
    // Create form container
    const formContainer = document.createElement('div');
    formContainer.style.cssText = `
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        max-width: 500px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
    `;
    
    formContainer.innerHTML = `
        <h3 style="margin: 0 0 0.5rem 0; color: #111827;">${t.manualEntryTitle}</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem; font-size: 0.875rem;">${t.manualEntrySub}</p>
        
        <form id="manualEntryForm">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.visitDate} *</label>
                <input type="date" name="visitDate" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.providerType} *</label>
                <select name="providerType" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem;">
                    <option value="">${currentLanguage === 'en' ? 'Select provider type...' : 'Khetha uhlobo lomboneleli...'}</option>
                    <option value="medical">${t.medicalDoctor}</option>
                    <option value="traditional">${t.traditionalHealer}</option>
                    <option value="nurse">${t.nurse}</option>
                    <option value="dentist">${t.dentist}</option>
                </select>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.providerName} *</label>
                <input type="text" name="providerName" required placeholder="${currentLanguage === 'en' ? 'Enter provider name...' : 'Faka igama lomboneleli...'}" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.visitReason} *</label>
                <textarea name="visitReason" required rows="3" placeholder="${currentLanguage === 'en' ? 'What was the reason for your visit?' : 'Yintoni isizathu sotyelelo lwakho?'}" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; resize: vertical;"></textarea>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.treatment}</label>
                <textarea name="treatment" rows="3" placeholder="${currentLanguage === 'en' ? 'What treatment or advice were you given?' : 'Loluphi unyango okanye iingcebiso owazifumeneyo?'}" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; resize: vertical;"></textarea>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: #374151;">
                    <input type="checkbox" name="followUp" style="width: 1rem; height: 1rem;">
                    ${t.followUp}
                </label>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">${t.notes}</label>
                <textarea name="notes" rows="2" placeholder="${currentLanguage === 'en' ? 'Any additional notes...' : 'Nawaphi amanqaku ongezelelweyo...'}" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; resize: vertical;"></textarea>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button type="button" class="cancel-btn" style="flex: 1; padding: 0.75rem; border: 1px solid #d1d5db; background: white; color: #374151; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">${t.cancel}</button>
                <button type="submit" style="flex: 1; padding: 0.75rem; background: #4A8B4F; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">${t.saveEntry}</button>
            </div>
        </form>
    `;
    
    modal.appendChild(formContainer);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = document.getElementById('manualEntryForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const visitData = {
            date: formData.get('visitDate'),
            providerType: formData.get('providerType'),
            providerName: formData.get('providerName'),
            reason: formData.get('visitReason'),
            treatment: formData.get('treatment'),
            followUp: formData.get('followUp') === 'on',
            notes: formData.get('notes'),
            timestamp: new Date().toISOString()
        };
        
        // Save to localStorage (in a real app, this would go to a database)
        const existingRecords = JSON.parse(localStorage.getItem('visitRecords') || '[]');
        existingRecords.push(visitData);
        localStorage.setItem('visitRecords', JSON.stringify(existingRecords));
        
        // Show success message
        alert(t.visitSaved);
        
        // Close modal
        modal.remove();
        
        // Refresh the records view if we're on that screen
        if (currentScreen === 'folder') {
            renderVisitRecords();
        }
    });
    
    // Handle cancel button
    const cancelBtn = formContainer.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function() {
        modal.remove();
    });
    
    // Handle click outside modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function renderVisitRecords() {
    const records = JSON.parse(localStorage.getItem('visitRecords') || '[]');
    const container = document.querySelector('#folderScreen .content-card');
    
    // Find existing records container or create one
    let recordsContainer = document.querySelector('#visitRecordsList');
    if (!recordsContainer) {
        recordsContainer = document.createElement('div');
        recordsContainer.id = 'visitRecordsList';
        recordsContainer.style.marginTop = '1rem';
        container.appendChild(recordsContainer);
    }
    
    recordsContainer.innerHTML = '';
    
    if (records.length === 0) {
        recordsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: #f9fafb; border-radius: 0.75rem; color: #6b7280;">
                ${currentLanguage === 'en' ? 'No visit records yet. Add your first entry!' : 'Akukho rekhodi lotyelelo okwangoku. Yongeza eyokuqala!'}
            </div>
        `;
        return;
    }
    
    records.reverse().forEach((record, index) => {
        const recordEl = document.createElement('div');
        recordEl.style.cssText = `
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-bottom: 0.75rem;
        `;
        
        const providerTypeMap = {
            'medical': translations[currentLanguage].medicalDoctor,
            'traditional': translations[currentLanguage].traditionalHealer,
            'nurse': translations[currentLanguage].nurse,
            'dentist': translations[currentLanguage].dentist
        };
        
        recordEl.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <strong style="color: #111827;">${record.providerName}</strong>
                <span style="font-size: 0.75rem; color: #6b7280;">${new Date(record.date).toLocaleDateString()}</span>
            </div>
            <div style="margin-bottom: 0.5rem;">
                <span style="background: #4A8B4F20; color: #4A8B4F; font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 1rem;">${providerTypeMap[record.providerType] || record.providerType}</span>
                ${record.followUp ? `<span style="background: #f59e0b20; color: #f59e0b; font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 1rem; margin-left: 0.5rem;">${currentLanguage === 'en' ? 'Follow-up' : 'Ukulandelela'}</span>` : ''}
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem;"><strong>${translations[currentLanguage].visitReason}:</strong> ${record.reason}</p>
            ${record.treatment ? `<p style="color: #374151; font-size: 0.875rem; margin-bottom: 0.5rem;"><strong>${translations[currentLanguage].treatment}:</strong> ${record.treatment}</p>` : ''}
            ${record.notes ? `<p style="color: #6b7280; font-size: 0.75rem; font-style: italic;">${record.notes}</p>` : ''}
        `;
        
        recordsContainer.appendChild(recordEl);
    });
}

// ==================== EXPORT FUNCTIONS ====================
window.eLitsha = {
    showScreen,
    updateLanguage: (lang) => updateLanguage(lang),
    currentLanguage: () => currentLanguage,
    selectedSymptoms: () => [...selectedSymptoms],
    campaigns,
    partners: brandAssets.clinicPartners
};