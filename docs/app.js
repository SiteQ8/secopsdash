// SecOpsDash - Security Operations Dashboard
// Main application JavaScript

// Application State
const AppState = {
    currentTheme: 'dark',
    currentView: 'executive',
    sidebarOpen: false,
    notificationPanelOpen: false,
    charts: {},
    realTimeInterval: null,
    metrics: {
        securityPosture: 87,
        activeThreats: 3,
        openIncidents: 7,
        complianceScore: 92
    }
};

// Demo Data
const DemoData = {
    alerts: [
        {
            id: 'ALT-2025-001',
            severity: 'critical',
            title: 'Potential Ransomware Activity Detected',
            description: 'Suspicious file encryption pattern detected on server PROD-DB-01. Multiple files with .locked extension created in last 5 minutes.',
            timestamp: '2 min ago',
            source: 'EDR',
            status: 'investigating',
            analyst: 'Ahmed Al-Rashid'
        },
        {
            id: 'ALT-2025-002',
            severity: 'high',
            title: 'Brute Force Attack on VPN Gateway',
            description: '500+ failed login attempts from IP 185.220.101.44 (Russia). IP has been temporarily blocked.',
            timestamp: '15 min ago',
            source: 'Firewall',
            status: 'blocked',
            analyst: 'Sara Al-Mutairi'
        },
        {
            id: 'ALT-2025-003',
            severity: 'medium',
            title: 'Suspicious PowerShell Execution',
            description: 'Base64 encoded PowerShell command executed on workstation WS-234. Process terminated automatically.',
            timestamp: '28 min ago',
            source: 'EDR',
            status: 'resolved',
            analyst: 'Mohammed Al-Fahad'
        },
        {
            id: 'ALT-2025-004',
            severity: 'low',
            title: 'Failed Login Attempt',
            description: '3 failed login attempts for user admin@company.com from known device.',
            timestamp: '45 min ago',
            source: 'Azure AD',
            status: 'monitoring',
            analyst: 'Fatima Al-Salem'
        }
    ],
    
    vulnerabilities: [
        {
            cve: 'CVE-2025-12345',
            title: 'Apache Struts RCE',
            severity: 'Critical',
            cvss: 9.8,
            assets: 5,
            status: 'Patching in progress',
            daysOpen: 2
        },
        {
            cve: 'CVE-2025-11223',
            title: 'Windows Privilege Escalation',
            severity: 'High',
            cvss: 8.1,
            assets: 12,
            status: 'Patch available',
            daysOpen: 5
        },
        {
            cve: 'CVE-2025-09876',
            title: 'PHP Remote File Inclusion',
            severity: 'Critical',
            cvss: 9.1,
            assets: 3,
            status: 'Mitigated',
            daysOpen: 1
        },
        {
            cve: 'CVE-2024-54321',
            title: 'SSL Certificate Expiration',
            severity: 'Medium',
            cvss: 5.3,
            assets: 8,
            status: 'Scheduled',
            daysOpen: 14
        },
        {
            cve: 'CVE-2024-11111',
            title: 'Outdated Software Version',
            severity: 'Low',
            cvss: 3.7,
            assets: 25,
            status: 'Under review',
            daysOpen: 30
        }
    ],
    
    threatTypes: [
        { name: 'Malware', percentage: 35, count: 142 },
        { name: 'Phishing', percentage: 28, count: 114 },
        { name: 'Brute Force', percentage: 20, count: 81 },
        { name: 'DDoS', percentage: 10, count: 41 },
        { name: 'Other', percentage: 7, count: 28 }
    ],
    
    threatsTimeline: [
        { day: 'Mon', count: 12 },
        { day: 'Tue', count: 15 },
        { day: 'Wed', count: 34 },
        { day: 'Thu', count: 18 },
        { day: 'Fri', count: 22 },
        { day: 'Sat', count: 45 },
        { day: 'Sun', count: 28 }
    ]
};

// Utility Functions
const Utils = {
    formatTime: () => {
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        return now.toLocaleString('en-US', options);
    },
    
    animateNumber: (element, start, end, duration = 1000) => {
        const startTime = performance.now();
        const difference = end - start;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (difference * easeOutCubic));
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    },
    
    showToast: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Add toast styles if not already present
        if (!document.querySelector('.toast-styles')) {
            const style = document.createElement('style');
            style.className = 'toast-styles';
            style.textContent = `
                .toast {
                    position: fixed;
                    top: 90px;
                    right: 20px;
                    padding: 12px 20px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 3000;
                    animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
                    animation-fill-mode: both;
                }
                .toast-info { background: var(--primary); }
                .toast-success { background: var(--success); }
                .toast-warning { background: var(--warning); }
                .toast-error { background: var(--danger); }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }
};

// Theme Management
const ThemeManager = {
    init: () => {
        const savedTheme = AppState.currentTheme || 'dark';
        ThemeManager.setTheme(savedTheme);
        
        // Theme button event listeners
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                ThemeManager.setTheme(theme);
            });
        });
    },
    
    setTheme: (theme) => {
        AppState.currentTheme = theme;
        document.body.className = `theme-${theme}`;
        
        // Update active theme button
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        
        // Update charts if they exist
        if (AppState.charts.timeline) {
            ChartsManager.updateChartColors();
        }
        
        Utils.showToast(`Theme switched to ${theme}`, 'success');
    }
};

// Navigation Management
const NavigationManager = {
    init: () => {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        
        mobileMenuBtn.addEventListener('click', () => {
            AppState.sidebarOpen = !AppState.sidebarOpen;
            sidebar.classList.toggle('open', AppState.sidebarOpen);
        });
        
        // Navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                NavigationManager.switchView(view);
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    AppState.sidebarOpen = false;
                    sidebar.classList.remove('open');
                }
            });
        });
        
        // Notification panel
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationPanel = document.getElementById('notificationPanel');
        const closeNotifications = document.getElementById('closeNotifications');
        
        notificationBtn.addEventListener('click', () => {
            AppState.notificationPanelOpen = !AppState.notificationPanelOpen;
            notificationPanel.classList.toggle('open', AppState.notificationPanelOpen);
        });
        
        closeNotifications.addEventListener('click', () => {
            AppState.notificationPanelOpen = false;
            notificationPanel.classList.remove('open');
        });
        
        // Close notification panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!notificationPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
                if (AppState.notificationPanelOpen) {
                    AppState.notificationPanelOpen = false;
                    notificationPanel.classList.remove('open');
                }
            }
        });
    },
    
    switchView: (viewName) => {
        AppState.currentView = viewName;
        
        // Hide all views
        document.querySelectorAll('.dashboard-view').forEach(view => {
            view.style.display = 'none';
        });
        
        // Show selected view
        const selectedView = document.getElementById(`${viewName}-view`);
        if (selectedView) {
            selectedView.style.display = 'block';
            selectedView.classList.add('fade-in');
        }
        
        // Update active navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.view === viewName);
        });
        
        Utils.showToast(`Switched to ${viewName.replace('-', ' ')} dashboard`, 'info');
    }
};

// Charts Management
const ChartsManager = {
    init: () => {
        ChartsManager.createTimelineChart();
        ChartsManager.createThreatTypesChart();
    },
    
    getChartColors: () => {
        return ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
    },
    
    createTimelineChart: () => {
        const ctx = document.getElementById('threatsTimelineChart');
        if (!ctx) return;
        
        const colors = ChartsManager.getChartColors();
        
        AppState.charts.timeline = new Chart(ctx, {
            type: 'line',
            data: {
                labels: DemoData.threatsTimeline.map(item => item.day),
                datasets: [{
                    label: 'Threats Detected',
                    data: DemoData.threatsTimeline.map(item => item.count),
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: colors[0],
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 41, 59, 0.95)',
                        titleColor: '#F1F5F9',
                        bodyColor: '#F1F5F9',
                        borderColor: colors[0],
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(71, 85, 105, 0.3)',
                            borderColor: 'rgba(71, 85, 105, 0.3)'
                        },
                        ticks: {
                            color: '#94A3B8'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(71, 85, 105, 0.3)',
                            borderColor: 'rgba(71, 85, 105, 0.3)'
                        },
                        ticks: {
                            color: '#94A3B8'
                        },
                        beginAtZero: true
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    },
    
    createThreatTypesChart: () => {
        const ctx = document.getElementById('threatTypesChart');
        if (!ctx) return;
        
        const colors = ChartsManager.getChartColors();
        
        AppState.charts.threatTypes = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: DemoData.threatTypes.map(item => item.name),
                datasets: [{
                    data: DemoData.threatTypes.map(item => item.percentage),
                    backgroundColor: colors.slice(0, DemoData.threatTypes.length),
                    borderWidth: 2,
                    borderColor: '#1E293B',
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#F1F5F9',
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 41, 59, 0.95)',
                        titleColor: '#F1F5F9',
                        bodyColor: '#F1F5F9',
                        borderColor: colors[0],
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                const item = DemoData.threatTypes[context.dataIndex];
                                return `${item.name}: ${item.percentage}% (${item.count} incidents)`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1000
                }
            }
        });
    },
    
    updateChartColors: () => {
        // Update chart colors based on current theme
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary') || '#94A3B8';
        const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border') || 'rgba(71, 85, 105, 0.3)';
        
        Object.values(AppState.charts).forEach(chart => {
            if (chart && chart.options) {
                // Update scale colors
                if (chart.options.scales) {
                    if (chart.options.scales.x) {
                        chart.options.scales.x.ticks.color = textColor;
                        chart.options.scales.x.grid.color = borderColor;
                    }
                    if (chart.options.scales.y) {
                        chart.options.scales.y.ticks.color = textColor;
                        chart.options.scales.y.grid.color = borderColor;
                    }
                }
                
                // Update legend colors
                if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
                    chart.options.plugins.legend.labels.color = textColor;
                }
                
                chart.update();
            }
        });
    }
};

// Dashboard Data Manager
const DashboardManager = {
    init: () => {
        DashboardManager.renderAlerts();
        DashboardManager.renderVulnerabilities();
        DashboardManager.updateMetrics();
        DashboardManager.startRealTimeUpdates();
        
        // Refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.addEventListener('click', () => {
            DashboardManager.refresh();
        });
    },
    
    renderAlerts: () => {
        const alertsFeed = document.getElementById('alertsFeed');
        if (!alertsFeed) return;
        
        alertsFeed.innerHTML = '';
        
        DemoData.alerts.forEach(alert => {
            const alertElement = document.createElement('div');
            alertElement.className = 'alert-item';
            alertElement.innerHTML = `
                <div class="alert-severity ${alert.severity}"></div>
                <div class="alert-icon ${alert.severity}">
                    <i class="fas ${
                        alert.severity === 'critical' ? 'fa-skull-crossbones' :
                        alert.severity === 'high' ? 'fa-exclamation-triangle' :
                        alert.severity === 'medium' ? 'fa-exclamation-circle' :
                        'fa-info-circle'
                    }"></i>
                </div>
                <div class="alert-content">
                    <div class="alert-title">${alert.title}</div>
                    <div class="alert-description">${alert.description}</div>
                </div>
                <div class="alert-meta">
                    <span class="alert-time">${alert.timestamp}</span>
                    <span class="alert-source">${alert.source}</span>
                </div>
            `;
            
            alertElement.addEventListener('click', () => {
                ModalManager.showAlertDetails(alert);
            });
            
            alertsFeed.appendChild(alertElement);
        });
    },
    
    renderVulnerabilities: () => {
        const tableBody = document.getElementById('vulnerabilitiesTable');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        DemoData.vulnerabilities.forEach(vuln => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <strong>${vuln.cve}</strong><br>
                    <small>${vuln.title}</small>
                </td>
                <td>
                    <span class="severity-badge ${vuln.severity.toLowerCase()}">
                        ${vuln.severity}
                    </span>
                </td>
                <td><strong>${vuln.cvss}</strong></td>
                <td>${vuln.assets}</td>
                <td>
                    <span class="status-badge">${vuln.status}</span>
                </td>
                <td>
                    <button class="btn btn-primary">View Details</button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    },
    
    updateMetrics: () => {
        const securityPostureEl = document.getElementById('securityPosture');
        const activeThreatsEl = document.getElementById('activeThreats');
        const openIncidentsEl = document.getElementById('openIncidents');
        const complianceScoreEl = document.getElementById('complianceScore');
        
        if (securityPostureEl) {
            Utils.animateNumber(securityPostureEl, 0, AppState.metrics.securityPosture);
        }
        if (activeThreatsEl) {
            Utils.animateNumber(activeThreatsEl, 0, AppState.metrics.activeThreats);
        }
        if (openIncidentsEl) {
            Utils.animateNumber(openIncidentsEl, 0, AppState.metrics.openIncidents);
        }
        if (complianceScoreEl) {
            Utils.animateNumber(complianceScoreEl, 0, AppState.metrics.complianceScore);
        }
    },
    
    startRealTimeUpdates: () => {
        // Simulate real-time updates every 30 seconds
        AppState.realTimeInterval = setInterval(() => {
            // Randomly update metrics slightly
            const variations = {
                securityPosture: Math.random() > 0.5 ? 1 : -1,
                activeThreats: Math.random() > 0.7 ? 1 : (Math.random() > 0.3 ? -1 : 0),
                openIncidents: Math.random() > 0.6 ? 1 : -1
            };
            
            AppState.metrics.securityPosture = Math.max(70, Math.min(95, 
                AppState.metrics.securityPosture + variations.securityPosture));
            AppState.metrics.activeThreats = Math.max(0, Math.min(10, 
                AppState.metrics.activeThreats + variations.activeThreats));
            AppState.metrics.openIncidents = Math.max(0, Math.min(20, 
                AppState.metrics.openIncidents + variations.openIncidents));
            
            DashboardManager.updateMetrics();
        }, 30000);
    },
    
    refresh: () => {
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.classList.add('spinning');
        
        // Simulate refresh delay
        setTimeout(() => {
            DashboardManager.updateMetrics();
            Utils.showToast('Dashboard refreshed successfully', 'success');
            refreshBtn.classList.remove('spinning');
        }, 1000);
    }
};

// Modal Manager
const ModalManager = {
    init: () => {
        const modal = document.getElementById('alertModal');
        const modalClose = document.getElementById('modalClose');
        
        // Close modal handlers
        modalClose.addEventListener('click', () => {
            ModalManager.closeModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                ModalManager.closeModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                ModalManager.closeModal();
            }
        });
    },
    
    showAlertDetails: (alert) => {
        const modal = document.getElementById('alertModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        modalTitle.textContent = alert.title;
        modalBody.innerHTML = `
            <div class="alert-details">
                <div class="detail-row">
                    <strong>Alert ID:</strong> ${alert.id}
                </div>
                <div class="detail-row">
                    <strong>Severity:</strong> 
                    <span class="severity-badge ${alert.severity}">${alert.severity.toUpperCase()}</span>
                </div>
                <div class="detail-row">
                    <strong>Source:</strong> ${alert.source}
                </div>
                <div class="detail-row">
                    <strong>Status:</strong> ${alert.status}
                </div>
                <div class="detail-row">
                    <strong>Assigned Analyst:</strong> ${alert.analyst}
                </div>
                <div class="detail-row">
                    <strong>Timestamp:</strong> ${alert.timestamp}
                </div>
                <div class="detail-description">
                    <strong>Description:</strong><br>
                    ${alert.description}
                </div>
            </div>
            <style>
                .alert-details .detail-row {
                    margin: 15px 0;
                    padding: 10px;
                    background: var(--card-bg);
                    border-radius: 6px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .detail-description {
                    margin: 20px 0;
                    padding: 15px;
                    background: var(--card-bg);
                    border-radius: 6px;
                    line-height: 1.5;
                }
            </style>
        `;
        
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    },
    
    closeModal: () => {
        const modal = document.getElementById('alertModal');
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
};

// Main Application Initialization
const SecOpsDash = {
    init: () => {
        console.log('🛡️ SecOpsDash initializing...');
        
        // Initialize datetime display
        SecOpsDash.updateDateTime();
        setInterval(SecOpsDash.updateDateTime, 1000);
        
        // Initialize all managers
        ThemeManager.init();
        NavigationManager.init();
        ModalManager.init();
        
        // Wait for DOM and charts library to be ready
        if (typeof Chart !== 'undefined') {
            ChartsManager.init();
        } else {
            console.warn('Chart.js not loaded, charts will not be available');
        }
        
        DashboardManager.init();
        
        // Hide loading overlay
        setTimeout(() => {
            const loadingOverlay = document.getElementById('loadingOverlay');
            loadingOverlay.classList.add('hidden');
            
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }, 1500);
        
        // Add fade-in animation to main content
        setTimeout(() => {
            document.querySelector('.main-content').classList.add('fade-in');
        }, 100);
        
        console.log('✅ SecOpsDash initialized successfully!');
        Utils.showToast('SecOpsDash loaded successfully', 'success');
    },
    
    updateDateTime: () => {
        const datetimeEl = document.getElementById('datetime');
        if (datetimeEl) {
            datetimeEl.textContent = Utils.formatTime();
        }
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', SecOpsDash.init);
} else {
    SecOpsDash.init();
}

// Handle window resize for responsive behavior
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on desktop
        if (window.innerWidth > 768 && AppState.sidebarOpen) {
            AppState.sidebarOpen = false;
            document.getElementById('sidebar').classList.remove('open');
        }
        
        // Update charts on resize
        Object.values(AppState.charts).forEach(chart => {
            if (chart && chart.resize) {
                chart.resize();
            }
        });
    }, 250);
});

// Handle visibility change for real-time updates
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause real-time updates when tab is not visible
        if (AppState.realTimeInterval) {
            clearInterval(AppState.realTimeInterval);
            AppState.realTimeInterval = null;
        }
    } else {
        // Resume real-time updates when tab becomes visible
        if (!AppState.realTimeInterval) {
            DashboardManager.startRealTimeUpdates();
        }
    }
});

// Export for potential external use
window.SecOpsDash = SecOpsDash;
window.AppState = AppState;