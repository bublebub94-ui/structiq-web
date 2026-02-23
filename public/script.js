document.addEventListener('DOMContentLoaded', () => {
    console.log('StructIQ Landing Page Loaded');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation for features
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Initialize Carbon vs Cost Chart
    const ctx = document.getElementById('carbonCostChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Flat Slab',
                        data: [{ x: 45, y: 80 }, { x: 55, y: 95 }, { x: 65, y: 115 }, { x: 75, y: 135 }],
                        backgroundColor: 'rgba(74, 144, 226, 0.8)',
                    },
                    {
                        label: 'Beam & Slab',
                        data: [{ x: 35, y: 60 }, { x: 45, y: 75 }, { x: 55, y: 90 }, { x: 65, y: 110 }],
                        backgroundColor: 'rgba(67, 160, 71, 0.8)',
                    },
                    {
                        label: 'Two-way Joist',
                        data: [{ x: 25, y: 35 }, { x: 35, y: 45 }, { x: 45, y: 55 }, { x: 55, y: 65 }],
                        backgroundColor: 'rgba(156, 39, 176, 0.8)',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}`; // Only show the name, to keep it abstract
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Cost',
                            color: '#e2e8f0'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            display: false // hide x-axis numbers
                        },
                        min: 15,
                        max: 85
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Embodied Carbon',
                            color: '#e2e8f0'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            display: false // hide y-axis numbers
                        },
                        min: 20,
                        max: 150
                    }
                }
            }
        });
    }
});
