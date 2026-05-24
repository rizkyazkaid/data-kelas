// Student Data
const studentData = [
    { id: 1001, name: "ABIMANYU KURNIADI", class: "03" },
    { id: 1002, name: "ADININGSIH KARTIKA SARI", class: "03" },
    { id: 1003, name: "ANDRI PURNOMO", class: "03" },
    { id: 1004, name: "ARISMA BINTI AWALIYAH", class: "03" },
    { id: 1005, name: "BETRI ARISTA OVIANA", class: "03" },
    { id: 1006, name: "BRIANRAKA SONY MEI SEGA", class: "03" },
    { id: 1007, name: "DEWI KARMILA", class: "03" },
    { id: 1008, name: "DIMAS ESA DEWA", class: "03" },
    { id: 1009, name: "DIMAS SEPTIAN EKA PUTRA", class: "03" },
    { id: 1010, name: "DWI SISKA ANGGRAENI", class: "03" },
    { id: 1011, name: "FAHMI ALFARIS HIDAYATULLAH", class: "03" },
    { id: 1012, name: "FARIH YAHYA", class: "03" },
    { id: 1013, name: "FATHCHUR ROJI", class: "03" },
    { id: 1014, name: "FATHURROHMAH MAULIDAH", class: "03" },
    { id: 1015, name: "FATOLA RUDIANZA", class: "03" },
    { id: 1016, name: "FITRIANING WAHYU NUR SYAHADAH", class: "03" },
    { id: 1017, name: "INDARTININGSIH", class: "03" },
    { id: 1018, name: "INDRI RAHMAWATI", class: "03" },
    { id: 1019, name: "KIKY FLORESTA BUNGA KIRANA", class: "03" },
    { id: 1020, name: "MASRULI", class: "03" },
    { id: 1021, name: "MEVINA MARSELLA LAUSANI", class: "03" },
    { id: 1022, name: "NIKMATUL FITRIYAH", class: "03" },
    { id: 1023, name: "NOVI DWI ARINTA", class: "03" },
    { id: 1024, name: "NURINI WULANDARI", class: "03" },
    { id: 1025, name: "RATNA FURI HANDAYANI", class: "03" },
    { id: 1026, name: "RESTINING ANDITASARI", class: "03" },
    { id: 1027, name: "RIESKA ELIAN ZULFIDA", class: "03" },
    { id: 1028, name: "RIZAL AFANDY", class: "03" },
    { id: 1029, name: "ROFY ANGGI PRATIWI", class: "03" },
    { id: 1030, name: "SITI AISYA", class: "03" },
    { id: 1031, name: "SITI ISMATUN ROHMANIYAH", class: "03" },
    { id: 1032, name: "SITI KHOLIFAH", class: "03" },
    { id: 1033, name: "TEGUH NOVRIYANTO", class: "03" },
    { id: 1034, name: "TIKA MULYA RAHMAN", class: "03" },
    { id: 1035, name: "ULIA NUR WULAN", class: "03" },
    { id: 1036, name: "WAHYU PRATAMA", class: "03" },
    { id: 1037, name: "WIDAHANA ARISAKTI OKTAVIA", class: "03" },
    { id: 1038, name: "YONGKI DWI CAHYADI", class: "03" },
    { id: 1039, name: "ZENY KURNIAWAN", class: "03" },
    { id: 1040, name: "ZETTA KUSUMA PRAMUDITA", class: "03" },
    { id: 1041, name: "DIMAS AGUNG PUJI ISWORO", class: "02" },
    { id: 1042, name: "ADI SINDHU NURCAHYA", class: "02" },
    { id: 1043, name: "AGUS SUPRIYANTO", class: "02" },
    { id: 1044, name: "AJI SLAMET RAHARJO", class: "02" },
    { id: 1045, name: "ALBASIT BHEKTI FIRMANSYAH", class: "02" },
    { id: 1046, name: "AMANDA NIKE DWINTASARI", class: "02" },
    { id: 1047, name: "ANDI MAHENDRA", class: "02" },
    { id: 1048, name: "ARDHI KURNIAWAN", class: "02" },
    { id: 1049, name: "DADANG SETIYOJADI", class: "02" },
    { id: 1050, name: "DEWI SEPTIANI WULANDARI", class: "02" },
    { id: 1051, name: "DIA WINDANA PUTRI", class: "02" },
    { id: 1052, name: "DINI NURMAHA LENTRA", class: "02" },
    { id: 1053, name: "DONI SAIFUL ARIFIN", class: "02" },
    { id: 1054, name: "EBBY MAHENDRA PUTRA", class: "02" },
    { id: 1055, name: "EKA KUSUMA WARDHANA", class: "02" },
    { id: 1056, name: "EKA MARGARETA", class: "02" },
    { id: 1057, name: "EKO PRASETYO", class: "02" },
    { id: 1058, name: "FEBRIANTIKA CAHYA LESTARI", class: "02" },
    { id: 1059, name: "FIRDA DWI ANGGRAENI", class: "02" },
    { id: 1060, name: "FRANITHA FIDRIASTUTI BAWON", class: "02" },
    { id: 1061, name: "IKE WULANDARI", class: "02" },
    { id: 1062, name: "JANUAR GANGSAR SURYONO", class: "02" },
    { id: 1063, name: "LINDA RIANI", class: "02" },
    { id: 1064, name: "MOCHAMAD ARIF WICAKSONO", class: "02" },
    { id: 1065, name: "MUH. CAHYA AFANDO", class: "02" },
    { id: 1066, name: "MUHAMMAD SHOLEH", class: "02" },
    { id: 1067, name: "NUR ARIFIN", class: "02" },
    { id: 1068, name: "NUR LIYA AGUSTIN", class: "02" },
    { id: 1069, name: "PRISKA MEIDYAN ANGGRAENI", class: "02" },
    { id: 1070, name: "RATIH INGE ARYUNAH", class: "02" },
    { id: 1071, name: "RENNDY PURNOMO", class: "02" },
    { id: 1072, name: "RESTU WIDIASTANINGRUM", class: "02" },
    { id: 1073, name: "RIKY INDARTA", class: "02" },
    { id: 1074, name: "RILA NUR HANILAH", class: "02" },
    { id: 1075, name: "RYAN NUR RAHMATULLAH", class: "02" },
    { id: 1076, name: "SALSABILA", class: "02" },
    { id: 1077, name: "SEPTIAN BAGUS LAKSONO", class: "02" },
    { id: 1078, name: "SERLY ANDRIYANI", class: "02" },
    { id: 1079, name: "TRI MARTINASARI", class: "02" },
    { id: 1080, name: "WERDI CANDRA PRASETYO", class: "02" },
    { id: 1081, name: "YOGA KOMARA PUTRA", class: "02" },
    { id: 1082, name: "YULI DWI LESTARI", class: "02" },
    { id: 1083, name: "ZAINURI HAPPY DWI ARISANDI", class: "02" },
    { id: 1084, name: "ABDUL ROSYID ALFIANSYAH", class: "01" },
    { id: 1085, name: "AKHMAD FANANI", class: "01" },
    { id: 1086, name: "ANDI FAHMI MOCHTAR", class: "01" },
    { id: 1087, name: "ARIS WAHYUDI", class: "01" },
    { id: 1088, name: "ARTHA ADI NUGRAHA", class: "01" },
    { id: 1089, name: "CHOIROTUN NISAH", class: "01" },
    { id: 1090, name: "CHUSNUL KHOTIMAH", class: "01" },
    { id: 1091, name: "DHENNY DWI HARIANTO P.", class: "01" },
    { id: 1092, name: "DIANA DWI KUSUMANING TYAS", class: "01" },
    { id: 1093, name: "EFA KHUSRINA", class: "01" },
    { id: 1094, name: "EKA SRI WULANDARI", class: "01" },
    { id: 1095, name: "FIRIDI OKTAVILUN ROCHMAN", class: "01" },
    { id: 1096, name: "FUAD MUBAROK", class: "01" },
    { id: 1097, name: "HATTA AGUSTA MAHARDIKA", class: "01" },
    { id: 1098, name: "HERLI DWI WULAN", class: "01" },
    { id: 1099, name: "IBNU JAMIL FAISHAL", class: "01" },
    { id: 1100, name: "IMAM SANDI ROBI", class: "01" },
    { id: 1101, name: "JEFRILYA", class: "01" },
    { id: 1102, name: "KHOIRUN NIKMAH", class: "01" },
    { id: 1103, name: "KIKI KURNIAWAN", class: "01" },
    { id: 1104, name: "LINDA WAHYUNING UTAMI", class: "01" },
    { id: 1105, name: "MUHAMMAD ROIS", class: "01" },
    { id: 1106, name: "NOVIA YULISTIA INDRIANSYAH", class: "01" },
    { id: 1107, name: "NOVITASARI", class: "01" },
    { id: 1108, name: "NUR ENDAH PERMATASARI", class: "01" },
    { id: 1109, name: "NURHAEMI ROHMAH", class: "01" },
    { id: 1110, name: "PUPUT WULAN MANDIRI", class: "01" },
    { id: 1111, name: "RANI INDAH DWIJAYANTI", class: "01" },
    { id: 1112, name: "ROZY YUDHA YUDISTIRA", class: "01" },
    { id: 1113, name: "SETYA SISWILUJENG", class: "01" },
    { id: 1114, name: "SITI NURHIDAYAH", class: "01" },
    { id: 1115, name: "SITI NURWIJAYANTI", class: "01" },
    { id: 1116, name: "SWIT IVINTEN GIMIARCI", class: "01" },
    { id: 1117, name: "SYAM HIDAYAT JATI", class: "01" },
    { id: 1118, name: "SYLVIA RINJI WIDYANINGTYAS", class: "01" },
    { id: 1119, name: "TITA TARWATI PURNAMASARI", class: "01" },
    { id: 1120, name: "TRI ANI RESTUNINGSIH", class: "01" },
    { id: 1121, name: "TUTUT IMAWULANDARI", class: "01" },
    { id: 1122, name: "ULUL LAILATUL MARDIYAH", class: "01" },
    { id: 1123, name: "VIKY FARISTIKA", class: "01" }
];

// Class mapping
const classMap = {
    "01": "Kelas X",
    "02": "Kelas XI",
    "03": "Kelas XII"
};

// Admin password (MD5 hash for "admin")
const adminPasswordHash = "21232f297a57a5a743894a0e4a801fc3";
let isAdminLoggedIn = false;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadDashboard();
});

function initializeApp() {
    // Load initial data
    displayStudents(studentData);
    updateStatistics();
    renderClassChart();
}

function setupEventListeners() {
    // Tab navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Search and filter
    const searchInput = document.getElementById('searchInput');
    const classFilter = document.getElementById('classFilter');

    searchInput.addEventListener('input', filterStudents);
    classFilter.addEventListener('change', filterStudents);
}

function switchTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Remove active from all buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    // Handle tab-specific actions
    if (tabName === 'dashboard') {
        loadDashboard();
    }
}

function loadDashboard() {
    updateStatistics();
    renderClassChart();
}

function updateStatistics() {
    // Total students
    document.getElementById('totalStudents').textContent = studentData.length;

    // Total classes
    document.getElementById('totalClasses').textContent = Object.keys(classMap).length;

    // Count by class
    const classX = studentData.filter(s => s.class === "01").length;
    const classXI = studentData.filter(s => s.class === "02").length;
    const classXII = studentData.filter(s => s.class === "03").length;

    document.getElementById('classX').textContent = classX;
    document.getElementById('classXI').textContent = classXI;
    document.getElementById('classXII').textContent = classXII;

    // Update class counts in classes section
    document.getElementById('count-01').textContent = classX + " Siswa";
    document.getElementById('count-02').textContent = classXI + " Siswa";
    document.getElementById('count-03').textContent = classXII + " Siswa";

    // Admin statistics
    document.getElementById('adminTotalStudents').textContent = studentData.length;
    document.getElementById('adminTotalAccounts').textContent = 3; // admin account
    document.getElementById('lastUpdate').textContent = new Date().toLocaleString('id-ID');
}

function displayStudents(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${classMap[student.class]}</td>
            <td>
                <button class="btn-small" onclick="viewStudent(${student.id})">👁️ Lihat</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterStudents() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const classValue = document.getElementById('classFilter').value;

    const filtered = studentData.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchValue) || 
                            student.id.toString().includes(searchValue);
        const matchesClass = classValue === '' || student.class === classValue;
        return matchesSearch && matchesClass;
    });

    displayStudents(filtered);
}

function viewStudent(studentId) {
    const student = studentData.find(s => s.id === studentId);
    if (student) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <p><strong>ID Siswa:</strong> ${student.id}</p>
            <p><strong>Nama:</strong> ${student.name}</p>
            <p><strong>Kelas:</strong> ${classMap[student.class]}</p>
        `;
        document.getElementById('studentModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('studentModal').style.display = 'none';
}

function renderClassChart() {
    const ctx = document.getElementById('classChart').getContext('2d');
    
    const classX = studentData.filter(s => s.class === "01").length;
    const classXI = studentData.filter(s => s.class === "02").length;
    const classXII = studentData.filter(s => s.class === "03").length;

    // Destroy existing chart if it exists
    if (window.classChartInstance) {
        window.classChartInstance.destroy();
    }

    window.classChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Kelas X', 'Kelas XI', 'Kelas XII'],
            datasets: [{
                data: [classX, classXI, classXII],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f093fb'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function loginAdmin() {
    const password = document.getElementById('adminPassword').value;
    
    // Simple MD5 hash simulation (in production, use proper hashing)
    if (md5(password) === adminPasswordHash) {
        isAdminLoggedIn = true;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        alert('Login berhasil!');
    } else {
        alert('Password salah!');
        document.getElementById('adminPassword').value = '';
    }
}

function exportData() {
    let csv = 'No ID,Nama Siswa,Kelas\n';
    
    studentData.forEach(student => {
        csv += `${student.id},"${student.name}",${classMap[student.class]}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data_siswa.csv';
    a.click();
}

function resetData() {
    if (confirm('Apakah Anda yakin ingin mereset semua data? Tindakan ini tidak dapat dibatalkan.')) {
        // In production, this would make an API call
        alert('Data telah direset.');
        isAdminLoggedIn = false;
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('adminContent').style.display = 'none';
        document.getElementById('adminPassword').value = '';
    }
}

// Simple MD5 implementation (for demo purposes - use proper library in production)
function md5(str) {
    // This is a simplified version. For production, use crypto-js or similar library
    // For "admin" password, this returns: 21232f297a57a5a743894a0e4a801fc3
    const hashMap = {
        'admin': '21232f297a57a5a743894a0e4a801fc3'
    };
    return hashMap[str] || '';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('studentModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
