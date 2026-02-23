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
                        label: 'Flat C25/30',
                        data: [{ x: 55, y: 95 }, { x: 57, y: 98 }, { x: 61, y: 107 }, { x: 63, y: 111 }, { x: 65, y: 118 }, { x: 68, y: 122 }, { x: 71, y: 128 }, { x: 73, y: 130 }, { x: 77, y: 140 }, { x: 80, y: 133 }, { x: 83, y: 151 }, { x: 86, y: 162 }],
                        backgroundColor: 'rgba(74, 144, 226, 0.8)',
                    },
                    {
                        label: 'Flat C32/40',
                        data: [{ x: 45, y: 81 }, { x: 49, y: 88 }, { x: 51, y: 91 }, { x: 53, y: 94 }, { x: 55, y: 98 }, { x: 58, y: 106 }, { x: 60, y: 103 }, { x: 64, y: 113 }, { x: 66, y: 122 }, { x: 70, y: 128 }],
                        backgroundColor: 'rgba(126, 192, 238, 0.8)',
                    },
                    {
                        label: 'Flat C40/50',
                        data: [{ x: 35, y: 61 }, { x: 38, y: 68 }, { x: 41, y: 73 }, { x: 44, y: 76 }, { x: 47, y: 82 }, { x: 49, y: 87 }, { x: 52, y: 93 }, { x: 56, y: 106 }, { x: 62, y: 116 }],
                        backgroundColor: 'rgba(176, 226, 255, 0.8)',
                    },
                    {
                        label: 'Beam&Slab C25/30',
                        data: [{ x: 51, y: 92 }, { x: 54, y: 99 }, { x: 55, y: 91 }, { x: 56, y: 106 }, { x: 59, y: 106 }, { x: 63, y: 119 }, { x: 68, y: 123 }, { x: 71, y: 133 }, { x: 78, y: 140 }],
                        backgroundColor: 'rgba(67, 160, 71, 0.8)',
                    },
                    {
                        label: 'Beam&Slab C32/40',
                        data: [{ x: 42, y: 71 }, { x: 45, y: 78 }, { x: 47, y: 80 }, { x: 49, y: 90 }, { x: 54, y: 91 }, { x: 57, y: 107 }, { x: 71, y: 133 }, { x: 78, y: 145 }],
                        backgroundColor: 'rgba(129, 199, 132, 0.8)',
                    },
                    {
                        label: 'Beam&Slab C40/50',
                        data: [{ x: 32, y: 53 }, { x: 35, y: 58 }, { x: 38, y: 64 }, { x: 40, y: 71 }, { x: 42, y: 74 }, { x: 45, y: 78 }, { x: 49, y: 70 }, { x: 52, y: 75 }, { x: 54, y: 80 }],
                        backgroundColor: 'rgba(200, 230, 201, 0.8)',
                    },
                    {
                        label: 'Two-way Joist C25/30',
                        data: [{ x: 27, y: 39 }, { x: 29, y: 45 }, { x: 33, y: 50 }, { x: 37, y: 49 }, { x: 39, y: 55 }, { x: 41, y: 60 }, { x: 44, y: 64 }, { x: 48, y: 62 }, { x: 50, y: 75 }, { x: 53, y: 73 }, { x: 57, y: 76 }],
                        backgroundColor: 'rgba(156, 39, 176, 0.8)',
                    },
                    {
                        label: 'Two-way Joist C32/40',
                        data: [{ x: 24, y: 34 }, { x: 26, y: 36 }, { x: 29, y: 43 }, { x: 35, y: 48 }, { x: 40, y: 53 }, { x: 42, y: 56 }, { x: 44, y: 61 }, { x: 46, y: 67 }, { x: 49, y: 66 }, { x: 52, y: 82 }, { x: 58, y: 83 }],
                        backgroundColor: 'rgba(206, 147, 216, 0.8)',
                    },
                    {
                        label: 'Two-way Joist C40/50',
                        data: [{ x: 24, y: 25 }, { x: 25, y: 26 }, { x: 26, y: 27 }, { x: 30, y: 32 }, { x: 32, y: 37 }, { x: 38, y: 45 }, { x: 40, y: 41 }, { x: 43, y: 45 }, { x: 45, y: 49 }, { x: 48, y: 51 }, { x: 50, y: 58 }, { x: 53, y: 55 }, { x: 55, y: 62 }, { x: 62, y: 72 }, { x: 71, y: 82 }],
                        backgroundColor: 'rgba(255, 179, 0, 0.8)',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#e2e8f0',
                            font: {
                                size: 10
                            },
                            boxWidth: 10
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: Cost: £${context.parsed.x}/m², Carbon: ${context.parsed.y} kgCO2e/m²`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Cost (£/m²)',
                            color: '#e2e8f0'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            color: '#94a3b8'
                        },
                        min: 10,
                        max: 90
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Embodied carbon (kgCO2e/m²)',
                            color: '#e2e8f0'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        },
                        ticks: {
                            color: '#94a3b8'
                        },
                        min: 20,
                        max: 180
                    }
                }
            }
        });
    }
});
