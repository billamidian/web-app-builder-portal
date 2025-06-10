# Database Schema Documentation

## Overview

The Web App Builder Portal uses a comprehensive PostgreSQL database schema designed for scalability and performance.

## Connection Details

- **Provider**: Neon.tech
- **Database URL**: `postgresql://neondb_owner:npg_JlELBfn9oRr4@ep-twilight-lab-a4q3zm2a-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require`
- **SSL**: Required
- **Connection Pool**: 2-10 connections

## Core Entities

### Users & Authentication
- `users` - User accounts with role-based access control
- `auth_sessions` - Session management for authentication
- `password_reset_tokens` - Secure password reset functionality

### Application Configuration
- `app_settings` - Global application settings
- `user_settings` - User-specific preferences and configurations

### Business Operations
- `payments` - Payment transactions and billing records
- `pricing_tiers` - Subscription plans and pricing structures
- `user_subscriptions` - Active user subscriptions
- `bookings` - Appointment and consultation scheduling

### Content Management
- `resource_cards` - Educational and reference materials
- `resource_steps` - Step-by-step guides and tutorials
- `timeline_items` - Project timelines and milestones
- `form_submissions` - Contact forms and lead capture

### Communication
- `email_templates` - Reusable email templates
- `email_logs` - Email delivery tracking and analytics
- `email_messages` - Internal messaging system

### System Management
- `nav_items` - Dynamic navigation structure
- `activity_logs` - Comprehensive audit trail

## Schema Features

- **UUID Primary Keys**: All tables use UUID v4 for primary keys
- **Automatic Timestamps**: Created/updated timestamps on all records
- **Foreign Key Constraints**: Proper relationships with cascade rules
- **Indexing Strategy**: Optimized indexes for query performance
- **Data Validation**: Enum types and check constraints
- **Audit Trail**: Complete activity logging
- **Soft Deletes**: Preserve data integrity where needed

## Performance Considerations

- Indexed foreign keys for join performance
- Composite indexes for common query patterns
- JSONB columns for flexible metadata
- Connection pooling for scalability
- Query optimization through proper indexing

## Backup and Recovery

- Automatic backups provided by Neon.tech
- Point-in-time recovery available
- Cross-region replication for high availability

## Migration Strategy

Database migrations are handled through:
1. Schema versioning
2. Incremental updates
3. Rollback capabilities
4. Zero-downtime deployments

For detailed table schemas and relationships, see the complete SQL in `database/schema.sql`.
