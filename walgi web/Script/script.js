function generateChart() {
            const chart = document.getElementById('chart');
            const heights = [60, 80, 45, 90, 75, 65, 95, 55];
            
            heights.forEach((height, index) => {
                const bar = document.createElement('div');
                bar.className = 'chart-bar';
                bar.style.left = `${index * 12 + 2}%`;
                bar.style.setProperty('--height', `${height}%`);
                bar.style.height = `${height}%`;
                chart.appendChild(bar);
            });
        }

        // Animate metrics
        function animateMetrics() {
            const metrics = [
                { id: 'devices-count', start: 0, end: 1247, suffix: '' },
                { id: 'data-points', start: 0, end: 98.7, suffix: '%' },
                { id: 'alerts', start: 0, end: 23, suffix: '' },
                { id: 'efficiency', start: 0, end: 94, suffix: '%' }
            ];

            metrics.forEach(metric => {
                const element = document.getElementById(metric.id);
                const increment = metric.end / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= metric.end) {
                        current = metric.end;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current) + metric.suffix;
                }, 40);
            });
        }

        // Show solution details
        function showSolutionDetails(solution) {
            const details = {
                'smart-agriculture': 'Our Smart Agriculture solutions include polyhouse automation, soil monitoring, weather stations, and precision irrigation systems.',
                'industrial-iot': 'Industrial IoT solutions featuring machine monitoring, predictive maintenance, quality control, and production optimization.',
                'smart-cities': 'Smart city infrastructure including traffic management, air quality monitoring, smart lighting, and waste management systems.',
                'healthcare-iot': 'Healthcare IoT solutions for patient monitoring, asset tracking, environmental control, and medical equipment management.',
                'energy-management': 'Energy management systems including smart meters, grid monitoring, renewable energy integration, and consumption optimization.',
                'logistics-tracking': 'Comprehensive logistics solutions with GPS tracking, temperature monitoring, inventory management, and route optimization.'
            };
            
            alert(details[solution] || 'Solution details coming soon!');
        }

        // Handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();
            alert('Thank you for your interest! We will contact you within 24 hours to discuss your IoT requirements.');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize animations when page loads
        window.addEventListener('load', () => {
            generateChart();
            setTimeout(animateMetrics, 1000);
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.solution-card, .industry-card');
            cards.forEach(card => {
                card.style.opacity = '0';   
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const wrapper = document.getElementById('logosWrapper');
            const logos = Array.from(wrapper.children);
            logos.forEach(logo => {
                const clone = logo.cloneNode(true);
                wrapper.appendChild(clone);
            });
        });