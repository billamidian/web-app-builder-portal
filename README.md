# Web App Builder Portal

A comprehensive web application builder platform with user management, payments, resources, and more.

## 🚀 Features

- **User Management** - Complete authentication with roles (admin, user, moderator)
- **Payment Processing** - Stripe integration for subscriptions and one-time payments
- **Resource Management** - Educational resources with step-by-step guides
- **Email System** - Template-based email system with tracking
- **Booking System** - Appointment scheduling for consultations
- **Admin Dashboard** - Complete admin interface for managing all aspects
- **Timeline** - Project timeline and milestone tracking
- **Form Management** - Dynamic form submissions with analytics

## 🏗️ Architecture

This is a **monorepo** built with:

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: GraphQL API, Node.js
- **Database**: PostgreSQL (Neon.tech)
- **Authentication**: NextAuth.js with multiple providers
- **Payments**: Stripe integration
- **Email**: Resend API
- **Deployment**: Vercel

## 📊 Database Schema

The application includes a comprehensive database schema with:

### Core Tables
- `users` - User accounts with role-based access
- `auth_sessions` - Authentication session management
- `app_settings` - Application configuration
- `user_settings` - Per-user preferences

### Business Tables
- `payments` - Payment transactions and billing
- `pricing_tiers` - Subscription plans and pricing
- `user_subscriptions` - User subscription management
- `bookings` - Appointment and consultation booking

### Content Tables
- `resource_cards` - Educational resources
- `resource_steps` - Step-by-step guides
- `timeline_items` - Project milestones
- `form_submissions` - Contact and lead forms

### Communication Tables
- `email_templates` - Email template management
- `email_logs` - Email delivery tracking
- `email_messages` - Internal messaging

### System Tables
- `nav_items` - Dynamic navigation management
- `activity_logs` - System audit trail

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (we recommend Neon.tech)
- Stripe account for payments
- Resend account for emails

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PushButtonPlatforms/web-app-builder-portal.git
   cd web-app-builder-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or in the monorepo structure:
   cd apps/front && npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Set up the database**
   
   The database schema is already deployed to Neon.tech. If you need to redeploy:
   
   ```bash
   # The complete schema includes all tables and relationships
   # Connection string: postgresql://neondb_owner:npg_JlELBfn9oRr4@ep-twilight-lab-a4q3zm2a-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or for monorepo:
   cd apps/front && npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Deployment

The application is ready for deployment on Vercel:

1. **Connect to GitHub**
   - Import the repository in Vercel
   - Connect to your Neon.tech database

2. **Set environment variables**
   - Copy from `.env.production.example`
   - Add your production API keys

3. **Deploy**
   - Vercel will automatically deploy on push to main

## 🔧 Configuration

### Database Configuration

The application uses PostgreSQL with the following key features:
- UUID primary keys for all tables
- Proper foreign key relationships
- Automatic timestamp tracking
- Comprehensive indexing
- Audit trail logging

### Authentication

Supports multiple authentication methods:
- Email/password
- Google OAuth
- GitHub OAuth
- Magic link (via email)

### Payment Integration

Stripe integration includes:
- One-time payments
- Subscription management
- Webhook handling
- Invoice generation

## 📚 API Documentation

### GraphQL API

The application includes a GraphQL API with:
- User management
- Authentication
- Payment processing
- Resource management

### REST Endpoints

Additional REST endpoints for:
- Webhook handling
- File uploads
- External integrations

## 🛠️ Development

### Project Structure

```
web-app-builder-portal/
├── apps/
│   ├── front/           # Next.js frontend application
│   │   ├── app/         # Next.js 14 app directory
│   │   ├── components/  # React components
│   │   └── lib/         # Utilities and configurations
│   └── api/             # GraphQL API server
├── packages/
│   ├── dto/             # Data Transfer Objects
│   └── common/          # Shared utilities
└── database/
    └── schema.sql       # Complete database schema
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🔒 Security

- **Authentication**: Secure session management with NextAuth.js
- **Authorization**: Role-based access control
- **Data Validation**: Input validation on all forms
- **SQL Injection**: Protected with parameterized queries
- **XSS Protection**: React's built-in protection + sanitization
- **CSRF Protection**: Built into NextAuth.js

## 📈 Monitoring

- **Error Tracking**: Integration ready for Sentry
- **Analytics**: Ready for Google Analytics/Vercel Analytics
- **Performance**: Web Vitals tracking
- **Database**: Query performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- **Email**: support@pushbuttonbuild.com
- **Issues**: [GitHub Issues](https://github.com/PushButtonPlatforms/web-app-builder-portal/issues)
- **Documentation**: [Wiki](https://github.com/PushButtonPlatforms/web-app-builder-portal/wiki)

## 🎯 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Multi-tenant support
- [ ] API rate limiting
- [ ] Advanced caching
- [ ] Mobile app support
- [ ] Third-party integrations
- [ ] Advanced reporting
- [ ] White-label solutions

---

Built with ❤️ by [PushButton Platforms](https://github.com/PushButtonPlatforms)
