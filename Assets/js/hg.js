const icon = document.querySelector(".icons");
const navbars = document.querySelector(".navbars");
icon.addEventListener("click", () => {
  navbars.classList.toggle("shownav");
});


document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const nextbtn = document.getElementById("next");
  const prevbtn = document.getElementById("prev");

  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t) => t.classList.remove("active"));
    testimonials[index].classList.add("active");
  }

  if (nextbtn && prevbtn && testimonials.length > 0) {
    nextbtn.addEventListener("click", () => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    });

    prevbtn.addEventListener("click", () => {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    });
  } 
});


// Property data
        
        const properties = [
            {
                id: 1,
                title: "Modern Luxury Villa",
                address: "123 Beverly Hills, CA 90210",
                mainImage: "./Assets/images/build1.jpeg",
                hoverImage: "./Assets/images/in1.jpeg",
                price: "$2,500,000",
                status: "for-sale",
                bedrooms: 5,
                bathrooms: 4,
                sqft: 4500,
                yearBuilt: 2020,
                propertyType: "Villa",
                parking: "3 Car Garage",
                description: "Stunning modern villa with panoramic city views, gourmet kitchen, and resort-style backyard.",
                agent: {
                    name: "Sarah Johnson",
                    phone: "(555) 123-4567",
                    email: "sarah@realestate.com",
                    avatar: "SJ"
                }
            },
            {
                id: 2,
                title: "Contemporary Family Home",
                address: "456 Manhattan Ave, New York, NY 10001",
                mainImage: "./Assets/images/build2.jpeg",
                hoverImage: "./Assets/images/in2.jpeg",
                price: "$100,000/month",
                status: "for-rent",
                bedrooms: 4,
                bathrooms: 3,
                sqft: 3500,
                yearBuilt: 2018,
                propertyType: "Single Family",
                parking: "2 Car Garage",
                description: "Luxurious family home in prime Manhattan location with modern amenities.",
                agent: {
                    name: "Michael Chen",
                    phone: "(555) 234-5678",
                    email: "michael@realestate.com",
                    avatar: "MC"
                }
            },
            {
                id: 3,
                title: "Elegant Suburban Home",
                address: "789 Oak Street, Austin, TX 78701",
                mainImage: "./Assets/images/build3.jpeg",
                hoverImage: "./Assets/images/in3.jpeg",
                price: "$875,000",
                status: "for-sale",
                bedrooms: 3,
                bathrooms: 2,
                sqft: 2800,
                yearBuilt: 2015,
                propertyType: "Single Family",
                parking: "2 Car Garage",
                description: "Perfect family home with open floor plan, large backyard, and excellent school district.",
                agent: {
                    name: "Emily Rodriguez",
                    phone: "(555) 345-6789",
                    email: "emily@realestate.com",
                    avatar: "ER"
                }
            },
            {
                id: 4,
                title: "Waterfront Luxury Estate",
                address: "321 Ocean Drive, Miami, FL 33139",
                mainImage: "./Assets/images/house5.jpeg",
                hoverImage: "./Assets/images/in12.jpeg",
                price: "$3,200,000",
                status: "for-sale",
                bedrooms: 6,
                bathrooms: 5,
                sqft: 5500,
                yearBuilt: 2019,
                propertyType: "Estate",
                parking: "4 Car Garage",
                description: "Stunning waterfront estate with private beach access and luxury amenities.",
                agent: {
                    name: "David Martinez",
                    phone: "(555) 456-7890",
                    email: "david@realestate.com",
                    avatar: "DM"
                }
            },
            {
                id: 5,
                title: "Mountain Retreat Apartment",
                address: "555 Pine Ridge, Denver, CO 80203",
                mainImage: "./Assets/images/build5.jpeg",
                hoverImage: "./Assets/images/in9.jpeg",
                price: "$10,200/month",
                status: "for-rent",
                bedrooms: 4,
                bathrooms: 3,
                sqft: 3200,
                yearBuilt: 2017,
                propertyType: "Apartment",
                parking: "2 Spaces",
                description: "Modern mountain apartment with panoramic views and outdoor recreation access.",
                agent: {
                    name: "Lisa Thompson",
                    phone: "(555) 567-8901",
                    email: "lisa@realestate.com",
                    avatar: "LT"
                }
            },
            {
                id: 6,
                title: "Downtown Penthouse",
                address: "777 Beacon Street, Chicago, IL 60601",
                mainImage: "./Assets/images/build6.jpeg",
                hoverImage: "./Assets/images/in7.jpeg",
                price: "$1,850,000",
                status: "sold",
                bedrooms: 3,
                bathrooms: 2,
                sqft: 2400,
                yearBuilt: 2020,
                propertyType: "Penthouse",
                parking: "2 Spaces",
                description: "Luxury penthouse with floor-to-ceiling windows and breathtaking city views.",
                agent: {
                    name: "James Wilson",
                    phone: "(555) 678-9012",
                    email: "james@realestate.com",
                    avatar: "JW"
                }
            },
            {
                id: 7,
                title: "Contemporary Loft",
                address: "888 Industrial Way, Seattle, WA 98101",
                mainImage: "./Assets/images/build7.jpeg",
                hoverImage: "./Assets/images/in4.jpeg",
                price: "$750,000",
                status: "for-sale",
                bedrooms: 2,
                bathrooms: 2,
                sqft: 1600,
                yearBuilt: 2021,
                propertyType: "Loft",
                parking: "1 Space",
                description: "Modern industrial loft with exposed brick, high ceilings, and city views.",
                agent: {
                    name: "Amanda Brown",
                    phone: "(555) 789-0123",
                    email: "amanda@realestate.com",
                    avatar: "AB"
                }
            },
            {
                id: 8,
                title: "Lakefront Estate",
                address: "999 Lake Shore Dr, Chicago, IL 60601",
                mainImage: "./Assets/images/build8.jpeg",
                hoverImage: "./Assets/images/in8.jpeg",
                price: "$2,800,000",
                status: "for-rent",
                bedrooms: 6,
                bathrooms: 5,
                sqft: 5500,
                yearBuilt: 2016,
                propertyType: "Estate",
                parking: "4 Car Garage",
                description: "Magnificent lakefront estate with private beach access and luxury amenities.",
                agent: {
                    name: "Robert Davis",
                    phone: "(555) 890-1234",
                    email: "robert@realestate.com",
                    avatar: "RD"
                }
            },
            {
                id: 9,
                title: "Golf Course Villa",
                address: "111 Fairway Blvd, Scottsdale, AZ 85251",
                mainImage: "./Assets/images/build9.jpeg",
                hoverImage: "./Assets/images/in10.jpeg",
                price: "$1,450,000",
                status: "for-sale",
                bedrooms: 4,
                bathrooms: 4,
                sqft: 3800,
                yearBuilt: 2019,
                propertyType: "Villa",
                parking: "3 Car Garage",
                description: "Luxury villa overlooking the 18th hole with resort-style amenities.",
                agent: {
                    name: "Jennifer Garcia",
                    phone: "(555) 901-2345",
                    email: "jennifer@realestate.com",
                    avatar: "JG"
                }
            },
            {
                id: 10,
                title: "Urban Townhouse",
                address: "222 Main Street, Portland, OR 97201",
                mainImage: "./Assets/images/build4.jpeg",
                hoverImage: "./Assets/images/in5.jpeg",
                price: "$680,000",
                status: "sold",
                bedrooms: 3,
                bathrooms: 3,
                sqft: 2200,
                yearBuilt: 2020,
                propertyType: "Townhouse",
                parking: "2 Spaces",
                description: "Modern townhouse in trendy neighborhood with rooftop deck and sustainable features.",
                agent: {
                    name: "Kevin Lee",
                    phone: "(555) 012-3456",
                    email: "kevin@realestate.com",
                    avatar: "KL"
                }
            },
            {
                id: 11,
                title: "Condominum ",
                address: "333 Seaside Ave, San Diego, CA 92101",
                mainImage: "./Assets/images/condo2.jpeg",
                hoverImage: "./Assets/images/condo4.jpeg",
                price: "$950,000",
                status: "for-sale",
                bedrooms: 2,
                bathrooms: 2,
                sqft: 1400,
                yearBuilt: 2018,
                propertyType: "Cottage",
                parking: "1 Space",
                description: "Charming coastal cottage just steps from the beach with ocean breezes.",
                agent: {
                    name: "Maria Gonzalez",
                    phone: "(555) 123-4567",
                    email: "maria@realestate.com",
                    avatar: "MG"
                }
            },
            {
                id: 12,
                title: "Apartment",
                address: "444 Ranch Road, Nashville, TN 37201",
                mainImage: "./Assets/images/condo1.jpeg",
                hoverImage: "./Assets/images/condo3.jpeg",
                price: "$720,000",
                status: "for-sale",
                bedrooms: 5,
                bathrooms: 3,
                sqft: 4000,
                yearBuilt: 2014,
                propertyType: "Ranch",
                parking: "Barn & Garage",
                description: "Spacious ranch home on 5 acres with horse facilities and panoramic countryside views.",
                agent: {
                    name: "Thomas Anderson",
                    phone: "(555) 234-5678",
                    email: "thomas@realestate.com",
                    avatar: "TA"
                }
            }
        ];

        let currentProperty = null;

        function renderProperties() {
            const grid = document.getElementById('propertiesGrid');
            grid.innerHTML = '';

            properties.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'property-card';
                propertyCard.innerHTML = `
                    <div class="image-container">
                        <img src="${property.mainImage}" alt="${property.title}" class="property-image">
                        <img src="${property.hoverImage}" alt="${property.title} interior" class="property-image hover-image">
                        <div class="status-badge ${property.status}">${property.status.replace('-', ' ')}</div>
                        <div class="price-tag">${property.price}</div>
                    </div>
                    <div class="property-content">
                        <h3 class="property-title">${property.title}</h3>
                        <p class="property-address">📍 ${property.address}</p>
                        <div class="property-specs">
                            <div class="spec">🛏️ ${property.bedrooms} beds</div>
                            <div class="spec">🚿 ${property.bathrooms} baths</div>
                            <div class="spec">📐 ${property.sqft} sqft</div>
                        </div>
                        <p class="property-description">${property.description}</p>
                        <button class="email-agent-btn" onclick="openModal(${property.id})">
                            📧 Email Agent
                        </button>
                    </div>
                `;
                grid.appendChild(propertyCard);
            });
        }

        function openModal(propertyId) {
            currentProperty = properties.find(p => p.id === propertyId);
            if (!currentProperty) return;

            // Update modal content
            document.getElementById('modalTitle').textContent = currentProperty.title;
            document.getElementById('modalPrice').textContent = currentProperty.price;
            
             // Update modal image
             document.getElementById('modalImage').src = currentProperty.mainImage;
            document.getElementById('modalImage').alt = currentProperty.title;

            // Update property details
            const detailsContainer = document.getElementById('propertyDetails');
            detailsContainer.innerHTML = `
                <div class="detail-item">
                    <div class="detail-label">Address</div>
                    <div class="detail-value">${currentProperty.address}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Property Type</div>
                    <div class="detail-value">${currentProperty.propertyType}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Bedrooms</div>
                    <div class="detail-value">${currentProperty.bedrooms}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Bathrooms</div>
                    <div class="detail-value">${currentProperty.bathrooms}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Square Feet</div>
                    <div class="detail-value">${currentProperty.sqft.toLocaleString()} sqft</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Year Built</div>
                    <div class="detail-value">${currentProperty.yearBuilt}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Parking</div>
                    <div class="detail-value">${currentProperty.parking}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Price</div>
                    <div class="detail-value">${currentProperty.price}</div>
                </div>
            `;

            // Update agent info
            document.getElementById('agentName').textContent = currentProperty.agent.name;
            document.getElementById('agentContact').textContent = `${currentProperty.agent.phone} • ${currentProperty.agent.email}`;
            document.getElementById('agentAvatar').textContent = currentProperty.agent.avatar;

            // Pre-fill message
            document.getElementById('message').value = `Hello ${currentProperty.agent.name},

I'm interested in the property "${currentProperty.title}" located at ${currentProperty.address} (${currentProperty.price}).

Could you please provide more information about this property and schedule a viewing?

Thank you!`;

            // Show modal
            document.getElementById('modalOverlay').classList.add('active');
        }

        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('active');
            currentProperty = null;
        }

        function sendEmail(event) {
            event.preventDefault();
            
            const name = document.getElementById('clientName').value;
            const email = document.getElementById('clientEmail').value;
            const phone = document.getElementById('clientPhone').value;
            const message = document.getElementById('message').value;

            // Simulate sending email
            alert(`Message sent to ${currentProperty.agent.name}!\n\nProperty: ${currentProperty.title}\nFrom: ${name} (${email})\n\nThe agent will contact you shortly.`);
            
            // Reset form
            event.target.reset();
            closeModal();
        }

        // Close modal when clicking outside
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize the page
        renderProperties();
    



