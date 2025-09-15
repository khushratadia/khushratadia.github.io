# Khush Ratadia - Professional Engineering Portfolio

A modern, responsive portfolio website showcasing the engineering projects, technical skills, and professional experience of Khush Ratadia, a mechanical design engineer and student at the University of Washington.

## 🌟 Live Website

**Main URL**: Access through the Publish tab to get the live website URL after deployment.

## 📋 Project Overview

This portfolio website serves as a comprehensive showcase of engineering expertise, featuring:
- **Professional Design**: Clean, modern interface inspired by top engineering portfolios
- **Responsive Layout**: Optimized for desktop, tablet, and mobile viewing
- **Interactive Elements**: Animated skill bars, project galleries, and smooth navigation
- **Technical Focus**: Emphasis on CAD design, 3D printing, simulation, and engineering analysis

## 🎯 Currently Completed Features

### ✅ Core Pages Implemented
1. **Home Page** (`index.html`)
   - Hero section with professional introduction
   - Featured projects preview
   - 2-minute summary modal
   - Key statistics display

2. **About Page** (`about.html`)
   - Personal introduction and professional journey
   - Core values and driving principles
   - Academic and professional achievements
   - Call-to-action sections

3. **Engineering Projects** (`projects.html`)
   - **3D Printed Clock Mechanism**: Complete project showcase with images and videos
   - **Carousel Assembly Design**: CAD design and technical documentation
   - **Mahindra Internship Project**: Industrial experience analysis
   - Detailed project descriptions with technical achievements

4. **Education & Experience** (`education-experience.html`)
   - Timeline-based layout showing academic and professional milestones
   - University of Washington education details
   - Mahindra & Mahindra Ltd. internship experience
   - Professional certifications and achievements

5. **Technical Skills** (`technical-skills.html`)
   - Animated skill bars with proficiency levels
   - Categorized skill sets (CAD, Analysis, Manufacturing, Leadership)
   - Professional certifications display
   - Skills-in-action project examples

### 🎨 Design & Styling
- **Modern CSS Grid & Flexbox** layouts
- **Gradient color scheme** (Black-grey theme: #2c3e50 to #34495e)
- **Inter font family** for professional typography
- **FontAwesome icons** for enhanced visual appeal
- **Responsive design** with mobile-first approach
- **Smooth animations** and hover effects

### ⚡ Interactive Features
- **Modal system** for 2-minute summary
- **Animated skill progress bars** 
- **Smooth scrolling** navigation
- **Mobile-responsive sidebar** menu
- **Project card hover effects**
- **Intersection Observer** animations
- **Keyboard accessibility** support

## 🏗️ Functional Entry URIs & Navigation Structure

### Primary Navigation
- `/` or `/index.html` - **Home Page**
- `/about.html` - **About Me** (accessible via hero button)
- `/projects.html` - **Engineering Projects**
- `/education-experience.html` - **Education & Experience**  
- `/technical-skills.html` - **Technical Skills**

### Content Sections & Anchors
- `/#summaryModal` - **2-minute summary modal** (triggered via button)
- `/projects.html#clock-project` - **3D Printed Clock project**
- `/projects.html#carousel-project` - **Carousel Assembly project**
- `/projects.html#mahindra-project` - **Mahindra internship project**

### External Links
- **Resume Download**: Direct link to PDF resume file
- **LinkedIn**: https://www.linkedin.com/in/khush-ratadia
- **Instagram**: https://instagram.com/ratadiakhush
- **Email Contact**: khushr@uw.edu

## 🛠️ Technical Architecture

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript**: Interactive features and DOM manipulation
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### File Structure
```
├── index.html                    # Home page
├── about.html                   # About page
├── projects.html                # Engineering projects showcase
├── education-experience.html    # Timeline of education and experience
├── technical-skills.html        # Skills with animated progress bars
├── css/
│   └── style.css               # Main stylesheet (12,835+ lines)
├── js/
│   └── main.js                 # Interactive functionality (12,576+ lines)
└── README.md                   # Project documentation
```

### Key Features
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)
- **CSS Custom Properties**: For consistent theming
- **Progressive Enhancement**: Works without JavaScript
- **Performance Optimized**: Efficient animations and lazy loading
- **SEO Friendly**: Semantic HTML and meta tags

## 📊 Data Models & Storage Services

### Content Management
- **Static Content**: All content is embedded in HTML files
- **Media Assets**: External URLs for images and videos
- **Resume Files**: External hosted PDF documents
- **No Database**: Pure static site architecture

### External Resources
- **Profile Images**: Base64 encoded image URLs
- **Project Videos**: MP4 video files hosted externally
- **Resume Document**: PDF hosted on external service
- **CDN Resources**: Font Awesome, Google Fonts

## 🎨 Design Specifications

### Color Palette
- **Primary Gradient**: `#2c3e50` to `#34495e`
- **Text Colors**: `#2c3e50` (headings), `#555` (body), `#666` (secondary)
- **Background**: `#f8f9fa` (light gray)
- **Accent Colors**: White, rgba overlays

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Headings**: Progressive scaling (3rem to 1.3rem)
- **Body Text**: 1.1rem with 1.6-1.8 line height

### Layout Principles
- **Sidebar Navigation**: Fixed 300px width desktop sidebar
- **Main Content**: Dynamic width with max constraints
- **Grid Systems**: CSS Grid for complex layouts
- **Flexbox**: For component-level alignment
- **Spacing**: Consistent 1rem-based spacing scale

## 🚀 Features Not Yet Implemented

### Potential Enhancements
1. **Contact Form**: Interactive contact form with validation
2. **Blog Section**: Engineering articles and insights
3. **Project Filtering**: Filter projects by technology or type
4. **Dark Mode**: Alternative color scheme toggle
5. **Analytics Integration**: Google Analytics or similar tracking
6. **SEO Optimization**: Enhanced meta tags and structured data
7. **Performance Metrics**: Core Web Vitals optimization
8. **Accessibility Audit**: WCAG compliance improvements

### Advanced Features
1. **Multi-language Support**: Internationalization (i18n)
2. **Project Search**: Full-text search across projects
3. **Print Stylesheet**: Optimized printing layouts
4. **Offline Support**: Service worker for offline viewing
5. **Animation Controls**: Reduced motion preferences
6. **Social Media Integration**: Open Graph and Twitter Cards

## 🎯 Recommended Next Steps for Development

### Immediate Priorities (Phase 1)
1. **Content Optimization**
   - Add more project images and technical diagrams
   - Include additional engineering coursework projects
   - Expand technical skills descriptions

2. **SEO & Performance**
   - Add comprehensive meta descriptions
   - Optimize image loading and compression
   - Implement structured data markup

3. **User Experience**
   - Add loading states for better perceived performance
   - Implement smooth page transitions
   - Enhanced mobile navigation experience

### Short-term Goals (Phase 2)
1. **Interactive Contact Form**
   - Contact form with form validation
   - Email integration for form submissions
   - Success/error state handling

2. **Content Management**
   - Easy content update system
   - Version control for content changes
   - Automated deployment pipeline

3. **Analytics & Monitoring**
   - User engagement tracking
   - Performance monitoring
   - Error logging and reporting

### Long-term Vision (Phase 3)
1. **Advanced Features**
   - Interactive project demonstrations
   - 3D model viewers for CAD projects
   - Video testimonials and presentations

2. **Professional Network Integration**
   - LinkedIn API integration
   - Professional recommendations display
   - Industry connections showcase

3. **Educational Content**
   - Engineering tutorial blog posts
   - Technical article publications
   - Knowledge sharing platform

## 📱 Browser Compatibility

### Supported Browsers
- **Chrome**: 90+ (Full support)
- **Firefox**: 85+ (Full support) 
- **Safari**: 14+ (Full support)
- **Edge**: 90+ (Full support)
- **Mobile Safari**: iOS 14+ (Full support)
- **Chrome Mobile**: Android 8+ (Full support)

### Progressive Enhancement
- **Core functionality**: Works in all modern browsers
- **Enhanced features**: Advanced animations and interactions in supported browsers
- **Fallbacks**: Graceful degradation for older browsers

## 🔧 Development Guidelines

### Code Standards
- **HTML**: Semantic HTML5 with accessibility attributes
- **CSS**: BEM methodology for class naming
- **JavaScript**: ES6+ with backward compatibility
- **Comments**: Comprehensive inline documentation

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Accessibility Standards
- **WCAG 2.1**: Level AA compliance target
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and semantic markup
- **Color Contrast**: Minimum 4.5:1 ratio

## 📄 License & Usage

This portfolio website is created for **Khush Ratadia** and contains personal information, projects, and professional content. 

### Usage Rights
- **Personal Use**: Free to use as inspiration or reference
- **Educational Use**: Suitable for learning web development techniques
- **Commercial Use**: Contact owner for licensing permissions
- **Content**: All personal information and project details are proprietary

### Attribution
If using this code as a template or reference, please provide appropriate attribution:
```
Portfolio template inspired by Khush Ratadia's engineering portfolio
Original: https://linkedin.com/in/khush-ratadia
```

## 📞 Contact Information

**Khush Ratadia**
- 📧 **Email**: khushr@uw.edu  
- 📱 **Phone**: (425) 652-0953
- 🌐 **LinkedIn**: https://www.linkedin.com/in/khush-ratadia
- 📍 **Location**: Seattle, WA

**Portfolio Inquiries**
For questions about this portfolio website, technical implementation, or collaboration opportunities, please reach out via email or LinkedIn.

---

**Built with ❤️ and ⚙️ for the engineering community**

*Last Updated: January 2025*