# Deployment Guide

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PushButtonPlatforms/web-app-builder-portal)

## Manual Deployment

### 1. Database Setup (Neon.tech)

The database is already configured and deployed:
- **Connection**: `postgresql://neondb_owner:npg_JlELBfn9oRr4@ep-twilight-lab-a4q3zm2a-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require`
- **Tables**: 17 tables with complete relationships
- **Indexes**: Optimized for performance
- **Seed Data**: Basic configuration included

### 2. Environment Variables

Required environment variables for production:

```env
# Database
DATABASE_URL="your-neon-connection-string"
DIRECT_URL="your-neon-connection-string"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://yourdomain.com"

# Email
RESEND_API_KEY="your-resend-key"

# Payments
STRIPE_PUBLIC_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
```

### 3. Vercel Deployment

1. **Import Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Import Project"
   - Connect to GitHub and select this repository

2. **Configure Environment Variables**
   - Add all variables from `.env.production.example`
   - Ensure database connection is working

3. **Deploy**
   - Vercel will automatically build and deploy
   - Domain will be available at `https://your-project.vercel.app`

### 4. Custom Domain (Optional)

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain

2. **DNS Configuration**
   - Point your domain to Vercel's servers
   - SSL certificate will be automatically provisioned

### 5. Post-Deployment

1. **Test Core Features**
   - User registration/login
   - Payment processing
   - Email sending
   - Admin dashboard

2. **Configure Admin User**
   - Create first admin user
   - Set up application settings

3. **Monitor Performance**
   - Check Vercel analytics
   - Monitor database performance in Neon

## Environment-Specific Configurations

### Development
- Local database or Neon development branch
- Test API keys for Stripe
- Development email settings

### Staging
- Staging database
- Test payment processing
- Full feature testing

### Production
- Production database with backups
- Live payment processing
- Production email configuration
- Monitoring and alerting

## Scaling Considerations

- **Database**: Neon.tech handles scaling automatically
- **Frontend**: Vercel provides edge deployment
- **API**: Consider serverless functions for API endpoints
- **CDN**: Vercel provides global CDN
- **Monitoring**: Integrate Sentry for error tracking

For more deployment options, see the [Vercel documentation](https://vercel.com/docs).
